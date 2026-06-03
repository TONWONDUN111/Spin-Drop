#!/usr/bin/env bash
# Vox — shared library: config, text extraction, and TTS backends.
# Sourced by lib/speak.sh (the Stop hook) and bin/vox (the CLI).
# Must never crash a host session: callers always exit 0.

VOX_HOME="${VOX_HOME:-$HOME/.vox}"
VOX_CONFIG="$VOX_HOME/config.env"

# Default ElevenLabs referral link. Replace with YOUR affiliate URL (see README)
# so upgrades to premium voices earn you credit.
VOX_DEFAULT_REFERRAL="https://elevenlabs.io/?from=vox"

# ---- config -----------------------------------------------------------------

vox_load_config() {
  # Defaults
  VOX_ENGINE="auto"        # auto | say | elevenlabs | openai
  VOX_VOICE=""             # engine-specific voice name/id ("" = engine default)
  VOX_RATE="180"           # words-per-minute, macOS `say` only
  VOX_MODE="summary"       # summary | full | chime
  VOX_ELEVEN_API_KEY=""
  VOX_ELEVEN_VOICE_ID=""
  VOX_ELEVEN_MODEL="eleven_turbo_v2_5"
  VOX_OPENAI_API_KEY=""
  VOX_OPENAI_VOICE="onyx"
  VOX_OPENAI_MODEL="gpt-4o-mini-tts"
  VOX_REFERRAL_URL="$VOX_DEFAULT_REFERRAL"
  VOX_MAX_CHARS="240"
  # shellcheck disable=SC1090
  [ -f "$VOX_CONFIG" ] && . "$VOX_CONFIG"
}

vox_set() {
  # vox_set KEY VALUE  — persist a single key to config.env (idempotent)
  local key="$1" val="$2"
  mkdir -p "$VOX_HOME"
  touch "$VOX_CONFIG"
  local tmp; tmp="$(mktemp)"
  local found=0
  while IFS= read -r line || [ -n "$line" ]; do
    case "$line" in
      "$key="*) printf '%s=%q\n' "$key" "$val"; found=1 ;;
      *) printf '%s\n' "$line" ;;
    esac
  done < "$VOX_CONFIG" > "$tmp"
  [ "$found" -eq 0 ] && printf '%s=%q\n' "$key" "$val" >> "$tmp"
  mv "$tmp" "$VOX_CONFIG"
}

# ---- platform ---------------------------------------------------------------

vox_os() {
  case "$(uname -s 2>/dev/null)" in
    Darwin) echo macos ;;
    Linux)  echo linux ;;
    MINGW*|MSYS*|CYGWIN*) echo windows ;;
    *) echo unknown ;;
  esac
}

# Pick the effective engine when VOX_ENGINE=auto.
vox_resolve_engine() {
  if [ "$VOX_ENGINE" != "auto" ]; then echo "$VOX_ENGINE"; return; fi
  if [ -n "$VOX_ELEVEN_API_KEY" ]; then echo elevenlabs; return; fi
  if [ -n "$VOX_OPENAI_API_KEY" ]; then echo openai; return; fi
  echo say   # the free, offline default
}

# ---- curated voice personas -------------------------------------------------
# Friendly, named voices that map across engines so "vox use alfred" does the
# right thing whether you're on free system speech or a premium API. Columns are
# tab-separated:  id | label | say_voice | say_rate | eleven_voice_id | openai_voice
# The eleven_voice_id values are ElevenLabs' stable public library voices.
vox_personas() {
  printf '%s\n' \
"alfred	Alfred — warm British butler	Daniel	200	JBFqnCBsd6RMkjVDRZzb	fable" \
"narrator	Narrator — deep British documentary	Daniel	188	onwK4e9ZLuTAKqWW03F9	onyx" \
"jarvis	Jarvis — crisp male AI assistant	Daniel	210	pNInz6obpgDQGcFmaJgB	echo" \
"sage	Sage — deep cinematic male	Daniel	182	nPczCjzI2devNBz1zQrb	onyx" \
"ava	Ava — calm female assistant	Samantha	196	21m00Tcm4TlvDq8ikWAM	nova" \
"nova	Nova — bright friendly female	Samantha	200	EXAVITQu4vr4xnSDxMaL	shimmer" \
"lily	Lily — warm British female	Samantha	196	pFZP5JQG7iQjIQuC4Bku	shimmer"
}

# Print the catalog row for a persona id (empty if not a persona).
vox_persona_row() {
  vox_personas | awk -F '\t' -v id="$1" '$1==id{print; exit}'
}

# ---- text helpers -----------------------------------------------------------

# Extract the last assistant text block from a Claude Code JSONL transcript.
vox_text_from_transcript() {
  local tp="$1"
  [ -f "$tp" ] || return 1
  if command -v jq >/dev/null 2>&1; then
    jq -r 'select(.type=="assistant") | .message.content[]? | select(.type=="text") | .text' "$tp" 2>/dev/null | tail -1
  elif command -v python3 >/dev/null 2>&1; then
    python3 - "$tp" <<'PY'
import sys, json
last = ""
for line in open(sys.argv[1], encoding="utf-8", errors="ignore"):
    try: o = json.loads(line)
    except Exception: continue
    if o.get("type") == "assistant":
        for c in o.get("message", {}).get("content", []):
            if c.get("type") == "text" and c.get("text"):
                last = c["text"]
print(last)
PY
  else
    return 1
  fi
}

# Reduce text to what should actually be spoken, per VOX_MODE.
vox_render() {
  local text="$1"
  case "$VOX_MODE" in
    chime) echo "Done."; return ;;
    full)
      printf '%s' "$text" | tr -d '*#`_[]>' | tr '\n' ' ' | sed -E 's/  +/ /g'
      ;;
    *) # summary: first non-empty line, first sentence, capped
      printf '%s' "$text" \
        | grep -m1 -v '^[[:space:]]*$' \
        | tr -d '*#`_[]>' \
        | sed -E 's/([.!?])[[:space:]].*/\1/' \
        | cut -c1-"${VOX_MAX_CHARS:-240}"
      ;;
  esac
}

# JSON-encode a string (for API payloads).
vox_json_str() {
  if command -v jq >/dev/null 2>&1; then
    printf '%s' "$1" | jq -Rs .
  elif command -v python3 >/dev/null 2>&1; then
    printf '%s' "$1" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))'
  else
    # crude fallback
    printf '"%s"' "$(printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g')"
  fi
}

# ---- audio playback ---------------------------------------------------------

vox_play_file() {
  local f="$1"
  if command -v afplay >/dev/null 2>&1; then afplay "$f"
  elif command -v ffplay >/dev/null 2>&1; then ffplay -nodisp -autoexit -loglevel quiet "$f"
  elif command -v mpg123 >/dev/null 2>&1; then mpg123 -q "$f"
  elif command -v aplay >/dev/null 2>&1; then aplay -q "$f"
  elif command -v powershell.exe >/dev/null 2>&1; then
    powershell.exe -NoProfile -c "(New-Object Media.SoundPlayer '$f').PlaySync()" 2>/dev/null
  else return 1; fi
}

# ---- backends ---------------------------------------------------------------

vox_say_macos() {
  local text="$1" args=()
  [ -n "$VOX_VOICE" ] && args+=(-v "$VOX_VOICE")
  [ -n "$VOX_RATE" ]  && args+=(-r "$VOX_RATE")
  say "${args[@]}" "$text"
}

vox_say_linux() {
  local text="$1"
  if command -v spd-say >/dev/null 2>&1; then spd-say -w "$text"
  elif command -v espeak-ng >/dev/null 2>&1; then espeak-ng "$text"
  elif command -v espeak >/dev/null 2>&1; then espeak "$text"
  elif command -v festival >/dev/null 2>&1; then echo "$text" | festival --tts
  else return 1; fi
}

vox_say_windows() {
  local text="${1//\'/\'\'}"
  powershell.exe -NoProfile -c \
    "Add-Type -AssemblyName System.Speech; \$s = New-Object System.Speech.Synthesis.SpeechSynthesizer; \$s.Speak('$text')" 2>/dev/null
}

vox_speak_system() {
  case "$(vox_os)" in
    macos)   vox_say_macos "$1" ;;
    linux)   vox_say_linux "$1" ;;
    windows) vox_say_windows "$1" ;;
    *) return 1 ;;
  esac
}

vox_speak_elevenlabs() {
  local text="$1"
  [ -n "$VOX_ELEVEN_API_KEY" ] || return 1
  command -v curl >/dev/null 2>&1 || return 1
  local vid="${VOX_ELEVEN_VOICE_ID:-21m00Tcm4TlvDq8ikWAM}" # Rachel
  local tmp; tmp="$(mktemp 2>/dev/null).mp3"
  local payload; payload="{\"text\":$(vox_json_str "$text"),\"model_id\":\"$VOX_ELEVEN_MODEL\"}"
  if curl -fsS -X POST "https://api.elevenlabs.io/v1/text-to-speech/$vid" \
        -H "xi-api-key: $VOX_ELEVEN_API_KEY" \
        -H "Content-Type: application/json" \
        -d "$payload" -o "$tmp" 2>/dev/null; then
    vox_play_file "$tmp"; local rc=$?; rm -f "$tmp"; return $rc
  fi
  rm -f "$tmp"; return 1
}

vox_speak_openai() {
  local text="$1"
  [ -n "$VOX_OPENAI_API_KEY" ] || return 1
  command -v curl >/dev/null 2>&1 || return 1
  local tmp; tmp="$(mktemp 2>/dev/null).mp3"
  local payload; payload="{\"model\":\"$VOX_OPENAI_MODEL\",\"voice\":\"$VOX_OPENAI_VOICE\",\"input\":$(vox_json_str "$text")}"
  if curl -fsS -X POST "https://api.openai.com/v1/audio/speech" \
        -H "Authorization: Bearer $VOX_OPENAI_API_KEY" \
        -H "Content-Type: application/json" \
        -d "$payload" -o "$tmp" 2>/dev/null; then
    vox_play_file "$tmp"; local rc=$?; rm -f "$tmp"; return $rc
  fi
  rm -f "$tmp"; return 1
}

# Speak text via the resolved engine, falling back to system TTS if a
# cloud backend fails (so a dead API key never leaves you silent).
vox_speak() {
  local text="$1"
  [ -n "$text" ] || return 0
  case "$(vox_resolve_engine)" in
    elevenlabs) vox_speak_elevenlabs "$text" || vox_speak_system "$text" ;;
    openai)     vox_speak_openai "$text"     || vox_speak_system "$text" ;;
    *)          vox_speak_system "$text" ;;
  esac
}

#!/usr/bin/env bash
# Vox Stop-hook entrypoint. Registered as a Claude Code `Stop` hook.
# Reads hook JSON on stdin, speaks a summary of the last assistant message.
# Always exits 0 so it can never block or break the host session.

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=/dev/null
. "$DIR/common.sh" || exit 0
vox_load_config

main() {
  local input transcript text rendered
  input="$(cat)"

  # Pull transcript_path out of the hook payload.
  if command -v jq >/dev/null 2>&1; then
    transcript="$(printf '%s' "$input" | jq -r '.transcript_path // empty' 2>/dev/null)"
  else
    transcript="$(printf '%s' "$input" | sed -n 's/.*"transcript_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')"
  fi
  [ -n "$transcript" ] || exit 0

  text="$(vox_text_from_transcript "$transcript")" || exit 0
  rendered="$(vox_render "$text")"
  [ -n "$rendered" ] || exit 0

  # Speak in the background so we never delay the host turn.
  vox_speak "$rendered" >/dev/null 2>&1 &
}

main
exit 0

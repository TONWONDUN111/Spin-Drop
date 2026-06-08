# 🔊 Vox — give your AI a voice

Vox speaks your AI's replies out loud. It ships with **free, offline voices** and
upgrades in one command to **studio-quality, human-sounding voices** from
ElevenLabs or OpenAI.

- **Free by default** — uses your OS's built-in speech (macOS `say`, Linux
  `espeak`/`spd-say`, Windows SAPI). No account, no cost, fully offline.
- **Realistic when you want it** — add an ElevenLabs or OpenAI API key and Vox
  routes through their neural voices automatically.
- **Cross-platform** — macOS, Linux, Windows.
- **Two ways to install** — a Claude Code **plugin**, or a one-line **installer**
  that works with anything that can run a shell hook.

---

## Install

### Option A — Claude Code plugin (recommended for Claude users)

```
/plugin marketplace add your-org/vox
/plugin install vox@vox-marketplace
```

The plugin registers a `Stop` hook (speaks each reply) and adds a `/voice`
command for picking voices. Nothing else to configure.

### Option B — one-line installer (any tool)

```
curl -fsSL https://raw.githubusercontent.com/your-org/vox/main/install.sh | bash
```

This drops Vox in `~/.vox`, puts `vox` on your PATH, and wires the Stop hook into
`~/.claude/settings.json`.

---

## Use

```
vox                     # (plugin) /voice — show config
vox personas            # curated named voices: alfred, jarvis, narrator, ava…
vox preview alfred      # hear a persona before choosing (no name = hear all)
vox use alfred          # pick a persona (speaks a confirmation)
vox voices              # list the raw voices for the current engine
vox engine say          # auto | say | elevenlabs | openai
vox rate 180            # speaking speed (macOS system voice)
vox mode summary        # summary (first sentence) | full | chime
vox test "Hello there"  # hear a sample
vox config              # show current settings
```

### Curated voices (personas)

`vox personas` lists ready-made voices you pick by name — no hunting for voice
IDs. Each persona maps across **every** engine, so `vox use alfred` sounds right
on the free system voice today and automatically becomes the studio ElevenLabs
voice the moment you add a key.

| Persona    | Character                       |
|------------|---------------------------------|
| `alfred`   | Warm British butler             |
| `narrator` | Deep British documentary        |
| `jarvis`   | Crisp male AI assistant         |
| `sage`     | Deep cinematic male             |
| `ava`      | Calm female assistant           |
| `nova`     | Bright friendly female          |
| `lily`     | Warm British female             |

> The free system voices are functional but synthetic. For genuinely
> human-sounding output, run `vox upgrade` and add an ElevenLabs key — the same
> persona name then routes to a neural voice.

### Free voices that sound good

- **macOS:** `Daniel` (British), `Serena`, `Ava`, `Tom`, `Samantha`. For much more
  natural output, download a **(Premium)** voice in *System Settings ▸
  Accessibility ▸ Spoken Content ▸ Manage Voices*, then `vox use "<name>"`.
- **Linux:** install `speech-dispatcher` or `espeak-ng`.
- **Windows:** add voices in *Settings ▸ Time & Language ▸ Speech*.

---

## Upgrade to lifelike voices

```
vox upgrade                       # opens ElevenLabs, explains the steps
vox key eleven <YOUR_API_KEY>     # paste your key — Vox switches automatically
vox voices                        # lists your ElevenLabs voices (id — name)
vox use <voice_id>                # choose one
```

OpenAI works the same way:

```
vox key openai <YOUR_API_KEY>
vox use onyx                      # alloy ash ballad coral echo fable onyx nova sage shimmer
vox open human                    # opens the upgrade page for human voices
```

Cloud voices fall back to the free system voice automatically if a request fails,
so a bad key never leaves you silent.

---

## Earn referral credit (for distributors)

`vox upgrade` opens an ElevenLabs link. Point it at **your** affiliate/referral
URL so sign-ups credit you:

1. Join the ElevenLabs affiliate/partner program and get your referral link.
2. Set the link as the default for everyone who installs your build — edit
   `VOX_DEFAULT_REFERRAL` near the top of [`lib/common.sh`](lib/common.sh).
3. (Optional, per machine) override without editing code:
   `vox` reads `VOX_REFERRAL_URL` from `~/.vox/config.env` —
   `echo 'VOX_REFERRAL_URL=https://your-link' >> ~/.vox/config.env`.

When a user runs `vox upgrade`, your link opens; their paid usage earns your credit.

---

## How it works

A `Stop` hook fires when the AI finishes a turn. Vox reads the transcript, takes
the first sentence of the last reply (configurable via `mode`), and speaks it
through the selected engine in the background — it never delays or blocks your
session. Config lives in `~/.vox/config.env`.

## Uninstall

```
vox uninstall          # removes the Stop hook
rm -rf ~/.vox          # removes Vox itself
```

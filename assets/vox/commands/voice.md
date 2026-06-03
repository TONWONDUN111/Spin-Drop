---
description: Pick or test the voice Vox uses to read replies aloud
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/vox:*)
argument-hint: "[personas|preview <name>|use <name>|voices|engine <name>|rate <wpm>|mode <m>|test|upgrade]  (no args = show config)"
---

The user wants to manage their Vox voice settings. Their request: `$ARGUMENTS`

Run the Vox CLI to fulfill it. The binary is at `${CLAUDE_PLUGIN_ROOT}/bin/vox`.

- No arguments → run `vox config` and also `vox personas`, then summarize the choices.
- "personas" / asks "what voices" / "list voices" → run `vox personas`.
- "preview X" / "what does X sound like" / "hear them" → run `vox preview X` (no name = previews all).
- "voices" → run `vox voices` (raw engine voices).
- "use X" → run `vox use X` (accepts a persona like `alfred` or a raw voice; also speaks a confirmation).
- "engine X" / "rate N" / "mode X" → run the matching subcommand.
- "test ..." → run `vox test` with the given text.
- "upgrade" / asks for better/more realistic voices → run `vox upgrade` and explain they
  can paste a key with `vox key eleven <KEY>` to unlock studio-quality voices.

After running, briefly tell the user what changed and suggest the next step.

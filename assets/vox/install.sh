#!/usr/bin/env bash
# Vox installer (non-plugin path). Copies Vox to ~/.vox, links the `vox`
# command onto your PATH, and wires the Stop hook into Claude Code.
#
#   curl -fsSL https://raw.githubusercontent.com/<you>/vox/main/install.sh | bash
#   # or, from a clone:
#   ./install.sh
set -uo pipefail

REPO_URL="${VOX_REPO_URL:-https://github.com/your-org/vox}"
DEST="${VOX_HOME:-$HOME/.vox}"
SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null && pwd)"

say(){ printf '\033[1m%s\033[0m\n' "$*"; }

# 1. Get the files into $DEST (copy if run from a clone, else git clone).
if [ -f "$SRC/lib/speak.sh" ]; then
  mkdir -p "$DEST"
  cp -R "$SRC/." "$DEST/"
elif command -v git >/dev/null 2>&1; then
  rm -rf "$DEST"; git clone --depth 1 "$REPO_URL" "$DEST"
else
  echo "Need git, or run install.sh from a cloned copy." >&2; exit 1
fi
chmod +x "$DEST/bin/vox" "$DEST/lib/"*.sh 2>/dev/null || true

# 2. Put `vox` on PATH.
BIN=""
for d in "$HOME/.local/bin" "/usr/local/bin"; do
  if [ -d "$d" ] && [ -w "$d" ]; then BIN="$d"; break; fi
done
[ -z "$BIN" ] && { mkdir -p "$HOME/.local/bin"; BIN="$HOME/.local/bin"; }
ln -sf "$DEST/bin/vox" "$BIN/vox"
say "✓ Installed 'vox' to $BIN"
case ":$PATH:" in *":$BIN:"*) ;; *) echo "  Add to PATH:  export PATH=\"$BIN:\$PATH\"";; esac

# 3. Wire the Stop hook into Claude Code.
"$DEST/bin/vox" install || true

# 4. Defaults + a quick hello.
"$DEST/bin/vox" engine say >/dev/null 2>&1 || true
say "✓ Vox installed. Try:  vox test   |   vox voices   |   vox upgrade"
"$DEST/bin/vox" test "Vox is installed, and ready." >/dev/null 2>&1 || true

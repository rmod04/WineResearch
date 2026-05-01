#!/bin/bash
set -euo pipefail

# Kill any process already on port 8080 (idempotent)
fuser -k 8080/tcp 2>/dev/null || true

# Start local server as fallback (background, silent)
cd "$CLAUDE_PROJECT_DIR"
python3 -m http.server 8080 > /tmp/preview-server.log 2>&1 &

# Read GitHub Pages base URL from launch.json and print preview links
LAUNCH="$CLAUDE_PROJECT_DIR/.claude/launch.json"
if [ -f "$LAUNCH" ]; then
  BASE=$(python3 -c "import json,sys; d=json.load(open('$LAUNCH')); print(d['preview']['baseUrl'])")
  FILES=$(python3 -c "import json,sys; d=json.load(open('$LAUNCH')); print('\n'.join(d['preview']['files']))")
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >&2
  echo "  Preview URLs (GitHub Pages):" >&2
  while IFS= read -r file; do
    echo "  → $BASE/$file" >&2
  done <<< "$FILES"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >&2
fi

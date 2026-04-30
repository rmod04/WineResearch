#!/bin/bash
set -euo pipefail

# Kill any process already on port 8080 (idempotent)
fuser -k 8080/tcp 2>/dev/null || true

# Start preview server in background from project root
cd "$CLAUDE_PROJECT_DIR"
python3 -m http.server 8080 > /tmp/preview-server.log 2>&1 &

echo "Preview server started on http://localhost:8080 (PID $!)" >&2

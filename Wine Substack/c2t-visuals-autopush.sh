#!/usr/bin/env bash
#
# C2T visuals auto-push watcher
# Runs on YOUR Mac. Watches the substack worktree for changes to the visual
# files and auto-commits + pushes, so GitHub Actions deploys to Pages on its own.
# Cowork edits the files through the mounted folder -> this watcher pushes them.
#
# Prereqs:
#   - fswatch installed:        brew install fswatch
#   - substack worktree exists: created by c2t-substack-restructure.sh
#   - Pages source = GitHub Actions, substack branch allowed in github-pages env
#
# Usage:
#   chmod +x c2t-visuals-autopush.sh
#   ./c2t-visuals-autopush.sh
#   (leave it running; Ctrl-C to stop)

set -uo pipefail

WORKTREE="${HOME}/WineResearch-substack"
BRANCH="claude/wine-substack-data-setup-H9HVg"
LATENCY=2   # seconds to coalesce a burst of saves into one push

# ---- preflight -------------------------------------------------------------
command -v fswatch >/dev/null 2>&1 || {
  echo "fswatch not found. Install it with:  brew install fswatch"; exit 1; }
[ -d "$WORKTREE/.git" ] || [ -f "$WORKTREE/.git" ] || {
  echo "No git worktree at $WORKTREE. Run c2t-substack-restructure.sh first."; exit 1; }

cd "$WORKTREE" || exit 1
cur=$(git rev-parse --abbrev-ref HEAD)
if [ "$cur" != "$BRANCH" ]; then
  echo "Worktree is on '$cur', expected '$BRANCH'. Aborting to avoid wrong-branch pushes."; exit 1
fi

# ---- one sync pass ---------------------------------------------------------
sync_changes() {
  cd "$WORKTREE" || return
  # Stage only the deploy-relevant files (matches the Pages workflow path filter)
  git add -- visual_*.html findings.html 2>/dev/null
  if git diff --cached --quiet; then
    return   # nothing meaningful changed
  fi
  git commit -m "visuals: auto-sync $(date '+%Y-%m-%d %H:%M:%S')" >/dev/null
  if git push origin "$BRANCH" >/dev/null 2>&1; then
    echo "[$(date '+%H:%M:%S')] pushed -> Pages will redeploy in ~60s"
  else
    echo "[$(date '+%H:%M:%S')] commit made but PUSH FAILED (check network / SSH key)"
  fi
}

echo "Watching $WORKTREE for visual changes on $BRANCH ..."
echo "Editing visual_*.html or findings.html will auto-commit and push. Ctrl-C to stop."

# ---- watch loop ------------------------------------------------------------
# Exclude .git so our own commits don't retrigger the watcher (no feedback loop).
fswatch -o --latency "$LATENCY" -e "\.git" "$WORKTREE" | while read -r _; do
  sync_changes
done

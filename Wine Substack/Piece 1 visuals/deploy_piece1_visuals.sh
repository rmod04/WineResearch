#!/bin/bash
# Deploy the corrected Piece 1 visuals to GitHub Pages.
# Run from Claude Code or Terminal. Safe to re-run.
set -e

SRC="$HOME/WineResearch/Wine Substack/Piece 1 visuals"
WORK="$HOME/WineResearch-substack"
BRANCH="claude/wine-substack-data-setup-H9HVg"
FILES=(visual_occasion_shift.html visual_oiv_colour_shift.html visual_instagram.html visual_seasonal_instinct.html visual_reddit_voices.html)

echo "==> Checking the substack worktree"
cd "$WORK"
CURRENT=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT" != "$BRANCH" ]; then
  echo "ERROR: $WORK is on '$CURRENT', expected '$BRANCH'. Stopping."
  exit 1
fi

echo "==> Pulling anything the auto-sync watcher already pushed"
git pull --ff-only origin "$BRANCH"

echo "==> Copying the 5 corrected files"
for f in "${FILES[@]}"; do
  cp "$SRC/$f" "$WORK/$f"
  echo "    $f"
done

echo "==> Staging and committing"
git add "${FILES[@]}"
if git diff --cached --quiet; then
  echo "    Nothing changed. The watcher probably pushed these already."
else
  git commit -m "Piece 1 visuals: fix y-axis clipping, sentence-case titles, remove em dashes, mask profanity

- visual_instagram: add afterFit to the y scale so 10,000 and 12,000 render in full
- all five: titles to sentence case per house style
- all five: em dashes replaced with commas, colons or full stops
- copy: remove 'X, not Y' antithesis constructions
- visual_reddit_voices: mask profanity in one displayed quote as a**holes"
  echo "==> Pushing"
  git push origin "$BRANCH"
fi

echo "==> Done. GitHub Actions publishes in about 60 seconds."
echo "    Verify at:"
for f in "${FILES[@]}"; do
  echo "    https://rmod04.github.io/WineResearch/$f"
done

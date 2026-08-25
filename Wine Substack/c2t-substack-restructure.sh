#!/usr/bin/env bash
#
# C2T repo restructure — SUBSTACK LANE ONLY
# Run this on YOUR machine (terminal or the Claude Code "code tab"), where your
# SSH key and GitHub access live. It will NOT run from the Cowork sandbox.
#
# What it does:
#   1. Makes `claude/wine-substack-data-setup-H9HVg` the canonical substack branch
#   2. Salvages the 2 unique files from `Substack-1` into it (final draft + v2 data)
#   3. Adds the GitHub Pages workflow (visuals-only deploy)
#   4. Pushes the branch
#   5. Deletes the now-redundant `Substack-1` remote branch (AFTER verifying salvage)
#   6. Sets up two git worktrees so website + substack never collide
#
# It deliberately does NOT touch `main`, `Website`, or the website dev branch —
# those are website-lane decisions for your 'C2T Website' Cowork project.
#
# Review before running. Destructive steps have guards that abort on surprise.

set -euo pipefail

REPO_DIR="${HOME}/WineResearch"          # adjust if your clone lives elsewhere
SUBSTACK_BRANCH="claude/wine-substack-data-setup-H9HVg"
SALVAGE_BRANCH="Substack-1"
DOCX="Every Wine Has its Moment_Final Draft 2.docx"
JSON="wine_piece1_raw_data_v2.json"

cd "$REPO_DIR"
echo "==> Fetching latest refs"
git fetch --prune origin

echo "==> Checking out $SUBSTACK_BRANCH"
git checkout "$SUBSTACK_BRANCH"
git pull --ff-only origin "$SUBSTACK_BRANCH" || true

echo "==> Salvaging unique files from origin/$SALVAGE_BRANCH"
git checkout "origin/$SALVAGE_BRANCH" -- "$DOCX" "$JSON"

echo "==> Writing Pages workflow"
mkdir -p .github/workflows
cat > .github/workflows/deploy-substack-visuals.yml <<'YAML'
name: Deploy Substack visuals to GitHub Pages

on:
  push:
    branches: ["claude/wine-substack-data-setup-H9HVg"]
    paths:
      - "visual_*.html"
      - "findings.html"
  workflow_dispatch: {}

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - name: Assemble site (visuals only)
        run: |
          mkdir -p _site
          cp visual_*.html _site/
          cp findings.html _site/ 2>/dev/null || true
          {
            echo '<!doctype html><meta charset="utf-8">'
            echo '<title>Cork to Table — Interactive Visuals</title>'
            echo '<h1>Cork to Table — Interactive Visuals</h1><ul>'
            for f in _site/visual_*.html; do
              n=$(basename "$f")
              echo "<li><a href=\"$n\">$n</a></li>"
            done
            echo '</ul>'
          } > _site/index.html
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: _site
      - id: deployment
        uses: actions/deploy-pages@v4
YAML

echo "==> Committing"
git add -- "$DOCX" "$JSON" .github/workflows/deploy-substack-visuals.yml
git commit -m "substack: add Pages deploy workflow + salvage final draft and v2 data"
git push origin "$SUBSTACK_BRANCH"

echo "==> Guard: confirm salvaged files now exist on the substack branch before deleting $SALVAGE_BRANCH"
git cat-file -e "origin/$SUBSTACK_BRANCH:$DOCX" 2>/dev/null && \
git cat-file -e "origin/$SUBSTACK_BRANCH:$JSON" 2>/dev/null && {
  echo "    OK — both files present. Deleting redundant remote branch $SALVAGE_BRANCH"
  git push origin --delete "$SALVAGE_BRANCH"
} || {
  echo "    ABORT — salvaged files not found on $SUBSTACK_BRANCH. Leaving $SALVAGE_BRANCH intact."
  exit 1
}

echo "==> Setting up worktrees (siblings of the repo)"
git worktree add "../WineResearch-substack" "$SUBSTACK_BRANCH" 2>/dev/null || echo "    (substack worktree already exists, skipping)"
git worktree add "../WineResearch-website" "claude/personal-brand-website-E5EOF" 2>/dev/null || echo "    (website worktree already exists, skipping)"

echo
echo "==> DONE. Remaining manual steps (GitHub web UI, ~1 min):"
echo "    1. Repo Settings > Pages > Build and deployment > Source = 'GitHub Actions'"
echo "    2. Settings > Environments > github-pages > add deployment branch rule for:"
echo "       $SUBSTACK_BRANCH   (so Actions can deploy from it)"
echo
echo "    Then editing any visual_*.html on the substack branch auto-deploys to Pages in ~60s."
git worktree list

# Substack Project Handoff — Every Wine Has Its Moment

## Project Overview

A data-led research Substack article by Rohan Modwel (Cork to Table). The article argues that wine preference is always contextual — the right wine is shaped by occasion, season, setting, and the drinker's own evolving palate.

**Article title:** Every Wine Has Its Moment  
**Publication:** Cork to Table  
**Author:** Rohan Modwel (rohanmodwel@gmail.com)

### Four Article Sections

| # | Title | Data source |
|---|-------|-------------|
| 1 | It Depends. (And That's the Point.) | WMC 2025 US Consumer Benchmark Survey — occasion now #1 driver of wine choice |
| 2 | The Seasonal Instinct | Reddit r/wine seasonal threads + OIV global colour shift 2000→2021 |
| 3 | Why Your Wine Tastes Different on Holiday | Reddit r/wine winery quotes (219↑ top) + Spence crossmodal science |
| 4 | The Wine Changes. So Do You. | Reddit r/wine palate evolution quotes (198↑ top) |

---

## Repository

| Item | Value |
|------|-------|
| Repo | `rmod04/WineResearch` |
| Working branch | `claude/wine-substack-data-setup-H9HVg` |
| GitHub Pages (live preview) | `https://rmod04.github.io/WineResearch/` |
| Article draft branch | `Substack-1` |
| Raw data v2 | `wine_piece1_raw_data_v2.json` on `Substack-1` |
| Raw data v1 | `wine_piece1_raw_data.json` on `main` |

**Preview workflow:** Edit locally → commit → push to branch → merge to main → GitHub Pages auto-deploys (~60s). No localhost preview available (environment blocks tunnels).

**GitHub MCP scope:** Restricted to `rmod04/WineResearch` only.

---

## File Structure

```
WineResearch/
├── .claude/
│   ├── settings.json          # Registers SessionStart hook
│   ├── hooks/
│   │   └── session-start.sh   # Kills :8080, starts HTTP server, echoes GitHub Pages URLs
│   └── launch.json            # baseUrl + list of previewable files
├── visual_occasion_shift.html     # Visual 1 — occasion data (WMC/Deutsch)
├── visual_oiv_colour_shift.html   # Visual 2 — global colour shift (OIV)
├── visual_instagram.html          # Visual 3 — hashtag engagement analysis
├── visual_seasonal_instinct.html  # Visual 4 — seasonal pattern chart
├── visual_reddit_voices.html      # Visual 5 — Reddit quote cards (redesigned)
├── findings.html                  # Research findings document (all 4 sections)
├── substackhandoff.md             # This file
└── README.md
```

**On `Substack-1` branch only:**
```
wine_piece1_raw_data_v2.json           # Full raw dataset with timestamps
Every Wine Has its Moment_Final Draft 2.docx  # Article final draft (binary, unreadable via API)
```

---

## Design System

All five visuals share identical CSS variables, fonts, and footer conventions.

### CSS Variables
```css
--burgundy:   #5C1A2E
--cream:      #F5ECD7
--cream-dark: #EAD9BE
--gold:       #B8973A
--rose:       #C27A8A
--charcoal:   #2C2C2C
--mid:        #7A5A64
--light:      #B09090
--bg:         #FAF6EF
```

### Fonts
- **Cormorant Garamond** — headings, quotes, large numbers (serif)
- **Montserrat** — labels, body, buttons (sans-serif)
- Loaded via Google Fonts CDN

### Chart Library
- **Chart.js 4.4.1** via `https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js`

### Global Content Rules (enforced across all 5 files)
- **No eyebrow elements** (e.g. "Cork to Table · r/wine")
- **No article/author credits** in footers
- **No tool or run ID references** in any text
- Footer format: `Source: [clean description, no author attribution].`

---

## Raw Data Summary

**Dataset:** 584 total data points

| Source | Count |
|--------|-------|
| Instagram posts (8 hashtags) | 132 |
| Reddit comments (17 r/wine threads) | 452 |

### Instagram Hashtags Analysed
`#summerwine` · `#winterwine` · `#redwineweather` · `#roseseason` · `#whitewineseason` · `#wineoclock` · `#winetime` · `#holidaywine`

### Reddit Thread Groups
| Run ID | Label | Threads | Comments |
|--------|-------|---------|----------|
| TvwLkjxNNTD4YnbXd | Seasonal & context threads | 15 | 231 |
| Brcvs84UkVJ9QQUKL | Industry trends (future pieces) | 1 | 150 |
| ySnHUtc9ejoyBYfye | Heat wave + climate | 1 | 71 |

### Reddit Section Tags (used in visual_reddit_voices.html)
| Tag | Label | Article section |
|-----|-------|----------------|
| S1 | Social Anchor | Section 1 — It Depends |
| S3 | Seasonal Instinct | Section 2 — The Seasonal Instinct |
| S4 | Holiday Effect | Section 3 — Why Your Wine Tastes Different |
| S5 | Palate Evolution | Section 4 — The Wine Changes |

### v2 vs v1 Differences
v2 (`wine_piece1_raw_data_v2.json` on `Substack-1`) adds:
- `created_at` ISO 8601 timestamps on all Reddit `topQuotes`
- `date` (ISO string) alongside `ts` (Unix epoch) on all Instagram posts
- 6 new Reddit `topQuotes` not present in v1
- Additional published data sources (Danner 2016, Plassmann 2008, BestWineImporters)

**Always use v2 for any future data work.**

---

## Published Data Sources

| Key | Source | Used in |
|-----|--------|---------|
| `wmc2025` | Wine Market Council 2025 US Consumer Benchmark Survey (n=4,900+), via Forbes/Erica Duecy, Jan 2026 | Visual 1, Section 1 |
| `deutschFamily` | Deutsch Family Wine & Spirits — 56,000 responses, 7 waves, mid-2023 to Jul 2025 | Visual 1, Section 1 |
| `oiv` | OIV global wine consumption by colour 2000–2021, via Decanter Dec 2023 | Visual 2, Section 2 |
| `spence` | Spence & Wang (2015), Flavour journal — crossmodal wine/music experiment | Section 3 |
| `danner` | Danner et al. (2016), Food Research International — context/mood effect on wine ratings | Section 3 |
| `plassmann` | Plassmann et al. (2008), PNAS — price expectation and neural pleasure response | Section 3 |
| `pragma` | Pragma Market Research, India Wine Market 2025 (held for Piece 3) | — |

---

## The Five Visuals — Complete Status

### Visual 1: `visual_occasion_shift.html`
**Preview:** `https://rmod04.github.io/WineResearch/visual_occasion_shift.html`  
**Article section:** It Depends  
**Status:** ✅ Complete

**Content:**
- Clustered bar chart: solo occasions (14% → 7%) vs shared occasions (6% → 10.2%), Mid 2023 vs Jul 2025
- Stat pills: `+70%` rise in shared occasions / `−50%` fall in relax alone / `56,000` survey responses
- Annotation: *"In just two years, solo occasions dropped from 14% to 7% of all wine moments — a 50% relative decline. For the first time in 30 years, shared occasion, not individual relaxation, is the primary reason to choose wine (US consumer study)."*
- Custom JS tooltip with boundary clamping; CSS `transform` removed entirely to prevent off-screen clipping

**Key technical note:** Tooltip positioning is 100% JS-controlled — do not add CSS `transform: translate()` to `.custom-tooltip`.

---

### Visual 2: `visual_oiv_colour_shift.html`
**Preview:** `https://rmod04.github.io/WineResearch/visual_oiv_colour_shift.html`  
**Article section:** The Seasonal Instinct  
**Status:** ✅ Complete

**Content:**
- Header title: *"The World is Moving Towards Lighter"*
- Two view toggles: **Stacked Share** (default) and **Change Only** — Side by Side view was removed
- Clickable colour pills (Red / White / Rosé) dim/undim to isolate trends
- y-axis max: `isChange ? 10 : (isStacked ? 105 : 65)` — 105 is required; lower values clip rosé in stacked view

**Key technical note:** Toggle array is `['stacked', 'change']` only (no `'grouped'`). `buildGrouped()` function does not exist.

---

### Visual 3: `visual_instagram.html`
**Preview:** `https://rmod04.github.io/WineResearch/visual_instagram.html`  
**Article section:** The Seasonal Instinct  
**Status:** ✅ Complete

**Content:**
- Header: *"Setting Becomes Identity"*
- 8 hashtags; bar chart with 4 metric toggles (Avg Likes / Avg Comments / Comment/Like Ratio / Post Count)
- Click any bar → detail panel with hashtag stats, top caption, insight
- Second finding pill: `220` avg comments on `#winetime`
- Insight language note: #winetime and #wineoclock insights do NOT say "not setting-triggered" — time is treated as a valid type of setting throughout. #holidaywine insight does not say "the right bottle for the right moment"

---

### Visual 4: `visual_seasonal_instinct.html`
**Preview:** `https://rmod04.github.io/WineResearch/visual_seasonal_instinct.html`  
**Article section:** The Seasonal Instinct  
**Status:** ✅ Complete

- Title: *"Seasonal Variations"*
- Subtitle: *"What the data shows consumers reach for, each season. Is there a pattern here, and how strong is it?"*
- Standard cleanup applied (no eyebrow, no author credit, clean footer)

---

### Visual 5: `visual_reddit_voices.html`
**Preview:** `https://rmod04.github.io/WineResearch/visual_reddit_voices.html`  
**Article section:** All four sections  
**Status:** ✅ Complete — full redesign using v2 data

**Data:** 19 quotes from `wine_piece1_raw_data_v2.json` topQuotes. All quotes carry `created_at` ISO timestamps.

**Features:**
- Filter buttons: All voices / Social anchor (S1) / Seasonal instinct (S3) / Holiday effect (S4) / Palate evolution (S5)
- Sort: two explicit buttons — `↓ Upvotes` (score descending, default) and `↓ Most recent` (created_at descending). Each uses the other as tiebreaker.
- Cards: non-expandable. Display: upvote badge, section tag (colour-coded), full quote text, thread name, date tag (e.g. "Apr 2026")
- **Category insight pills:** 2–3 pills appear below the card grid when a specific filter is active; hidden for All voices

**Section colours:**
```js
S1: bg #5C1A2E (burgundy), text cream
S3: bg #B8973A (gold),     text charcoal
S4: bg #C27A8A (rose),     text charcoal
S5: bg #7A5A64 (mid),      text cream
```

**Category insight pill content:**

*S1 — Social Anchor:*
- "The thesis, distilled" — WMC link, 44 upvotes, no dissent
- "Occasion as mechanism" — first time in 30 years, occasion > relaxation

*S3 — Seasonal Instinct:*
- "The pattern is real" — cooking habits drive seasonal instinct
- "So is the sovereignty" — every voice ends with "drink whatever I want"
- "Grammar reveals the feeling" — "Winter IS Barolo" (not "I drink Barolo")

*S4 — Holiday Effect:*
- "Four mechanisms, one experience" — vacation mindset / company / prep / setting
- "The dataset's highest upvote" — 219↑, "Being in the moment elevates everything"
- "Design, not magic" — winery experience is engineered and replicable

*S5 — Palate Evolution:*
- "The arc is consistent" — intensity → subtlety, reds → whites
- "Mirrors the OIV data" — personal palate evolution = global consumption shift
- "The closing argument" — 198↑, "There is no such thing as a special occasion"

---

## Session-Start Hook

On every session start, `.claude/hooks/session-start.sh` automatically:
1. Kills any process on port 8080
2. Starts `python3 -m http.server 8080` as local fallback
3. Reads `.claude/launch.json` and echoes all GitHub Pages preview URLs to stderr

Registered in `.claude/settings.json` under `hooks.SessionStart`.

---

## Git Commit History (most recent first)

```
37416d6  visual_reddit_voices: redesign with v2 data, category pills, date sort
5084d9d  visual_reddit_voices: remove eyebrow and clean footer
84bd1d0  visual_seasonal_instinct: remove eyebrow, update title/subtitle, clean footer
9ac9733  visual_instagram: copy and content cleanup
281574d  visual_oiv_colour_shift: remove eyebrow, side-by-side, fix rosé, update copy
68622f5  visual_occasion_shift: update second pill to -50% fall in relax alone
5f856a4  visual_occasion_shift: update annotation copy
2de07e0  visual_occasion_shift: four UI fixes
7a3e0e4  Add launch.json and update hook to show GitHub Pages preview URLs
c6ab97c  Add SessionStart hook to auto-start preview server
abbaf4e  Add interactive article visuals — Piece 1: Every Wine Has Its Moment
35fab4d  Add research findings document with Task 4B real Reddit quotes
29bb6d1  Initial commit
```

---

## Roadmap / Pending Work

All five visuals are complete as of this handoff. The branch `claude/wine-substack-data-setup-H9HVg` is ahead of `main` and needs to be merged to publish updates to GitHub Pages.

**Potential next tasks (not started):**
- Merge working branch to `main` to publish all visual updates to GitHub Pages
- Read article final draft (`Every Wine Has its Moment_Final Draft 2.docx` on `Substack-1`) — binary file, user must paste text if needed
- Further copy or data edits to any of the 5 visuals based on article review
- `findings.html` (research document) — exists on main but has not been revisited in these sessions; may need updating to match v2 data

---

## Key Decisions / Constraints to Preserve

1. **Time as a setting** — #winetime and #wineoclock are not described as "not setting-triggered." Time of day is treated as a valid setting throughout the article.
2. **No per-card editorial context** in visual_reddit_voices — replaced by category-level insight pills.
3. **Tooltip positioning** in visual_occasion_shift — purely JS-controlled with boundary clamping; no CSS transform on `.custom-tooltip`.
4. **OIV stacked y-axis max = 105** — not 100 or 65; rosé portion is cut off at lower values.
5. **No date sort in visual_reddit_voices before v2** — only possible because v2 added `created_at` to topQuotes.
6. **Article thesis** — context shapes wine preference; preference is always fluid and valid. Visuals support this; do not introduce language that implies a "correct" wine choice.

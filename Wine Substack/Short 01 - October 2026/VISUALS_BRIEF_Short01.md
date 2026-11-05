# Short 01 visuals brief for Claude Code

**Piece:** The Burgundy name premium (Short 01, Cork to Table Substack "The Deeper Pour").
**Written:** 29 October 2026, by Cowork, for Claude Code on Rohan's Mac.
**Publish date:** Thu 5 November 2026. Final review Tue 3 November. Visuals should be built and approved before then.

Rohan runs this from the Code tab of the Claude desktop app on his Mac. He has no coding background. Explain each step in plain language, work step by step, and stop at the checkpoints marked **STOP** to show him the result before moving on.

---

## 1. Ground rules (read before doing anything)

1. **Read these first:**
   - `/Users/rohanmodwel/WineResearch/Wine Substack/cork_to_table_style_rules.md` (house rules)
   - `/Users/rohanmodwel/WineResearch/CLAUDE.md` (website and visuals pipeline)
   - `/Users/rohanmodwel/WineResearch/content/visuals.ts` (slug map)
   - `/Users/rohanmodwel/WineResearch/Wine Substack/Piece 2/static/README.md` (render settings and the locked box style)
   - One Piece 2 visual as the style reference: `/Users/rohanmodwel/WineResearch-substack/visual_where_value_lives.html`
2. **Copy rules for every visual:** zero em dashes; no "X, not Y" antithesis phrasing; no sentences ending on "the point"; titles in sentence case; one footer line per visual beginning "Source:" or "Sources:"; never repeat a source caption under a chart; never name scraping tools or vendors (cite Vivino, Wine-Searcher, Guide Hachette des Vins, iDealwine, INSEE only).
3. **All prices in euros.** US dollar prices convert at **€0.89 to the dollar** (21 October 2026). The only exception is quote box C, which shows dollars inside the quote.
4. **Quotes are verbatim.** Use the exact text given in section 4. Do not reword, re-punctuate or "fix" anything inside quotation marks.
5. **Do not edit the article.** Rohan writes the prose. The visuals must match the numbers already in his draft (listed per visual below). If your computed number differs from the expected number, STOP and report the difference. Do not change either number yourself.
6. **Never delete files** without asking Rohan first.
7. **Git:** commits and pushes are fine from Claude Code, but ask Rohan before any push.
8. **Watch out for the auto-push watcher.** Any `visual_*.html` saved into `/Users/rohanmodwel/WineResearch-substack/` is pushed to GitHub Pages automatically within a minute or two. So author and review everything in the Short 01 folder first, and copy into `WineResearch-substack` only after Rohan approves (step 7).

---

## 2. Where things live

| What | Path |
| :-- | :-- |
| Piece folder (data, quote records, working data) | `/Users/rohanmodwel/WineResearch/Wine Substack/Short 01 - October 2026/` |
| Build the visuals here | `.../Short 01 - October 2026/visuals/` (create it) |
| Static images go here | `.../Short 01 - October 2026/visuals/static/` and `.../static/boxes/` |
| GitHub Pages worktree (deploy target, auto-push) | `/Users/rohanmodwel/WineResearch-substack/` |
| Shared assets already vendored there | `chart.umd.min.js`, `fonts.css`, `fonts/` |
| Number source of truth | `SHORT01_WORKING_DATA.md` in the piece folder (sections 2, 3, 15, 17.1, 17.6, 17.11, 17.14) |
| Quote source of truth | `quote_source_records.json` in the piece folder |
| Rohan's draft (Google Doc, for context only) | "C2T Short 01 (Oct 2026) Article Draft 1" |

Reference the shared assets with relative paths (`chart.umd.min.js`, `fonts.css`) exactly as the Piece 2 HTML does, so the files work unchanged once copied into `WineResearch-substack`. While reviewing in the Short 01 folder, copy those assets into `visuals/` temporarily or preview from a scratch copy; do not change the paths in the HTML.

---

## 3. Inventory: twelve assets, in reading order

| # | Asset | Section | Type | Output file(s) |
| --: | :-- | :-- | :-- | :-- |
| 1 | Photo A, Chambertin sign | 1 | Photo | `static/s1_01_photo_chambertin.jpg` |
| 2 | Where the name premium shows up | 2 | **Interactive** + static | `visual_name_premium.html`; `static/visual_name_premium.png`; `static/visual_name_premium_medians.png` |
| 3 | Older vintages do not rate higher | 3 | Static chart | `visual_older_vintages.html` (render source only); `static/visual_older_vintages.png` |
| 4 | Data box: what 94 critic points cost | 3 | Data box | `static/boxes/s1_04_data_94-points.png` |
| 5 | Quote box A (P3-Q7) | 3 | Quote box | `static/boxes/s1_05_quote_marginal-increase.png` |
| 6 | Every rung of the label | 4 | **Interactive** + static | `visual_price_ladder.html`; `static/visual_price_ladder.png` |
| 7 | Quote box B (P3-Q1) | 4 | Quote box | `static/boxes/s1_07_quote_baseball-cards.png` |
| 8 | The vintage multiple | 5 | Static chart | `visual_vintage_multiple.html` (render source only); `static/visual_vintage_multiple.png` |
| 9 | Quote box C (P3-Q17) | 6 | Quote box | `static/boxes/s1_09_quote_reputable-shop.png` |
| 10 | Quote box D (P3-Q8) | 6 | Quote box | `static/boxes/s1_10_quote_overpriced.png` |
| 11 | Data box: same score, different price | 6 | Data box | `static/boxes/s1_11_data_60-to-680.png` |
| 12 | Photo B, Marsannay vineyards | 7 | Photo | `static/s1_12_photo_marsannay.jpg` |

Placement in the article: box 4 sits after the paragraph comparing the 94-point grand cru with Felton Road and Drouhin Oregon; box 11 sits after the paragraph giving the €60 to €680 range.

Only assets 2 and 6 are published as interactives. Their slugs are **`name-premium`** and **`price-ladder`**, and their public URLs will be `https://corktotable.co/visuals/name-premium` and `https://corktotable.co/visuals/price-ladder`. Everything else ships as a static image in the Substack post.

---

## 4. Specs, visual by visual

Shared look: copy the CSS variables, header bar, typography and footer styling from `visual_where_value_lives.html` (burgundy `#5C1A2E`, cream `#F5ECD7`, gold `#B8973A`, charcoal `#2C2C2C`, mid `#7A5A64`, background `#FAF6EF`; Cormorant Garamond for titles, Montserrat for body). Use Chart.js from the vendored `chart.umd.min.js`. Burgundy is always the highlighted series; comparison regions use muted tones.

### 4.1 Photo A, the Chambertin sign

- Source: https://commons.wikimedia.org/wiki/File:Sign_announcing_the_beginning_of_the_Chambertin_vineyard_(7309849056).jpg (original 3635 x 2414).
- Download the original, export a JPEG at 1840 px wide (quality about 85). No colour edits.
- Credit line, to sit under the image in Substack: `Photo: Michal Osmenda, CC BY 2.0, via Wikimedia Commons`

### 4.2 Interactive 1: "Where the name premium shows up" (slug `name-premium`)

**Data:** `burgundy_name_premium_dataset.csv` (columns: group, appellation, rating, price_usd). Vivino, US listings, retrieved 9 October 2026. Convert every price to euros (× 0.89) before any threshold or median.

**View 1 (default): share of well-rated wines under €50.** For each group, take wines rated 4.0 or higher and count those with a euro price under €50. Horizontal bars, Burgundy last and highlighted. Leave out Beaujolais regional (only 5 wines).

Expected results (must match):

| Group (display label) | Under €50 | Share |
| :-- | :-- | --: |
| Beaujolais cru | 41 of 51 | 80% |
| Willamette Valley Pinot Noir | 56 of 71 | 79% |
| Central Otago Pinot Noir | 11 of 24 | 46% |
| Bourgogne (regional) | 8 of 18 | 44% |
| Burgundy village and above | 4 of 122 | 3.3% |

**View 2: median price at the same rating.** Wines rated 4.0 to 4.2 inclusive, median euro price per group. Vertical or horizontal bars; label each with its multiple against Burgundy where useful.

| Group | Median | Wines |
| :-- | --: | --: |
| Willamette Valley Pinot Noir | €31 | 61 |
| Beaujolais cru | €40 | 51 |
| Central Otago Pinot Noir | €48 | 19 |
| Bourgogne (regional) | €53 | 18 |
| Burgundy village and above | €107 | 102 |

The article quotes Burgundy at about 3.4x Willamette and 2.2x Central Otago at this rating band. Show the counts (n) on hover.

- Toggle between the two views with buttons styled like the Piece 2 toggles.
- Title: `Where the name premium shows up` (sentence case, already approved).
- Short subtitle line, for example: "Wines rated 4.0 or higher out of 5 on Vivino". Propose wording; Rohan approves.
- Footer: `Source: Wine rating and price data obtained from Vivino, US market, October 2026. Prices converted to euros.`
- Static exports: View 1 as `visual_name_premium.png`, View 2 as `visual_name_premium_medians.png`.

### 4.3 Static: "Older vintages do not rate higher"

**Data:** `vivino_burgundy_vintage_panel.csv` (40 red Burgundies, vintages 2015 to 2024). Ratings only; ignore prices (Vivino shows one price per wine across vintages).

**Method:** within each wine, mean rating of the 2015 to 2017 vintages minus mean rating of the 2020 to 2023 vintages. Keep wines with at least two rated vintages on each side.

Expected results (must match): **31 wines; older rates higher in 8 of 31**; mean difference -0.065, median -0.033. By tier: Bourgogne regional 9 wines, mean -0.160, older higher in 1 of 9; village and above 22 wines, mean -0.027, older higher in 7 of 22.

- Dot plot: one dot per wine, x axis = rating difference (older minus newer), a clear zero line, dots coloured by tier (regional and village and above). A small label such as "Older rated higher in 8 of 31 wines".
- Title: `Older vintages do not rate higher`
- Footer: `Source: Wine rating data obtained from Vivino, October 2026.`
- Static only: render to `visual_older_vintages.png`. Not deployed.

### 4.4 Interactive 2: "Every rung of the label" (slug `price-ladder`)

**Burgundy panel data:** `winesearcher_scan_clean.csv`. Filter: `set` = matrix, `vintage` 2020 or 2023, `offers` at least 2, `dropped_reason` empty, a price present. Convert `lowest_offer_usd` to euros (× 0.89).

Expected tier medians (must match, after rounding):

| Tier (display) | Wines | Median | Range |
| :-- | --: | --: | :-- |
| Bourgogne | 19 | €32 | about €21 to €46 |
| Village | 21 | €71 | about €27 to €177 |
| Premier cru | 15 | €128 | about €57 to €238 |
| Grand cru | 15 | €226 | about €83 to €458 |

- Draw one dot per wine on each rung, with the median marked clearly. Estate name, vintage and price appear **on hover only**.
- **Controls panel** (entry bottling to top bottling, euros, from working data 17.6 and 17.11; not in the CSV):

| Region label | Entry | Top | Hover detail |
| :-- | --: | --: | :-- |
| Burgundy (one house) | €25 | €351 | Louis Jadot, Bourgogne to Chambertin-Clos de Bèze |
| Oregon | €54 | €65 | Domaine Drouhin Oregon, Dundee Hills to Laurène |
| Central Otago | €39 | €89 | Felton Road, Bannockburn to Block 5 |
| Germany | €28 | €166 | Rudolf Fürst, Spätburgunder Tradition to Hundsrück GG |

  Draw these as entry-to-top bars or dumbbells. Region labels visible; producer names on hover only.
- Title: `Every rung of the label`
- Note line directly under the title (approved by Rohan): `Burgundy compared with three Pinot Noir producers from Oregon, Central Otago and Germany.`
- Footer: `Source: Price data obtained from Wine-Searcher, lowest offer worldwide in euros, October 2026.`
- Static export: `visual_price_ladder.png` (default state, no hover panel showing).

### 4.5 Static: "The vintage multiple" (title still to settle)

A triangulation graphic showing how an old bottle's price gain splits into two parts. It is arithmetic, so no chart library is needed; tiles or a simple flow work best.

Layout, left to right:

1. **Release price climb: about 1.9x.** Same wine, a new release then against a new release now, after inflation. 16 wines, median 14 years apart.
2. **×**
3. **Age premium on today's shelf: about 1.15x.** An older vintage against the current release of the same wine, both at today's prices. 16 premier and grand cru wines; typical +14%, average +24%.
4. **≈**
5. **The cellared bottle: about 2.2x.** One bottle's release price against its value today, after inflation. 60 premier and grand cru wines, vintages 1997 to 2011.

Make the first tile visibly the larger driver. Keep the word "about" or the ≈ sign, since 1.9 × 1.15 = 2.19 rounds to 2.2.

- Title: propose two or three sentence-case options (for example "How an old bottle's price is built" or "Most of the gain came from the market"); **Rohan picks**.
- Footer: `Sources: Release prices obtained from Guide Hachette des Vins; current prices obtained from iDealwine and Wine-Searcher; inflation obtained from INSEE, October 2026.`
- Static only: `visual_vintage_multiple.png`. Not deployed.
- Supporting files if you want to sanity-check: `hachette_release_series.csv` (1.9x), `hachette_idealwine_pairs.csv` (2.2x), `winesearcher_scan_clean.csv` (the +14% / +24%). Do not recompute and replace the three headline numbers; they are already in the article.

### 4.6 Quote boxes A to D

**The box style is locked.** Copy it exactly from `Piece 2/static/README.md` and the static-image notes: background `#FAF5EE`, 3px burgundy left rule, padding 29/35/30/34 px, quote in Cormorant Garamond italic 400 at 22px on a 30px line, meta line 11px below in Montserrat 500 13px `#7A5A64`. Open one Piece 2 quote box image (for example `Wine Substack/Piece 2/static/boxes/p2_03_quote_balance-finesse.png`) and copy its meta-line format exactly (score marker ▲ in burgundy bold, channel `r/wine` in gold bold, attribution "a wine community member"). Never show usernames.

Use these texts exactly. A paragraph break in the original is shown as a line break in the box.

| Box | Record | Score | Text |
| :-- | :-- | --: | :-- |
| A | P3-Q7 | 21 | `Although "quality" certainly increases, at some point the marginal increase gets smaller and smaller - while the price function seems to do the opposite. […]` |
| B | P3-Q1 | 96 | `At a certain point, you have to realize burgundy has more in common with baseball cards than it does with beer for example.` (line break) `The value of these bottles isn’t really based on their perceived quality so much as their rarity and collectability. […]` |
| C | P3-Q17 | 18 | `If you were to buy any random Burgundy from a reputable shop like K&L for $60-100, it'd likely be very good. […]` |
| D | P3-Q8 | 28 | `Most of the time they are (IMO) overpriced.` (line break) `Occasionally they are transcendent, singular, worth every penny and then some.` |

Notes:
- Box B: paragraphs 3 and 4 of the original are excluded by house rule. Never include them.
- Box C: the "$" before 60 is Rohan's own addition and is approved; everything else is the stored text. Keep the straight apostrophe in "it'd" and the curly one in box B's "isn’t" exactly as given.
- Check each text against `quote_source_records.json` (`quotes[].exactText`) before rendering. Apart from the […] cuts, the line breaks and box C's "$", every character must match.

### 4.7 Photo B, Marsannay vineyards (save as `static/s1_12_photo_marsannay.jpg`)

- Source: https://commons.wikimedia.org/wiki/File:Vignoble_de_Marsannay-la-C%C3%B4te.jpg (original 1024 x 768).
- Do not upscale. Export the original as a JPEG at its native size. No crop or colour edit (CC BY-SA: an edited version would have to carry the same licence).
- Credit line: `Photo: Arnaud 25, CC BY-SA 4.0, via Wikimedia Commons`

### 4.8 Data boxes (two)

**The data box style is locked** (settled 1 September 2026). Background `#F5ECD7`; padding 34px 60px 34px 40px; flex row, gap 36px, items centred. Stat: Montserrat 700, 46px, `#5C1A2E`, letter-spacing -0.5px, no wrap. Body: Montserrat 400, 16px, line-height 1.6, `#2C2C2C`. Source line under the body: 13px, line-height 1.5, `#7A5A64`, margin-top 11px. Match a Piece 2 data box image exactly, for example `Wine Substack/Piece 2/static/boxes/p2_01_data_69pct.png`. No reference superscript (this piece publishes no reference list).

Montserrat 700 is **not** in the vendored `fonts/` folder (300 to 600 only). For rendering, add the 700 weight to the scratch render folder only, from npm (`@fontsource/montserrat`). Do not add it to `WineResearch-substack`.

| Box | Stat | Body | Source line |
| :-- | :-- | :-- | :-- |
| 4 (section 3) | `€226 vs €65` | `The price of a 94-point critic score: a Burgundy grand cru on average, against Domaine Drouhin Oregon's Laurène from the Willamette Valley.` | `Critic score and price data obtained from Wine-Searcher, October 2026.` |
| 11 (section 6) | `€60 to €680` | `The price range of the four Burgundies that scored 97 at the 2025 Decanter World Wine Awards, from a Pommard premier cru to a Clos de la Roche grand cru.` | `Competition results obtained from the Decanter World Wine Awards, 2025. Average retail prices obtained from Wine-Searcher, June 2025.` |

These numbers are already in Rohan's draft; do not change them. Show both boxes to Rohan at the first STOP, since he has not seen the wording yet.

---

## 5. STOP: first review with Rohan

Before rendering anything, open the two interactives and the two static-chart HTML files in a browser for Rohan to see. Show him:
- every number on screen next to the expected value from section 4, with any difference flagged;
- the proposed subtitle for interactive 1 and the title options for the vintage multiple;
- the wording of the two data boxes (section 4.8).

Make his changes, then continue.

---

## 6. Render the static images

Follow `Piece 2/static/README.md`, with Playwright and Chromium.

- **Charts and interactives:** viewport 920 CSS px wide, device scale factor 2, full-page capture. Output 1840 px wide.
- **Quote boxes and data boxes:** element capture of a 900 CSS px container, device scale factor 2. Output 1800 px wide.
- Render from a **scratch copy** placed beside `chart.umd.min.js`, `fonts.css` and `fonts/`. Never patch the authored HTML just to render it.
- Remove interaction chrome from the captures: hover hints, active-state highlights, open tooltips, "click to…" instructions.
- Interactive 1 needs two captures (View 1 default, View 2 medians); drive the toggle with `page.evaluate`.
- **If Playwright is not installed on the Mac:** install it in a scratch folder outside both repos (`npm i playwright` then `npx playwright install chromium`). If that fails, STOP and tell Rohan; Cowork can do the rendering instead.
- Montserrat is vendored at weights 300 to 600 only. The quote boxes need 400 and 500, which are present.

Write a short `visuals/static/README.md` listing every file, its state and its render settings, in the same style as the Piece 2 README.

**STOP: second review.** Show Rohan all twelve static assets (the ten images plus two photos) and confirm every quote box against section 4.6 once more.

---

## 7. Deploy the two interactives (only after Rohan approves)

1. Copy `visual_name_premium.html` and `visual_price_ladder.html` into `/Users/rohanmodwel/WineResearch-substack/`. The watcher should push them on its own; check `git status` and `git log` there to confirm. If it did not push, ask Rohan, then commit and push them yourself.
2. Confirm both load at `https://rmod04.github.io/WineResearch/visual_name_premium.html` and `.../visual_price_ladder.html`, with fonts and Chart.js loading (no third-party requests).
3. **Branded URLs.** Read `CLAUDE.md` and `content/visuals.ts` in `/Users/rohanmodwel/WineResearch/` to see how the existing slugs (for example `palate-arc`, `occasion-shift`) map to files. Add `name-premium` → `visual_name_premium.html` and `price-ladder` → `visual_price_ladder.html` the same way. Ask Rohan before pushing the website change.
4. Check `https://corktotable.co/visuals/name-premium` and `https://corktotable.co/visuals/price-ladder` both return 200 and show the right visual. Also spot-check one existing slug, for example `https://corktotable.co/visuals/palate-arc`. If the branded URLs do not work, STOP and tell Rohan before anything else; the Substack post must link to the branded URL, and a link in a sent newsletter cannot be fixed.

The static charts (3 and 8), the quote boxes, the data boxes and the photos are not deployed anywhere. They go into the Substack post as images.

---

## 8. Report back

Finish with a short plain-language summary for Rohan:
- the twelve assets and where they are;
- the two live URLs, each confirmed 200;
- any number that did not match section 4, and what he decided;
- anything left for him to do in Substack: insert the images in reading order, add the two photo credits under the photos, and link each interactive's static image to its corktotable.co URL.

# Short 01 visuals brief for Claude Code (cloud session)

**Piece:** The Burgundy name premium (Short 01, Cork to Table Substack "The Deeper Pour").
**Written:** 29 October 2026, by Cowork, for a Claude Code session running in the cloud.
**Publish date:** Thu 5 November 2026. Final review Tue 3 November. Visuals should be built and approved before then.

Rohan runs this from the Code tab of the Claude app. He has no coding background. Explain each step in plain language, work step by step, and stop at the checkpoints marked **STOP** to show him the result before moving on.

**This brief is self-contained.** The piece's data files live only on Rohan's Mac and are not in the repository, so every number, quote and data point you need is written into this file (sections 4 and the appendices). Do not go looking for the CSV files.

---

## 1. Ground rules (read before doing anything)

1. **Repository:** `rmod04/WineResearch` on GitHub.
   - Branch `main`: the website (Next.js) plus the `Wine Substack/` folder with earlier pieces' visuals and static images.
   - Branch `substack`: the GitHub Pages site that serves the interactive visuals at `https://rmod04.github.io/WineResearch/`. It holds every `visual_*.html` plus the shared `chart.umd.min.js`, `fonts.css` and `fonts/`.
2. **Read these first:**
   - `Wine Substack/cork_to_table_style_rules.md` on `main` (house rules)
   - `CLAUDE.md` and `content/visuals.ts` on `main` (website and visuals pipeline, slug map)
   - `Wine Substack/Piece 2/static/README.md` on `main` (render settings and the locked box style)
   - `visual_where_value_lives.html` on `substack` (the style reference for every chart)
3. **Copy rules for every visual:** zero em dashes; no "X, not Y" antithesis phrasing; no sentences ending on "the point"; titles in sentence case; one footer line per visual beginning "Source:" or "Sources:"; never repeat a source caption under a chart; never name scraping tools or vendors (cite Vivino, Wine-Searcher, Guide Hachette des Vins, iDealwine, INSEE, the Decanter World Wine Awards only).
4. **All prices in euros.** Every price in this brief is already in euros. The only exception is quote box C, which shows dollars inside the quote.
5. **Quotes are verbatim.** Use the exact text given in section 4.6. Do not reword, re-punctuate or "fix" anything inside quotation marks.
6. **Do not edit the article.** Rohan writes the prose. The numbers in this brief match his draft. If anything you draw disagrees with a number here, STOP and report it. Do not change numbers yourself.
7. **Never delete files** without asking Rohan first.
8. **Ask Rohan before every push.** Pushing to `substack` publishes to the live site within minutes.

**Before you start:** check that `claude/wine-substack-data-setup-H9HVg` contains the files listed in point 2 above (it should be based on `main`). If it does not, tell Rohan before doing anything else. The interactives still go live through the separate `substack` branch in step 7, since that is what GitHub Pages serves.

---

## 2. Where to put things

| What | Where |
| :-- | :-- |
| Working branch for all new files | the existing branch `claude/wine-substack-data-setup-H9HVg`, already linked to this session. Do not create a new branch. |
| Visual HTML files | `Wine Substack/Short 01 - October 2026/visuals/` on that branch |
| Static images | `.../visuals/static/` and `.../visuals/static/boxes/` |
| Live interactives (only after approval, step 7) | the two interactive HTML files copied to the root of the `substack` branch |
| Shared assets for every visual | `chart.umd.min.js`, `fonts.css`, `fonts/` at the root of `substack` |

Reference the shared assets with relative paths (`chart.umd.min.js`, `fonts.css`) exactly as the Piece 2 HTML does, so the files work unchanged on the `substack` branch. For previews and rendering, copy the assets beside a scratch copy of the HTML; do not change the paths in the HTML.

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

Placement in the article (for Rohan, when he builds the Substack post): box 4 sits after the paragraph comparing the 94-point grand cru with Felton Road and Drouhin Oregon; box 11 sits after the paragraph giving the €60 to €680 range.

Only assets 2 and 6 are published as interactives. Their slugs are **`name-premium`** and **`price-ladder`**, and their public URLs will be `https://corktotable.co/visuals/name-premium` and `https://corktotable.co/visuals/price-ladder`. Everything else ships as a static image in the Substack post.

---

## 4. Specs, visual by visual

Shared look: copy the CSS variables, header bar, typography and footer styling from `visual_where_value_lives.html` (burgundy `#5C1A2E`, cream `#F5ECD7`, gold `#B8973A`, charcoal `#2C2C2C`, mid `#7A5A64`, background `#FAF6EF`; Cormorant Garamond for titles, Montserrat for body). Use Chart.js from the vendored `chart.umd.min.js`. Burgundy is always the highlighted series; comparison regions use muted tones.

### 4.1 Photo A, the Chambertin sign

- Source: https://commons.wikimedia.org/wiki/File:Sign_announcing_the_beginning_of_the_Chambertin_vineyard_(7309849056).jpg (original 3635 x 2414).
- Download the original, export a JPEG at 1840 px wide (quality about 85). No colour edits.
- Credit line, to sit under the image in Substack: `Photo: Michal Osmenda, CC BY 2.0, via Wikimedia Commons`

### 4.2 Interactive 1: "Where the name premium shows up" (slug `name-premium`)

**Data:** the figures below are final and come from Vivino US listings retrieved 9 October 2026, converted to euros at €0.89. The raw file is not in the repo; use these numbers as given.

**View 1 (default): share of well-rated wines under €50.** Horizontal bars, Burgundy last and highlighted. Leave out Beaujolais regional (only 5 wines).

Values:

| Group (display label) | Under €50 | Share |
| :-- | :-- | --: |
| Beaujolais cru | 41 of 51 | 80% |
| Willamette Valley Pinot Noir | 56 of 71 | 79% |
| Central Otago Pinot Noir | 11 of 24 | 46% |
| Bourgogne (regional) | 8 of 18 | 44% |
| Burgundy village and above | 4 of 122 | 3.3% |

**View 2: median price at the same rating.** Wines rated 4.0 to 4.2, median euro price per group. Vertical or horizontal bars; label each with its multiple against Burgundy where useful.

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

**Data:** Appendix A (31 wines, already computed from a Vivino panel of 40 red Burgundies, vintages 2015 to 2024).

**Method (for the record):** within each wine, mean rating of the 2015 to 2017 vintages minus mean rating of the 2020 to 2023 vintages, for wines with at least two rated vintages on each side.

Values: **31 wines; older rates higher in 8 of 31**; mean difference -0.065, median -0.033. By tier: Bourgogne regional 9 wines, mean -0.160, older higher in 1 of 9; village and above 22 wines, mean -0.027, older higher in 7 of 22.

- Dot plot: one dot per wine, x axis = rating difference (older minus newer), a clear zero line, dots coloured by tier (regional and village and above). A small label such as "Older rated higher in 8 of 31 wines".
- Title: `Older vintages do not rate higher`
- Footer: `Source: Wine rating data obtained from Vivino, October 2026.`
- Static only: render to `visual_older_vintages.png`. Not deployed.

### 4.4 Interactive 2: "Every rung of the label" (slug `price-ladder`)

**Burgundy panel data:** Appendix B (70 wine-vintages, 2020 and 2023, at least 2 merchant offers, lowest offer worldwide, already in euros).

Tier medians (your chart must reproduce these from Appendix B):

| Tier (display) | Wines | Median | Range |
| :-- | --: | --: | :-- |
| Bourgogne | 19 | €32 | about €21 to €46 |
| Village | 21 | €71 | about €27 to €177 |
| Premier cru | 15 | €128 | about €57 to €238 |
| Grand cru | 15 | €226 | about €83 to €458 |

- Draw one dot per wine on each rung, with the median marked clearly. Estate name, vintage and price appear **on hover only**.
- **Controls panel** (entry bottling to top bottling, euros, final figures):

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
- These three numbers are final and already in the article. Do not change them.

### 4.6 Quote boxes A to D

**The box style is locked.** Copy it exactly (also described in `Wine Substack/Piece 2/static/README.md` on `main`): background `#FAF5EE`, 3px burgundy left rule, padding 29/35/30/34 px, quote in Cormorant Garamond italic 400 at 22px on a 30px line, meta line 11px below in Montserrat 500 13px `#7A5A64`. Open one Piece 2 quote box image (`Wine Substack/Piece 2/static/boxes/p2_03_quote_balance-finesse.png` on `main`) and copy its meta-line format exactly (score marker ▲ in burgundy bold, channel `r/wine` in gold bold, attribution "a wine community member"). Never show usernames.

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
- These texts were checked against the quote source records on 29 October 2026. Copy them character for character.

### 4.7 Photo B, Marsannay vineyards (save as `static/s1_12_photo_marsannay.jpg`)

- Source: https://commons.wikimedia.org/wiki/File:Vignoble_de_Marsannay-la-C%C3%B4te.jpg (original 1024 x 768).
- Do not upscale. Export the original as a JPEG at its native size. No crop or colour edit (CC BY-SA: an edited version would have to carry the same licence).
- Credit line: `Photo: Arnaud 25, CC BY-SA 4.0, via Wikimedia Commons`

### 4.8 Data boxes (two)

**The data box style is locked** (settled 1 September 2026). Background `#F5ECD7`; padding 34px 60px 34px 40px; flex row, gap 36px, items centred. Stat: Montserrat 700, 46px, `#5C1A2E`, letter-spacing -0.5px, no wrap. Body: Montserrat 400, 16px, line-height 1.6, `#2C2C2C`. Source line under the body: 13px, line-height 1.5, `#7A5A64`, margin-top 11px. Match a Piece 2 data box image exactly: `Wine Substack/Piece 2/static/boxes/p2_01_data_69pct.png` on `main`. No reference superscript (this piece publishes no reference list).

Montserrat 700 is **not** in the vendored `fonts/` folder (300 to 600 only). For rendering, add the 700 weight to your scratch render folder only, from npm (`@fontsource/montserrat`). Do not add it to the `substack` branch.

| Box | Stat | Body | Source line |
| :-- | :-- | :-- | :-- |
| 4 (section 3) | `€226 vs €65` | `The price of a 94-point critic score: a Burgundy grand cru on average, against Domaine Drouhin Oregon's Laurène from the Willamette Valley.` | `Critic score and price data obtained from Wine-Searcher, October 2026.` |
| 11 (section 6) | `€60 to €680` | `The price range of the four Burgundies that scored 97 at the 2025 Decanter World Wine Awards, from a Pommard premier cru to a Clos de la Roche grand cru.` | `Competition results obtained from the Decanter World Wine Awards, 2025. Average retail prices obtained from Wine-Searcher, June 2025.` |

These numbers are already in Rohan's draft; do not change them. Show both boxes to Rohan at the first STOP, since he has not seen the wording yet.

---

## 5. STOP: first review with Rohan

You cannot open a browser on Rohan's Mac, so render quick preview screenshots with Playwright and show them to him in the chat. Show him:
- every number on screen next to the value in section 4, with any difference flagged;
- the proposed subtitle for interactive 1 and the title options for the vintage multiple;
- the wording of the two data boxes (section 4.8).

Make his changes, then continue.

---

## 6. Render the static images

Follow `Wine Substack/Piece 2/static/README.md`, with Playwright and Chromium (install them in the session if missing).

- **Charts and interactives:** viewport 920 CSS px wide, device scale factor 2, full-page capture. Output 1840 px wide.
- **Quote boxes and data boxes:** element capture of a 900 CSS px container, device scale factor 2. Output 1800 px wide.
- Render from a **scratch copy** placed beside `chart.umd.min.js`, `fonts.css` and `fonts/` (taken from the `substack` branch). Never patch the authored HTML just to render it.
- Remove interaction chrome from the captures: hover hints, active-state highlights, open tooltips, "click to…" instructions.
- Interactive 1 needs two captures (View 1 default, View 2 medians); drive the toggle with `page.evaluate`.
- Download the two photos from Wikimedia Commons as described in 4.1 and 4.7. If the session cannot reach Wikimedia, skip the photos and tell Rohan; Cowork can fetch them.

Write a short `visuals/static/README.md` listing every file, its state and its render settings, in the same style as the Piece 2 README.

**STOP: second review.** Show Rohan all twelve assets in the chat and confirm every quote box against section 4.6 once more. Then, with his OK, commit everything to `claude/wine-substack-data-setup-H9HVg` and push it. Do not merge it into `main` unless he asks.

---

## 7. Deploy the two interactives (only after Rohan approves)

1. Check out `substack`, add `visual_name_premium.html` and `visual_price_ladder.html` at its root, commit, and **ask Rohan before pushing**.
2. Confirm both load at `https://rmod04.github.io/WineResearch/visual_name_premium.html` and `.../visual_price_ladder.html`, with fonts and Chart.js loading from the site itself (no third-party requests).
3. **Branded URLs.** Read `CLAUDE.md`, `content/visuals.ts` and `next.config.js` on `main` to see how the existing slugs (for example `palate-arc`, `occasion-shift`) map to files. Add `name-premium` → `visual_name_premium.html` and `price-ladder` → `visual_price_ladder.html` the same way, on `claude/wine-substack-data-setup-H9HVg`, and ask Rohan before pushing or merging into `main` (the website only picks the change up once it is on `main`).
4. Check `https://corktotable.co/visuals/name-premium` and `https://corktotable.co/visuals/price-ladder` both return 200 and show the right visual, and spot-check one existing slug such as `https://corktotable.co/visuals/palate-arc`. If the branded URLs do not work, STOP and tell Rohan; the Substack post must link to the branded URL, and a link in a sent newsletter cannot be fixed.

The static charts, quote boxes, data boxes and photos are not deployed. They go into the Substack post as images.

**Note for Rohan:** a cloud session cannot write to your Mac. The finished images will sit on GitHub on the `claude/wine-substack-data-setup-H9HVg` branch. Cowork can fetch them into your Short 01 folder afterwards.

---

## 8. Report back

Finish with a short plain-language summary for Rohan:
- the twelve assets and where they are on GitHub;
- the two live URLs, each confirmed 200;
- any number that did not match section 4, and what he decided;
- what is left for him in Substack: insert the images in reading order, add the two photo credits under the photos, and link each interactive's static image to its corktotable.co URL.

---

## Appendix A: older against newer vintages (static chart 3)

Rating difference = mean Vivino rating of the 2015 to 2017 vintages minus mean rating of the 2020 to 2023 vintages, same wine. Wine names are for checking only; they do not appear on the chart.

```
tier,difference,wine
regional,-0.300,Joseph Drouhin Bourgogne Pinot Noir
regional,-0.283,Olivier Leflaive Bourgogne Cuvée Margot
regional,-0.267,Devillard Le Renard Pinot Noir Bourgogne
regional,-0.200,Joséphine Dubois Grand Réserve Bourgogne Pinot Noir
regional,-0.183,Bachelet-Monnot Bourgogne Rouge
village,-0.167,Domaine Taupenot-Merme Gevrey Chambertin
regional,-0.167,Simon Bize & Fils Bourgogne Les Perrières Rouge
village,-0.158,Domaine Berthaut-Gerbet Vosne-Romanée
village,-0.133,Domaine Bruno Clair Marsannay Les Grasses Tetes
village,-0.133,Domaine Taupenot-Merme Chambolle Musigny
regional,-0.100,Bouchard Père & Fils Bourgogne Pinot Noir
village,-0.067,Faiveley Vosne-Romanée
village,-0.050,Louis Latour Marsannay Rouge
village,-0.050,Domaine Sylvain Cathiard Vosne-Romanée
village,-0.050,Louis Latour Vosne-Romanée
village,-0.033,Domaine Jean Grivot Vosne-Romanée
village,-0.033,A.F. Gros Vosne-Romanee Aux Reas
village,-0.033,Louis Latour Gevrey-Chambertin
village,-0.025,Claude Dugat Gevrey-Chambertin
village,-0.025,Faiveley Nuits-Saint-Georges
village,-0.017,Jacques-Frederic Mugnier Chambolle-Musigny
village,-0.008,Benjamin Leroux Vosne-Romanee
regional,0.000,Pierre Labet Vieilles Vignes Bourgogne Pinot Noir
village,0.033,Domaine Robert Chevillon Vieilles Vignes Nuits-Saint-Georges
village,0.033,Joseph Drouhin Vosne-Romanée
village,0.033,Louis Boillot & Fils Gevrey-Chambertin
village,0.033,Lignier-Michelot Vieilles Vignes Chambolle-Musigny
regional,0.058,Terres Dorées Pinot Noir Bourgogne
village,0.067,Domaine Antonin Guyon Gevrey-Chambertin La Justice
village,0.067,Domaine Pierre Gelin Gevrey-Chambertin Clos de Meixvelle
village,0.133,Domaine Antonin Guyon Chambolle-Musigny Les Cras
```

Display labels for the tiers: "Bourgogne (regional)" and "Village and above". Older rated higher (difference above zero) in 8 of 31 wines: 1 of 9 regional, 7 of 22 village and above.

## Appendix B: Burgundy prices by label tier (interactive 2)

Wine-Searcher lowest offer worldwide, euros, vintages 2020 and 2023, at least 2 merchant offers, retrieved October 2026. Estate names appear on hover only.

```
tier,wine,vintage,price_eur
Bourgogne,Bouchard Pere & Fils Bourgogne Pinot Noir La Vignee,2020,25
Bourgogne,Domaine Faiveley Bourgogne Pinot Noir,2020,33
Bourgogne,Domaine Fourrier Bourgogne Rouge,2020,45
Bourgogne,Domaine Henri Gouges Bourgogne Rouge,2020,45
Bourgogne,Domaine Hudelot-Noellat Bourgogne Rouge,2020,31
Bourgogne,Domaine Hudelot-Noellat Bourgogne Rouge,2023,35
Bourgogne,Domaine Jean Grivot Bourgogne Rouge,2020,46
Bourgogne,Domaine Mongeard-Mugneret Bourgogne Hautes-Cotes de Nuits,2020,45
Bourgogne,Domaine Robert Chevillon Bourgogne Rouge,2023,32
Bourgogne,Domaine Rossignol-Trapet Bourgogne Rouge,2020,40
Bourgogne,Domaine Tollot-Beaut Bourgogne Rouge,2020,39
Bourgogne,Domaine Tollot-Beaut Bourgogne Rouge,2023,21
Bourgogne,Domaine de Montille Bourgogne Rouge,2020,24
Bourgogne,Domaine de Montille Bourgogne Rouge,2023,21
Bourgogne,Joseph Drouhin Laforet Bourgogne Pinot Noir,2020,44
Bourgogne,Joseph Drouhin Laforet Bourgogne Pinot Noir,2023,26
Bourgogne,Louis Jadot Bourgogne Pinot Noir Couvent des Jacobins,2023,25
Bourgogne,Louis Latour Bourgogne Pinot Noir,2020,31
Bourgogne,Louis Latour Bourgogne Pinot Noir,2023,28
Village,Domaine Faiveley Gevrey-Chambertin,2020,80
Village,Domaine Henri Gouges Nuits-Saint-Georges,2020,48
Village,Domaine Henri Gouges Nuits-Saint-Georges,2023,47
Village,Domaine Hudelot-Noellat Chambolle-Musigny,2020,68
Village,Domaine Hudelot-Noellat Chambolle-Musigny,2023,77
Village,Domaine Jean Grivot Vosne-Romanee,2020,78
Village,Domaine Jean Grivot Vosne-Romanee,2023,71
Village,Domaine Mongeard-Mugneret Vosne-Romanee,2020,107
Village,Domaine Mongeard-Mugneret Vosne-Romanee,2023,100
Village,Domaine Robert Chevillon Nuits-Saint-Georges Vieilles Vignes,2020,48
Village,Domaine Robert Chevillon Nuits-Saint-Georges Vieilles Vignes,2023,47
Village,Domaine Rossignol-Trapet Gevrey-Chambertin Vieilles Vignes,2020,39
Village,Domaine Rossignol-Trapet Gevrey-Chambertin Vieilles Vignes,2023,44
Village,Domaine Tollot-Beaut Chorey-les-Beaune,2020,42
Village,Domaine Tollot-Beaut Chorey-les-Beaune,2023,27
Village,Domaine de Montille Volnay,2023,122
Village,Joseph Drouhin Chambolle-Musigny,2023,65
Village,Louis Jadot Gevrey-Chambertin,2020,80
Village,Louis Jadot Gevrey-Chambertin,2023,73
Village,Louis Latour Gevrey-Chambertin,2020,177
Village,Louis Latour Gevrey-Chambertin,2023,86
Premier cru,Domaine Faiveley Gevrey-Chambertin Premier Cru Lavaux Saint-Jacques,2020,99
Premier cru,Domaine Faiveley Gevrey-Chambertin Premier Cru Lavaux Saint-Jacques,2023,125
Premier cru,Domaine Fourrier Gevrey-Chambertin Premier Cru Combe aux Moines,2020,213
Premier cru,Domaine Fourrier Gevrey-Chambertin Premier Cru Combe aux Moines,2023,226
Premier cru,Domaine Henri Gouges Nuits-Saint-Georges Premier Cru Les Vaucrains,2020,111
Premier cru,Domaine Henri Gouges Nuits-Saint-Georges Premier Cru Les Vaucrains,2023,119
Premier cru,Domaine Jean Grivot Vosne-Romanee Premier Cru Les Beaux Monts,2020,214
Premier cru,Domaine Jean Grivot Vosne-Romanee Premier Cru Les Beaux Monts,2023,238
Premier cru,Domaine Robert Chevillon Nuits-Saint-Georges Premier Cru Les Vaucrains,2023,128
Premier cru,Domaine Tollot-Beaut Beaune Premier Cru Greves,2020,65
Premier cru,Domaine Tollot-Beaut Beaune Premier Cru Greves,2023,57
Premier cru,Domaine de Montille Volnay Premier Cru Taillepieds,2020,127
Premier cru,Domaine de Montille Volnay Premier Cru Taillepieds,2023,139
Premier cru,Louis Jadot Gevrey-Chambertin Premier Cru Clos Saint-Jacques,2020,174
Premier cru,Louis Jadot Gevrey-Chambertin Premier Cru Clos Saint-Jacques,2023,167
Grand cru,Domaine Faiveley Chambertin-Clos de Beze Grand Cru,2020,335
Grand cru,Domaine Faiveley Chambertin-Clos de Beze Grand Cru,2023,458
Grand cru,Domaine Hudelot-Noellat Clos de Vougeot Grand Cru,2023,226
Grand cru,Domaine Jean Grivot Clos de Vougeot Grand Cru,2020,204
Grand cru,Domaine Jean Grivot Clos de Vougeot Grand Cru,2023,228
Grand cru,Domaine Mongeard-Mugneret Echezeaux Grand Cru,2020,342
Grand cru,Domaine Mongeard-Mugneret Echezeaux Grand Cru,2023,295
Grand cru,Domaine Rossignol-Trapet Latricieres-Chambertin Grand Cru,2020,119
Grand cru,Domaine Rossignol-Trapet Latricieres-Chambertin Grand Cru,2023,218
Grand cru,Domaine Tollot-Beaut Corton-Bressandes Grand Cru,2020,99
Grand cru,Domaine Tollot-Beaut Corton-Bressandes Grand Cru,2023,83
Grand cru,Joseph Drouhin Clos de Vougeot Grand Cru,2020,208
Grand cru,Joseph Drouhin Clos de Vougeot Grand Cru,2023,179
Grand cru,Louis Jadot Chambertin-Clos de Beze Grand Cru,2020,258
Grand cru,Louis Jadot Chambertin-Clos de Beze Grand Cru,2023,443
```

Medians from this table: Bourgogne €32 (19), Village €71 (21), Premier cru €128 (15), Grand cru €226 (15). This table reproduces those medians exactly.

# Short 01 static images, The Burgundy name premium

Generated 29 October 2026 for the Substack post. Substack cannot render iframes,
so these are the static stand-ins for the two interactive visuals, plus the two
static charts and one image per data callout and per quote box in the article.

## Render settings

Visuals: viewport 920 CSS px, device scale factor 2, cut 28 px below the card. Output 1840 px wide.
Boxes:   element capture at 900 CSS px, device scale factor 2. Output 1800 px wide.

Matches the Piece 1 and Piece 2 exports, which were 1840 px for the visuals and 1800 px for the boxes.

## Visuals

Files without a suffix are the default state. Suffixed files are the other interactive
state, exported because it carries data the default hides. Interaction chrome (the
toggle buttons and the hover/tap hint lines) is removed from every capture.

| File | State |
| :-- | :-- |
| visual_name_premium.png | Share under €50, default |
| visual_name_premium_medians.png | Median price at a 4.0 to 4.2 rating, with each region's Burgundy multiple |
| visual_price_ladder.png | Both panels: Burgundy by label tier, and one producer's range per region |
| visual_older_vintages.png | Static chart. Not deployed |
| visual_vintage_multiple.png | Static graphic, "Time in a bottle". Not deployed |

Link each interactive's image to its live page: corktotable.co/visuals/name-premium and
corktotable.co/visuals/price-ladder. Hover-only detail (estate names, counts) does not
survive a static export.

The two photos (s1_01_photo_chambertin.jpg and s1_12_photo_marsannay.jpg) were fetched
by Cowork, since the cloud session could not reach Wikimedia Commons.

## Boxes

Six files in boxes/, numbered by their place in the article's asset list. Two data
callouts and four quotes.

| File | Article section |
| :-- | :-- |
| s1_04_data_94-points.png | 3 |
| s1_05_quote_marginal-increase.png | 3 (quote box A, P3-Q7) |
| s1_07_quote_baseball-cards.png | 4 (quote box B, P3-Q1) |
| s1_09_quote_reputable-shop.png | 6 (quote box C, P3-Q17) |
| s1_10_quote_overpriced.png | 6 (quote box D, P3-Q8) |
| s1_11_data_60-to-680.png | 6 |

Quote boxes use the settled Piece 1 and 2 geometry: Cormorant Garamond italic at 22px on a
30px line, padding 29/35/30/34, a 3px burgundy left rule, and the meta line 11px below the
quote ("▲ score upvotes · r/wine"). Quote text is verbatim from the brief, checked against
the article draft on 29 October 2026. Box C's "$" is Rohan's approved addition.

Data boxes use the style settled on 1 September 2026, with no reference superscript, since
this piece publishes no reference list.

## Regenerating

Run render_static.js (one folder up) against a scratch copy of the visuals folder placed
beside chart.umd.min.js, fonts.css and fonts/ from the substack branch. The boxes also need
Montserrat 700, which is not vendored: add montserrat-700-normal-latin.woff2 and
montserrat-700-normal-latin-ext.woff2 from npm (@fontsource/montserrat) to the scratch
fonts/ folder only. The authored HTML is never modified to render it.

    node render_static.js <scratch folder> <output static folder>

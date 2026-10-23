# Piece 2 static images, The Reward for Curiosity

Generated 1 September 2026 for the Substack post. Substack cannot render iframes,
so these are the static stand-ins for the five interactive visuals, plus one image
per data callout and per quote in the article.

## Render settings

Visuals: viewport 920 CSS px, device scale factor 2, full-page capture. Output 1840 px wide.
Boxes:   element capture at 900 CSS px, device scale factor 2. Output 1800 px wide.

Matches the Piece 1 exports, which were 1840 px for the visuals and 1800 px for the boxes.

## Visuals

Each visual has a default state. Files without a suffix are that default. Suffixed files
are the other interactive states, exported because they carry data the default hides.

| File | State |
| :-- | :-- |
| visual_palate_arc.png | The Journey tab. Diagram only: tab nav, hover hint and phase detail card removed |
| visual_palate_arc_data.png | The Data tab |
| visual_price_quality.png | The price halo view, default. Shows both lines |
| visual_price_quality_visible.png | Price visible only |
| visual_price_quality_hidden.png | Price hidden only |
| visual_curiosity_ladder.png | Ladder only: rung detail panel removed, no rung highlighted, the 'click a rung' instruction stripped |
| visual_curiosity_ladder_rung2.png | Rung 2, with its detail panel. Taller than the default |
| visual_curiosity_ladder_rung3.png | Rung 3, with its detail panel. Taller than the default |
| visual_story_over_status.png | Card 1, default |
| visual_story_over_status_card2.png | Card 2 |
| visual_story_over_status_card3.png | Card 3, tradition as foundation |
| visual_where_value_lives.png | Drinkers view, default |
| visual_where_value_lives_top100.png | Top 100 view |

Suggested minimum set for the post: the five defaults, plus visual_palate_arc_data.png,
visual_where_value_lives_top100.png, and the two extra story_over_status cards. The two
extra price_quality views are the least necessary, since the default already draws both lines.

Updated 1 September 2026: the curiosity ladder and palate arc defaults were re-rendered
without their interaction panels, which made both too tall for a post. The ladder dropped
from 2052 px to 1498 px and the palate arc from 2508 px to 1874 px. The rung variants still
carry their detail panels, so they read as a different treatment from the new default.

Hover-only detail does not survive a static export. Link out to the interactive version.

## Boxes

Twenty files in boxes/, numbered in the order they appear in the article. Ten data
callouts and ten quotes. Text is taken verbatim from the published article page, so
the images and the website cannot drift apart.

Data boxes carry the reference superscript from the article plus a short source line
underneath, in the style used for Piece 1.

Quote boxes match the Piece 1 geometry exactly: Cormorant Garamond italic at 22px on a
30px line, padding 29/35/30/34, a 3px burgundy left rule, and the meta line 11px below
the quote. One line of quote gives a 230 px box, two gives 290, three gives 350. This
style is settled. Do not change it on future pieces.

## Fonts

Rendered with the real Cormorant Garamond and Montserrat. The Piece 1 boxes were
rendered before those fonts were available locally and fell back to system faces, so
the Piece 2 boxes are slightly different in the body text. The layout, colours and
sizes are unchanged. Piece 1 can be re-rendered to match on request.

## Regenerating

Chart.js and the twenty font faces are vendored at render time. The Cowork sandbox has
no egress to cdnjs or Google Fonts, so the assets come from npm: chart.js,
@fontsource/cormorant-garamond, @fontsource/montserrat. The authored HTML in
Wine Substack/Piece 2/ is never modified. Rendering works on a copy.

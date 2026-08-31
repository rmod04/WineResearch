# Cork to Table — full refined workflow

The pipeline as actually practised across Piece 1 (Every Wine Has Its Moment) and Piece 2 (The Reward for Curiosity). Steps marked **new** were added during Piece 2 after a real gap was found.

| Step | Tool | Output |
| :-- | :-- | :-- |
| 1. Data collection | Claude + Apify + Reddit API | Working Data document, raw JSON in the piece folder |
| 2. Quote source records | Claude + Apify | Verbatim text, author, score, post or comment, permalink, capture date |
| 3. Deep research | Perplexity → Claude validation | Verified sources added to tracker |
| 4. Source tracker | Claude | Source Tracker document, rated green / amber / removed, live throughout |
| 5. Article foundation | Claude | Scaffold: insights, data tables, community voices, visual blocks in reading order |
| 6. Dashboard & visuals | Claude Code | Standalone interactive HTML chart files |
| 7. Draft | Rohan | Article draft written from the scaffold |
| 8. Editorial review | Claude | Logic, section objectives, flow, grammar, data alignment |
| 9. Data coverage audit | Claude | Every data point confirmed in prose or a visual, before tables are deleted |
| 10. Style pass | Claude | No em dashes, no antithesis pairs, no "the point" endings, filler removed |
| 11. SEO pass | Claude + Keyword Planner | Measured volumes, subtitle, headers, slug, alt text |
| 12. Final formatting & visual QA | Claude | Google Doc in house template, source footers and scores verified |
| 13. Deploy & publish | Claude Code + Substack | Visuals on GitHub Pages, live article with agreed slug, canonical URL set to the website page |

Steps 2, 9, 10 and 11 were added during Piece 2. Steps 1, 3 to 8, 12 and 13 ran on Piece 1.

---

## Why the new steps exist

Each was added after a real failure rather than in the abstract.

**Quote source records.** Three quotes in Piece 2 reached the foundation doc and the visuals with no saved source. One had circulated in two different wordings with no way to arbitrate, two were original posts being credited as comments, and three scores were wrong. Now every quote is written to the record file at pull time, before it reaches a doc.

**Data coverage audit.** Four data points from the tables appeared in no visual and no prose. Without the audit they would have vanished when the tables were removed.

**Style pass.** The house rules on em dashes and antithesis phrasing were set after Piece 1 was written, so Piece 1 needed a retrofit. Running the pass before publishing avoids that.

**SEO pass.** Missed entirely on Piece 1. Measurement matters: assumptions were wrong by an order of magnitude, with "does expensive wine taste better" at 70 searches a month against an assumed few thousand, and "summer wine" at 27,100 with low competition.

## Publishing rule: the website is canonical

**Visual links.** Every link to an interactive visual uses `corktotable.co/visuals/<slug>`, never the github.io origin. Netlify proxies the branded path to GitHub Pages. Add the slug to the proxy config when the visual is built, and confirm it returns 200 before it goes into a post.

The full text is published on both the website and Substack, neither condensed. At publish time, set the canonical URL in Substack's post settings to the matching `corktotable.co/stories-and-trends/<slug>` page. Search credit then accrues to the owned domain while Substack handles distribution.

Two sequencing points. The website must be live at its final domain before the Substack post goes up, so the canonical points somewhere real. And Substack does not render iframes, so the interactive visuals cannot run inside a Substack post; use static images there and link out.

Target URLs are recorded in `WineResearch/substack-slugs.txt`.

## Standing rules referenced

Full detail in `cork_to_table_style_rules.md`. In short: no em dashes in prose (en dashes fine in ranges), no "X, not Y" constructions or "the point" endings, quotes verbatim from the record file only, sentence-case visual titles, one source footer per visual naming the data provider rather than any scraping tool, and geography stated accurately in the visual footnotes.

## Working split

Cowork handles content, copy, research and file edits. Claude Code handles git, deploys and the live preview. The Cowork sandbox has no git credentials, so all pushes run from Claude Code or the local terminal.

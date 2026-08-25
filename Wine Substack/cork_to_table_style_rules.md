# Cork to Table — writing and sourcing rules

Paste into Claude project instructions. Applies to articles, interactive visuals, proposals, and any copy written in Rohan's voice.

## Voice

Crisp and concise. Friendly but professional. Remove words wherever the point survives without them.

## Banned constructions

**No em dashes.** Zero em dashes anywhere. Use a comma, a full stop, or a colon.

**En dashes are fine in ranges.** Date ranges and page ranges may keep the en dash (2023–2025, 254–265). The ban covers em dashes used as punctuation in prose.

**No antithesis pairs.** Avoid the "X, not Y" rhythm and all its variants:

- "Affordable is the default choice, not a compromise made under protest"
- "not X but Y" / "the pleasure comes not from intensity but from specificity"
- "They are no longer X. They are Y"
- "These are not modern inventions. They are what wine always was"
- "reaching for something older, not newer"

Rewrite as a plain positive statement and let the contrast sit implicit. "Rather than" inside a single clause is acceptable when the comparison carries real information.

**No "the point" endings.** Avoid "that's the point", "the X is the point", "The point is not that…, but that…".

**Exception:** Rohan's own signature lines may use these constructions deliberately. Flag them, never rewrite them unprompted.

## Quotes

**Verbatim only.** Every community quote must be saved to `quote_source_records.json` in that piece's folder at the moment it is pulled, before it reaches a doc or a visual. Each record carries exact text, author username, score, item type (post or comment), thread URL, permalink, creation date, and the date the score was captured.

- Excerpts used in the piece must be exact substrings of the stored text. No paraphrase, no reconstruction from memory, not even for half a sentence.
- Mark every elision with […].
- Scores drift. The score shown must match the record, and the record states when it was captured.
- Distinguish posts from comments. A post score is not a comment score, and quoting an original post changes who is speaking.
- Check excerpts for context distortion. If the surrounding argument contradicts the use, flag it.
- Attribute publicly as "a wine community member". Usernames stay in the record file.
- Never reword a quote to satisfy a style rule.

## Visuals

**Titles in sentence case.** Capitalise the first word and proper nouns only. Example: "Price is only a part of the story".

**One source line per visual.** A single footer at the bottom beginning "Source:" or "Sources:". Never repeat a source caption under the chart.

- Consistent phrasing: "<data description> obtained from <provider>, <date>". Example: "Wine rating and price data obtained from Vivino, July 2026".
- Cite the underlying data provider only (Vivino, Google, Wine Spectator, YouGov, a named study). Never name scraping tools, actors, or vendors.
- Keep heavy methodology out of the footer.

**Visual quotes need not mirror the article.** Visuals may carry shorter excerpts, or none at all. When the same source appears in two places, the excerpts must not overlap in wording, and each must earn its place in that section's argument.

## SEO pass (run before every publish)

Do this after the draft is final and before it goes to Substack. Never let it distort the argument.

1. **Measure, never guess.** Run candidate terms through the Keyword Planner actor (`aitorsm/keyword-volume`) and work from real volumes. Intuition about search demand is unreliable; price-question terms in particular measure far lower than they feel.
2. **Mine the piece's own research first.** If the piece already analysed search data, those measured terms are the best candidates and are already on-topic.
3. **Levers available on Substack, in order of value:**
   - Subtitle, which becomes the meta description. This is where searchable phrasing belongs.
   - Post title, which becomes the title tag. Keep it editorial if the brand title is the through-line, and let the subtitle carry search.
   - URL slug, which is editable. Use query-intent phrasing.
   - Section headers, which are H2s. Making two or three searchable while keeping the rest editorial is a reasonable balance.
   - Alt text on every exported visual.
4. **Prefer definitional terms over opinion terms.** "What does dry wine mean" and "wine for beginners" carry real volume; "is expensive wine worth it" does not.
5. **Never force a high-volume term the piece does not answer.** Note it as a candidate for a future piece instead.
6. **Check competition, not just volume.** A low-competition term at 700 a month beats a high-competition term at 3,000.
7. **Changing the slug on a published post breaks existing links.** Decide before publishing.

## Data honesty

- State geography once and accurately. Market and tasting figures are US-based unless a data point names another country; search-interest data is global. Never describe the whole dataset as global.
- Use only well-rated sources. Flag any weaker source with a caveat in the text.
- Stay neutral on price. Expensive wine can be genuinely worth it.
- Never use quotes that are derogatory toward a consumer group.
- India examples are reserved for Piece 3.

## Working method

- Coding knowledge is zero. Explain in plain language and go step by step.
- Cowork handles content, copy, research, and file edits. All git commits, pushes, and deploys run from Claude Code or the local terminal.

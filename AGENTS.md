# Cork To Table — Project Instructions

Personal brand website for **Rohan Modwel** — wine educator (WSET Level 3, Distinction), travel consultant, founder, New Delhi. Brand name is **Cork To Table**. Status: development complete, pre-deployment.

> Source of truth for project context: `handoff.md` (in repo root). This file is the working summary; if the two ever disagree, reconcile and update both.

## Two pipelines (read first)

This one repo holds two separate deliverables, each with its own branch, host, and Cowork project. Do not mix them.

**1. Website pipeline → Vercel**

- The Next.js personal-brand site. Worked in the **'C2T Website' Cowork project** and in **Codex** (live preview pane, `npm run dev`, port 3000).
- Branch: **`main` is canonical** — the single source of truth for the website and the Vercel production source. The old dev branch `Codex/personal-brand-website-E5EOF` was reconciled into `main` and **retired** (Jun 2026): an audit confirmed `main` was a strict superset (every shared file newer, nothing lost), so dev's only unique file — `.Codex/launch.json` — was copied in and the branch deleted local + remote. Work the website directly on `main` now; no separate website dev branch.
- Deploy: connect the repo to Vercel, production branch = `main` (preview deploys per push). Not on GitHub Pages.

**2. Substack visuals pipeline → GitHub Pages**

- The five self-contained interactive HTML visuals (`visual_*.html`) for the Substack. Worked in the **Substack Cowork project**; see `substackhandoff.md` and the two Drive briefs for detail.
- Branch: `Codex/wine-substack-data-setup-H9HVg` (canonical substack branch).
- Deploy: Pages source is **GitHub Actions** (`.github/workflows/deploy-substack-visuals.yml`). Pushing a `visual_*.html` change to the substack branch publishes only the visuals to `https://rmod04.github.io/WineResearch/` in ~60s. No merge to `main` needed; website code never reaches Pages.

**Keeping them apart:** two worktrees, one per branch — `~/WineResearch` on `main` (website + Cowork preview) and `~/WineResearch-substack` on the substack branch. (The old `~/WineResearch-website` worktree was removed when the dev branch was retired.) Keep commits small and scoped; never edit the same file region two ways at once.

**Pushing:** the Cowork sandbox has no git credentials and can't reach GitHub for authenticated pushes. All commits/pushes/branch ops run from **Codex** or your local terminal (your machine holds the SSH key). Cowork handles content, copy, research, and file edits; the code tab handles git and deploys.

**Website dev server:** `npm run dev` (port 3000). The `.Codex/launch.json` config is named `cork-to-table`.
**Website build:** `npm run build` — produces 13 static pages, zero errors. Keep it green; that's the bar for any commit.

## The three commercial pillars

1. **Wine Tourism** — bespoke winery travel itineraries (partner programme)
2. **Tasting Experiences** — curated wine & food evenings / private dinners in Delhi
3. **Stories & Trends** — travel writing + data research (Substack, "Cork To Data Table")

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · 100% static (SSG, no API routes / DB / auth) · `next/image` (`fill` + `object-cover`) · Formspree for the contact form · deploy target Vercel · domain `corktotable.com` (not yet registered). All images are local in `public/images/` — no CDN dependency except partner-card fallbacks.

## Design system

Colours (CSS vars in `app/globals.css` + `tailwind.config.ts`):

| Token | Hex | Usage |
|---|---|---|
| `burgundy` | `#5C1A2E` | Primary brand, hero overlays, CTAs |
| `cream` | `#F5ECD7` | Page backgrounds, light sections |
| `gold` | `#B8973A` | Labels, dividers, accent text |
| `rose` | `#C27A8A` | Hover / soft accent |
| `charcoal` | `#2C2C2C` | Dark sections, partner grid bg |
| `mid` | `#7A5A64` | Secondary body text |

Type: **Cormorant Garamond** (`font-cormorant`) for all headings/display/blockquotes; **Montserrat** (`font-montserrat`) for body, labels, nav, buttons.

Reusable classes (in `app/globals.css`): `.btn-outline`, `.section-label`, `.divider-gold`, `.divider-gold-left`.

## Content editing rule (important)

All user-facing text lives in `content/*.ts`. **Never edit page files for copy changes** — edit the content file:

- `content/site.ts` — brand name, tagline, founder, credentials, social links, email, WhatsApp, `substackUrl` (empty until live).
- `content/about.ts` — `headline`, `bio[]`, `philosophy`, `credentials[]`.
- `content/partners.ts` — `Partner` objects; set `comingSoon: false` to activate a partner card.
- `content/experiences.ts` — `{ icon, title, description }` for Wine Tourism "Signature Experiences".

## File structure (key paths)

```
app/
  layout.tsx            Root: Navigation + Footer, font imports
  globals.css           Tailwind base, CSS vars, reusable classes
  page.tsx              Homepage
  about/page.tsx
  contact/page.tsx      (uses ContactForm)
  wine-tourism/page.tsx
  tasting-experiences/page.tsx
  stories-and-trends/page.tsx
  partners/bhutan-wine-company/page.tsx
  partners/bischofliche-weinguter-trier/page.tsx
  my-world/page.tsx         LEGACY — unlinked (keep as silent redirect)
  travel-planning/page.tsx  LEGACY — unlinked
components/
  Navigation.tsx · Footer.tsx · ContactForm.tsx · Questionnaire.tsx (LEGACY, unused)
content/  site.ts · about.ts · partners.ts · experiences.ts
public/images/  headshot, winery-1..2, winery-thumb-1..5, personal-1 (all Rohan's own photos)
```

## Navigation (do not add to this without instruction)

Wordmark "Cork To Table" → `/`, then: **Wine Tourism | Tasting Experiences | Stories & Trends | About | Contact**. No "Plan My Journey" button, no Travel Planning tab — both deliberately removed.

## Locked decisions (do not reverse without Rohan's say-so)

- No Travel Planning tab; no separate form page (contact form only at `/contact`).
- No bio/"About Me" section on the homepage (manifesto quote only).
- Brand is **Cork To Table** only. "The Wine Meridian" still sits in `content/site.ts` as `websiteName` but is shown nowhere — ignore or clean up, never surface it.
- Static-only. No API routes, database, or auth.

## Pre-launch checklist

🔴 Blocking:
- Replace `REPLACE_WITH_FORMSPREE_ID` in `components/ContactForm.tsx` (~line 16) with the real Formspree endpoint.
- Register `corktotable.com`.
- ✅ **Reconcile main↔dev — DONE (Jun 2026).** Dev branch audited, confirmed `main` is a strict superset, `.Codex/launch.json` copied in, dev branch retired (local + remote). `main` is canonical.
- **Connect the repo to Vercel** (not yet connected); production branch = `main`, then point the custom domain.
- **Delete the redundant `Website` branch** — still on GitHub, confirmed 0 unique commits (fully contained in `main`). Housekeeping; run from the code tab.

🟡 Soon after launch:
- Add `substackUrl` in `content/site.ts` (auto-activates Substack links in footer, Stories & Trends, About).
- Set `comingSoon: false` per partner in `content/partners.ts` when bookable.
- Replace the Unsplash About-hero background (`app/about/page.tsx` ~line 17) with a real photo.
- Remove or keep-as-redirect legacy `app/my-world/` and `app/travel-planning/`.
- Swap the nav wordmark for a logo PNG if Rohan provides the C2T stamp.

🟢 Nice to have:
- SEO meta review + `openGraph` image tags per page.
- Vercel/GA4 analytics snippet in `app/layout.tsx`.
- More partner wineries (`content/partners.ts` + `app/partners/[slug]/`).
- Real Substack `<iframe>` replacing the placeholder in `app/stories-and-trends/page.tsx`.

## Contact / social

Instagram `@corktotable` · email `corktotable@gmail.com` · WhatsApp +91 98715 76702 · Substack label "Cork To Data Table" (not yet live).

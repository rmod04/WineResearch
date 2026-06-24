# Cork To Table — Agent Handoff Document
**Last updated:** June 2026 (post-design-pass)
**Project root:** `/Users/rohanmodwel/WineResearch`
**Status:** Development complete, pre-deployment. Design pass done. Content pass is next.

---

## 1. Project Overview

**Cork To Table** is the personal brand website of **Rohan Modwel** — wine educator (WSET Level 3, Distinction), travel consultant, and founder based in New Delhi, India. The site has three commercial pillars:

1. **Wine Tourism** — bespoke winery travel itineraries (partner programme)
2. **Tasting Experiences** — curated wine & food evenings / private dinners in Delhi
3. **Stories & Trends** — travel writing + data research (Substack, "Cork To Data Table")

The brand name is **Cork To Table**. There is an older internal name ("The Wine Meridian") still present in `content/site.ts` as `websiteName` — it is **not displayed anywhere on the live site** and can be ignored or cleaned up.

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Rendering | 100% static (SSG) — `npm run build` generates 13 HTML pages |
| Images | `next/image` with `fill` + `object-cover` throughout |
| Forms | Formspree (Contact form + legacy Questionnaire) |
| Deployment target | Vercel (not yet deployed) |
| Domain | `corktotable.com` (not yet registered) |

**Dev server:** `npm run dev` on port 3000. The `.claude/launch.json` config names it `cork-to-table`.

**Build command:** `npm run build` — currently produces 13 static pages, zero errors.

---

## 3. Design System

### Colour palette (CSS variables in `app/globals.css` + Tailwind config)

| Token | Hex | Usage |
|---|---|---|
| `--burgundy` / `bg-burgundy` | `#5C1A2E` | Primary brand, hero overlays, CTAs |
| `--cream` / `bg-cream` | `#F5ECD7` | Page backgrounds, light sections |
| `--gold` / `text-gold` | `#F2C94C` | Labels, dividers, accent text — brightened from original `#B8973A` |
| `--rose` / `bg-rose` | `#C27A8A` | Hover/soft accent |
| `--charcoal` / `bg-charcoal` | `#2C2C2C` | Dark sections, partner grid bg |
| `--mid` / `text-mid` | `#7A5A64` | Secondary body text |

**Gold usage rule:** `text-gold` is readable on solid dark backgrounds (charcoal, burgundy) and on tile cards (image has `opacity-40`). Hero overlay labels use `text-cream` instead — gold is unreadable over photos.

### Typography
- **Cormorant Garamond** — all headings, display, blockquotes (`font-cormorant`)
- **Montserrat** — all body text, labels, navigation, buttons (`font-montserrat`)

### Reusable CSS classes (defined in `app/globals.css`)
- `.btn-outline` — white-border button with hover fill
- `.section-label` — 10px Montserrat, wide letter-spacing, uppercase; colour set contextually
- `.divider-gold` — centred gold line divider
- `.divider-gold-left` — left-aligned version

### Hero pattern (all 6 hero sections)
Every hero has two stacked gradient divs:
```tsx
<div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
```
The bottom-up gradient anchors the headline; the top-down gradient darkens the nav area.

---

## 4. File Structure

```
WineResearch/
├── app/
│   ├── layout.tsx
│   ├── globals.css                 # CSS vars, reusable classes — gold is #F2C94C
│   ├── page.tsx                    # Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx            # ⚠️ hero still uses Unsplash placeholder
│   ├── wine-tourism/page.tsx
│   ├── tasting-experiences/page.tsx
│   ├── stories-and-trends/page.tsx
│   ├── partners/bhutan-wine-company/page.tsx
│   ├── partners/bischofliche-weinguter-trier/page.tsx
│   ├── my-world/page.tsx           # LEGACY — keep as redirect
│   └── travel-planning/page.tsx    # LEGACY — unlinked
│
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx             # ⚠️ line 16: REPLACE_WITH_CONTACT_FORM_ID
│   └── Questionnaire.tsx           # LEGACY — unlinked; ⚠️ line 133: REPLACE_WITH_QUESTIONNAIRE_FORM_ID
│
├── content/
│   ├── site.ts                     # Global brand info, substackUrl (empty until live)
│   ├── about.ts                    # Bio, credentials, philosophy
│   ├── partners.ts                 # Partner wineries (all comingSoon: true)
│   └── experiences.ts              # Wine Tourism signature experiences
│
└── public/images/                  # All Rohan's own photos — see image map below
```

---

## 5. Navigation

```
Cork To Table  |  Wine Tourism  |  Tasting Experiences  |  Stories & Trends  |  About  |  Contact
```

No "Plan My Journey" button. No Travel Planning tab. Do not add either.

---

## 6. Page-by-Page Summary

### `/` — Homepage
- Hero: `winery-1.jpg` + `bg-burgundy/60` + top-down nav gradient
- Three tiles at `opacity-40`, `text-cream` labels, `from-charcoal/90 via-charcoal/30 to-transparent` gradient:
  - Wine Tourism → `winery-thumb-2.jpg`
  - Tasting Experiences → `photo-tasting-tile.jpg`
  - Stories & Trends → `photo-writing-tile.jpg`
- CTA banner: `photo-cta-outdoor.jpg`, label `text-cream`

### `/wine-tourism`
- Hero: `photo-wine-tourism-hero.jpg` (fermentation hall, wooden vats, portrait, EXIF baked in)

### `/tasting-experiences`
- Hero: `photo-dining-hero.jpg` (restaurant, dark brick walls, tilt corrected)
- Private Dinners: `photo-private-dinner.jpg`

### `/stories-and-trends`
- Hero: `photo-trade-tasting.jpg` (wine shop, left 21% cropped to remove wrapped bottle)
- Data card: `photo-substack-chart.jpg` (matplotlib OIV chart, brand colours)
- "Tales from My Travels" card: ⚠️ still `winery-thumb-5.jpg` with `[PLACEHOLDER]` comment in code

### `/about`
- Hero: `photo-cellar.jpg` at `opacity-60`
- Headshot: thumbnail `w-40 h-52`, `object-top`, with burgundy credential badge overlay
- WSET credential uses `\n` + `whitespace-pre-line` for line break:
  ```ts
  { label: 'WSET Level 3', detail: 'Award in Wines\nDistinction' }
  ```

### `/contact`
- ⚠️ Hero still uses Unsplash: `https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80` — replace before launch

---

## 7. Formspree Setup

Two separate forms are needed so submissions are distinguishable:

| Component | File | Placeholder |
|---|---|---|
| Contact form (active, blocking) | `components/ContactForm.tsx` line 16 | `REPLACE_WITH_CONTACT_FORM_ID` |
| Questionnaire (legacy, not blocking) | `components/Questionnaire.tsx` line 133 | `REPLACE_WITH_QUESTIONNAIRE_FORM_ID` |

Sign up at formspree.io, create two forms, paste the IDs. Questionnaire is unlinked — can be done post-launch.

---

## 8. Content Files

All user-facing copy lives in `/content/*.ts`. Never edit page files for text changes.

### `content/site.ts` (key fields)
```ts
brandName: 'Cork To Table'
tagline: 'Wine. Travel. Story.'
founderName: 'Rohan Modwel'
credentials: 'WSET Level 3, Distinction'
substackUrl: ''          // ADD URL here when Substack is live
substackLabel: 'Cork To Data Table'
contactEmail: 'corktotable@gmail.com'
whatsappUrl: 'https://wa.me/919871576702'
instagramHandle: '@corktotable'
```

### `content/about.ts`
`headline`, `bio[]`, `philosophy`, `credentials[]`

### `content/partners.ts`
Partner objects — set `comingSoon: false` to activate each card.

### `content/experiences.ts`
`{ icon, title, description }` for Wine Tourism signature experiences grid.

---

## 9. Outstanding Tasks

### 🔴 Blocking (before launch)
- [ ] Replace `REPLACE_WITH_CONTACT_FORM_ID` in `components/ContactForm.tsx` line 16
- [ ] Register `corktotable.com`
- [x] Reconcile main↔dev — DONE (Jun 2026). `main` is canonical, dev branch retired.
- [ ] Connect repo to Vercel (production branch = `main`), then point custom domain
- [ ] Delete redundant `Website` branch on GitHub (0 unique commits)

### 🟡 Soon after launch
- [ ] Replace Contact page hero (Unsplash placeholder at `app/contact/page.tsx` line 16)
- [ ] Add `substackUrl` in `content/site.ts` when Substack is live
- [ ] Activate partner pages (`comingSoon: false` in `content/partners.ts`)
- [ ] Replace "Tales from My Travels" placeholder image (`winery-thumb-5.jpg`) in Stories & Trends
- [ ] Delete or redirect legacy pages (`app/my-world/`, `app/travel-planning/`)
- [ ] Swap nav wordmark for logo PNG if C2T stamp is provided

### 🟢 Agreed future roadmap (in order)
1. **Content pass** ← next priority: review/update copy in all `content/*.ts` files and page-level headlines/CTAs
2. **Motion layer**: add Framer Motion for page transitions and scroll reveals after content is finalised (stack stays Next.js — no platform migration)
3. SEO meta + openGraph tags per page
4. Vercel Analytics or GA4 in `app/layout.tsx`
5. More partner winery pages

---

## 10. Key Decisions (do not reverse without Rohan's instruction)

| Decision | Detail |
|---|---|
| No Travel Planning tab | Removed from nav, footer, homepage |
| No separate form page | Contact form only at `/contact` |
| No "About Me" on homepage | Manifesto quote only |
| No "Plan My Journey" button | Removed from nav |
| Brand = Cork To Table only | "The Wine Meridian" not displayed anywhere |
| Static-only site | No API routes, no database, no auth |
| All images local | `public/images/` — no CDN except partner card fallbacks |
| No individual label promotion | No images spotlighting a single wine label |
| No image repeats | Every image on the site is unique |
| Content before motion | Copy finalised first, then Framer Motion layer |

---

## 11. Image Map

All images are Rohan's personal photographs (JPEG/PNG only — no HEIC).

| File | Subject | Used on |
|---|---|---|
| `headshot.jpg` | Rohan Modwel, navy blazer | About — thumbnail |
| `photo-cellar.jpg` | Vaulted barrel cellar | About hero (opacity-60) |
| `photo-cta-outdoor.jpg` | White wine glass outdoors, autumn | Homepage CTA banner |
| `photo-dining-hero.jpg` | Restaurant table, wine glasses, dark brick | Tasting Experiences hero |
| `photo-private-dinner.jpg` | Home dinner setting | Tasting Experiences private dinners |
| `photo-substack-chart.jpg` | Matplotlib OIV colour-shift chart (brand colours) | Stories & Trends data card |
| `photo-tasting-tile.jpg` | Wine & cheese board | Homepage tasting tile |
| `photo-trade-tasting.jpg` | Wine shop bottle display, left 21% cropped | Stories & Trends hero |
| `photo-wine-tourism-hero.jpg` | Fermentation hall, wooden vats (EXIF baked in, 4284×5712 portrait) | Wine Tourism hero |
| `photo-writing-tile.jpg` | Wine Paris trade event | Homepage writing tile |
| `winery-1.jpg` | Vineyard rows | Homepage main hero |
| `winery-thumb-2.jpg` | Autumn red grape leaves | Homepage wine tourism tile |
| `winery-thumb-5.jpg` | ⚠️ Eguren Ugarte bottle + glass | Stories & Trends "Tales" card — PLACEHOLDER |

**EXIF note:** `photo-wine-tourism-hero.jpg` was saved after `ImageOps.exif_transpose()` — do not re-rotate it.

---

## 12. Social & Contact

| Channel | Value |
|---|---|
| Instagram | [@corktotable](https://www.instagram.com/corktotable/) |
| Email | corktotable@gmail.com |
| WhatsApp | +91 98715 76702 |
| Substack | Not yet live — label "Cork To Data Table" |

---

## 13. Two-Pipeline Architecture

| Pipeline | Branch | Host | Content |
|---|---|---|---|
| Website | `main` | Vercel | Next.js site — `app/`, `components/`, `content/`, `public/` |
| Substack visuals | `claude/wine-substack-data-setup-H9HVg` | GitHub Pages | `visual_*.html` only |

Substack deploys via GitHub Actions (`.github/workflows/deploy-substack-visuals.yml`) — push to substack branch → live at `https://rmod04.github.io/WineResearch/` in ~60s. Never merge to `main`.

Cowork sandbox has no git credentials — commits/pushes run from Claude Code or local terminal.

See `substackhandoff.md` and `CLAUDE.md` for substack pipeline detail.

# Cork To Table — Agent Handoff Document
**Last updated:** June 2026  
**Project root:** `/Users/rohanmodwel/WineResearch`  
**Status:** Development complete, pre-deployment

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
| Forms | Formspree (Contact page) |
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
| `--gold` / `text-gold` | `#B8973A` | Labels, dividers, accent text |
| `--rose` / `bg-rose` | `#C27A8A` | Hover/soft accent |
| `--charcoal` / `bg-charcoal` | `#2C2C2C` | Dark sections, partner grid bg |
| `--mid` / `text-mid` | `#7A5A64` | Secondary body text |

### Typography
- **Cormorant Garamond** — all headings, display, blockquotes (`font-cormorant`)
- **Montserrat** — all body text, labels, navigation, buttons (`font-montserrat`)

### Reusable CSS classes (defined in `app/globals.css`)
- `.btn-outline` — white-border button with hover fill, used for all primary CTAs
- `.section-label` — 10px Montserrat, wide letter-spacing, uppercase gold
- `.divider-gold` — centred gold line divider
- `.divider-gold-left` — left-aligned version

---

## 4. File Structure

```
WineResearch/
├── app/
│   ├── layout.tsx                  # Root layout: Navigation + Footer, font imports
│   ├── globals.css                 # Tailwind base, CSS variables, reusable classes
│   ├── page.tsx                    # Homepage
│   ├── about/page.tsx              # About Rohan
│   ├── contact/page.tsx            # Contact page (has ContactForm component)
│   ├── wine-tourism/page.tsx       # Wine Tourism — intro + partners grid + experiences
│   ├── tasting-experiences/page.tsx # Tasting Experiences — themes + private dinners
│   ├── stories-and-trends/page.tsx # Stories & Trends — writing/research/Substack
│   ├── partners/
│   │   ├── bhutan-wine-company/page.tsx
│   │   └── bischofliche-weinguter-trier/page.tsx
│   ├── my-world/page.tsx           # LEGACY — redirects to /stories-and-trends (keep for now)
│   └── travel-planning/page.tsx    # LEGACY — travel planning form, no longer linked
│
├── components/
│   ├── Navigation.tsx              # Top nav (desktop + mobile hamburger)
│   ├── Footer.tsx                  # Footer with nav, connect, copyright
│   ├── ContactForm.tsx             # Formspree-backed contact form ⚠️ needs live ID
│   └── Questionnaire.tsx           # LEGACY — travel questionnaire, no longer used
│
├── content/                        # All editable site content lives here
│   ├── site.ts                     # Global: brand name, tagline, social links, email
│   ├── about.ts                    # About page: bio paragraphs, credentials, philosophy
│   ├── partners.ts                 # Partner wineries: slug, name, region, experiences
│   └── experiences.ts             # Wine tourism experience types (icon + description)
│
├── public/
│   └── images/                     # All real photos (Rohan's own, from Google Drive)
│       ├── headshot.jpg            # Rohan's professional portrait — used on About page
│       ├── winery-1.jpg            # Vineyard rows to rolling hills — Homepage hero
│       ├── winery-2.jpg            # Wider vineyard landscape — Wine Tourism hero
│       ├── winery-thumb-1.jpg      # Moody vineyard at dusk — Stories & Trends hero
│       ├── winery-thumb-2.jpg      # Autumn red grape leaves — Homepage Wine Tourism tile
│       ├── winery-thumb-3.jpg      # Late-harvest grapes — Stories & Trends data card
│       ├── winery-thumb-4.jpg      # Gloved hand, white harvest grapes — Stories travel card
│       ├── winery-thumb-5.jpg      # Eguren Ugarte bottle + glass, Rioja valley — Tasting Experiences hero
│       └── personal-1.jpg          # Tommasi Graticcio bottle close-up — Tasting private dinners
│
├── tailwind.config.ts              # Custom colours, fonts, typography plugin
├── package.json
├── tsconfig.json
└── postcss.config.js
```

---

## 5. Navigation Structure

The live nav (in `Navigation.tsx` and `Footer.tsx`) is:

```
Cork To Table   [logo / wordmark — links to /]

Wine Tourism | Tasting Experiences | Stories & Trends | About | Contact
```

There is **no** "Plan My Journey" button. There is **no** Travel Planning tab. Both were removed.

---

## 6. Page-by-Page Summary

### `/` — Homepage
- Full-screen hero: `winery-1.jpg` + burgundy overlay, "Cork To Table" / "Wine. Travel. Story." / two CTA buttons
- Manifesto quote block (cream bg)
- Three feature tiles (charcoal grid): Wine Tourism → `/wine-tourism`, Tasting Experiences → `/tasting-experiences`, Stories & Trends → `/stories-and-trends`
- Bottom CTA banner: "Get In Touch" → `/contact`

### `/wine-tourism`
- Hero: `winery-2.jpg`
- Why Wine Travel? copy section
- Partner winery cards grid (data from `content/partners.ts`)
- Signature Experiences grid (data from `content/experiences.ts`)
- CTA: "Get In Touch" → `/contact`

### `/tasting-experiences`
- Hero: `winery-thumb-5.jpg` (Rioja bottle + glass)
- Intro: "Wine and food, in conversation with each other."
- 6 themed evening cards on charcoal: Old World vs New World, Wine & Indian Cuisine, A Journey Through One Region, Bubbles Beyond Champagne, The Language of Terroir, Bespoke Theme
- Private Dinners section: `personal-1.jpg` + copy
- CTA: "Get In Touch" + Instagram link

### `/stories-and-trends`
- Hero: `winery-thumb-1.jpg`
- Intro: "The wine world, told in stories and in data."
- Three content pillars: Tales from My Travels (Coming Soon), Cork To Table Events (→ Instagram), Cork To Data Table (→ Substack, Coming Soon)
- Substack embed placeholder (dashed box, charcoal section)

### `/about`
- Hero: dark charcoal + subtle bg image, "Wine. Travel. Human Connection."
- Bio section: `headshot.jpg` (Rohan's photo) + two bio paragraphs
- Credential badge overlay on photo: WSET Level 3 Distinction / Rohan Modwel
- Credentials grid (4 items) on burgundy bg
- C2T three pillars: C2T Experiences, Cork To Table Events, Cork To Data Table
- CTA: "Explore Wine Tourism" + "Get in Touch"

### `/contact`
- Formspree contact form (name, email, message)
- Phone / email / WhatsApp / Instagram direct links

### `/partners/bhutan-wine-company` and `/partners/bischofliche-weinguter-trier`
- Both set to `comingSoon: true` in `content/partners.ts`
- Full pages exist with experiences listed, but show "Coming Soon" badge on the wine-tourism grid

---

## 7. Content Files — What to Edit

All user-facing text is separated into `/content/*.ts` files. **Never edit page files for text changes** — use these:

### `content/site.ts`
```ts
{
  brandName: 'Cork To Table',
  tagline: 'Wine. Travel. Story.',
  founderName: 'Rohan Modwel',
  credentials: 'WSET Level 3, Distinction',
  basedIn: 'New Delhi, India',
  instagramHandle: '@corktotable',
  instagramUrl: 'https://www.instagram.com/corktotable/',
  substackUrl: '',          // ← ADD Substack URL here when live
  substackLabel: 'Cork To Data Table',
  contactEmail: 'corktotable@gmail.com',
  whatsappUrl: 'https://wa.me/919871576702',
}
```

### `content/about.ts`
- `headline` — hero H1 text
- `bio[]` — array of bio paragraphs
- `philosophy` — blockquote
- `credentials[]` — the 4-item grid on the burgundy section

### `content/partners.ts`
- Array of `Partner` objects with `slug`, `name`, `region`, `country`, `tagline`, `shortDescription`, `fullDescription`, `experiences[]`, `image`, `comingSoon`
- Set `comingSoon: false` to activate a partner card

### `content/experiences.ts`
- Array of `{ icon, title, description }` for the Wine Tourism "Signature Experiences" grid

---

## 8. Outstanding Tasks (Pre-Launch Checklist)

### 🔴 Blocking (must do before going live)
- [ ] **Formspree ID** — Replace `REPLACE_WITH_FORMSPREE_ID` in `components/ContactForm.tsx` line 16 with the real Formspree endpoint. Sign up at formspree.io, create a form, paste the ID.
- [ ] **Register domain** — `corktotable.com` on Namecheap (or preferred registrar)
- [ ] **Deploy to Vercel** — `vercel --prod` from project root, or connect GitHub repo via Vercel dashboard. Point custom domain once registered.

### 🟡 Soon after launch
- [ ] **Add Substack URL** — one-line change in `content/site.ts`: set `substackUrl: 'https://...'`. This auto-activates the Substack link in footer, Stories & Trends, and About.
- [ ] **Activate partner pages** — set `comingSoon: false` in `content/partners.ts` for each partner once experiences are bookable.
- [ ] **Replace About hero background** — `app/about/page.tsx` line 17 still uses an Unsplash image as the faint hero background. Replace with a real photo if desired.
- [ ] **Delete legacy pages** — `app/my-world/` and `app/travel-planning/` are no longer linked anywhere. They can be removed or kept as silent redirects.
- [ ] **Logo** — A C2T circular stamp PNG was discussed but never added. If Rohan provides it, swap the wordmark in `Navigation.tsx` for `<Image src="/images/logo.png" ... />`.

### 🟢 Nice to have
- [ ] **SEO meta** — Each page has a `metadata` export. Review descriptions and add `openGraph` image tags for social sharing.
- [ ] **Analytics** — Add Vercel Analytics or Google Analytics 4 snippet to `app/layout.tsx`.
- [ ] **More partner wineries** — Add new entries to `content/partners.ts` and create corresponding pages in `app/partners/[slug]/`.
- [ ] **Substack embed** — `app/stories-and-trends/page.tsx` has a placeholder dashed box for Substack embeds. Replace with real `<iframe>` once articles are published.

---

## 9. Key Decisions Already Made

These were explicitly decided and should **not** be reversed without Rohan's instruction:

| Decision | Detail |
|---|---|
| No Travel Planning tab | Removed from nav, footer, and homepage. The `/travel-planning` page exists as a legacy file but is not linked. |
| No separate form page | Contact form is only at `/contact` |
| No "About Me" on homepage | Homepage has manifesto quote but no bio section |
| No "Plan My Journey" button | Was removed from nav (desktop + mobile) |
| Brand = Cork To Table only | "The Wine Meridian" name does not appear anywhere visible |
| Static-only site | No API routes, no database, no auth. Pure SSG. |
| All images local | `public/images/` — no CDN dependency except partner card fallbacks |

---

## 10. Social & Contact Details

| Channel | Value |
|---|---|
| Instagram | [@corktotable](https://www.instagram.com/corktotable/) |
| Email | corktotable@gmail.com |
| WhatsApp | +91 98715 76702 |
| Substack | Not yet live — `substackLabel` = "Cork To Data Table" |

---

## 11. Image Map

All images in `public/images/` are Rohan's personal photographs sourced from his Google Drive.

| File | Subject | Used on |
|---|---|---|
| `headshot.jpg` | Rohan Modwel, navy blazer, arms crossed | About page — portrait |
| `winery-1.jpg` | Vineyard rows leading to rolling hills (Australia) | Homepage hero |
| `winery-2.jpg` | Wider vineyard landscape, same region | Wine Tourism hero |
| `winery-thumb-1.jpg` | Vineyard rows, grapes, moody dusk sky | Stories & Trends hero |
| `winery-thumb-2.jpg` | Dark grapes, vivid red/orange autumn leaves | Homepage — Wine Tourism tile |
| `winery-thumb-3.jpg` | Late-harvest/botrytis-style grapes on vine | Stories & Trends — research card |
| `winery-thumb-4.jpg` | Gloved hand holding white grape cluster at harvest | Stories & Trends — travel card |
| `winery-thumb-5.jpg` | Eguren Ugarte (Rioja) bottle + wine glass, valley panorama | Tasting Experiences hero |
| `personal-1.jpg` | Tommasi Graticcio Appassionato 2021 bottle close-up | Tasting Experiences — private dinners |

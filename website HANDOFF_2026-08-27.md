# Cork To Table — Session Handoff, 27 August 2026

Snapshot for picking this project up in a fresh chat. Read alongside `CLAUDE.md`, which holds the durable project rules; this file covers *where things stand right now* and what changed in this session.

---

## 1. Current status in one line

The website is built, deployed to Netlify, and live on the real domain. **One blocker remains: the Let's Encrypt certificate is not issuing for `www.corktotable.co`.**

---

## 2. The active blocker (start here)

Netlify's HTTPS panel shows:

> `www.corktotable.co doesn't appear to be served by Netlify`

**What has been ruled out.** DNS is correct and verified from the command line:

| Host | Resolves to | Status |
|---|---|---|
| `corktotable.co` | `75.2.60.5`, `99.83.231.61` | Netlify apex load balancer, via Cloudflare CNAME flattening |
| `www.corktotable.co` | CNAME → `corktotable.netlify.app` | Netlify site |

Both records are **DNS-only (grey cloud)** in Cloudflare. Neither returns Cloudflare proxy IPs (`104.x` / `172.67.x`), so the classic proxy/redirect-loop trap is not in play. TLS verifies clean and `www` 301-redirects to the apex.

**The actual cause found.** The site was returning **HTTP 401** because Netlify site-wide **password protection** was switched on. Let's Encrypt validates by fetching a file over plain HTTP; the password gate intercepted that request, so validation failed and Netlify reported it as a DNS problem. Misleading error message.

**State when the session ended.** Password protection has been turned off. The warning was still showing, because that panel caches the last failed result and does not re-check by itself.

**Next actions, in order:**

1. Confirm the gate is really down:
   ```
   curl -sI https://corktotable.co | head -1        # expect HTTP/2 200
   curl -sI https://www.corktotable.co | head -1    # expect HTTP/2 301
   ```
   A `401` on either means password protection has not fully lifted.
2. Netlify → **Domain management → HTTPS** → click **Verify DNS configuration**, then **Renew certificate**. The click is what triggers a fresh attempt.
3. If it still fails: in **Domain management**, remove `www.corktotable.co` from the domain list, save, and add it back. This forces Netlify to re-run its checks instead of trusting a cached failure. Cloudflare records need no changes.
4. **Do not click Renew repeatedly.** Let's Encrypt rate-limits failed validations per domain; a burst of attempts can lock you out for an hour or more. Two or three tries spaced a few minutes apart is the limit.

---

## 3. Infrastructure as it now stands

| Thing | Value |
|---|---|
| Domain | **`corktotable.co`** (`.com` was taken), registered at **Cloudflare Registrar**, Aug 2026 |
| DNS | Managed **at Cloudflare**, not Netlify — Cloudflare Registrar locks domains to its own nameservers |
| Apex record | CNAME `@` → `apex-loadbalancer.netlify.com`, **DNS-only / grey cloud** |
| www record | CNAME `www` → `corktotable.netlify.app`, **DNS-only / grey cloud** |
| Website host | **Netlify**, production branch `main`, auto-deploys on push (~2–4 min) |
| Visuals host | **GitHub Pages**, from branch `claude/wine-substack-data-setup-H9HVg` |
| Contact form | Formspree `myeglglk` |
| Questionnaire | Formspree `xgawrwpz` |

**Why Netlify and not Vercel:** Vercel's free Hobby tier forbids commercial use, and this site generates leads for a paid consultancy. Compliance would have meant Pro at $20/month. Netlify's free tier permits commercial use and runs the Next.js App Router site unchanged, with `next/image` optimisation intact.

**Why DNS lives at Cloudflare:** Cloudflare Registrar will not let you point nameservers elsewhere. The trade-off was accepted to keep at-cost renewals (~$10/yr flat, no year-one discount trickery).

---

## 4. What changed in this session

### Wine tourism partners
- Seven partners live in `content/partners.ts`. **Never put pricing on the site.**
- Added a `quirkLine` field to the `Partner` type. Each partner's hook line now renders as its own paragraph beneath the description, rather than being buried at the end of it.
- Every partner subpage got the "Ready to plan?" CTA, matching the wine tourism page. Its button goes to **`/plan`** (the questionnaire), not `/contact`.
- "More partnerships in development" box now reads *"New destinations will be added as they are confirmed"* with a "Contact us" link to `/contact`.

### Questionnaire — rebuilt (`components/Questionnaire.tsx`)
Was one long scrolling form; now a multi-step wizard with a progress bar and Back link.

Routing:

| Q1 | Q13 | Pages after the core questions |
|---|---|---|
| (a) | c | → Thank you |
| (a) | a/b | Wine personality (Q18–20) → Thank you |
| (b) | c | "Tell us more?" → Yes: Q14–17 → Thank you / No: Thank you |
| (b) | a/b | Wine → "Tell us more?" → same two outcomes |
| (c) | c | "Tell us more?" → Yes: Q14–17 → Q21–23 → Thank you / No: Thank you |
| (c) | a/b | Wine → "Tell us more?" → same two outcomes |

Other behaviour:
- **Nothing sends until the final step.** One submission per traveller.
- **Name + contact are required**; everything else optional. Contact accepts an email or a phone number (digits, optional `+`, spaces/hyphens/brackets tolerated).
- **Partial capture:** if someone enters valid contact details and then leaves without finishing, their answers are sent anyway, tagged `INCOMPLETE` in `A00 Submission status` and prefixed in the subject line. Uses `sendBeacon` with **FormData** — JSON beacons are silently dropped by browsers, which cost a debugging round.
- **Honeypot** (`_gotcha`) on both forms, off-screen rather than `type="hidden"` so bots still fill it. Only sent when non-empty.
- **All 24 fields are sent every time**, in fixed order, with `-` for skipped questions and `Not asked` for whole sections never shown.

### ⚠️ Formspree field names are frozen
Formspree builds dashboard columns from the union of **every field name it has ever received**. Renaming a field spawns a duplicate column that only a full deletion of submission history clears. This caused hours of apparent "misalignment" during testing. Do not rename a label in `buildFields()` without deleting submission history first.

### Privacy policy
- Live at **`/privacy`**; copy in `content/privacy.ts`, linked from the footer bottom bar (next to the copyright, separated by a dot).
- Age stated as **25+**, in line with most Indian states' drinking age.
- No Grievance Officer section (too formal), but the escalation right to the Data Protection Board is retained.
- Covers: partial-submission capture, sharing data with partner wineries/hotels abroad, third-party cookies from embedded Google Maps and Substack, and Vercel/Netlify server logs.
- Terms of Service deliberately deferred — see §7.

### Articles
- **Spain article hidden**, not deleted. `hidden: true` in `content/articles.ts`; route folder renamed to `_spain-wine-travel-diaries` (a leading underscore makes Next.js skip building it, so the URL 404s rather than serving the piece). *Liquid Magazine* runs it in October 2026; restore afterwards with a credit line. Full instructions are in a comment beside the entry and in `CLAUDE.md`.
- **Wine Paris article** now carries a credit line under the date: *"This piece was first published in the [Indian Wine Academy](https://www.indianwineacademy.com/articles/item_3_973/) newsletter."* Use this as the pattern for the Spain credit.

### Copy
- Tasting Experiences and Wine Tourism both gained a functional paragraph explaining what the business actually does, plus a standalone closing line.
- Contact page: "simply want to know what is possible" → "simply want to know which wine to buy".
- Homepage tile descriptions had `hidden md:block` on them and were invisible on phones. Fixed, with a stronger photo overlay on mobile since the text block is now taller.

### Interactive visuals (substack branch)
- **Auto-height.** Each visual measures itself and posts its height to the parent; `components/VisualEmbed.tsx` listens and resizes the iframe. No inner scrollbar, no dead space. Required stripping `min-height: 100vh` from several visuals.
- **Two-way handshake.** The parent also *requests* the height on mount, on load, and on `pageshow`. Without this, a cached reload could deliver the height before React had attached its listener, leaving the frame stuck at the fallback and looking clipped — the "refresh once and it breaks, refresh again and it's fine" bug.
- **Story-over-status donut:** all hover/tap interaction removed. It now alternates 68% ↔ 32% every 3 seconds on its own, pausing when scrolled out of view or when the tab is hidden.
- **Mobile legend fix** on the same visual: fixed pixel widths were squeezing the bars to nothing and pushing counts off-screen. Below 540px the label now takes its own line with the bar full-width beneath.
- **Palate arc** got sticky tap support alongside hover.
- Wording standardised to **"Hover/tap"** everywhere.
- `visual_reddit_voices` is the **only** capped visual: `maxHeight={760}` with internal scrolling and a "Scroll inside the panel to read more" hint, because the appendix quote list runs to thousands of pixels.
- Data-callout figures changed from gold to **burgundy** (the gold left bar stays).

### Repo housekeeping
- `.gitignore` now covers `tsconfig.tsbuildinfo`, `*.tsbuildinfo`, and `.claude/settings.local.json`. `tsconfig.tsbuildinfo` was untracked with `git rm --cached`.
- `public/preview.html` (7.2 MB, publicly served, unreferenced) and `Rohan Professional photo.jpeg` (2.3 MB, loose at repo root) were **moved to Google Drive → Wine Consulting → Cork To Table → Website Archive**. Nothing deleted.
- The redundant `Website` branch was confirmed already gone. Only `main` and the substack branch remain.

---

## 5. Remaining launch checklist

**Blocking:**
1. Resolve the certificate (see §2).
2. Set **Authorized Domain = `corktotable.co`** on **both** Formspree forms. This is the fix for submissions landing in spam — until then they arrive without a trusted referrer.
3. Delete every existing Formspree test submission on both forms, so the dashboard starts clean.
4. End-to-end test on the live domain: contact form, plus the questionnaire's longest path (Q1c + Q13a). Confirm delivery to inbox, not spam. Check an article page on a real phone.

**Soon after:**
- Add `substackUrl` in `content/site.ts` — auto-activates Substack links in the footer, Stories & Trends, and About.
- Set `comingSoon: false` per partner in `content/partners.ts` as each becomes bookable.
- Replace the Unsplash About-hero background with a real photo.
- Decide on legacy `app/my-world/` and `app/travel-planning/` (unlinked; keep as redirects or remove).
- Swap the nav wordmark for the C2T logo PNG if available.

**Nice to have:** SEO meta review and `openGraph` images per page; analytics; more partners; real Substack iframe on Stories & Trends.

---

## 6. Gotchas that cost time this session

1. **Never import a plain constant from a `'use client'` module into a server component.** Next.js hands back a proxy object, not the value. Build passes, types pass, and the value renders as `[object Object]` at runtime. This 404'd all ten visuals. Shared constants live in `content/*.ts` — see `content/visuals.ts`. Full write-up in `CLAUDE.md`.
2. **`Wine Substack/` is tracked on both branches.** Editing a visual in `~/WineResearch` and pushing to `main` succeeds silently and publishes nothing. **Always edit visuals in `~/WineResearch-substack`.**
3. **Formspree `_replyto` must be a valid email.** Passing a phone number rejects the entire submission. The code now only sets it when the contact looks like an email.
4. **`sendBeacon` cannot send JSON.** Browsers only permit content types that need no CORS preflight. Use `FormData`.
5. **Formspree spam filtering** distrusts submissions from `localhost` and `.netlify.app`. Mark them Not Spam to train the model, and set the Authorized Domain once live.

---

## 7. Decisions parked for later

- **Membership tier.** Planned once Rohan opens a bar: access to special bar events, individual wine selection consultation, fine-dining menu selections. **This is the trigger for a Terms of Service page** — recurring payments, cancellation, entitlements, liability. Terms should ship *with* the membership, not after. The privacy policy will also need revisiting to cover payment data.
- **Reference for the membership/bar launch:** [valmont.app](https://valmont.app). Borrow the *mechanics* — waitlist framing ("Membership is currently full"), "Request to Join" instead of "Sign up", no public pricing, named-venue social proof. Do **not** borrow the tone; Valmont is cold and exclusionary, while Cork To Table's voice is warm and playful. Copying it wholesale would fracture the brand.
- **Trademark.** Application filed in India, **still pending**. The footer must keep **™**. Do not switch to **®** until the registration certificate issues — falsely representing a mark as registered is penalised under Section 107 of the Trade Marks Act.
- **Spain article restore:** October 2026, after the *Liquid Magazine* issue.
- **Optional cleanup after launch:** `git rm -r --cached "Wine Substack/"` on `main` plus a `.gitignore` entry, to restore the intended one-branch-owns-the-visuals design.

---

## 8. Deploy commands

**Website** (any change under `~/WineResearch`):
```
cd ~/WineResearch
npm run build          # must stay green — 13 static pages, zero errors
git add -A
git commit -m "..."
git push
```
Netlify rebuilds automatically, 2–4 minutes.

**Visuals** (any `visual_*.html` change):
```
cd ~/WineResearch-substack
git status             # the auto-push watcher may have committed already
git add visual_*.html
git commit -m "..."
git push
```
GitHub Actions publishes to `https://rmod04.github.io/WineResearch/` in ~60 seconds.

**Order matters** when both change: deploy visuals first, then the website. Otherwise the site waits on height messages from visuals that aren't publishing them yet.

**Note:** the Cowork sandbox has no git credentials. All commits, pushes and branch operations run from Claude Code or a local terminal.

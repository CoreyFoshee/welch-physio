# welchphysio.com

Marketing site for **Welch Physiotherapy and Wellness PLLC** (Dr. Kendall Welch, DPT) — doctor-led, concierge physical therapy in Tulsa, OK.

**Stack:** Next.js (App Router, TypeScript) · Tailwind CSS v4 · Framer Motion · Sanity CMS · Netlify

## Local development

```bash
npm install
cp .env.example .env.local   # fill in Sanity + Maileroo values
npm run dev                  # http://localhost:3000
```

The site renders fully **without** any env vars — every page falls back to the canonical copy baked into `lib/defaultContent.ts`. Once Sanity is configured, CMS content takes over field-by-field.

## Sanity setup

**Project:** `ines9pkk` (Welch Physiotherapy) · dataset `production` · [manage in Sanity](https://www.sanity.io/manage/project/ines9pkk)

1. Log in: `npx sanity login --provider sanity` (use `corey@cfdesign.studio`).
2. Copy `.env.example` → `.env.local` and set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=ines9pkk`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
   - `SANITY_API_READ_TOKEN` (viewer token)
   - `SANITY_API_WRITE_TOKEN` (editor token — seed only)
3. Seed all content (safe to re-run; overwrites seeded docs with canonical copy):

```bash
npm run seed
```

4. Edit content in the embedded Studio at `/studio`.

Editable content: site settings (nav, footer, form labels, phone, URLs), all page copy + SEO titles, services, what-to-expect steps, testimonials, FAQs, and policies. Replace seeded `Placeholder` testimonials with real ones. Images are Sanity image fields — until uploaded, the site shows branded arch placeholders.

## Netlify deploy

1. Push this repo to GitHub and connect it in Netlify (build settings are read from `netlify.toml`).
2. In **Site settings → Environment variables**, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (`production`)
   - `SANITY_API_READ_TOKEN`
   - `MAILEROO_API_KEY` (contact-form email relay to kwelchphysio@gmail.com)
   - `MAILEROO_FROM_EMAIL` / `MAILEROO_FROM_NAME` (verified sender in Maileroo)
3. Deploy. Netlify Forms auto-detects the `contact` form (defined in `public/__forms.html`); enable email/SMS notifications under **Forms → Notifications** to receive submissions by text.
4. **Instant publishing:** in Netlify create a *Build hook*, then in Sanity manage → API → Webhooks add that URL so publishing in the Studio triggers a rebuild.
5. Point `welchphysio.com` DNS at Netlify (Netlify DNS or a CNAME/ALIAS per Netlify's domain instructions).

## Launch TODOs

- [ ] Swap placeholder `<Logo />` for the converted SVG of `Welch_Horizontal_Logo_Full_Color.eps` (`components/Logo.tsx`)
- [ ] Swap Fraunces → Recline via Adobe Fonts kit when client provides ID (`app/fonts.ts`)
- [ ] Set real `bookingUrl` / `discoveryCallUrl` (scheduler) in Sanity site settings — currently falls back to `/faq#contact`
- [ ] Set `patientPortalUrl` and `questionnaireUrl` in Sanity site settings
- [ ] Verify a sender domain in Maileroo and set `MAILEROO_FROM_EMAIL` in env
- [ ] Upload real photography in the Studio (hero, portrait, services, steps)
- [ ] Replace placeholder testimonials; client to confirm credentials list

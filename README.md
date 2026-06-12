# welchphysio.com

Marketing site for **Welch Physiotherapy and Wellness PLLC** (Dr. Kendall Welch, DPT) — doctor-led, concierge physical therapy in Tulsa, OK.

**Stack:** Next.js (App Router, TypeScript) · Tailwind CSS v4 · Framer Motion · Sanity CMS · Netlify

## Local development

```bash
npm install
cp .env.example .env.local   # fill in Sanity + Resend values
npm run dev                  # http://localhost:3000
```

The site renders fully **without** any env vars — every page falls back to the canonical copy baked into `lib/defaultContent.ts`. Once Sanity is configured, CMS content takes over field-by-field.

## Sanity setup

1. In [sanity.io/manage](https://www.sanity.io/manage), use the client's existing project (or create one) and a `production` dataset.
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET=production`, and `SANITY_API_READ_TOKEN` in `.env.local`.
3. Seed all content (one run populates every document type with the final copy):

```bash
SANITY_API_WRITE_TOKEN=<token-with-write-access> npm run seed
```

4. Edit content in the embedded Studio at `/studio`. Add `http://localhost:3000` and `https://welchphysio.com` as CORS origins in Sanity manage.

Editable content: site settings (phone, email, booking URLs, footer), all six pages' copy, services, what-to-expect steps, testimonials, FAQs, and policies. Replace the seeded `Placeholder` testimonials with real ones in the Studio. Images are Sanity image fields — until photos are uploaded, the site shows branded arch placeholders.

## Netlify deploy

1. Push this repo to GitHub and connect it in Netlify (build settings are read from `netlify.toml`).
2. In **Site settings → Environment variables**, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (`production`)
   - `SANITY_API_READ_TOKEN`
   - `RESEND_API_KEY` (contact-form email relay to kwelchphysio@gmail.com)
3. Deploy. Netlify Forms auto-detects the `contact` form (defined in `public/__forms.html`); enable email/SMS notifications under **Forms → Notifications** to receive submissions by text.
4. **Instant publishing:** in Netlify create a *Build hook*, then in Sanity manage → API → Webhooks add that URL so publishing in the Studio triggers a rebuild.
5. Point `welchphysio.com` DNS at Netlify (Netlify DNS or a CNAME/ALIAS per Netlify's domain instructions).

## Launch TODOs

- [ ] Swap placeholder `<Logo />` for the converted SVG of `Welch_Horizontal_Logo_Full_Color.eps` (`components/Logo.tsx`)
- [ ] Swap Fraunces → Recline via Adobe Fonts kit when client provides ID (`app/fonts.ts`)
- [ ] Set real `bookingUrl` / `discoveryCallUrl` (scheduler) in Sanity site settings — currently falls back to `/faq#contact`
- [ ] Set `patientPortalUrl` and `questionnaireUrl` in Sanity site settings
- [ ] Verify a sender domain in Resend and update `from:` in `app/api/contact/route.ts`
- [ ] Upload real photography in the Studio (hero, portrait, services, steps)
- [ ] Replace placeholder testimonials; client to confirm credentials list

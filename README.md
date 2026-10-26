# Chartered Accountant Proprietorship Firm Website (Bangladesh)

A production-ready, static-first (SSG) informational website built for a **Chartered Accountancy proprietorship firm in Bangladesh** (`[FIRM NAME]`, Proprietorship of `CA [OWNER NAME], FCA/ACA, Member of ICAB`).

Designed with a light-mode-only **Indigo + Violet** institutional identity inspired by the typographic authority of the Big 4, the editorial clarity of top strategy consultancies, and the practical regulatory taxonomy of leading Bangladeshi CA practices (NBR Income Tax, VAT & Customs, RJSC, BIDA, FRC, BSEC, NGOAB).

---

## 1. Tech Stack

- **Framework**: Next.js 14 (App Router, Static Site Generation + Route Handler for `/api/contact`)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS Custom Properties (`--indigo-950` through `--violet-100`)
- **Typography**: `Plus Jakarta Sans` (Headings), `Inter` (Body), `Noto Sans Bengali` (Bangla fallback & toggle support) via `next/font/google`
- **Forms & Validation**: React Hook Form + Zod (client & server validation, BD mobile regex, live character counter, honeypot, per-IP rate limiting)
- **Email Delivery**: Resend REST API (primary) + Nodemailer SMTP (automatic fallback) + local development safe logging
- **Icons**: Lucide React

---

## 2. Quick Start (Local Development)

```bash
# 1. Install dependencies
pnpm install

# 2. Copy environment variable template
cp .env.example .env.local

# 3. Start the development server
pnpm dev

# 4. Build for production (verifies SSG for all static & dynamic routes)
pnpm build
pnpm start
```

Open `http://localhost:3000` in your browser.

---

## 3. Environment Variables (`.env.local`)

Copy `.env.example` to `.env.local` and configure your preferred email delivery method:

| Variable | Required | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical production URL (e.g., `https://yourfirm-bd.com`) used for `sitemap.xml`, `robots.txt`, Open Graph, and JSON-LD |
| `RESEND_API_KEY` | Option 1 | API key from [Resend](https://resend.com) for sending firm notifications and client auto-replies |
| `CONTACT_FROM_EMAIL` | Option 1/2 | Verified sender address (e.g., `"Enquiries <noreply@yourfirm-bd.com>"`) |
| `CONTACT_TO_EMAIL` | Option 1/2 | Destination inbox where client consultation enquiries are delivered |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Option 2 | Nodemailer SMTP credentials (used automatically if `RESEND_API_KEY` is not set) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Optional | Optional Cloudflare Turnstile keys for additional bot challenge verification |

### Alternative Fallback: Formspree (Zero-Config Static Option)
If you prefer to use **Formspree** instead of the built-in `/api/contact` Next.js Route Handler:
1. Create a form at [https://formspree.io](https://formspree.io) and copy your endpoint URL (`https://formspree.io/f/your_form_id`).
2. In `components/forms/ContactForm.tsx`, replace `fetch('/api/contact', ...)` with `fetch('https://formspree.io/f/your_form_id', { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(values) })`.

---

## 4. How to Edit Content (No Component Code Changes Needed)

All text, placeholders, statistics, services, industries, articles, and FAQs live in `/content/`:

1. **`/content/site.ts`** — **Primary Configuration File**:
   - `firmName`: Replace `'[FIRM NAME]'` with your registered firm name.
   - `ownerName`, `ownerCredentials`, `ownerEnrolmentPlaceholder`: Replace `'CA [OWNER NAME]'`, `'FCA/ACA, Member of ICAB'`, and the ICAB enrolment number placeholder.
   - `location`: Update `addressLine` (`'[ADDRESS, CITY], Bangladesh'`), `cityPlaceholder`, `postalCodePlaceholder`, and `googleMapsEmbedUrl`.
   - `contact`: Update `phoneDisplay`, `phoneHref`, `whatsappNumber` (digits only for `wa.me`), `emailDisplay`, `emailHref`, `hours`, and `calendlyPlaceholderUrl`.
   - `stats`: Update the 4 clearly marked placeholder metrics (`Years of Experience`, `Clients Served`, `Returns & Filings Completed`, `Audits & Reviews Completed`).
   - `about`: Update Principal CA biography paragraphs, qualifications list, career timeline, and verified client testimonials.
   - `ui`: Edit English (`en`) and Bangla (`bn`) navigation and button labels.
2. **`/content/services.ts`**:
   - Edit all 9 services (`audit-assurance`, `income-tax-services`, `vat-customs-advisory`, `company-formation-compliance`, `accounting-bookkeeping`, `payroll-labour-compliance`, `business-advisory-consultancy`, `internal-audit-risk-forensic`, `transfer-pricing-international-tax`), including deliverables, required documents, timelines, laws, and FAQs.
3. **`/content/industries.ts`**:
   - Edit the 10 Bangladesh industry verticals, sector challenges, and service mappings.
4. **`/content/insights.ts`**:
   - Edit or add articles, update the Bangladesh Tax & Compliance Calendar (`taxCalendarItems`), and customize the downloadable/printable checklists (`downloadableChecklists`).
5. **`/content/faqs.ts`**:
   - Edit the 8 Home page FAQs (automatically updates both the visual accordion and the `FAQPage` JSON-LD schema).

---

## 5. Owner Replacement Checklist Before Going Live

Search for `[` across `/content/site.ts` and `/public/` to replace all clearly marked placeholders:
- [ ] `[FIRM NAME]` in `/content/site.ts`, `/public/logo.svg`, and `/public/og/og-default.svg`
- [ ] `CA [OWNER NAME]` and `FCA/ACA` designation in `/content/site.ts`
- [ ] `[ICAB Enrolment No. — To be confirmed by Owner]` in `/content/site.ts`
- [ ] `[ADDRESS, CITY], Bangladesh` and `[CITY]` in `/content/site.ts`
- [ ] `[+880 1XXX-XXXXXX]`, `phoneHref`, and `whatsappNumber` in `/content/site.ts`
- [ ] `[EMAIL]` and `emailHref` in `/content/site.ts`
- [ ] `googleMapsEmbedUrl` in `/content/site.ts` (paste your office Google Maps iframe `src`)
- [ ] `stats` array values in `/content/site.ts` (replace placeholder numbers with actual practice figures)
- [ ] Principal CA portrait in `/app/about/page.tsx` (replace the SVG placeholder with your photo in `/public/images/`)
- [ ] `qualifications` and `careerTimeline` entries in `/content/site.ts`
- [ ] `testimonialsPlaceholder` in `/content/site.ts` (replace or remove in accordance with ICAB ethical guidelines)
- [ ] Legal review of `/app/privacy/page.tsx`, `/app/terms/page.tsx`, and `/app/disclaimer/page.tsx`

---

## 6. Deploying to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` (`NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`) in **Vercel Project Settings → Environment Variables**.
4. Click **Deploy**. Next.js will statically pre-render all pages and deploy `/api/contact` as a Serverless Function.

# Empowr Main Site — System Flow

## Request Lifecycle

```
Browser request → empowrcic.org
    │
    ▼
Route 53 DNS
    │  A record → Netlify load balancer (75.2.60.5)
    │  Cutover from Wix completed 2026-06-12
    ▼
Netlify CDN
    │  Serves pre-built static files from out/
    ▼
Static HTML page + Tailwind CSS + minimal React JS
    │
    ▼
Client-side hydration (only for interactive components):
    ├── Nav.tsx          — mobile hamburger, active link detection
    ├── ReviewsCarousel.tsx  — chevron navigation
    ├── ContactForm.tsx  — form state, submission
    ├── ExperientialLearningTabs.tsx — tab switching
    └── FaqsAccordion.tsx — open/close state
```

All pages are pre-built at deploy time. No server-side rendering at request time.

---

## Special Routes

### `/legal/:slug` — Policy Proxy
```
Browser → empowrcic.org/legal/privacy-policy
    │
    ▼
Netlify redirect rule (status 200, force = true)
    │  from = "/legal/:slug"
    │  to   = "https://legalhub.pecuvate.com/share/empowr/org/:slug"
    ▼
LegalHub (Pecuvate product) serves the policy page
    │
    ▼
Content rendered at empowrcic.org/legal/... (transparent proxy)
```

Users never leave empowrcic.org — the redirect is server-side.

### `/news/[slug]` — MDX Articles
```
Build time:
    lib/news.ts → getAllSlugs() → generateStaticParams()
    lib/news.ts → getPostBySlug(slug) → parse frontmatter + MDX body
    next-mdx-remote → compile MDX → React component tree
    → static HTML output in out/news/[slug]/index.html

Request time:
    CDN serves pre-built HTML → no server involved
```

---

## Contact Form Flow

```
User fills form (name, email, subject, message)
    │
    ▼
ContactForm.tsx (client component)
    │  POST to /.netlify/functions/contact
    ▼
netlify/functions/contact.ts (Netlify Function — serverless Node.js)
    │
    ├── subject = "Work With Us" or "Volunteering"
    │       → send to OPPORTUNITIES_EMAIL (opportunities@empowrcic.org)
    │
    └── all other subjects (General, Partnership, Media)
            → send to CONTACT_EMAIL (enquiries@empowrcic.org)
    │
    ▼
Resend API (RESEND_API_KEY)
    │  ① Sends enquiry to destination email
    │  ② Sends auto-reply to enquirer
    │  FROM: noreply@empowrcic.org
    ▼
ContactForm.tsx → shows success message inline
    │
    └── on error → shows fallback email link to enquiries@empowrcic.org
```

The contact form is the **only dynamic feature** on the site. Everything else is static.

---

## Data Flow

### Static page content
```
planning/architecture/narrative.md    (source of truth for copy)
    │  written into page components at build
    ▼
src/app/*/page.tsx                    (hardcoded JSX)
    │
    ▼
out/ (static HTML)
```

### News posts
```
src/content/news/*.mdx                (MDX files — frontmatter + markdown)
    │
    ▼
lib/news.ts                           (getAllPosts, getPostBySlug)
    │  gray-matter parses frontmatter
    │  next-mdx-remote compiles body
    ▼
/news/page.tsx                        (listing — sorted by date)
/news/[slug]/page.tsx                 (individual article)
    │
    ▼
out/news/... (static HTML)
```

### External links
```
lib/links.ts                          (28 URL constants)
    │
    ├── Nav.tsx           → "Support Us" → hero.empowrcic.org
    ├── Footer.tsx        → all 7 columns of links
    ├── page components   → programme CTAs → eela.empowrcic.org
    └── impact/page.tsx   → Companies House CIC reports
```

---

## External Services

| Service | Connection | Direction |
|---|---|---|
| **Netlify** | Hosting + Serverless Functions | Infrastructure |
| **Resend** | Contact form email delivery | Outbound API call (from Function) |
| **Route 53** | DNS — A record to Netlify | Infrastructure |
| **LegalHub** | Policy content host | Inbound redirect target (empowrcic.org/legal → legalhub) |
| **EELA** (`eela.empowrcic.org`) | Session booking — programme CTAs | Outbound link |
| **Empowr Heroes** (`hero.empowrcic.org`) | Donation platform — Nav CTA | Outbound link |
| **Companies House** | CIC report filings | Outbound link (no PDF hosting) |
| **Trustpilot** | Reviews — hardcoded in carousel | Outbound link |
| **Wix** (`empowrcic.wixsite.com`) | Shop — footer link | Outbound link |
| **Social** (Instagram, Facebook, YouTube, LinkedIn, WhatsApp) | Community | Outbound links |

No inbound webhooks. No third-party SDK calls from the browser.

---

## Deployment Pipeline

```
Local change
    │
    git push origin main
    │
    ▼
GitHub (Pecuvate/empowr-main-site)
    │  triggers Netlify build hook
    ▼
Netlify build runner
    │  cd src/ && npm run build
    │  output: out/ (static export)
    │  functions: netlify/functions/ (serverless)
    ▼
Deploy to Netlify CDN + Function runtime
    │
    ▼
Live at empowrcic.org
    (Route 53 A record → Netlify LB 75.2.60.5)
```

Build time: ~45–90 seconds. No external data fetching at build time.

### Security headers (applied by Netlify to all routes)
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

---

## Audience Routing (Site-level)

The site routes different audiences to different destinations:

```
empowrcic.org
    │
    ├── Want to skate?           → eela.empowrcic.org (EELA platform)
    ├── Want to donate/support?  → hero.empowrcic.org (Heroes platform)
    ├── Work with us?            → /work-with-us → /contact?subject=Work+With+Us
    ├── Partner with us?         → /partner-with-us → /contact?subject=Partnership
    ├── Read our policies?       → /legal → legalhub.pecuvate.com (proxy)
    └── Learn about EELA?        → /experiential-learning
```

The contact form supports pre-population via query params: `?subject=Work+With+Us&message=...`

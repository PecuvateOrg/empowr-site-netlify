# Empowr Main Site — Tech Stack

## Framework & Language

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router, static export) | 16.2.6 |
| Language | TypeScript (strict) | ^5 |
| UI Library | React | 19.2.4 |
| Node | Node.js | 20 (pinned) |

**Key constraint:** `output: 'export'` in `next.config.ts` — the site builds to plain static HTML/CSS/JS. No Node.js at runtime. Upgradeable to full SSR without structural changes.

---

## Dependencies

### Runtime
| Package | Version | Purpose |
|---|---|---|
| `next` | 16.2.6 | Framework |
| `react` | 19.2.4 | UI library |
| `react-dom` | 19.2.4 | DOM rendering |
| `gray-matter` | 4.0.3 | Parse YAML frontmatter from MDX news posts |
| `next-mdx-remote` | 6.0.0 | Server-side MDX rendering for news articles |
| `resend` | 6.12.4 | Transactional email API (contact form) |

### Dev
| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | ^4 | Utility CSS framework |
| `@tailwindcss/postcss` | ^4 | Tailwind PostCSS processor |
| `typescript` | ^5 | Type checking |
| `@types/node` | ^20 | Node types |
| `@types/react` | ^19 | React types |
| `@types/react-dom` | ^19 | React DOM types |
| `eslint` | ^9 | Linting |
| `eslint-config-next` | 16.2.6 | Next.js ESLint rules |

No UI component library (no shadcn/ui, no MUI) — all components are custom Tailwind.

---

## Design System

### Fonts
- **Nunito** via `next/font/google` — weights 400, 500, 600, 700, 800, 900 (normal + italic)
- Applied as `--font-nunito` → `--font-sans` CSS variable on `<body>`

### Colour Palette (`globals.css` @theme)
| Token | Hex | Use |
|---|---|---|
| `--color-blue` | `#4A70C2` | Primary brand blue |
| `--color-blue-dark` | `#3558a8` | Hover states |
| `--color-blue-light` | `#c8ddf8` | Text on dark backgrounds |
| `--color-blue-pale` | `#eef3fc` | Section backgrounds |
| `--color-blue-soft` | `rgba(74,112,194,0.10)` | Subtle blue tint |
| `--color-black` | `#1B1B1B` | Body text |
| `--color-mid` | `#4a4a4a` | Secondary text |
| `--color-muted` | `#7a7a8a` | Captions, tertiary |
| `--color-cream` | `#f8f7f4` | Page background |
| `--color-warm-white` | `#fdfcfa` | Card backgrounds |
| `--color-border` | `#e5e1db` | Dividers, borders |

### Component Patterns
- **Cards:** `bg-warm-white rounded-2xl p-7 border border-border`
- **Buttons:** `bg-blue text-white px-8 py-3 rounded-full hover:bg-blue-dark transition-colors`
- **Section spacing:** `py-12 md:py-20 lg:py-28`
- **Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- **Hero:** Full-width with video background (`hero-banner2-sharp.mp4`) + overlay
- **Headings:** `text-3xl md:text-4xl font-extrabold`
- **MDX body (`.mdx-body`):** 1.125rem, line-height 1.75, blue blockquotes, disc lists

---

## Folder Structure

```
src/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout — Nunito, Nav + Footer
│   ├── globals.css                   # @theme brand tokens + Tailwind import
│   ├── page.tsx                      # /
│   ├── about/page.tsx                # /about
│   ├── contact/page.tsx              # /contact
│   ├── eccp/page.tsx                 # /eccp
│   ├── experiential-learning/
│   │   ├── page.tsx                  # /experiential-learning
│   │   └── report/page.tsx           # /experiential-learning/report
│   ├── faqs/
│   │   ├── page.tsx                  # /faqs
│   │   └── FaqsAccordion.tsx         # Local client component
│   ├── get-involved/page.tsx         # /get-involved
│   ├── history/page.tsx              # /history
│   ├── impact/page.tsx               # /impact
│   ├── legal/page.tsx                # /legal
│   ├── news/
│   │   ├── page.tsx                  # /news (listing)
│   │   └── [slug]/page.tsx           # /news/[slug] (SSG from MDX)
│   ├── our-work/page.tsx             # /our-work
│   ├── partner-with-us/page.tsx      # /partner-with-us
│   └── work-with-us/page.tsx         # /work-with-us
├── components/
│   ├── Nav.tsx                       # Sticky header, desktop + mobile, active state
│   ├── Footer.tsx                    # 7-column footer, social icons, legal links
│   ├── ContactForm.tsx               # Client component — Resend form, subject routing
│   ├── ExperientialLearningTabs.tsx  # 5-tab client component
│   ├── OurStorySection.tsx           # Reusable narrative section
│   └── ReviewsCarousel.tsx           # Hardcoded Trustpilot reviews, chevron nav
├── lib/
│   ├── links.ts                      # All external URLs (28 constants)
│   ├── news.ts                       # getAllPosts, getPostBySlug, getAllSlugs
│   └── types.ts                      # NewsPost, NewsPostFull interfaces
├── content/
│   └── news/                         # MDX files — frontmatter + markdown
│       ├── 2022-02-04-*.mdx          # (6 live posts)
│       └── 2026-05-20-*.mdx.draft    # (1 draft — rename to .mdx to publish)
├── public/
│   ├── logo.png
│   ├── hero-banner2-sharp.mp4        # Hero video
│   ├── avatars/                      # Review avatars
│   └── [favicons + site.webmanifest]
└── netlify/
    └── functions/
        └── contact.ts                # Netlify Function — Resend email handler
```

---

## Content System (MDX News)

- Files live in `src/content/news/` — filename is the URL slug
- Parsed at build time via `gray-matter` (frontmatter) + `next-mdx-remote` (body)
- `getAllSlugs()` feeds `generateStaticParams()` for SSG
- Frontmatter fields: `title`, `date` (ISO), `category`, `excerpt`, `coverImage?`
- Categories: `Announcement | Event | Story | Update`
- To publish a draft: rename `*.mdx.draft` → `*.mdx`

---

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes | Contact form email delivery |
| `CONTACT_EMAIL` | Yes | General enquiry destination (`enquiries@empowrcic.org`) |
| `OPPORTUNITIES_EMAIL` | Yes | Work With Us and Volunteering destination (`opportunities@empowrcic.org`) |

Variables are consumed by the `netlify/functions/contact.ts` Netlify Function, not by Next.js pages.

---

## Build & Scripts

```bash
# Run from src/ directory
npm run dev      # Dev server — localhost:3000
npm run build    # Static export → out/
npm run lint     # ESLint + TypeScript checks
```

Netlify runs `npm run build` with `base = "src"` and publishes `out/`.

---

## Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Components | PascalCase | `ContactForm.tsx` |
| Page routes | kebab-case folder | `work-with-us/page.tsx` |
| Lib files | camelCase | `links.ts`, `news.ts` |
| MDX posts | `YYYY-MM-DD-title.mdx` | `2022-02-04-launch-of-empowr-first-skate-jam.mdx` |
| ADRs | `YYYY-MM-DD-title.md` | `2026-05-19-tech-stack.md` |
| Path alias | `@/*` → `src/` root | `@/components/Nav` |

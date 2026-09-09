# src — Next.js Application

Next.js 15 (App Router), TypeScript strict, Tailwind v4, shadcn/ui. Built as a static export (`output: 'export'`). To unlock full server-side features, remove `output: 'export'` from `next.config.ts` — no other migration needed.

## Process
1. Read `planning/architecture/` for the page or section being built
2. Implement page at `app/[route]/page.tsx`
3. Extract reusable UI into `components/`
4. Register any new external URLs in `lib/links.ts` — never hardcode
5. Run `npm run build` from `src/` to verify before committing
6. Update the corresponding `planning/pages/` or `planning/layout/` doc to reflect what was built

## Inputs and Outputs
- In: copy and content from `planning/architecture/`; links from `lib/links.ts`
- Out: static build in `.next/` — handed to ops/ for deployment

## Tools
- shadcn/ui — `npx shadcn@latest add <component>` from `src/`
- /netlify-deploy — run from ops/ context

## Constraints
- **This is not the Next.js most training data describes.** v15 changed APIs, conventions and file structure. Read the relevant guide in `node_modules/next/dist/docs/` before writing code against a remembered API, and heed deprecation notices. (Preserved from a scaffold-generated `src/AGENTS.md`, removed 2026-09-09 — that filename overrides root routing in `src/`-scoped sessions.)
- npm commands always run from `src/` — never from the project root
- Server Components by default — only `"use client"` where interactivity is genuinely needed
- Brand tokens registered in `globals.css` under `@theme` — no arbitrary Tailwind values for design-system properties
- Font: Nunito (weights 400–900) via `next/font/google`, applied in `app/layout.tsx`
- All external URLs in `lib/links.ts` — never hardcoded in components or pages
- CIC reports link to Companies House filings — not hosted PDFs
- Footer must include: CIC registration number (13660924), registered address, links to legalhub.pecuvate.com (privacy + cookie policy)
- News posts: MDX files in `content/news/` — one file per post

## Brand Tokens (`globals.css @theme`)
- `--color-blue: #4A70C2` — primary
- `--color-blue-dark: #3558a8` — hover states
- `--color-blue-light: #7093d4` — accents
- `--color-blue-pale: #eef3fc` — backgrounds
- `--color-black: #1B1B1B` — body text
- `--color-mid: #4a4a4a` — secondary text
- `--color-muted: #7a7a8a` — captions
- `--color-cream: #f8f7f4` — page background
- `--color-warm-white: #fdfcfa` — card/section background
- `--color-border: #e5e1db` — borders

# Empowr Main Site

> **This repository is PUBLIC** (`PecuvateOrg/empowr-site-netlify`).
>
> **Devlog and memory location:** `../workspace-docs/empowr-site-netlify/`
>
> `DEVLOG.md` and `memory.md` are not kept in this repo — write session entries to the path
> above instead. See `NON-NEGOTIABLES.md` for what must never be committed here.

## Identity
Public website for Empowr CIC (empowrcic.org) — mission, programmes, impact, and audience routing. Replacing Wix. Not a transactional site.

## Self-Reference
This file is Layer 0 — routing only. Read `NON-NEGOTIABLES.md` before doing anything; project
detail lives in each CONTEXT.md.

## Routing
| Task | Go to | Read | Skills |
|---|---|---|---|
| Copy, page blueprints, narrative, programme descriptions | planning/ | planning/CONTEXT.md | — |
| UI, components, pages, routing, styling, news | src/ | src/CONTEXT.md | — |
| Deploy, env vars, Netlify config, domain cutover | ops/ | ops/CONTEXT.md | /netlify-deploy |

## Cross-Workspace Flows
- Content → build: read `planning/architecture/` for the target page → implement in `src/app/`
- Deploy: verify `src/` build → ops/ for Netlify deploy and Route 53 DNS cutover

## File Placement
- External URLs → `src/lib/links.ts`
- Shared TypeScript types → `src/lib/types.ts`
- Reusable components → `src/components/`
- Page files → `src/app/[route]/page.tsx`
- News posts → `src/content/news/`
- Architectural decisions → `planning/decisions/`

## Token Management
- Do not load `planning/architecture/` unless writing copy or building a specific page
- Do not load `planning/decisions/` unless reviewing or amending an architectural decision
- Do not load `ops/CONTEXT.md` unless deploying or configuring environment variables
- Do not load reference guides from `_config/` unless the task involves that concern

## Deployment
- Platform: Netlify
- Domain: empowrcic.org
- Branch: main
- Base directory: src/

## Skills and Tools Available

| Tool / Skill | Trigger | Purpose |
|---|---|---|
| `/netlify-deploy` | deploying to Netlify | Deploy to Netlify and configure `empowrcic.org` + Route 53 DNS |
| `/pre-build-check` | before any deploy | Validate build structure and frontend quality |
| `/pre-deploy-security` | before any deploy | Security hygiene scan — secrets, CVEs, headers, RLS; FAILs block the deploy |
| `/webapp-testing` | after frontend changes | Test UI with Playwright, capture screenshots |
| `/simplify` | after a feature is built | Review changed code for reuse, quality, and efficiency |

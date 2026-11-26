# Empowr Main Site

> **This repository is PUBLIC** (`PecuvateOrg/empowr-site-netlify`).
>
> **Devlog and memory location:** `../workspace-docs/empowr-site-netlify/`
>
> `DEVLOG.md` and `memory.md` are not kept in this repo — write session entries to the path
> above instead. See `NON-NEGOTIABLES.md` for what must never be committed here.

@NON-NEGOTIABLES.md

Other tools: read `NON-NEGOTIABLES.md` first, then `~/projects/NON-NEGOTIABLES.md`.

## Routing
| Task | Go to | Read | Skills |
|---|---|---|---|
| **Design: look, colours, components** | `design-system/` | `design-system/MASTER.md` (then the Empowr brand kit it names) | — |
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

## Deployment
- Platform: Netlify
- Domain: empowrcic.org
- Branch: main
- Base directory: src/

# Design System — Empowr Main Site (empowrcic.org)

> What **this project** decided. Read before building or changing any page.
> Layers, read bottom-up; each may be stricter than the one above, never looser:
> 1. Web Build Framework (`core/` + the matching `types/` overlay): rules for any build.
> 2. Brand kit: the Empowr brand kit, `company/identity/brand-guide.md` in the Empowr CNS (private hub): colours, logo, Nunito, voice and the UI house style, including its **contrast table**. **Not restated here.**
> 3. This file: only what is specific to this project.

| | |
|---|---|
| **Build type** | marketing-site |
| **Framework** | Next.js 16 + Tailwind |
| **Created** | 2026-11-14 (recorded from the code as it stands) |
| **Last decision** | 2026-11-14 |

---

## Layout

Public site: mission, programmes, impact, audience routing. Not transactional.

## Current state vs the brand kit

- Empowr blue ✅; Nunito plus Inter.
- Red text used 5 times.

---

## Decision log

### 2026-11-14 — Recorded
- First design record, from the group-wide design records pass. No code changed; gaps below
  are fixed per project, with screenshots before anything goes live.

## Open questions

- [ ] Inter is loaded alongside Nunito: drop it (one font, Nunito).
- [ ] Red text fails contrast (`--red` 2.94:1, `--red-dark` 4.13:1). Per the brand kit, error and warning text becomes `--black` in a `--red-soft` box with a red icon.

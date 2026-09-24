# Empowr Main Site — Non-Negotiables

Forced open by `CLAUDE.md`'s Self-Reference line — read before doing anything else in this
project.

## Rules

- **This repository is PUBLIC** (`PecuvateOrg/empowr-site-netlify`). Never create `DEVLOG.md` or
  `memory.md` in this repo — both filenames are gitignored here, so a copy created in this
  directory is silently never committed. Write session entries to
  `../workspace-docs/empowr-site-netlify/` in the private Empowr CIC hub instead.
- Never put live identifiers, unremediated security findings, or commercial state in any file
  tracked here. See `../CONTEXT.md` and `_config/guides/public-repo-collaboration.md`.

## Naming Conventions

- Components: PascalCase (`HeroSection.tsx`)
- Pages: lowercase route segment (`about/page.tsx`)
- Content files: kebab-case (`founding-story.md`)
- External link keys: camelCase in `src/lib/links.ts`

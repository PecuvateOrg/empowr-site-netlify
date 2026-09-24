# FAQs — `/faqs`

**Purpose:** Answer common questions about Empowr CIC, its structure, programmes, and how it works.  
**Audience:** New visitors, potential participants, partners, and funders who want to understand the organisation before engaging.

---

## Structure

- **Server component:** `app/faqs/page.tsx` — exports metadata, renders layout
- **Client component:** `app/faqs/FaqsAccordion.tsx` — accordion logic (`useState` per item)

## Sections

### 1. Page Header
- Blue background
- Headline: "Frequently Asked Questions"
- Sub-copy: "Answers to common questions about Empowr CIC, our programmes, and how we work."

### 2. FAQ Accordion
- Cream background
- **Grouped sections** — each section: heading (`h2`) + card (`bg-warm-white`, rounded-2xl, border) containing that section's items, sections spaced `space-y-12`
- Each item: question row (button) + collapsible answer paragraph
- Icon: `+` rotates to `×` on open (`rotate-45`)
- Content lives in the `FAQ_SECTIONS` array in `FaqsAccordion.tsx` (`{ title, items[] }`)

---

## Current FAQs (15, across 5 sections)

**About Empowr**
1. **What is a Community Interest Company (CIC)?** — CIC structure, profit reinvestment, CIC Regulator link (gov.uk), CIC 34 reporting
2. **Why did Empowr become a CIC?** — reinvesting surpluses; flexibility vs charities and traditional businesses
3. **What does Empowr CIC actually do?** — health activities provider, SE London, founded 2021; skating as current medium; links `/our-work`
4. **What is experiential learning?** — doing as the mechanism; three science pillars; links `/experiential-learning`

**Programmes**
5. **What is EELA?** — programme framework; MoveWell active, others planned; links eela.empowrcic.org
6. **What is ECCP?** — coaching certification pathway, 3 levels, pilot phase; links `/eccp`
7. **What ages do you work with?** — Kidz Space + Adults & Teens streams; **no hardcoded ages** — routes to eela.empowrcic.org (canonical for ages)

**Sessions & Booking**
8. **How do I book a session?** — advance payment, cashless, walk-in fee, waivers, quiz at start.empowrcic.org/quiz; **no hardcoded schedules/prices**
9. **What do I need to bring to a skating session?** — kit list (helmet, knee/elbow pads, wrist guards); skate hire notes
10. **What is your cancellation and refund policy?** — matches T&Cs/Programme Policies v1.1 (no-refund/no-cancel/no-transfer by default, discretionary exceptions via contact form); links `/legal/terms-and-conditions` + `/legal/programme-policies`

**Getting Involved**
11. **How can I get involved beyond attending sessions?** — Champions / Ambassadors / Heroes; links `/get-involved`
12. **How do donations work?** — Heroes platform hero.empowrcic.org; surplus reinvestment
13. **Can my school or organisation work with Empowr?** — four partnership categories; links `/partner-with-us`

**Impact & Accountability**
14. **What impact has Empowr had?** — CIC 34-verified only: ~10,000 attendances / 428 sessions / 700+ hours (YE2025), 4/5 wellbeing improvement (2023); links `/impact`
15. **How is Empowr governed?** — board of directors, public CIC 34 reports, profit reinvestment

---

## Content Rules

- **Source of truth is the Empowr KB** (`~/projects/vaults/EMPOWR CIC`, vault root — no `KNOWLEDGE BASE\` subfolder as of the v3.0 migration) — answers are derived from KB pages, not invented. Grounding pages: `entities/empowr-cic`, `entities/eela-programme`, `entities/sessions`, `entities/session-faqs`, `entities/eccp`, `entities/heroes-platform`, `entities/community-roles`, `concepts/experiential-learning`, `synthesis/impact-report`, `entities/board`, `processes/governance` (`entities/governance` was split into these two on 2026-08-18 — the old path no longer exists)
- **Never hardcode schedules, prices, or ages** — eela.empowrcic.org is canonical for session specifics; link there instead
- **Cancellation answer must track legal policy** (currently v1.1) — if T&Cs change, this FAQ changes
- **Impact figures only from CIC 34 reports** — nothing aspirational
- Public-facing links use empowrcic.org proxies (`/legal/:slug`, `/contact` form) — never raw legalhub.pecuvate.com or raw email addresses

---

## Status

**Live — 15 FAQs across 5 grouped sections** (expanded from 2 on 2026-07-27, sourced from the Empowr KB).

**To add more FAQs:** add to the relevant section's `items` in the `FAQ_SECTIONS` array in `app/faqs/FaqsAccordion.tsx`.

**Note:** `answer` type is `ReactNode` (not `string`) — use JSX for answers that need inline links or multiple paragraphs. Internal links use `next/link`; external links use `<a target="_blank">`.

---

## Notes

- Linked from the footer "About Us" column
- CIC explanation was originally on `/about` — moved here in the About page improvement pass

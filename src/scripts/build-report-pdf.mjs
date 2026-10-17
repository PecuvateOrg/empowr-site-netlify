// Renders /experiential-learning/report to an A4 PDF in public/reports/.
// Usage: `npm run build`, then `npm run report:pdf` — it serves the static export in out/
// itself. Set REPORT_URL to render a running site instead (e.g. `npm run dev` on :3000).
// Then rebuild/deploy so the new PDF ships.
import { chromium } from 'playwright-core'
import { createServer } from 'node:http'
import { mkdir, readFile } from 'node:fs/promises'
import { dirname, extname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2' }

// Minimal static server for out/: `/a/b` → out/a/b.html, matching Netlify's clean URLs.
function serveExport() {
  const outDir = resolve(root, 'out')
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    for (const file of [path, `${path}.html`, `${path}/index.html`]) {
      try {
        const body = await readFile(resolve(outDir, `.${file}`))
        res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' })
        return res.end(body)
      } catch {}
    }
    res.writeHead(404).end()
  })
  return new Promise((ok) => server.listen(0, () => ok(server)))
}

const server = process.env.REPORT_URL ? null : await serveExport()
const origin = process.env.REPORT_URL ?? `http://localhost:${server.address().port}`
const out = resolve(root, 'public/reports/empowr-non-medical-approach-to-mental-health-2025.pdf')

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1000, height: 1400 } })
  await page.goto(`${origin}/experiential-learning/report`, { waitUntil: 'networkidle' })

  // Print layout: the web page reflowed for A4 — smaller type (Tailwind is rem-based, so the
  // root size scales everything), no site chrome, and planned page starts per section.
  await page.addStyleTag({
    content: `
      html { font-size: 14.5px; }
      header, footer, hr, [data-pdf-hide] { display: none !important; }
      body, .bg-cream { background: #fff !important; }
      main > section { padding-top: 0 !important; padding-bottom: 0 !important; }
      main > section:first-child > div { padding: 30px 40px 26px !important; }
      main > section:nth-child(2) > div { padding: 20px 40px 0 !important; max-width: none !important; }
      main > section:nth-child(2) > div > * + * { margin-top: 22px !important; }
      .pdf-logo { height: 56px; width: auto; margin-bottom: 22px; filter: brightness(0) invert(1); }
      .pdf-page { break-before: page; padding-top: 6px; }
      .pdf-cards3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 12px !important; }
      .pdf-tight { zoom: 0.9; }
      .rounded-2xl { padding: 14px !important; break-inside: avoid; }
      .text-lg { font-size: 1.08rem !important; }
      h2 { break-after: avoid; }
      details summary { display: none; }
      details ol { font-size: 0.92rem; }
      * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    `,
  })
  await page.evaluate(() => {
    document.querySelectorAll('details').forEach((d) => (d.open = true))
    const block = (eyebrow) =>
      [...document.querySelectorAll('main p.uppercase')].find((p) => p.textContent.trim() === eyebrow)?.parentElement
    // Page plan: 1 cover + stats + problem · 2 science + evidence · 3 economic case + commitment · 4 references.
    for (const eyebrow of ['The Science', 'The Economic Case']) block(eyebrow)?.classList.add('pdf-page')
    block('The Evidence')?.querySelector('.grid')?.classList.add('pdf-cards3')
    for (const eyebrow of ['The Science', 'The Evidence']) block(eyebrow)?.classList.add('pdf-tight')
    const refs = document.querySelector('details')
    refs?.classList.add('pdf-page')
    refs?.insertAdjacentHTML('afterbegin', '<h2 class="text-2xl font-extrabold text-black" style="margin-bottom:12px">Sources &amp; References</h2>')
    const hero = document.querySelector('main > section:first-child > div')
    hero?.insertAdjacentHTML('afterbegin', '<img class="pdf-logo" src="/logo.png" alt="Empowr CIC">')
  })
  await page.waitForLoadState('networkidle')
  await page.emulateMedia({ media: 'screen' })

  await mkdir(dirname(out), { recursive: true })
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', bottom: '16mm', left: '0', right: '0' },
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `
      <div style="width:100%;font-size:8px;color:#6b7280;padding:0 14mm;display:flex;justify-content:space-between;font-family:sans-serif">
        <span>Empowr CIC · A Non-Medical Approach to Mental Health · empowrcic.org</span>
        <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
      </div>`,
  })
  console.log(`Wrote ${out}`)
} finally {
  await browser.close()
  server?.close()
}

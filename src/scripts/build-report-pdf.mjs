// Renders the experiential learning report to an A4 PDF in public/reports/.
// The PDF is a document-style edition laid out in scripts/report-pdf/report.html (text from the
// Empowr report, 2025) — the web page at /experiential-learning/report is the on-screen version.
// Usage: `npm run report:pdf`, then commit the PDF and deploy. Edit report.html to change the text.
import { chromium } from 'playwright-core'
import { mkdir, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = resolve(root, 'public/reports/empowr-non-medical-approach-to-mental-health-2025.pdf')

const logo = `data:image/png;base64,${(await readFile(resolve(root, 'public/logo.png'))).toString('base64')}`
const html = (await readFile(resolve(root, 'scripts/report-pdf/report.html'), 'utf8')).replace('{{LOGO}}', logo)

const browser = await chromium.launch()
try {
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)

  await mkdir(dirname(out), { recursive: true })
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `
      <div style="width:100%;font-size:7.5px;color:#8a909c;padding:0 22mm;display:flex;justify-content:space-between;font-family:Arial,sans-serif">
        <span>Empowr CIC · The Case for a Non-Medical Approach to Tackling Mental Health in the UK · 2025</span>
        <span class="pageNumber"></span>
      </div>`,
  })
  console.log(`Wrote ${out}`)
} finally {
  await browser.close()
}

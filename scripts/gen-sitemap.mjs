import { globby } from 'globby';

import fs from 'fs';

const BLOG_URL = 'https://geronimo.gs';

function addPage(page) {
  const path = page.replace('pages', '').replace('.tsx', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`${BLOG_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    '_posts/*.mdx',
    'pages/**/*.{ts,tsx}',
    '!pages/**/[*.{ts,tsx}',
    '!pages/_*.{ts,tsx}',
    '!pages/api',
  ])

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
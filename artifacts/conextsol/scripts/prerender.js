import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const routesToPrerender = [
  '/',
  '/services',
  '/services/website-design',
  '/services/web-development',
  '/services/custom-software-development',
  '/services/ui-ux-design',
  '/services/ecommerce-development',
  '/services/website-maintenance',
  '/services/google-ads-management',
  '/services/hosting',
  '/portfolio',
  '/portfolio/nexus-logistics',
  '/portfolio/apex-legal',
  '/portfolio/urban-nest',
  '/portfolio/lumiere-boutique',
  '/portfolio/finvest-capital',
  '/portfolio/bistro-booking',
  '/about',
  '/blog',
  '/blog/why-your-south-african-business-needs-a-professional-website',
  '/blog/how-much-does-a-website-cost-in-south-africa',
  '/blog/web-design-vs-web-development-whats-the-difference',
  '/blog/seo-for-south-african-businesses-complete-guide',
  '/blog/custom-software-vs-off-the-shelf-which-is-right-for-your-business',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms-of-service'
];

async function prerender() {
  const templatePath = path.resolve(root, 'dist/public/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/public/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Strip default fallback meta tags from the template so helmet tags replace them completely
  const cleanTemplate = rawTemplate
    .replace(/<title>[^<]*<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '');

  const serverEntryPath = path.resolve(root, 'dist/server/entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    console.error('dist/server/entry-server.js not found!');
    process.exit(1);
  }

  const { render } = await import(`file://${serverEntryPath}`);

  console.log(`Starting SSG prerender for ${routesToPrerender.length} routes...`);

  for (const url of routesToPrerender) {
    const { html, helmet } = render(url);

    const titleTag = helmet?.title?.toString() || '<title>Conextsol | Web Design & Development Cape Town</title>';
    const metaTags = helmet?.meta?.toString() || '';
    const linkTags = helmet?.link?.toString() || '';
    const scriptTags = helmet?.script?.toString() || '';

    const headContent = [titleTag, metaTags, linkTags, scriptTags].filter(Boolean).join('\n    ');

    let pageHtml = cleanTemplate.replace('</head>', `    ${headContent}\n  </head>`);

    if (html) {
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    }

    const filePath = url === '/' 
      ? path.resolve(root, 'dist/public/index.html')
      : path.resolve(root, `dist/public${url}/index.html`);

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, pageHtml, 'utf-8');
    console.log(`✓ Prerendered: ${url}`);
  }

  console.log('🎉 SSG Prerendering complete! All static HTML pages generated successfully.');
}

prerender().catch(err => {
  console.error('Prerender error:', err);
  process.exit(1);
});

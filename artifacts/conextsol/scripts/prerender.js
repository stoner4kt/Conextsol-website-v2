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
  '/terms-of-service',
  '/404'
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
    .replace(/<title>[^<]*<\/title>/gi, '')
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
    let { html, helmet } = render(url);
    const renderedHeadTags = [];
    html = html.replace(/<(title|meta|link)(?:\s[^>]*)?>[^<]*<\/title>|<(meta|link)(?:\s[^>]*)?\/>|<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, (tag) => {
      renderedHeadTags.push(tag);
      return "";
    });

    const metaTags = helmet?.meta?.toString() || '';
    const titleMatch = metaTags.match(/<meta[^>]+property=\"og:title\"[^>]+content=\"([^\"]+)\"[^>]*>/);
    const hasRenderedTitle = renderedHeadTags.some((tag) => tag.toLowerCase().startsWith('<title'));
    const renderedTitle = helmet?.title?.toString() || '';
    const titleTag = hasRenderedTitle ? '' : (titleMatch ? `<title>${titleMatch[1]}</title>` : (renderedTitle || '<title>Conextsol | Web Design & Development Cape Town</title>'));
    const linkTags = helmet?.link?.toString() || '';
    const scriptTags = helmet?.script?.toString() || '';

    const headContent = [...renderedHeadTags, titleTag, metaTags, linkTags, scriptTags].filter(Boolean).join('\n    ');

    let pageHtml = cleanTemplate.replace('</head>', `    ${headContent}\n  </head>`);

    if (html) {
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    }

    const filePath = url === '/'
      ? path.resolve(root, 'dist/public/index.html')
      : url === '/404'
        ? path.resolve(root, 'dist/public/404.html')
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

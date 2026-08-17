import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const today = new Date().toISOString().slice(0, 10);
const baseUrl = 'https://conextsol.co.za';
function valuesFromFile(file, regex) { const source = fs.readFileSync(path.join(root, file), 'utf8'); return [...source.matchAll(regex)].map((m) => m[1]); }
const serviceSlugs = valuesFromFile('src/data/services.ts', /slug:\s*'([^']+)'/g);
const portfolioIds = valuesFromFile('src/data/portfolio.ts', /id:\s*'([^']+)'/g);
const blogSource = fs.readFileSync(path.join(root, 'src/data/blog.ts'), 'utf8');
const blogPosts = [...blogSource.matchAll(/slug:\s*'([^']+)'[\s\S]*?publishedIsoDate:\s*'([^']+)'[\s\S]*?lastUpdated:\s*'([^']+)'/g)].map((m) => ({ slug: m[1], publishedIsoDate: m[2], lastUpdated: m[3] }));
const urls = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' }, { loc: '/services', changefreq: 'monthly', priority: '0.9' },
  ...serviceSlugs.map((slug) => ({ loc: `/services/${slug}`, changefreq: 'monthly', priority: '0.9' })),
  { loc: '/portfolio', changefreq: 'monthly', priority: '0.8' }, ...portfolioIds.map((id) => ({ loc: `/portfolio/${id}`, changefreq: 'monthly', priority: '0.7' })),
  { loc: '/about', changefreq: 'monthly', priority: '0.7' }, { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
  ...blogPosts.map((post) => ({ loc: `/blog/${post.slug}`, lastmod: post.lastUpdated || post.publishedIsoDate || today, changefreq: 'monthly', priority: '0.7' })),
  { loc: '/faq', changefreq: 'monthly', priority: '0.7' }, { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
  { loc: '/privacy-policy', changefreq: 'yearly', priority: '0.3' }, { loc: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url>\n    <loc>${baseUrl}${url.loc}</loc>\n    <lastmod>${url.lastmod || today}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml); console.log(`Generated sitemap.xml with ${urls.length} URLs.`);

import { supabase } from '../lib/supabase';

export async function generateSitemap(): Promise<string> {
  const baseUrl = window.location.origin;
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: 'about', changefreq: 'monthly', priority: '0.8' },
    { url: 'contact', changefreq: 'monthly', priority: '0.8' },
    { url: 'privacy', changefreq: 'yearly', priority: '0.5' },
    { url: 'terms', changefreq: 'yearly', priority: '0.5' },
    { url: 'disclaimer', changefreq: 'yearly', priority: '0.5' },
  ];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  staticPages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}/${page.url}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });

  const { data: articles } = await supabase
    .from('articles')
    .select('slug, updated_at')
    .eq('published', true)
    .order('updated_at', { ascending: false });

  if (articles) {
    articles.forEach(article => {
      const lastmod = new Date(article.updated_at).toISOString().split('T')[0];
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}/article/${article.slug}</loc>\n`;
      sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
      sitemap += '    <changefreq>weekly</changefreq>\n';
      sitemap += '    <priority>0.9</priority>\n';
      sitemap += '  </url>\n';
    });
  }

  sitemap += '</urlset>';
  return sitemap;
}

export function downloadSitemap(content: string) {
  const blob = new Blob([content], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sitemap.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generateRobotsTxt(): string {
  const baseUrl = window.location.origin;

  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
}

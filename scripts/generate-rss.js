const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://se-health-lab.com';
const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc2822(dateString) {
  return new Date(dateString).toUTCString();
}

const postsDir = path.join(__dirname, '..', 'content', 'posts');
const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');

const posts = fs.readdirSync(postsDir)
  .filter((fileName) => fileName.endsWith('.md'))
  .map((fileName) => {
    const fullPath = path.join(postsDir, fileName);
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(raw);
    const slug = data.slug || path.basename(fileName, '.md');

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
      category: data.category || '',
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const itemsXml = posts.map((post) => {
  const url = `${SITE_URL}/posts/${post.slug}`;
  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';

  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${toRfc2822(post.date)}</pubDate>
      <description>${escapeXml(post.description)}</description>${categoryXml}
    </item>`;
}).join('\n');

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ja</language>
    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`;

fs.writeFileSync(outputPath, rssXml, 'utf-8');
console.log(`✓ RSS generated: ${outputPath}`);

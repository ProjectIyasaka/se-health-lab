const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// XML特殊文字エスケープ
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// タイトルを折り返し（日本語考慮、1行最大20文字、最大3行）
function wrapTitle(title, maxChars = 20) {
  const lines = [];
  let current = '';
  for (const char of title) {
    current += char;
    if (current.length >= maxChars) {
      lines.push(current);
      current = '';
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

// サイト共通OGP（トップページ用）
const SITE_SVG = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e3a5f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1100" cy="80" r="220" fill="#1d4ed8" opacity="0.12"/>
  <circle cx="80" cy="560" r="160" fill="#0ea5e9" opacity="0.10"/>
  <rect x="80" y="240" width="6" height="160" fill="#3b82f6" rx="3"/>
  <text x="108" y="210" font-family="'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="bold" fill="#60a5fa" letter-spacing="2">IT HEALTH LAB</text>
  <text x="108" y="310" font-family="'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="bold" fill="#ffffff">IT Engineer's</text>
  <text x="108" y="375" font-family="'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="bold" fill="#ffffff">Health Science Lab</text>
  <text x="108" y="435" font-family="'Helvetica Neue', Arial, sans-serif" font-size="26" fill="#93c5fd">Proton Water / Cosmetics / Sports Nutrition</text>
  <text x="108" y="580" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" fill="#475569">se-health-lab.com</text>
  <text x="980" y="400" font-family="'Helvetica Neue', Arial, sans-serif" font-size="120" fill="#1d4ed8" opacity="0.3">⚗</text>
</svg>`;

// 記事別OGP SVG生成
function buildArticleSvg({ title, category }) {
  const lines = wrapTitle(title);
  const lineHeight = 68;
  const totalTitleHeight = lines.length * lineHeight;

  // タイトルを縦中央に配置（上下の余白を考慮）
  const titleStartY = Math.round((630 - totalTitleHeight) / 2) + 30;
  const accentLineY = titleStartY - 30;
  const accentLineHeight = totalTitleHeight + 20;

  const titleElements = lines.map((line, i) =>
    `<text x="108" y="${titleStartY + i * lineHeight}"
      font-family="'Yu Gothic', 'Meiryo', 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif"
      font-size="52" font-weight="bold" fill="#ffffff">${escapeXml(line)}</text>`
  ).join('\n  ');

  const catWidth = category.length * 22 + 48;

  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e3a5f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1100" cy="80" r="220" fill="#1d4ed8" opacity="0.12"/>
  <circle cx="80" cy="560" r="160" fill="#0ea5e9" opacity="0.10"/>

  <!-- 左アクセントライン -->
  <rect x="80" y="${accentLineY}" width="6" height="${accentLineHeight}" fill="#3b82f6" rx="3"/>

  <!-- サイト名 -->
  <text x="108" y="80"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="24" font-weight="bold" fill="#60a5fa" letter-spacing="2">IT HEALTH LAB</text>

  <!-- カテゴリバッジ -->
  <rect x="108" y="100" width="${catWidth}" height="38" rx="19" fill="#1d4ed8" opacity="0.75"/>
  <text x="${108 + 24}" y="125"
    font-family="'Yu Gothic', 'Meiryo', 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif"
    font-size="20" fill="#93c5fd">${escapeXml(category)}</text>

  <!-- 記事タイトル -->
  ${titleElements}

  <!-- ドメイン -->
  <text x="108" y="590"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="20" fill="#475569">se-health-lab.com</text>
</svg>`;
}

function renderSvg(svg, outputPath) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: { loadSystemFonts: true },
  });
  const pngBuffer = resvg.render().asPng();
  fs.writeFileSync(outputPath, pngBuffer);
  console.log('✓', outputPath);
}

// 出力ディレクトリ準備
const publicDir = path.join(__dirname, '..', 'public');
const ogDir = path.join(publicDir, 'og');
if (!fs.existsSync(ogDir)) fs.mkdirSync(ogDir, { recursive: true });

// 1. サイト共通OGP
renderSvg(SITE_SVG, path.join(publicDir, 'og-image.png'));

// 2. 記事別OGP
const postsDir = path.join(__dirname, '..', 'content', 'posts');
const mdFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

for (const file of mdFiles) {
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const { data } = matter(raw);
  const slug = data.slug || path.basename(file, '.md');
  const title = data.title || slug;
  const category = data.category || 'IT健康ラボ';

  renderSvg(buildArticleSvg({ title, category }), path.join(ogDir, `${slug}.png`));
}

console.log(`\n✓ 完了: ${mdFiles.length} 件の記事OGP + サイト共通OGP`);

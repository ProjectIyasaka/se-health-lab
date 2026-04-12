const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CATEGORY_CONFIG = [
  {
    slug: 'proton-water',
    name: 'プロトン水',
    summary: '違い / 成分 / 水分補給',
  },
  {
    slug: 'supplements',
    name: 'サプリメント',
    summary: '成分 / 価格 / 選び方',
  },
  {
    slug: 'pe-products',
    name: 'PE製品',
    summary: '有効成分 / 医薬部外品',
  },
];

// XML特殊文字エスケープ
function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const BREAK_CHARS = new Set([' ', '　', '｜', '|', '・', '：', ':', '／', '/', '(', '（', '。', '、']);
const LEADING_PROHIBITED = new Set(['｜', '|', '・', '：', ':', '）', ')', ']', '】', '』', '」', '、', '。', '？', '?']);

// タイトルを折り返し（禁則を少し考慮しつつ、1行最大文字数・最大行数を守る）
function wrapTitle(title, maxChars = 20, maxLines = 3) {
  const chars = Array.from(title.trim());
  const lines = [];
  let index = 0;

  while (index < chars.length && lines.length < maxLines) {
    const remaining = chars.length - index;
    const remainingLines = maxLines - lines.length;
    let target = Math.min(maxChars, Math.ceil(remaining / remainingLines));

    if (remaining <= maxChars || lines.length === maxLines - 1) {
      lines.push(chars.slice(index).join(''));
      break;
    }

    let end = Math.min(index + maxChars, chars.length);
    let breakAt = -1;

    for (let i = index; i < end; i += 1) {
      if (BREAK_CHARS.has(chars[i])) breakAt = i + 1;
    }

    if (breakAt === -1 || breakAt - index < Math.max(6, target - 5)) {
      breakAt = end;
    }

    while (breakAt < chars.length && LEADING_PROHIBITED.has(chars[breakAt])) {
      breakAt += 1;
    }

    lines.push(chars.slice(index, breakAt).join('').trim());
    index = breakAt;
  }

  return lines
    .map(line => line.trim())
    .filter(Boolean)
    .slice(0, maxLines);
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
  <text x="108" y="580" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" fill="#7dd3fc">se-health-lab.com</text>
  <text x="980" y="400" font-family="'Helvetica Neue', Arial, sans-serif" font-size="120" fill="#1d4ed8" opacity="0.3">⚗</text>
</svg>`;

// 記事別OGP SVG生成
function buildArticleSvg({ title, category, updatedAt }) {
  const lines = wrapTitle(title, 20, 3);
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
  const updatedLabel = updatedAt ? `更新 ${updatedAt}` : '';
  const updatedWidth = updatedLabel.length * 12 + 40;

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
  <text x="108" y="560"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="16" font-weight="bold" fill="#7dd3fc" letter-spacing="2">EVIDENCE REVIEW</text>

  <!-- カテゴリバッジ -->
  <rect x="108" y="100" width="${catWidth}" height="38" rx="19" fill="#1d4ed8" opacity="0.75"/>
  <text x="${108 + 24}" y="125"
    font-family="'Yu Gothic', 'Meiryo', 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif"
    font-size="20" fill="#93c5fd">${escapeXml(category)}</text>

  <!-- 更新日 -->
  <rect x="${1200 - updatedWidth - 108}" y="100" width="${updatedWidth}" height="36" rx="18" fill="#0f766e" opacity="0.78"/>
  <text x="${1200 - updatedWidth - 84}" y="123"
    font-family="'Yu Gothic', 'Meiryo', 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif"
    font-size="18" fill="#ccfbf1">${escapeXml(updatedLabel)}</text>

  <!-- 記事タイトル -->
  ${titleElements}

  <!-- ドメイン -->
  <text x="108" y="590"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="20" fill="#93c5fd">se-health-lab.com</text>
</svg>`;
}

function buildCategorySvg({ name, slug, summary }) {
  const lines = wrapTitle(`${name}の記事一覧`, 12, 2);
  const lineHeight = 74;
  const totalTitleHeight = lines.length * lineHeight;
  const titleStartY = Math.round((630 - totalTitleHeight) / 2) + 10;

  const titleElements = lines.map((line, i) =>
    `<text x="108" y="${titleStartY + i * lineHeight}"
      font-family="'Yu Gothic', 'Meiryo', 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif"
      font-size="58" font-weight="bold" fill="#ffffff">${escapeXml(line)}</text>`
  ).join('\n  ');

  const nameWidth = name.length * 24 + 56;

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
  <rect x="80" y="180" width="6" height="250" fill="#3b82f6" rx="3"/>

  <text x="108" y="86"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="24" font-weight="bold" fill="#60a5fa" letter-spacing="2">IT HEALTH LAB CATEGORY</text>

  <rect x="108" y="108" width="${nameWidth}" height="42" rx="21" fill="#1d4ed8" opacity="0.75"/>
  <text x="136" y="136"
    font-family="'Yu Gothic', 'Meiryo', 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif"
    font-size="22" fill="#bfdbfe">${escapeXml(name)}</text>

  ${titleElements}

  <text x="108" y="510"
    font-family="'Yu Gothic', 'Meiryo', 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif"
    font-size="28" fill="#bfdbfe">${escapeXml(summary)}</text>
  <text x="108" y="585"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="20" fill="#93c5fd">se-health-lab.com/category/${escapeXml(slug)}</text>
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
const mdFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

for (const file of mdFiles) {
  const fullPath = path.join(postsDir, file);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const stats = fs.statSync(fullPath);
  const { data } = matter(raw);
  const slug = data.slug || path.basename(file, '.md');
  const title = data.title || slug;
  const category = data.category || 'IT健康ラボ';
  const updatedAt = stats.mtime.toISOString().slice(0, 10);

  renderSvg(buildArticleSvg({ title, category, updatedAt }), path.join(ogDir, `${slug}.png`));
}

for (const category of CATEGORY_CONFIG) {
  renderSvg(
    buildCategorySvg({ name: category.name, slug: category.slug, summary: category.summary }),
    path.join(ogDir, `category-${category.slug}.png`)
  );
}

console.log(`\n✓ 完了: ${mdFiles.length} 件の記事OGP + カテゴリOGP + サイト共通OGP`);

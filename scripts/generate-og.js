const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e3a5f"/>
    </linearGradient>
  </defs>

  <!-- 背景 -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- 装飾円 -->
  <circle cx="1100" cy="80" r="220" fill="#1d4ed8" opacity="0.12"/>
  <circle cx="80"   cy="560" r="160" fill="#0ea5e9" opacity="0.10"/>

  <!-- 左アクセントライン -->
  <rect x="80" y="240" width="6" height="160" fill="#3b82f6" rx="3"/>

  <!-- サイト名（英語表記） -->
  <text x="108" y="210"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="28" font-weight="bold"
    fill="#60a5fa" letter-spacing="2">
    IT HEALTH LAB
  </text>

  <!-- キャッチコピー行1 -->
  <text x="108" y="310"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="52" font-weight="bold"
    fill="#ffffff">
    IT Engineer's
  </text>

  <!-- キャッチコピー行2 -->
  <text x="108" y="375"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="52" font-weight="bold"
    fill="#ffffff">
    Health Science Lab
  </text>

  <!-- サブテキスト -->
  <text x="108" y="435"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="26"
    fill="#93c5fd">
    Proton Water / Cosmetics / Sports Nutrition
  </text>

  <!-- ドメイン -->
  <text x="108" y="580"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="22"
    fill="#475569">
    se-health-lab.com
  </text>

  <!-- 右下アイコン風装飾 -->
  <text x="980" y="400"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="120"
    fill="#1d4ed8" opacity="0.3">
    ⚗
  </text>
</svg>
`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
fs.writeFileSync(outputPath, pngBuffer);
console.log('✓ OGP image generated:', outputPath);

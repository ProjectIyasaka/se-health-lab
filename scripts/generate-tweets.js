const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://se-health-lab.com';

const CATEGORY_TAGS = {
  'プロトン水': '#プロトン水 #水素水 #énazuma7 #機能性水',
  'PE製品': '#PE製品 #薬用コスメ #スキンケア #成分解析',
  'スポーツ栄養': '#スポーツ栄養 #水分補給 #アスリート',
};

function buildTweet({ title, description, slug, category, tldr }) {
  const url = `${SITE_URL}/posts/${slug}`;
  const tags = CATEGORY_TAGS[category] || `#${category} #健康科学`;

  // tldrから最初の1〜2項目を使う
  const points = (tldr || []).slice(0, 2).map(p => `・${p}`).join('\n');

  const body = points
    ? `${points}\n\n記事全文 → ${url}`
    : `記事全文 → ${url}`;

  return `【${title}】\n\n${body}\n\n${tags} #ITエンジニア #健康科学ラボ`;
}

// 投稿文の文字数チェック（X上限280文字）
function checkLength(tweet) {
  // URLは23文字換算（Twitter t.co短縮）
  const normalized = tweet.replace(/https?:\/\/\S+/g, 'x'.repeat(23));
  return normalized.length;
}

const postsDir = path.join(__dirname, '..', 'content', 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

// 日付降順でソート
const posts = files
  .map(file => {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { data } = matter(raw);
    return { ...data, slug: data.slug || path.basename(file, '.md') };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

console.log('='.repeat(60));
console.log('  X（Twitter）投稿文 自動生成');
console.log('='.repeat(60));

posts.forEach((post, i) => {
  const tweet = buildTweet(post);
  const len = checkLength(tweet);
  const warn = len > 280 ? ` ⚠️ ${len}文字（上限超過）` : ` ✓ ${len}文字`;

  console.log(`\n【記事 ${i + 1}/${posts.length}】${post.title}`);
  console.log(`日付: ${post.date}  カテゴリ: ${post.category}${warn}`);
  console.log('-'.repeat(60));
  console.log(tweet);
  console.log('-'.repeat(60));
});

console.log(`\n✓ ${posts.length} 件の投稿文を生成しました`);

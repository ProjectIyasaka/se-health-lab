const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { buildQueuedTweet, getTweetLength, MAX_TWEET_LENGTH, normalizeHashtag } = require('./lib/tweet-utils');

const postsDir = path.join(__dirname, '..', 'content', 'posts');
const socialPostsJson = path.join(__dirname, '..', 'content', 'social', 'x-posts.json');

function loadPosts() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') && !f.startsWith('_'));
  return files.map(file => {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { data } = matter(raw);
    const slug = data.slug || path.basename(file, '.md');
    return {
      ...data,
      id: `article:${slug}`,
      slug,
      kind: 'article',
      sourceLabel: '記事シェア',
      sortPriority: Number(data.x_priority) || 999,
    };
  });
}

function loadSocialPosts() {
  try {
    const raw = JSON.parse(fs.readFileSync(socialPostsJson, 'utf-8'));
    const items = Array.isArray(raw.items) ? raw.items : [];
    return items.map((item, index) => ({
      ...item,
      id: item.id || `${item.kind || 'social'}-${index + 1}`,
      slug: item.id || `${item.kind || 'social'}-${index + 1}`,
      date: item.date || 'テンプレート',
      category: item.category || 'ITエンジニア健康',
      sourceLabel: item.kind === 'question' ? '質問・アンケート' : '豆知識',
      sortPriority: Number(item.priority) || 999,
      hashtags: Array.isArray(item.hashtags) ? item.hashtags.map(normalizeHashtag).filter(Boolean) : [],
    }));
  } catch {
    return [];
  }
}

const posts = [...loadPosts(), ...loadSocialPosts()].sort((a, b) => {
  if (a.sortPriority !== b.sortPriority) return a.sortPriority - b.sortPriority;
  const aDate = a.date || '';
  const bDate = b.date || '';
  if (aDate === bDate) return String(a.id).localeCompare(String(b.id), 'ja');
  return aDate < bDate ? 1 : -1;
});

console.log('='.repeat(60));
console.log('  X（Twitter）投稿文 自動生成');
console.log('='.repeat(60));

posts.forEach((post, i) => {
  const tweet = buildQueuedTweet(post);
  const len = getTweetLength(tweet);
  const warn = len > MAX_TWEET_LENGTH ? ` ⚠️ ${len}文字（上限超過）` : ` ✓ ${len}文字`;

  console.log(`\n【${post.sourceLabel || '投稿'} ${i + 1}/${posts.length}】${post.title}`);
  console.log(`日付: ${post.date}  カテゴリ: ${post.category}${warn}`);
  console.log('-'.repeat(60));
  console.log(tweet);
  console.log('-'.repeat(60));
});

console.log(`\n✓ ${posts.length} 件の投稿文を生成しました`);

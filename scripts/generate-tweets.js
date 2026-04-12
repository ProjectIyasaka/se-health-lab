const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { buildTweet, getTweetLength, MAX_TWEET_LENGTH } = require('./lib/tweet-utils');

const postsDir = path.join(__dirname, '..', 'content', 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

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
  const len = getTweetLength(tweet);
  const warn = len > MAX_TWEET_LENGTH ? ` ⚠️ ${len}文字（上限超過）` : ` ✓ ${len}文字`;

  console.log(`\n【記事 ${i + 1}/${posts.length}】${post.title}`);
  console.log(`日付: ${post.date}  カテゴリ: ${post.category}${warn}`);
  console.log('-'.repeat(60));
  console.log(tweet);
  console.log('-'.repeat(60));
});

console.log(`\n✓ ${posts.length} 件の投稿文を生成しました`);

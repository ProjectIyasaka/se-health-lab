const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { TwitterApi } = require('twitter-api-v2');
const { buildTweet, getTweetLength, MAX_TWEET_LENGTH } = require('./lib/tweet-utils');
const envPath = path.join(__dirname, '..', '.env.local');

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
  }

  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

function requireEnv(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} が設定されていません。`);
  }
  return value;
}

async function main() {
  loadEnvFile(envPath);

  const slug = process.argv[2];
  if (!slug) {
    throw new Error('使い方: npm run tweet-post -- <post-slug>');
  }

  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
  if (!fs.existsSync(postPath)) {
    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
  }

  const raw = fs.readFileSync(postPath, 'utf-8');
  const { data } = matter(raw);
  const post = {
    slug,
    title: data.title || slug,
    category: data.category || '健康科学',
    tldr: Array.isArray(data.tldr) ? data.tldr : [],
    hashtags: Array.isArray(data.hashtags) ? data.hashtags : [],
  };

  const client = new TwitterApi({
    appKey: requireEnv('X_API_KEY'),
    appSecret: requireEnv('X_API_SECRET'),
    accessToken: requireEnv('X_ACCESS_TOKEN'),
    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
  });

  const tweet = buildTweet(post);
  const length = getTweetLength(tweet);
  if (length > MAX_TWEET_LENGTH) {
    throw new Error(`投稿文が長すぎます: ${length}文字`);
  }
  const response = await client.v2.tweet(tweet);
  console.log(`✓ Tweet posted: ${response.data.id}`);
}

main().catch((error) => {
  console.error('✗ Failed to post tweet');
  console.error(error.message);
  process.exit(1);
});

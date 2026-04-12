const twitterText = require('twitter-text');

const SITE_URL = 'https://se-health-lab.com';
const MAX_TWEET_LENGTH = 280;
const TARGET_TWEET_LENGTH = 270;

const CATEGORY_TAGS = {
  'プロトン水': ['#プロトン水', '#水素水', '#énazuma7', '#機能性水'],
  'PE製品': ['#PE製品', '#薬用コスメ', '#スキンケア', '#成分解析'],
  'スポーツ栄養': ['#スポーツ栄養', '#水分補給', '#アスリート'],
  'サプリメント': ['#サプリメント', '#成分解析', '#腸活', '#健康投資'],
};

const BRAND_TAGS = ['#健康科学ラボ', '#ITエンジニア'];

function getTweetLength(text) {
  return twitterText.parseTweet(text).weightedLength;
}

function trimToLength(text, maxLength) {
  if (!text) return '';
  if (getTweetLength(text) <= maxLength) return text;

  let trimmed = text.trim();
  while (trimmed && getTweetLength(`${trimmed}…`) > maxLength) {
    trimmed = trimmed.slice(0, -1).trimEnd();
  }
  return trimmed ? `${trimmed}…` : '';
}

function buildKeywordTags(post) {
  const source = `${post.title || ''} ${post.slug || ''} ${(post.tldr || []).join(' ')}`;
  const keywordMap = [
    { test: /(シリカ|silica)/i, tag: '#シリカ水' },
    { test: /(水素水|hydrogen)/i, tag: '#水素水' },
    { test: /(口コミ|レビュー|review)/i, tag: '#レビュー' },
    { test: /(成分|ingredient|解析)/i, tag: '#成分解析' },
    { test: /(腸活|酵素|DNJ)/i, tag: '#腸活' },
    { test: /(マラソン|ランナー)/i, tag: '#マラソン' },
    { test: /(格闘技|キックボクシング|計量)/i, tag: '#格闘技' },
    { test: /(スキンケア|クリーム|医薬部外品)/i, tag: '#スキンケア' },
  ];

  return keywordMap.filter(item => item.test.test(source)).map(item => item.tag);
}

function uniq(values) {
  return values.filter((value, index, array) => value && array.indexOf(value) === index);
}

function normalizeHashtag(tag) {
  if (!tag) return '';
  const trimmed = String(tag).trim().replace(/\s+/g, '');
  if (!trimmed) return '';
  return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function getManualTags(post) {
  if (!Array.isArray(post.hashtags)) return [];
  return uniq(post.hashtags.map(normalizeHashtag)).filter(Boolean);
}

function getTagSets(post) {
  const category = post.category || '健康科学';
  const manualTags = getManualTags(post);
  if (manualTags.length) {
    return [
      uniq([...manualTags, BRAND_TAGS[0]]),
      manualTags,
      uniq([manualTags[0], BRAND_TAGS[0]]),
      [manualTags[0]],
    ];
  }

  const categoryTags = CATEGORY_TAGS[category] || [`#${category}`, '#健康科学'];
  const keywordTags = buildKeywordTags(post);
  const preferred = uniq([categoryTags[0], ...keywordTags, BRAND_TAGS[0], BRAND_TAGS[1]]);
  const secondary = uniq([categoryTags[0], ...keywordTags.slice(0, 1), BRAND_TAGS[0]]);
  const compact = uniq([categoryTags[0], BRAND_TAGS[0]]);
  const minimal = uniq([categoryTags[0]]);

  return [
    preferred,
    secondary,
    compact,
    minimal,
  ];
}

function composeTweet({ title, slug, points = [], tags = [] }) {
  const url = `${SITE_URL}/posts/${slug}`;
  const titleBlock = `【${title}】`;
  const pointBlock = points.length ? `\n\n${points.map(point => `・${point}`).join('\n')}` : '';
  const footer = `\n\n記事全文 → ${url}`;
  const tagBlock = tags.length ? `\n\n${tags.join(' ')}` : '';
  return `${titleBlock}${pointBlock}${footer}${tagBlock}`;
}

function buildTweet(post) {
  const rawTitle = (post.tweet_title || post.title || post.slug || '').trim();
  const rawPointsSource = Array.isArray(post.tweet_points) && post.tweet_points.length
    ? post.tweet_points
    : Array.isArray(post.tldr)
      ? post.tldr
      : [];
  const rawPoints = rawPointsSource.filter(Boolean);
  const tagSets = getTagSets(post);

  const titleVariants = [
    rawTitle,
    trimToLength(rawTitle, 68),
    trimToLength(rawTitle, 56),
    trimToLength(rawTitle, 44),
  ].filter((value, index, array) => value && array.indexOf(value) === index);

  const pointVariants = [
    rawPoints.slice(0, 2),
    rawPoints.slice(0, 1),
    rawPoints[0] ? [trimToLength(rawPoints[0], 48)] : [],
    [],
  ];

  for (const title of titleVariants) {
    for (const points of pointVariants) {
      for (const tags of tagSets) {
        const tweet = composeTweet({ title, slug: post.slug, points, tags });
        if (getTweetLength(tweet) <= TARGET_TWEET_LENGTH) {
          return tweet;
        }
      }
    }
  }

  const fallback = composeTweet({
    title: trimToLength(rawTitle, 36) || (post.slug || '記事紹介'),
    slug: post.slug,
    points: [],
    tags: [getTagSets(post)[0][0]],
  });

  return getTweetLength(fallback) <= TARGET_TWEET_LENGTH
    ? fallback
    : composeTweet({
        title: trimToLength(rawTitle, 24) || '記事紹介',
        slug: post.slug,
        points: [],
        tags: [],
      });
}

module.exports = {
  SITE_URL,
  MAX_TWEET_LENGTH,
  TARGET_TWEET_LENGTH,
  CATEGORY_TAGS,
  getTweetLength,
  buildTweet,
};

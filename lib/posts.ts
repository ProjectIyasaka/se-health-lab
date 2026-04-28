import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt: string;
  category: string;
  categorySlug: string;
  readingMinutes?: number;
  hashtags?: string[];
  tweet_title?: string;
  tweet_points?: string[];
  tldr?: string[];
  faq?: { question: string; answer: string }[];
  references?: { title: string; url: string; isPrimary?: boolean }[];
}

export interface Post extends PostMeta {
  contentHtml: string;
  headings: string[];
}

function isPrimarySource(url: string): boolean {
  return [
    'mhlw.go.jp',
    'caa.go.jp',
    'nibiohn.go.jp',
    'e-healthnet.mhlw.go.jp',
    'japan-sports.or.jp',
    'jaaf.or.jp',
    'jds.or.jp',
    'umin.ne.jp',
    'pharm.or.jp',
  ].some((domain) => url.includes(domain));
}

export interface CategoryMeta {
  name: string;
  slug: string;
  description: string;
  featuredSlug?: string;
  readingGuide?: Array<{
    label: string;
    slug: string;
  }>;
  faq?: {
    question: string;
    answer: string;
  };
}

const categoryConfig: Record<string, CategoryMeta> = {
  プロトン水: {
    name: 'プロトン水',
    slug: 'proton-water',
    description: 'プロトン水とは何か、水素水との違い、スポーツ時の水分補給、成分の見方をまとめて読めるカテゴリです。プロトン水を比較したい人向けに、pH・シリカ・バナジウムなどの数値情報を軸に整理しています。',
    featuredSlug: 'what-is-proton-water',
    readingGuide: [
      { label: '最初に読む', slug: 'what-is-proton-water' },
      { label: '比較したい', slug: 'marathon-runner-hydration' },
      { label: '実践向け', slug: 'kickboxer-hydration' },
    ],
    faq: {
      question: 'プロトン水は水素水と何が違う？',
      answer: 'プロトン水は水素イオンやミネラルバランスに着目した水で、水素水は水素ガスを溶かした水です。比較するときは、名称よりも pH やシリカ、バナジウムなどの数値を確認する方が判断しやすくなります。',
    },
  },
  サプリメント: {
    name: 'サプリメント',
    slug: 'supplements',
    description: '桑の葉エキス、松葉エキス、プロトンXなど、サプリメントの成分、価格、選び方をデータで整理したカテゴリです。DNJや発酵食物繊維など、見るべき成分が何かを知りたい人向けにまとめています。',
    featuredSlug: 'mulberry-leaf-extract-analysis',
    readingGuide: [
      { label: '最初に読む', slug: 'mulberry-leaf-extract-analysis' },
      { label: '比較したい', slug: 'pine-needle-extract-analysis' },
      { label: '実践向け', slug: 'proton-x-enzyme-analysis' },
    ],
    faq: {
      question: 'サプリメントは何を基準に選べばいい？',
      answer: 'このカテゴリでは、主成分、1日量、価格、抽出方法の4点を主な比較軸にしています。イメージや口コミだけでなく、何が入っていて、どのくらい摂る設計なのかを見ると選びやすくなります。',
    },
  },
  PE製品: {
    name: 'PE製品',
    slug: 'pe-products',
    description: '薬用P.e-クリームなどPE製品の有効成分、医薬部外品としての見方、成分比較をまとめたカテゴリです。グリチルリチン酸やナイアシンアミドなど、成分表から選びたい人向けに整理しています。',
    featuredSlug: 'pe-cream-ingredients',
    readingGuide: [
      { label: '最初に読む', slug: 'pe-cream-ingredients' },
    ],
    faq: {
      question: 'PE製品は一般的な化粧品と何が違う？',
      answer: 'このカテゴリで扱う薬用P.e-クリームなどは医薬部外品で、有効成分と効能表現に一定のルールがあります。選ぶときは、医薬部外品として何が有効成分なのかを先に確認するのが基本です。',
    },
  },
  健康習慣: {
    name: '健康習慣',
    slug: 'health-habits',
    description: 'テレワーク・デスクワーク中のコンディション管理に役立つ健康習慣をまとめたカテゴリです。水分補給・睡眠・姿勢など、エンジニアが日常で実践できる習慣をデータで整理しています。',
    featuredSlug: 'telework-hydration',
    readingGuide: [
      { label: '最初に読む', slug: 'telework-hydration' },
    ],
    faq: {
      question: 'テレワーク中のコンディション管理で最初に見直すべきことは？',
      answer: '水分補給が最も見落とされやすく、効果が出やすい習慣です。通勤がなくなると補給のきっかけが減るため、意識的に仕組みを作ることが重要です。',
    },
  },
};

function estimateReadingMinutes(content: string): number {
  const plainText = content
    .replace(/^---[\s\S]*?---/, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*_>#-]/g, ' ')
    .replace(/\[[^\]]+\]\([^)]+\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const charCount = plainText.length;
  return Math.max(1, Math.ceil(charCount / 500));
}

function extractHeadings(content: string): string[] {
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('## '))
    .map((line) => line.replace(/^##\s+/, '').trim());
}

export function getCategoryMeta(categoryName: string): CategoryMeta {
  return categoryConfig[categoryName] ?? {
    name: categoryName,
    slug: encodeURIComponent(categoryName),
    description: `${categoryName}に関する記事一覧です。`,
  };
}

export function getAllCategories(): CategoryMeta[] {
  const categories = Array.from(new Set(getSortedPostsData().map((post) => post.category)));
  return categories.map((category) => getCategoryMeta(category));
}

export function getPostsByCategory(categorySlug: string): { category: CategoryMeta; posts: PostMeta[] } | null {
  const categories = getAllCategories();
  const category = categories.find((item) => item.slug === categorySlug);
  if (!category) return null;
  return {
    category,
    posts: getSortedPostsData().filter((post) => post.category === category.name),
  };
}

export function getSortedPostsData(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fn) => fn.endsWith('.md') && !fn.startsWith('_'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const stats = fs.statSync(fullPath);
      const { data, content } = matter(fileContents);
      return {
        slug,
        readingMinutes: estimateReadingMinutes(content),
        ...(data as Omit<PostMeta, 'slug'>),
        categorySlug: getCategoryMeta((data as Omit<PostMeta, 'slug'>).category).slug,
        updatedAt: stats.mtime.toISOString().slice(0, 10),
      };
    });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.filter((fn) => fn.endsWith('.md') && !fn.startsWith('_')).map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }));
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const stats = fs.statSync(fullPath);
  const { data, content } = matter(fileContents);
  const headings = extractHeadings(content);
  const processedContent = await remark()
    .use(remarkGfm)
    // Posts are authored in-repo and include trusted HTML blocks for CTA/author sections.
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    contentHtml,
    headings,
    readingMinutes: estimateReadingMinutes(content),
    ...(data as Omit<PostMeta, 'slug'>),
    references: ((data as Omit<PostMeta, 'slug'>).references ?? []).map((ref) => ({
      ...ref,
      isPrimary: isPrimarySource(ref.url),
    })),
    categorySlug: getCategoryMeta((data as Omit<PostMeta, 'slug'>).category).slug,
    updatedAt: stats.mtime.toISOString().slice(0, 10),
  };
}

# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-04-10T11:05:06.487Z

## Original task

以下のプランに従って実装してください。

## 実装タスク（優先順）

### 1. BreadcrumbList 構造化データ
- app/posts/[slug]/page.tsx に BreadcrumbList JSON-LD を追加（Home > Category > Article）
- app/category/[slug]/page.tsx に BreadcrumbList JSON-LD を追加（Home > Category）
- 既存の articleJsonLd, faqJsonLd の直後に追加し、同じ dangerouslySetInnerHTML パターンで描画

### 2. RSS フィード
- scripts/generate-rss.js を新規作成（generate-og.js と同じCJSスタイル、gray-matter で記事読み込み → public/feed.xml 出力）
- package.json の build スクリプトに node scripts/generate-rss.js を追加
- app/layout.tsx の head に link rel alternate type application/rss+xml href /feed.xml を追加

### 3. シェアボタン
- components/ShareButtons.tsx を新規作成（X/LINE/はてブの3ボタン、URLはencodeURIComponent）
- app/posts/[slug]/page.tsx の記事メタ直後と記事末尾の2箇所に ShareButtons を配置
- app/globals.css 末尾にシェアボタン用CSSを追加（既存CSS変数 var(--border), var(--radius) を使用）

### 4. X 自動投稿スクリプト
- scripts/tweet-post.js を新規作成（twitter-api-v2 パッケージ使用、.env.local から認証情報読み込み）
- package.json に tweet-post スクリプトを追加（node scripts/tweet-post.js）
- npm install twitter-api-v2 を実行

## Final prompt

以下のプランに従って実装してください。

## 実装タスク（優先順）

### 1. BreadcrumbList 構造化データ
- app/posts/[slug]/page.tsx に BreadcrumbList JSON-LD を追加（Home > Category > Article）
- app/category/[slug]/page.tsx に BreadcrumbList JSON-LD を追加（Home > Category）
- 既存の articleJsonLd, faqJsonLd の直後に追加し、同じ dangerouslySetInnerHTML パターンで描画

### 2. RSS フィード
- scripts/generate-rss.js を新規作成（generate-og.js と同じCJSスタイル、gray-matter で記事読み込み → public/feed.xml 出力）
- package.json の build スクリプトに node scripts/generate-rss.js を追加
- app/layout.tsx の head に link rel alternate type application/rss+xml href /feed.xml を追加

### 3. シェアボタン
- components/ShareButtons.tsx を新規作成（X/LINE/はてブの3ボタン、URLはencodeURIComponent）
- app/posts/[slug]/page.tsx の記事メタ直後と記事末尾の2箇所に ShareButtons を配置
- app/globals.css 末尾にシェアボタン用CSSを追加（既存CSS変数 var(--border), var(--radius) を使用）

### 4. X 自動投稿スクリプト
- scripts/tweet-post.js を新規作成（twitter-api-v2 パッケージ使用、.env.local から認証情報読み込み）
- package.json に tweet-post スクリプトを追加（node scripts/tweet-post.js）
- npm install twitter-api-v2 を実行

## Raw output

```text
実装しました。`BreadcrumbList` を記事・カテゴリの両ページに追加し、記事ページには共有ボタンを2箇所差し込み、RSS 生成と X 投稿スクリプトも追加しています。

主な変更は [app/posts/[slug]/page.tsx](/C:/Users/haruc/projects/se-health-lab/app/posts/[slug]/page.tsx#L4), [app/category/[slug]/page.tsx](/C:/Users/haruc/projects/se-health-lab/app/category/[slug]/page.tsx#L90), [components/ShareButtons.tsx](/C:/Users/haruc/projects/se-health-lab/components/ShareButtons.tsx#L1), [scripts/generate-rss.js](/C:/Users/haruc/projects/se-health-lab/scripts/generate-rss.js#L1), [scripts/tweet-post.js](/C:/Users/haruc/projects/se-health-lab/scripts/tweet-post.js#L1), [app/layout.tsx](/C:/Users/haruc/projects/se-health-lab/app/layout.tsx#L46), [app/globals.css](/C:/Users/haruc/projects/se-health-lab/app/globals.css#L1257), [package.json](/C:/Users/haruc/projects/se-health-lab/package.json#L5) です。RSS は [public/feed.xml](/C:/Users/haruc/projects/se-health-lab/public/feed.xml) に生成されます。

検証は `npm run generate-rss` と `npm run build` まで実行し、どちらも成功しています。`tweet-post` は `.env.local` に `X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_TOKEN_SECRET` が必要で、実行は `npm run tweet-post -- <post-slug>` です。


OpenAI Codex v0.118.0 (research preview)
--------
workdir: C:\Users\haruc\projects\se-health-lab
model: gpt-5.4
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: none
reasoning summaries: none
session id: 019d770d-758e-7971-b1b8-2d19b9bfb684
--------
user
以下のプランに従って実装してください。

## 実装タスク（優先順）

### 1. BreadcrumbList 構造化データ
- app/posts/[slug]/page.tsx に BreadcrumbList JSON-LD を追加（Home > Category > Article）
- app/category/[slug]/page.tsx に BreadcrumbList JSON-LD を追加（Home > Category）
- 既存の articleJsonLd, faqJsonLd の直後に追加し、同じ dangerouslySetInnerHTML パターンで描画

### 2. RSS フィード
- scripts/generate-rss.js を新規作成（generate-og.js と同じCJSスタイル、gray-matter で記事読み込み → public/feed.xml 出力）
- package.json の build スクリプトに node scripts/generate-rss.js を追加
- app/layout.tsx の head に link rel alternate type application/rss+xml href /feed.xml を追加

### 3. シェアボタン
- components/ShareButtons.tsx を新規作成（X/LINE/はてブの3ボタン、URLはencodeURIComponent）
- app/posts/[slug]/page.tsx の記事メタ直後と記事末尾の2箇所に ShareButtons を配置
- app/globals.css 末尾にシェアボタン用CSSを追加（既存CSS変数 var(--border), var(--radius) を使用）

### 4. X 自動投稿スクリプト
- scripts/tweet-post.js を新規作成（twitter-api-v2 パッケージ使用、.env.local から認証情報読み込み）
- package.json に tweet-post スクリプトを追加（node scripts/tweet-post.js）
- npm install twitter-api-v2 を実行
codex
リポジトリの構成と既存実装を確認して、指定の4点をそのまま差し込める形で進めます。まず対象ファイルと既存の JSON-LD、ビルドスクリプト、記事データ読み込み周りを見ます。
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "rg -n \"articleJsonLd|faqJsonLd|generate-og|gray-matter|feed.xml|twitter-api-v2|ShareButtons|application/rss\\+xml\" -S ." in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command 'rg --files app components scripts public' in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command 'Get-ChildItem -Force' in C:\Users\haruc\projects\se-health-lab
 succeeded in 488ms:

    Directory: C:\Users\haruc\projects\se-health-lab

[32;1mMode   [0m[32;1m              LastWriteTime[0m [32;1;3m        Length[0m[32;1m Name[0m
[32;1m----   [0m [32;1m             -------------[0m [32;1m        ------[0m [32;1m----[0m
d----       2026/04/10 金    19:45                [44;1m.git[0m
d----       2026/04/08 水    23:26                [44;1m.next[0m
d----       2026/04/10 金    19:43                [44;1m.omc[0m
d----       2026/04/08 水    22:43                [44;1mapp[0m
d----       2026/04/06 月    22:37                [44;1mcomponents[0m
d----       2026/04/05 日    21:27                [44;1mcontent[0m
d----       2026/04/10 金    19:13                [44;1mdocs[0m
d----       2026/04/05 日    22:28                [44;1mlib[0m
d----       2026/04/06 月    22:01                [44;1mnode_modules[0m
d----       2026/04/08 水    23:26                [44;1mout[0m
d----       2026/04/06 月    22:34                [44;1mpublic[0m
d----       2026/04/08 水    20:55                [44;1mscripts[0m
-a---       2026/04/05 日    21:28             81 .gitignore
-a---       2026/04/02 木    22:26            108 .gitmodules
-a---       2026/04/05 日    21:27            268 next-env.d.ts
-a---       2026/04/05 日    21:28            114 [32;1mnext.config.js[0m
-a---       2026/04/06 月    22:01          94664 package-lock.json
-a---       2026/04/06 月    23:08            676 package.json
-a---       2026/04/05 日    21:27            558 tsconfig.json


 succeeded in 845ms:
public\sitemap.xml
public\og-image.png
app\sitemap.ts
app\robots.ts
scripts\generate-tweets.js
components\Sidebar.tsx
components\Header.tsx
scripts\generate-og.js
components\Footer.tsx
components\DarkModeToggle.tsx
app\globals.css
app\privacy\page.tsx
public\og\what-is-proton-water.png
public\og\silica-water-vs-proton-water.png
public\og\proton-x-enzyme-analysis.png
public\og\pine-needle-extract-analysis.png
public\og\pe-cream-ingredients.png
public\og\mulberry-leaf-extract-analysis.png
public\og\marathon-runner-hydration.png
public\og\kickboxer-hydration.png
public\og\how-to-drink-proton-water.png
public\og\how-to-choose-proton-water.png
public\og\category-supplements.png
public\og\category-proton-water.png
public\og\category-pe-products.png
app\contact\page.tsx
app\about\page.tsx
app\layout.tsx
app\page.tsx
app\posts\[slug]\page.tsx
app\category\[slug]\page.tsx

 succeeded in 884ms:
.\scripts\generate-tweets.js:3:const matter = require('gray-matter');
.\scripts\generate-og.js:4:const matter = require('gray-matter');
.\package-lock.json:11:        "gray-matter": "^4.0.3",
.\package-lock.json:1228:    "node_modules/gray-matter": {
.\package-lock.json:1230:      "resolved": "https://registry.npmjs.org/gray-matter/-/gray-matter-4.0.3.tgz",
.\lib\posts.ts:3:import matter from 'gray-matter';
.\package.json:7:    "generate-og": "node scripts/generate-og.js",
.\package.json:9:    "build": "node scripts/generate-og.js && next build",
.\package.json:13:    "gray-matter": "^4.0.3",
.\app\posts\[slug]\page.tsx:56:  const articleJsonLd = {
.\app\posts\[slug]\page.tsx:75:  const faqJsonLd = post.faq && post.faq.length > 0
.\app\posts\[slug]\page.tsx:94:        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
.\app\posts\[slug]\page.tsx:96:      {faqJsonLd && (
.\app\posts\[slug]\page.tsx:99:          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
.\app\category\[slug]\page.tsx:74:  const faqJsonLd = category.faq
.\app\category\[slug]\page.tsx:93:      {faqJsonLd && (
.\app\category\[slug]\page.tsx:96:          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}

codex
対象箇所は見えました。次に、ページ実装と既存スクリプトの書き方を揃えるために `page.tsx` 群、`layout.tsx`、`generate-og.js`、`package.json`、記事ユーティリティを読みます。
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content app\\posts\\[slug]\\page.tsx" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content app\\category\\[slug]\\page.tsx" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content app\\layout.tsx" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content scripts\\generate-og.js" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command 'Get-Content package.json' in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content lib\\posts.ts" in C:\Users\haruc\projects\se-health-lab
 succeeded in 541ms:
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
    .filter((fn) => fn.endsWith('.md'))
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
  return fileNames.filter((fn) => fn.endsWith('.md')).map((fileName) => ({
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

 succeeded in 545ms:
{
  "name": "se-health-lab",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "generate-og": "node scripts/generate-og.js",
    "tweets": "node scripts/generate-tweets.js",
    "build": "node scripts/generate-og.js && next build",
    "start": "next start"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "remark": "^15.0.0",
    "remark-gfm": "^4.0.1",
    "remark-html": "^16.0.1"
  },
  "devDependencies": {
    "@resvg/resvg-js": "^2.6.2",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5"
  }
}

 succeeded in 546ms:
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
function buildArticleSvg({ title, category, updatedAt }) {
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
    font-size="16" font-weight="bold" fill="#38bdf8" letter-spacing="2">DATA REVIEW ARTICLE</text>

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
    font-size="20" fill="#475569">se-health-lab.com</text>
</svg>`;
}

function buildCategorySvg({ name, slug, summary }) {
  const lines = wrapTitle(`${name}の記事一覧`, 12);
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
    font-size="28" fill="#93c5fd">${escapeXml(summary)}</text>
  <text x="108" y="585"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="20" fill="#475569">se-health-lab.com/category/${escapeXml(slug)}</text>
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

 succeeded in 578ms:
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const BASE_URL = 'https://se-health-lab.com';

export const metadata: Metadata = {
  title: {
    default: 'ITエンジニアの健康科学ラボ | 成分データで語る健康科学',
    template: '%s | IT健康ラボ',
  },
  description: '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: BASE_URL,
    siteName: 'ITエンジニアの健康科学ラボ',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITエンジニアの健康科学ラボ | 成分データで語る健康科学',
    description: '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。',
    images: [`${BASE_URL}/og-image.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ITエンジニアの健康科学ラボ',
  url: BASE_URL,
  description: '現役ITエンジニアが成分データで語る健康科学',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');})();` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G2W2CT50W1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G2W2CT50W1');
          `}
        </Script>
      </body>
    </html>
  );
}

2026-04-10T11:01:21.774691Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.7 seconds
Output:
[31;1mGet-Content: [0m
[31;1m[36;1mLine |[0m
[31;1m[36;1m[36;1m   2 | [0m [36;1mGet-Content app\category\[slug]\page.tsx[0m
[31;1m[36;1m[36;1m[0m[36;1m[0m[36;1m     | [31;1m ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[31;1m[36;1m[36;1m[0m[36;1m[0m[36;1m[31;1m[31;1m[36;1m     | [31;1mAn object at the specified path app\category\[slug]\page.tsx does not exist, or has been filtered by the -Include or -Exclude parameter.[0m

 exited 1 in 653ms:
[31;1mGet-Content: [0m
[31;1m[36;1mLine |[0m
[31;1m[36;1m[36;1m   2 | [0m [36;1mGet-Content app\category\[slug]\page.tsx[0m
[31;1m[36;1m[36;1m[0m[36;1m[0m[36;1m     | [31;1m ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[31;1m[36;1m[36;1m[0m[36;1m[0m[36;1m[31;1m[31;1m[36;1m     | [31;1mAn object at the specified path app\category\[slug]\page.tsx does not exist, or has been filtered by the -Include or -Exclude parameter.[0m

2026-04-10T11:01:21.813487Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.7 seconds
Output:
[31;1mGet-Content: [0m
[31;1m[36;1mLine |[0m
[31;1m[36;1m[36;1m   2 | [0m [36;1mGet-Content app\posts\[slug]\page.tsx[0m
[31;1m[36;1m[36;1m[0m[36;1m[0m[36;1m     | [31;1m ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[31;1m[36;1m[36;1m[0m[36;1m[0m[36;1m[31;1m[31;1m[36;1m     | [31;1mAn object at the specified path app\posts\[slug]\page.tsx does not exist, or has been filtered by the -Include or -Exclude parameter.[0m

 exited 1 in 693ms:
[31;1mGet-Content: [0m
[31;1m[36;1mLine |[0m
[31;1m[36;1m[36;1m   2 | [0m [36;1mGet-Content app\posts\[slug]\page.tsx[0m
[31;1m[36;1m[36;1m[0m[36;1m[0m[36;1m     | [31;1m ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[31;1m[36;1m[36;1m[0m[36;1m[0m[36;1m[31;1m[31;1m[36;1m     | [31;1mAn object at the specified path app\posts\[slug]\page.tsx does not exist, or has been filtered by the -Include or -Exclude parameter.[0m

codex
実装方針は固まりました。次は、共有ボタンの差し込み位置と既存マークアップに合わせるため、投稿ページとカテゴリページを正確に読み、`globals.css` の末尾に足す前提でスタイルの文脈も確認します。
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content -LiteralPath 'app\\posts\\[slug]\\page.tsx'" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content -LiteralPath 'app\\category\\[slug]\\page.tsx'" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content app\\globals.css" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content scripts\\generate-tweets.js" in C:\Users\haruc\projects\se-health-lab
 succeeded in 474ms:
import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = 'https://se-health-lab.com';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  const url = `${BASE_URL}/posts/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      locale: 'ja_JP',
      siteName: 'ITエンジニアの健康科学ラボ',
      images: [{ url: `${BASE_URL}/og/${slug}.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}/og/${slug}.png`],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.params.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 4);
  const recentPosts = allPosts
    .filter((p) => p.slug !== slug && p.category !== post.category)
    .slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/posts/${slug}`,
    author: {
      '@type': 'Person',
      name: 'IT健康ラボ管理人',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ITエンジニアの健康科学ラボ',
      url: BASE_URL,
    },
  };
  const faqJsonLd = post.faq && post.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />

      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">トップ</Link><span>›</span>{post.title}
        </div>
      </div>

      <div className="article-wrapper">
        <main>
          <article className="article-main">
            <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>

            <div className="article-trust-box">
              <div className="article-trust-label">この記事について</div>
              <ul className="article-trust-list">
                <li>公的機関・学会・一次情報を優先して確認</li>
                <li>体験談ではなく成分表と数値を中心に整理</li>
                <li>食品・化粧品としての情報提供を目的に記載</li>
              </ul>
            </div>

            {post.tldr && post.tldr.length > 0 && (
              <div className="article-tldr">
                <div className="article-tldr-label">TL;DR — この記事のポイント</div>
                <ul>
                  {post.tldr.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            )}

            {post.headings.length > 0 && (
              <div className="article-outline">
                <div className="article-outline-label">この記事の構成</div>
                <ol className="article-outline-list">
                  {post.headings.map((heading, i) => (
                    <li key={i}>{heading}</li>
                  ))}
                </ol>
              </div>
            )}

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {(relatedPosts.length > 0 || recentPosts.length > 0) && (
              <div className="article-next-reads">
                <h2 className="article-next-reads-title">次に読むなら</h2>
                <div className="article-next-reads-list">
                  {[...relatedPosts, ...recentPosts].slice(0, 4).map((p) => (
                    <Link key={p.slug} href={`/posts/${p.slug}`} className="article-next-read-card">
                      <span className="article-next-read-cat">{p.category}</span>
                      <strong>{p.title}</strong>
                      <span>{p.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {post.faq && post.faq.length > 0 && (
              <section className="article-faq">
                <h2 className="article-faq-title">よくある質問</h2>
                <div className="article-faq-list">
                  {post.faq.map((item, index) => (
                    <div key={index} className="article-faq-card">
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {post.references && post.references.length > 0 && (
              <div className="article-references">
                <h2 className="references-title">参考文献・データソース</h2>
                <ul className="references-list">
                  {post.references.map((ref, i) => (
                    <li key={i}>
                      <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a>
                      {ref.isPrimary && <span className="reference-badge">一次情報</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </main>

        <aside className="sidebar">
          <div className="sidebar-box">
            <div className="sidebar-box-title">同カテゴリの関連記事</div>
            <ul className="sidebar-list">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {recentPosts.length > 0 && (
            <div className="sidebar-box">
              <div className="sidebar-box-title">新着記事</div>
              <ul className="sidebar-list">
                {recentPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <Footer />
    </>
  );
}

 succeeded in 468ms:
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllCategories, getPostsByCategory } from '@/lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = 'https://se-health-lab.com';

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryData = getPostsByCategory(slug);
  if (!categoryData) {
    return {};
  }

  const { category } = categoryData;
  const url = `${BASE_URL}/category/${category.slug}`;
  const imageUrl = `${BASE_URL}/og/category-${category.slug}.png`;

  return {
    title: `${category.name}の記事一覧`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${category.name}の記事一覧`,
      description: category.description,
      locale: 'ja_JP',
      siteName: 'ITエンジニアの健康科学ラボ',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name}の記事一覧`,
      description: category.description,
      images: [imageUrl],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryData = getPostsByCategory(slug);

  if (!categoryData) {
    notFound();
  }

  const { category, posts } = categoryData;
  const featuredPost = category.featuredSlug
    ? posts.find((post) => post.slug === category.featuredSlug)
    : undefined;
  const readingGuidePosts = (category.readingGuide ?? [])
    .map((guide) => ({
      label: guide.label,
      post: posts.find((post) => post.slug === guide.slug),
    }))
    .filter((item) => item.post)
    .map((item) => ({ label: item.label, post: item.post! }));
  const listPosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts;
  const faqJsonLd = category.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: category.faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: category.faq.answer,
            },
          },
        ],
      }
    : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />

      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">トップ</Link><span>›</span>{category.name}
        </div>
      </div>

      <section className="category-hero">
        <div className="category-hero-inner">
          <span className="category-hero-label">CATEGORY</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <div className="wrapper">
        <main>
          {featuredPost && (
            <section className="category-featured">
              <div className="category-featured-label">このカテゴリのおすすめ</div>
              <article className="category-featured-card">
                <Link href={`/category/${featuredPost.categorySlug}`} className="post-card-cat">
                  {featuredPost.category}
                </Link>
                <h2><Link href={`/posts/${featuredPost.slug}`}>{featuredPost.title}</Link></h2>
                <p className="post-card-desc">{featuredPost.description}</p>
                {featuredPost.tldr && featuredPost.tldr.length > 0 && (
                  <ul className="post-card-tldr">
                    {featuredPost.tldr.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <p className="post-card-meta">{featuredPost.date} | 読了目安 {featuredPost.readingMinutes}分</p>
              </article>
            </section>
          )}

          {readingGuidePosts.length > 0 && (
            <section className="category-reading-guide">
              <div className="category-reading-guide-label">読み順ガイド</div>
              <div className="category-reading-guide-list">
                {readingGuidePosts.map(({ label, post }) => (
                  <Link key={`${label}-${post.slug}`} href={`/posts/${post.slug}`} className="category-reading-guide-card">
                    <span className="category-reading-guide-step">{label}</span>
                    <strong>{post.title}</strong>
                    <span>{post.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="post-list">
            {listPosts.map((post) => (
              <article className="post-card" key={post.slug}>
                <Link href={`/category/${post.categorySlug}`} className="post-card-cat">{post.category}</Link>
                <h2><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>
                <p className="post-card-desc">{post.description}</p>
                {post.tldr && post.tldr.length > 0 && (
                  <ul className="post-card-tldr">
                    {post.tldr.slice(0, 2).map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <p className="post-card-meta">{post.date} | 読了目安 {post.readingMinutes}分</p>
              </article>
            ))}
          </div>

          {category.faq && (
            <section className="category-faq">
              <div className="category-faq-label">FAQ</div>
              <div className="category-faq-card">
                <h2>{category.faq.question}</h2>
                <p>{category.faq.answer}</p>
              </div>
            </section>
          )}
        </main>

        <Sidebar />
      </div>

      <Footer />
    </>
  );
}

 succeeded in 491ms:
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://se-health-lab.com';

const CATEGORY_TAGS = {
  'プロトン水': '#プロトン水 #水素水 #énazuma7 #機能性水',
  'PE製品': '#PE製品 #薬用コスメ #スキンケア #成分解析',
  'スポーツ栄養': '#スポーツ栄養 #水分補給 #アスリート',
  'サプリメント': '#サプリメント #成分解析 #腸活 #健康投資',
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

 succeeded in 547ms:
/* ============================
   IT健康ラボ - Global
   ============================ */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap');

:root {
  --green: #3a9e76;
  --green-dark: #2d7d5e;
  --green-light: #eaf6f1;
  --bg: #ffffff;
  --bg-alt: #f7f9fb;
  --text: #3f3b3f;
  --muted: #777;
  --border: #e0e0e0;
  --shadow: 0 2px 8px rgba(0,0,0,0.08);
  --radius: 6px;
}

/* Dark Mode */
[data-theme="dark"] {
  --bg: #1a1d23;
  --bg-alt: #22262f;
  --text: #d4d8e0;
  --muted: #8a8fa0;
  --border: #3a3f4a;
  --shadow: 0 2px 8px rgba(0,0,0,0.4);
  --green: #49b487;
  --green-dark: #b8f0d2;
  --green-light: #20392e;
}
[data-theme="dark"] .site-header { background: #1a1d23; }
[data-theme="dark"] .wrapper { background: transparent; }
[data-theme="dark"] .post-card,
[data-theme="dark"] .article-main,
[data-theme="dark"] .sidebar-box,
[data-theme="dark"] .card { background: #20252d; border-color: #3a3f4a; }
[data-theme="dark"] .post-card:hover,
[data-theme="dark"] .sidebar-box:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.28);
}
[data-theme="dark"] .article-body blockquote {
  background: #1f3028;
  border-left-color: #49b487;
  color: #c8d7ce;
}
[data-theme="dark"] .article-body pre,
[data-theme="dark"] .article-body code { background: #2a2d35; color: #d4d8e0; }
[data-theme="dark"] .article-body tr:nth-child(even) td { background: #22262f; }
[data-theme="dark"] .hero { background: linear-gradient(135deg, #163428 0%, #1a1d23 100%); }
[data-theme="dark"] .hero p { color: #b4becd; }
[data-theme="dark"] .category-hero { background: linear-gradient(135deg, #163428 0%, #1a1d23 100%); }
[data-theme="dark"] .category-hero p { color: #b4becd; }
[data-theme="dark"] .home-category-card {
  background: linear-gradient(135deg, #1c3228 0%, #1f242c 100%);
  border-color: #39424e;
}
[data-theme="dark"] .home-category-card strong { color: #e7edf6; }
[data-theme="dark"] .home-category-card span { color: #aeb9c8; }
[data-theme="dark"] .home-category-card:hover {
  border-color: #49b487;
  box-shadow: 0 8px 24px rgba(0,0,0,0.24);
}
[data-theme="dark"] .home-category-card em {
  color: var(--green-dark);
  background: rgba(73, 180, 135, 0.16);
}
[data-theme="dark"] .home-updated-card {
  background: #1f242c;
  border-color: #39424e;
}
[data-theme="dark"] .home-updated-card strong { color: #e7edf6; }
[data-theme="dark"] .home-updated-meta { color: #aeb9c8; }
[data-theme="dark"] .home-updated-card:hover {
  border-color: #49b487;
  box-shadow: 0 8px 24px rgba(0,0,0,0.24);
}
[data-theme="dark"] .category-featured-card {
  background: linear-gradient(135deg, #1c3228 0%, #1f242c 100%);
  border-color: #39424e;
}
[data-theme="dark"] .category-featured-card h2 a { color: #e7edf6; }
[data-theme="dark"] .category-featured-card h2 a:hover { color: var(--green-dark); }
[data-theme="dark"] .category-reading-guide-card {
  background: #1f242c;
  border-color: #39424e;
}
[data-theme="dark"] .category-reading-guide-card strong { color: #e7edf6; }
[data-theme="dark"] .category-reading-guide-card span:last-child { color: #aeb9c8; }
[data-theme="dark"] .category-reading-guide-card:hover {
  border-color: #49b487;
  box-shadow: 0 8px 24px rgba(0,0,0,0.24);
}
[data-theme="dark"] .category-reading-guide-step {
  color: var(--green-dark);
  background: rgba(73, 180, 135, 0.16);
}
[data-theme="dark"] .category-faq-card {
  background: #1f242c;
  border-color: #39424e;
}
[data-theme="dark"] .category-faq-card h2 { color: #e7edf6; }
[data-theme="dark"] .category-faq-card p { color: #aeb9c8; }
[data-theme="dark"] .hero h1,
[data-theme="dark"] .home-categories-label,
[data-theme="dark"] .home-updated-label,
[data-theme="dark"] .category-hero-label,
[data-theme="dark"] .category-featured-label,
[data-theme="dark"] .category-reading-guide-label,
[data-theme="dark"] .category-faq-label,
[data-theme="dark"] .article-body h3,
[data-theme="dark"] .author-box-name a,
[data-theme="dark"] .profile-title,
[data-theme="dark"] .badge,
[data-theme="dark"] .post-card-cat,
[data-theme="dark"] .article-cat { color: var(--green-dark); }
[data-theme="dark"] .post-card h2 a,
[data-theme="dark"] .sidebar-list a { color: #e7edf6; }
[data-theme="dark"] .post-card-tldr li,
[data-theme="dark"] .post-card-desc,
[data-theme="dark"] .sidebar-list li { color: #b1bac8; }
[data-theme="dark"] .post-card-meta { color: #93a0b1; }
[data-theme="dark"] .post-card-cat {
  background: #18382b;
  border: 1px solid rgba(73, 180, 135, 0.35);
}
[data-theme="dark"] .sidebar-box-title {
  background: linear-gradient(135deg, #2f8f69 0%, #237354 100%);
  color: #f3fff8;
}
[data-theme="dark"] .sidebar-list li { border-bottom-color: #333b47; }
[data-theme="dark"] .post-card h2 a:hover,
[data-theme="dark"] .sidebar-list a:hover { color: var(--green-dark); }
[data-theme="dark"] .article-tldr {
  background: #1d3027;
  border-color: #49b487;
}
[data-theme="dark"] .article-tldr-label { color: var(--green-dark); }
[data-theme="dark"] .article-trust-box {
  background: #1f242c;
  border-color: #39424e;
}
[data-theme="dark"] .article-trust-label { color: #9eabbb; }
[data-theme="dark"] .article-trust-list li { color: #b9c3d1; }
[data-theme="dark"] .article-outline {
  background: #1f242c;
  border-color: #39424e;
}
[data-theme="dark"] .article-outline-label { color: #9eabbb; }
[data-theme="dark"] .article-next-read-card {
  background: #1f242c;
  border-color: #39424e;
}
[data-theme="dark"] .article-next-read-card strong { color: #e7edf6; }
[data-theme="dark"] .article-next-read-card span:last-child { color: #aeb9c8; }
[data-theme="dark"] .article-next-read-card:hover {
  border-color: #49b487;
  box-shadow: 0 8px 24px rgba(0,0,0,0.24);
}
[data-theme="dark"] .article-next-read-cat {
  color: var(--green-dark);
  background: #18382b;
  border: 1px solid rgba(73, 180, 135, 0.35);
}
[data-theme="dark"] .article-faq-card {
  background: #1f242c;
  border-color: #39424e;
}
[data-theme="dark"] .article-faq-card h3 { color: #e7edf6; }
[data-theme="dark"] .article-faq-card p { color: #aeb9c8; }
[data-theme="dark"] .cta-btn,
[data-theme="dark"] .profile-contact-cta .cta-btn {
  background: #f4fff9;
  color: #184f3a;
}
[data-theme="dark"] .site-footer { background: #171b21; }
[data-theme="dark"] .footer-disclaimer-bar { border-bottom-color: #313844; }
[data-theme="dark"] .footer-disclaimer-text,
[data-theme="dark"] .footer-links a,
[data-theme="dark"] .footer-copy { color: #97a0b0; }
[data-theme="dark"] .footer-links a:hover { color: #dcefe5; }

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { overflow-x: hidden; }

body {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  line-height: 2;
  color: var(--text);
  background: var(--bg);
  letter-spacing: 0.02em;
  word-break: break-word;
  overflow-wrap: break-word;
  overflow-x: hidden;
}

a { color: var(--green); text-decoration: none; }
a:hover { text-decoration: underline; }

/* ============================
   Header
   ============================ */
.site-header {
  background: #fff;
  border-bottom: 3px solid var(--green);
  padding: 0 20px;
}
.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
}
.site-logo { display: flex; flex-direction: column; }
.site-logo .name {
  font-size: 22px;
  font-weight: 900;
  color: var(--green);
  letter-spacing: 0;
  line-height: 1.2;
  white-space: nowrap;
  word-break: normal;
  overflow-wrap: normal;
}
.site-logo .tagline { font-size: 11px; color: var(--muted); }
.site-nav { display: flex; gap: 24px; list-style: none; }
.site-nav a { font-size: 13px; font-weight: 700; color: var(--text); }
.site-nav a:hover { color: var(--green); text-decoration: none; }

/* ============================
   Layout
   ============================ */
.wrapper {
  max-width: 1100px;
  margin: 36px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
}

/* ============================
   Hero
   ============================ */
.hero {
  background: linear-gradient(135deg, var(--green-light) 0%, #fff 100%);
  border-bottom: 1px solid var(--border);
  padding: 40px 20px;
  text-align: center;
}
.hero-inner { max-width: 700px; margin: 0 auto; }
.hero h1 { font-size: 26px; font-weight: 900; color: var(--green-dark); margin-bottom: 12px; }
.hero p { font-size: 14px; color: var(--muted); line-height: 1.9; }

.category-hero {
  background: linear-gradient(135deg, var(--green-light) 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
  padding: 32px 20px 28px;
}
.category-hero-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.category-hero-label {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.14em;
  color: var(--green-dark);
}
.category-hero h1 {
  font-size: 28px;
  line-height: 1.4;
  margin-bottom: 10px;
  color: var(--text);
}
.category-hero p {
  max-width: 720px;
  font-size: 14px;
  line-height: 1.9;
  color: var(--muted);
}
.home-categories {
  padding: 28px 20px 8px;
}
.home-categories-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.home-categories-head {
  margin-bottom: 18px;
}
.home-categories-label {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.14em;
  color: var(--green-dark);
}
.home-categories-head h2 {
  font-size: 24px;
  line-height: 1.4;
  margin-bottom: 8px;
  color: var(--text);
}
.home-categories-head p {
  font-size: 14px;
  line-height: 1.9;
  color: var(--muted);
}
.home-categories-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.home-category-card {
  display: block;
  background: linear-gradient(135deg, var(--green-light) 0%, var(--bg) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 18px 16px;
  text-decoration: none;
  transition: transform .2s, box-shadow .2s, border-color .2s;
}
.home-category-card:hover {
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: var(--shadow);
  border-color: var(--green);
}
.home-category-card strong {
  display: block;
  font-size: 17px;
  line-height: 1.5;
  color: var(--text);
  margin-bottom: 8px;
}
.home-category-card span {
  display: block;
  font-size: 13px;
  line-height: 1.8;
  color: var(--muted);
  margin-bottom: 10px;
}
.home-category-card em {
  display: inline-block;
  font-style: normal;
  font-size: 11px;
  font-weight: 700;
  color: var(--green-dark);
  background: rgba(58, 158, 118, 0.12);
  border-radius: 999px;
  padding: 4px 8px;
}
.home-updated {
  padding: 8px 20px 0;
}
.home-updated-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.home-updated-head {
  margin-bottom: 14px;
}
.home-updated-label {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.14em;
  color: var(--green-dark);
}
.home-updated-head h2 {
  font-size: 22px;
  line-height: 1.4;
  color: var(--text);
}
.home-updated-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.home-updated-card {
  display: block;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 18px;
  text-decoration: none;
  transition: transform .2s, box-shadow .2s, border-color .2s;
}
.home-updated-card:hover {
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: var(--shadow);
  border-color: var(--green);
}
.home-updated-date {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 700;
  color: var(--green-dark);
}
.home-updated-card strong {
  display: block;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 6px;
}
.home-updated-meta {
  display: block;
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
}
.category-featured {
  margin-bottom: 24px;
}
.category-featured-label {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--green-dark);
}
.category-featured-card {
  background: linear-gradient(135deg, var(--green-light) 0%, var(--bg) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px 26px;
  box-shadow: var(--shadow);
}
.category-featured-card h2 {
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 8px;
}
.category-featured-card h2 a {
  color: var(--text);
  text-decoration: none;
}
.category-featured-card h2 a:hover { color: var(--green); }
.category-reading-guide {
  margin-bottom: 24px;
}
.category-reading-guide-label {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--green-dark);
}
.category-reading-guide-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.category-reading-guide-card {
  display: block;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 18px;
  text-decoration: none;
  transition: transform .2s, box-shadow .2s, border-color .2s;
}
.category-reading-guide-card:hover {
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: var(--shadow);
  border-color: var(--green);
}
.category-reading-guide-step {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 700;
  color: var(--green-dark);
  background: rgba(58, 158, 118, 0.12);
  border-radius: 999px;
  padding: 4px 8px;
}
.category-reading-guide-card strong {
  display: block;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 6px;
}
.category-reading-guide-card span:last-child {
  display: block;
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
}
.category-faq {
  margin-top: 24px;
}
.category-faq-label {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--green-dark);
}
.category-faq-card {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 22px;
}
.category-faq-card h2 {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text);
  margin-bottom: 8px;
}
.category-faq-card p {
  font-size: 14px;
  line-height: 1.9;
  color: var(--muted);
}

/* ============================
   Article List
   ============================ */
.post-list { display: flex; flex-direction: column; gap: 20px; }

.post-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  box-shadow: var(--shadow);
  transition: box-shadow .2s;
}
.post-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
.post-card-cat {
  display: inline-block;
  background: var(--green-light);
  color: var(--green-dark);
  font-size: 11px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 20px;
  margin-bottom: 8px;
}
.post-card h2 { font-size: 17px; font-weight: 700; margin-bottom: 8px; line-height: 1.6; }
.post-card h2 a { color: var(--text); }
.post-card h2 a:hover { color: var(--green); text-decoration: none; }
.post-card-desc { font-size: 13px; color: var(--muted); line-height: 1.8; margin-bottom: 10px; }
.post-card-tldr { margin: 0 0 12px; padding-left: 18px; }
.post-card-tldr li { font-size: 12px; line-height: 1.8; color: var(--text); margin-bottom: 2px; }
.post-card-meta { font-size: 11px; color: #aaa; }

/* ============================
   Sidebar
   ============================ */
.sidebar { display: flex; flex-direction: column; gap: 24px; }

.sidebar-box {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}
.sidebar-box-title {
  background: var(--green);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 16px;
  letter-spacing: .5px;
}
.sidebar-list { list-style: none; padding: 12px 16px; display: flex; flex-direction: column; gap: 8px; }
.sidebar-list li { font-size: 13px; border-bottom: 1px dashed var(--border); padding-bottom: 8px; }
.sidebar-list li:last-child { border-bottom: none; padding-bottom: 0; }
.sidebar-list a { color: var(--text); font-weight: 700; }
.sidebar-list a:hover { color: var(--green); text-decoration: none; }

.tag-cloud { display: flex; flex-wrap: wrap; gap: 6px; padding: 14px; }
.tag-cloud a {
  display: inline-block;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 20px;
  transition: background .15s;
}
.tag-cloud a:hover { background: var(--green-light); color: var(--green-dark); text-decoration: none; }

/* ============================
   Article Page
   ============================ */
.article-wrapper {
  max-width: 1100px;
  margin: 36px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
}

.article-main {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 36px;
  box-shadow: var(--shadow);
}

.article-cat {
  display: inline-block;
  background: var(--green-light);
  color: var(--green-dark);
  font-size: 11px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 20px;
  margin-bottom: 12px;
}
.article-title {
  font-size: 24px;
  font-weight: 900;
  line-height: 1.5;
  margin-bottom: 8px;
  color: var(--text);
}
.article-meta { font-size: 12px; color: #aaa; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }

.article-trust-box {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 18px;
  margin-bottom: 24px;
}
.article-trust-label {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.article-trust-list {
  padding-left: 18px;
  margin: 0;
}
.article-trust-list li {
  font-size: 13px;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 2px;
}

/* TL;DR Box */
.article-tldr {
  background: #f0f7f0;
  border: 1px solid var(--green);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 28px;
}
.article-tldr-label {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--green-dark);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.article-tldr ul { padding-left: 20px; margin: 0; }
.article-tldr li { font-size: 14px; line-height: 1.8; color: var(--text); margin-bottom: 4px; }
.article-outline {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 28px;
}
.article-outline-label {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.article-outline-list { padding-left: 20px; margin: 0; }
.article-outline-list li {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 4px;
}
.article-next-reads {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 2px solid var(--border);
}
.article-next-reads-title {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
  color: var(--text);
}
.article-next-reads-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.article-next-read-card {
  display: block;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 18px;
  text-decoration: none;
  transition: border-color .2s, transform .2s, box-shadow .2s;
}
.article-next-read-card:hover {
  text-decoration: none;
  border-color: var(--green);
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}
.article-next-read-card strong {
  display: block;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 6px;
}
.article-next-read-card span:last-child {
  display: block;
  font-size: 12px;
  line-height: 1.8;
  color: var(--muted);
}
.article-next-read-cat {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 700;
  color: var(--green-dark);
  background: var(--green-light);
  border-radius: 999px;
  padding: 2px 8px;
}
.article-faq {
  margin-top: 40px;
}
.article-faq-title {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
  color: var(--text);
}
.article-faq-list {
  display: grid;
  gap: 14px;
}
.article-faq-card {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 20px;
}
.article-faq-card h3 {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 8px;
}
.article-faq-card p {
  font-size: 14px;
  line-height: 1.9;
  color: var(--muted);
  margin: 0;
}

.article-body h2 {
  font-size: 20px;
  font-weight: 900;
  margin: 36px 0 14px;
  padding: 10px 16px;
  border-left: 4px solid var(--green);
  background: var(--green-light);
  border-radius: 0 var(--radius) var(--radius) 0;
  line-height: 1.5;
}
.article-body h3 {
  font-size: 17px;
  font-weight: 700;
  margin: 28px 0 10px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--green-light);
  color: var(--green-dark);
}
.article-body p { font-size: 15px; line-height: 2; margin-bottom: 16px; }
.article-body strong { font-weight: 700; }
.article-body ul, .article-body ol { padding-left: 24px; margin-bottom: 16px; }
.article-body li { font-size: 15px; line-height: 1.9; margin-bottom: 4px; }
.article-body hr { border: none; border-top: 1px solid var(--border); margin: 32px 0; }

.article-body table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  margin-bottom: 24px;
  border-radius: var(--radius);
  overflow: hidden;
}
.article-body th {
  background: var(--green);
  color: #fff;
  padding: 10px 14px;
  text-align: left;
  font-weight: 700;
}
.article-body td {
  padding: 9px 14px;
  border-bottom: 1px solid var(--border);
}
.article-body tr:nth-child(even) td { background: var(--bg-alt); }

.article-body blockquote {
  background: #fff8e6;
  border-left: 4px solid #f5a623;
  padding: 14px 18px;
  margin: 20px 0;
  border-radius: 0 var(--radius) var(--radius) 0;
  font-size: 14px;
  color: #555;
}

.article-body pre {
  background: #f3f4f6;
  border-radius: var(--radius);
  padding: 16px 20px;
  font-size: 13px;
  overflow-x: auto;
  margin-bottom: 20px;
  line-height: 1.7;
  font-family: 'Courier New', monospace;
}

.article-body code {
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
  font-family: 'Courier New', monospace;
}
.article-body pre code { background: none; padding: 0; }

/* CTA Box */
.cta-box {
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: #fff;
  border-radius: var(--radius);
  padding: 24px 28px;
  margin: 32px 0;
  text-align: center;
}
.cta-box p { font-size: 14px; opacity: .9; margin-bottom: 16px; }
.cta-btn {
  display: inline-block;
  background: #fff;
  color: var(--green-dark);
  font-weight: 900;
  font-size: 15px;
  padding: 12px 28px;
  border-radius: var(--radius);
  transition: opacity .2s;
}
.cta-btn:hover { opacity: .85; text-decoration: none; }

/* Disclaimer */
.disclaimer {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 18px;
  font-size: 12px;
  color: var(--muted);
  line-height: 1.8;
  margin-top: 32px;
}

/* ============================
   Contact / Privacy
   ============================ */
.page-wrapper {
  max-width: 760px;
  margin: 48px auto;
  padding: 0 20px;
}
.page-title {
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 3px solid var(--green);
  color: var(--text);
}
.page-body p { font-size: 15px; line-height: 2; margin-bottom: 16px; }
.page-body h2 { font-size: 18px; font-weight: 700; margin: 28px 0 10px; color: var(--green-dark); }

.contact-form { display: flex; flex-direction: column; gap: 18px; margin-top: 24px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 14px; font-weight: 700; }
.required { background: #e63946; color: #fff; font-size: 10px; padding: 1px 6px; border-radius: 3px; margin-left: 6px; }
.form-group input, .form-group textarea {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 10px 14px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color .2s;
  width: 100%;
}
.form-group input:focus, .form-group textarea:focus { border-color: var(--green); }
.form-group textarea { resize: vertical; }
.submit-btn {
  background: var(--green);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  padding: 12px 32px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  font-family: inherit;
  transition: opacity .2s;
  align-self: flex-start;
}
.submit-btn:hover { opacity: .85; }

/* ============================
   Footer
   ============================ */
.site-footer {
  background: #2d2d2d;
  color: #aaa;
  padding: 32px 20px;
  margin-top: 60px;
  font-size: 13px;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
/* Dark Mode Toggle */
.dark-toggle {
  background: none;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 15px;
  padding: 4px 10px;
  color: var(--text);
  line-height: 1;
  margin-left: 16px;
  transition: background 0.2s;
}
.dark-toggle:hover { background: var(--bg-alt); }

/* References */
.article-references { margin-top: 40px; padding-top: 24px; border-top: 2px solid var(--border); }
.references-title { font-size: 14px; font-weight: 700; color: var(--muted); margin-bottom: 10px; letter-spacing: 0.05em; }
.references-list { padding-left: 20px; }
.references-list li { font-size: 13px; line-height: 1.8; margin-bottom: 4px; }
.references-list a { color: var(--muted); text-decoration: underline; }
.references-list a:hover { color: var(--green); }
.reference-badge {
  display: inline-block;
  margin-left: 8px;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  color: var(--green-dark);
  background: var(--green-light);
  border: 1px solid rgba(58, 158, 118, 0.22);
  border-radius: 999px;
  padding: 4px 6px;
  vertical-align: middle;
}
[data-theme="dark"] .reference-badge {
  color: var(--green-dark);
  background: #18382b;
  border-color: rgba(73, 180, 135, 0.35);
}

.footer-disclaimer-bar { border-bottom: 1px solid #444; padding: 12px 20px; }
.footer-disclaimer-text { max-width: 1100px; margin: 0 auto; font-size: 11px; color: #888; line-height: 1.7; }
.footer-links { display: flex; gap: 20px; list-style: none; }
.footer-links a { color: #aaa; }
.footer-links a:hover { color: #fff; }
.footer-copy { font-size: 12px; }

/* ============================
   Breadcrumb
   ============================ */
.breadcrumb {
  background: var(--bg-alt);
  border-bottom: 1px solid var(--border);
  padding: 10px 20px;
  font-size: 12px;
  color: var(--muted);
}
.breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
.breadcrumb a { color: var(--green); }
.breadcrumb span { margin: 0 6px; }

/* ============================
   Profile / About Page
   ============================ */
.profile-header {
  display: flex;
  align-items: center;
  gap: 28px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 36px;
  box-shadow: var(--shadow);
  margin-bottom: 20px;
}
.profile-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: #fff;
  font-size: 28px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: 1px;
}
.profile-avatar img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
}
.profile-name { font-size: 22px; font-weight: 900; margin-bottom: 4px; }
.profile-title { font-size: 13px; color: var(--green-dark); font-weight: 700; margin-bottom: 8px; }
.profile-tagline { font-size: 14px; color: var(--muted); line-height: 1.8; }

.profile-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}
.badge {
  display: inline-block;
  background: var(--green-light);
  color: var(--green-dark);
  border: 1px solid var(--green);
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
}

.profile-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  margin-bottom: 24px;
}
.profile-table th {
  background: var(--green);
  color: #fff;
  padding: 10px 14px;
  text-align: left;
  font-weight: 700;
  width: 160px;
}
.profile-table td {
  padding: 9px 14px;
  border-bottom: 1px solid var(--border);
}
.profile-table tr:nth-child(even) td { background: var(--bg-alt); }

.profile-contact-cta {
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: #fff;
  border-radius: var(--radius);
  padding: 24px 28px;
  margin-top: 36px;
  text-align: center;
}
.profile-contact-cta p { font-size: 14px; opacity: .9; margin-bottom: 16px; }
.profile-contact-cta .cta-btn { background: #fff; color: var(--green-dark); }

/* Author Box (article pages) */
.author-box {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin: 32px 0;
}
.author-box-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.author-box-body { flex: 1; }
.author-box-name { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
.author-box-name a { color: var(--green-dark); }
.author-box-title { font-size: 12px; color: var(--muted); margin-bottom: 6px; }
.author-box-bio { font-size: 13px; color: var(--muted); line-height: 1.8; margin: 0; }

/* Spec / Datasheet Table */
.spec-table {
  margin-bottom: 24px;
  border: 2px solid var(--green-dark);
  border-radius: var(--radius);
  overflow: hidden;
}
.spec-table::before {
  content: '// SPEC';
  display: block;
  background: var(--green-dark);
  color: #7de5b0;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.18em;
  padding: 5px 14px;
  font-family: 'Courier New', monospace;
}
.spec-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  margin-bottom: 0;
}
.spec-table th {
  background: #1a2d24;
  color: #7de5b0;
  padding: 8px 12px;
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
}
.spec-table td {
  padding: 9px 14px;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
  font-family: 'Courier New', monospace;
}
.spec-table td:first-child {
  font-weight: 700;
  color: var(--green-dark);
  background: var(--bg-alt);
}
.spec-table tr:last-child td { border-bottom: none; }
.spec-table tr:nth-child(even) td { background: #f5fbf8; }
.spec-table tr:nth-child(even) td:first-child { background: #e8f4ee; }
[data-theme="dark"] .spec-table { border-color: var(--green); }
[data-theme="dark"] .spec-table::before { background: #0d1a12; color: #5aaa80; }
[data-theme="dark"] .spec-table th { background: #0d1a12; color: #5aaa80; }
[data-theme="dark"] .spec-table td:first-child { background: #1e2a22; }
[data-theme="dark"] .spec-table tr:nth-child(even) td { background: #232d27; }
[data-theme="dark"] .spec-table tr:nth-child(even) td:first-child { background: #1e2a22; }

@media (max-width: 768px) {
  .profile-header { flex-direction: column; text-align: center; padding: 24px 18px; }
  .profile-badges { justify-content: center; }
}

/* ============================
   Responsive
   ============================ */
@media (max-width: 768px) {
  .wrapper { grid-template-columns: 1fr; }
  .home-categories-grid { grid-template-columns: 1fr; }
  .home-updated-list { grid-template-columns: 1fr; }
  .article-wrapper {
    grid-template-columns: 1fr;
    padding: 0 12px;
    margin: 20px 0;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .article-wrapper > * { min-width: 0; width: 100%; max-width: 100%; }
  .sidebar { display: none; }
  .site-nav { display: none; }
  .article-main {
    padding: 20px 16px;
    min-width: 0;
    box-sizing: border-box;
  }
  .home-categories-head h2 { font-size: 21px; }
  .home-updated-head h2 { font-size: 20px; }
  .category-hero h1 { font-size: 22px; }
  .category-featured-card { padding: 20px 18px; }
  .category-featured-card h2 { font-size: 19px; }
  .category-reading-guide-list { grid-template-columns: 1fr; }
  .category-faq-card { padding: 18px 16px; }
  .category-faq-card h2 { font-size: 17px; }
  .article-title { font-size: 20px; }
  .article-body { max-width: 100%; overflow-x: hidden; }
  .article-body h2 { font-size: 17px; }
  .article-body table, .spec-table table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .article-body img { max-width: 100%; height: auto; }
  .article-body pre { overflow-x: auto; white-space: pre; }
  .article-next-reads-list { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; align-items: flex-start; }
  .header-inner { flex-wrap: wrap; gap: 8px; }
  .site-logo .name { font-size: 21px; }
  .site-logo .tagline { font-size: 10px; }
}

codex
記事 frontmatter の揺れを見てから RSS と投稿スクリプトを作ります。日付や説明の型が揃っていないと `feed.xml` の生成で無駄な分岐が増えるので、実データを確認します。
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-ChildItem content\\posts\\*.md | Select-Object -ExpandProperty Name" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content (Get-ChildItem content\\posts\\*.md | Select-Object -First 3 -ExpandProperty FullName)" in C:\Users\haruc\projects\se-health-lab
 succeeded in 481ms:
---
title: "énazuma7の口コミ・評判を調べた｜成分データと価格で整理する"
description: "énazuma7の口コミ・評判を、pH7.3・シリカ72mg/L・バナジウム4.7μg/Lの成分データをもとに整理。価格・製法・採水地など比較できる情報をITエンジニア目線で解説します。"
date: "2026-04-12"
category: "プロトン水"
slug: "enazuma7-review"
tldr:
  - "énazuma7はpH7.3・シリカ72mg/L・バナジウム4.7μg/Lという比較しやすい数値が揃っている"
  - "大分県玖珠町の地下200mから採水した天然水に独自電解製法を加えたプロトン水"
  - "口コミ・評判を調べるときは感想よりも成分数値で判断する方が比較しやすい"
faq:
  - question: "énazuma7はどこで買えますか？"
    answer: "ブルーオーシャンインターナショナルの公式ストアで購入できます。定期購入の設定があるかどうかは公式ページで最新情報をご確認ください。"
  - question: "énazuma7のシリカ72mg/Lは高い方ですか？"
    answer: "国内産のミネラルウォーターとしては高めの数値です。比較対象としては、シリカ含有量を売りにしたナチュラルウォーターが30〜60mg/L程度のものが多く、72mg/Lは比較軸として見やすい数値です。"
  - question: "énazuma7はどんな人に向いていますか？"
    answer: "成分数値で飲料を比較したい人、日常の水分補給を見直したい人、シリカやバナジウムなどのミネラル含有量を重視する人に向いています。体感よりデータで判断したい層に合う商品設計だと言えます。"
  - question: "énazuma7とシリカ水の違いは何ですか？"
    answer: "シリカ水が主にシリカ（ケイ素）含有量を訴求するのに対し、énazuma7はプロトン水として水素イオンバランスと複数ミネラルの組み合わせを特徴としています。それぞれ着目している成分・仕組みが異なります。"
references:
  - title: "国立健康・栄養研究所 健康食品の素材情報データベース"
    url: "https://hfnet.nibiohn.go.jp/"
  - title: "厚生労働省 食品の安全に関する情報"
    url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/index.html"
  - title: "消費者庁 健康食品に関する景品表示法・健康増進法上の留意事項"
    url: "https://www.caa.go.jp/policies/policy/food_labeling/health_promotion/"
  - title: "一般社団法人プロトンインターナショナル 公式サイト"
    url: "https://www.proton-intl-jp.com/"
---

## はじめに：「口コミ」より「成分データ」で判断する

「énazuma7の口コミが知りたい」という検索をする人は、おそらく購入前に**何かしらの判断基準**を求めています。

ただ、飲料の口コミは感想の集合であり、「飲んだら体が楽になった」「なんとなく調子がいい」といった体感レビューは、比較材料にしにくいのが現実です。

私がénazuma7を調べたのは、**比較できる情報が揃っているかどうか**を確認するためです。ITエンジニアとして日々の水分補給を考えるとき、成分表と数値が出ていない製品は判断のしようがありません。

結論から言うと、énazuma7は**pH・シリカ・バナジウム・採水地・製法という主要な比較軸が公開されていて、データとして扱いやすい商品**です。

この記事ではénazuma7の成分スペック、価格、製法背景を整理し、どういう判断基準でこの商品を検討するかを解説します。

---

## énazuma7の基本スペック

まず成分データを整理します。

<div class="spec-table">
<table>
<thead>
<tr><th>項目</th><th>数値・情報</th><th>見方のポイント</th></tr>
</thead>
<tbody>
<tr><td>pH</td><td><strong>7.3</strong></td><td>中性寄り。日常飲用として無理のないレンジ</td></tr>
<tr><td>シリカ（ケイ素）</td><td><strong>72mg/L</strong></td><td>国内産として比較的高め。シリカ水との比較軸になる</td></tr>
<tr><td>バナジウム</td><td><strong>4.7μg/L</strong></td><td>微量ミネラル。公開している商品は少なく差別化になる</td></tr>
<tr><td>採水地</td><td>大分県玖珠町 地下200m</td><td>採水地が明示されている点で由来を確認しやすい</td></tr>
<tr><td>製法</td><td>独自電解製法</td><td>プロトン水としての加工工程が加わっている</td></tr>
<tr><td>カテゴリ</td><td>プロトン水（Proton Water）</td><td>水素水とは異なるアプローチの機能性水</td></tr>
<tr><td>価格</td><td>¥8,880（税込）</td><td>本数・容量は公式ページで確認を</td></tr>
</tbody>
</table>
</div>

---

## 製法と採水地の背景

### 大分県玖珠町 地下200mとは

玖珠町は大分県の内陸部に位置する自然豊かな地域で、九州山地のミネラルを含んだ地層から採水しています。地下200mというのは、地表の汚染物質の影響を受けにくい深層帯から汲み上げていることを示します。

採水地が明示されている点は、産地不明の商品と比較したときの**情報透明性**として評価できます。

### 独自電解製法：プロトン水としての加工

天然水そのものに、独自の電解製法でプロトン（H⁺）をチャージするのがénazuma7の製造アプローチです。

製造元の一般社団法人プロトンインターナショナルは、H⁺（水素イオン）に着目した水の研究・普及を行っている法人です。なお、飲料としての体内への作用については研究段階であり、確定的な効果は現時点では示されていません。

---

## シリカ72mg/Lの位置づけ

シリカ（ケイ素）は骨・皮膚・血管などの結合組織の構成成分として知られるミネラルです。水中のシリカは「飲料可能な形態」で摂取できる点で注目されることがあります。

市販のミネラルウォーターとの比較軸として見ると：

| 水の種類（例） | シリカ含有量の目安 |
|---|---|
| 一般的な日本の軟水 | 5〜30mg/L程度 |
| シリカ水として売られる製品 | 30〜60mg/L程度 |
| **énazuma7** | **72mg/L** |
| 南九州系のシリカリッチ天然水 | 70〜100mg/L程度 |

72mg/Lは国内製品の中でシリカ含有量が多い部類に入ります。シリカを意識して飲料を選ぶ場合、数値として比較できるのは判断材料になります。

---

## バナジウム4.7μg/Lについて

バナジウムは微量ミネラルの一種です。日本では静岡県の富士山麓の水に含まれることで知られており、バナジウム含有を売りにする天然水もあります。

4.7μg/Lという数値は、天然水としてはバナジウムが含まれる水準です。ただし、健康機能との関係については確定的なエビデンスが限られており、研究段階として理解しておく必要があります。

---

## 口コミ・評判の読み方

「énazuma7 口コミ」「énazuma7 評判」で検索すると、さまざまな感想が出てきます。よく見られるパターンを整理します。

### ポジティブな口コミの傾向

- 「水が飲みやすい」「まろやかな感じがする」
- 「継続して飲んでいる」「リピートした」
- 「デスクワーク中に手元に置くようにした」

### ネガティブまたは慎重な口コミの傾向

- 「価格が高い」「続けるのがしんどい」
- 「体感の変化は正直わからない」
- 「他の水との違いが明確にはわからない」

### 口コミを判断材料にするときの注意点

口コミは個人の体感報告であり、体質・生活習慣・他の飲食物との組み合わせが異なる状態での感想です。比較材料として使うには、**成分数値と価格**を軸にした方が判断しやすいです。

エンジニア的に言えば、仕様書（成分表）が読めない製品は評価しにくい。その点でénazuma7は比較しやすい商品設計です。

---

## 価格と継続コストの試算

| 項目 | 内容 |
|---|---|
| 本体価格 | ¥8,880（税込） |
| 1日あたりのコスト目安 | 公式ページの本数・容量を確認して計算 |
| 購入方法 | 公式ストアにて確認 |

健康目的で飲料を選ぶなら、**続けられる価格かどうか**は判断の重要な軸です。1回試して終わりではなく、継続した水分補給として位置づけるなら、月あたりのコストを計算してから判断することをおすすめします。

---

## énazuma7が向いている人・向いていない人

### 向いている人

- 日常の水分補給に使う水を**成分で比較して選びたい**人
- シリカ・バナジウムなどのミネラル含有量を意識している人
- 採水地・製法が明示されている商品を選びたい人
- 健康意識が高く、日々のコンディション管理を意識しているデスクワーカー

### 向いていない人

- 「飲んで何か変わった」という即効感を期待している人
- とにかく安い水を大量に飲みたい人
- 成分の数値よりブランドの知名度で選びたい人

---

## まとめ：データとして評価できる商品かどうか

énazuma7を調べた結論を一言で言うと、**比較できる情報が揃っている商品**です。

| 評価ポイント | 内容 |
|---|---|
| 成分データの透明性 | pH・シリカ・バナジウムが明示されている |
| 採水地の明示 | 大分県玖珠町 地下200m |
| 製法の説明 | 独自電解製法（プロトン水） |
| 価格帯 | ¥8,880（継続コストの確認が必要） |
| ブランド背景 | 一般社団法人プロトンインターナショナルが研究・普及 |

口コミや評判に頼るより、成分スペックを自分の判断軸と照合する方が、ミスマッチが少なくなります。

成分・価格・容量・本数を確認した上で、自分の継続コストや生活スタイルと照らし合わせて判断するのがおすすめです。

<div class="cta-box">
<p>énazuma7の成分・価格・購入方法の最新情報は公式ストアでご確認ください。</p>
<a href="https://store.blueoceanint.co.jp/?blueoceanint=33" class="cta-btn" target="_blank" rel="noopener">énazuma7の詳細・購入はこちら →</a>
</div>

<div class="author-box">
<div class="author-box-avatar">IT</div>
<div class="author-box-body">
<p class="author-box-name"><a href="/about">IT健康ラボ管理人</a></p>
<p class="author-box-title">視能訓練士（国家資格）/ 総合病院眼科5年・手術室勤務 / フリーランスITエンジニア7年（Java・JavaScript）</p>
<p class="author-box-bio">医療従事者としてのエビデンス重視の視点と、ITエンジニアの比較思考で健康製品の成分を整理。感覚ではなく、仕様として読めるデータを重視しています。</p>
</div>
</div>

<div class="disclaimer">
⚠️ <strong>免責事項</strong>：本記事は食品としての一般的な情報提供を目的としており、特定の疾病の治療・予防を目的とした医学的アドバイスではありません。記載の成分情報は公開データをもとに整理したものであり、効果・効能を保証するものではありません。
</div>
---
title: "プロトン水の選び方｜成分・pH・価格の比較ポイントを解説"
description: "プロトン水を選ぶときに見るべきポイントを、成分・pH・価格・続けやすさの観点で整理。シリカ72mg/L・pH7.3などの数値をもとに比較軸を解説します。"
date: "2026-04-09"
category: "プロトン水"
slug: "how-to-choose-proton-water"
tldr:
  - "プロトン水の選び方は、名称より成分数値と続けやすさを見る方が分かりやすい"
  - "比較するときは、pH・シリカ・バナジウム・価格・用途の5点が基本"
  - "毎日飲む水として選ぶなら、過度な期待より比較しやすいデータを優先したい"
faq:
  - question: "プロトン水を選ぶときは何を最初に見ればいいですか？"
    answer: "最初に見るべきなのは、商品名よりも成分数値です。pH、シリカ、バナジウム、採水地、価格のように比較できる情報が揃っているかを確認すると判断しやすくなります。"
references:
  - title: "国立健康・栄養研究所 健康食品の素材情報データベース"
    url: "https://hfnet.nibiohn.go.jp/"
  - title: "厚生労働省 食品の安全に関する情報"
    url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/shokuhin/index.html"
  - title: "消費者庁 健康食品に関する景品表示法・健康増進法上の留意事項"
    url: "https://www.caa.go.jp/policies/policy/food_labeling/health_promotion/"
---

## はじめに：プロトン水は「名前」ではなく「比較軸」で選ぶ

プロトン水を選びたい人が最初に迷うのは、「結局どの商品を見ればいいのか分からない」という点だと思います。実際、健康系の飲料は言葉の印象が先行しやすく、名称だけでは中身の違いが読み取りにくいことが多いです。

結論から言うと、プロトン水を選ぶときは**商品名の雰囲気より、成分数値と続けやすさを見た方が失敗しにくい**です。

この記事では、ITエンジニアの比較思考に寄せて、プロトン水の選び方を5つの軸で整理します。

---

## まず見るべき5つの比較ポイント

### 1. pH値：毎日飲む前提で見やすい指標

pHは水の性質をざっくり把握するための基礎データです。強いアルカリ性をアピールする商品もありますが、日常的に飲む水としては**極端な数値より、継続しやすいレンジかどうか**を見る方が実用的です。

### 2. ミネラル成分：シリカ・バナジウムなどの数値

プロトン水を比較するときは、シリカ、バナジウムなどのミネラル成分が開示されているかが重要です。曖昧な説明より、何mg/L、何μg/Lといった数値が出ている方が比較しやすくなります。

### 3. 採水地・製法：由来が分かるか

採水地や製法が明示されている商品は、比較時の判断材料が増えます。地下水なのか、どの地域の水なのか、独自製法が何を狙っているのか。このあたりが見えると、単なるイメージ訴求から一歩進めます。

### 4. 価格：1本の価格ではなく継続コスト

毎日飲む想定なら、1本あたりの価格だけでなく、月単位の継続コストを見るべきです。健康投資として現実的かどうかを判断するには、**「続けられるか」**がかなり重要です。

### 5. 用途：普段飲みか、運動時か

日常のベースウォーターとして飲むのか、スポーツ時の水分補給の比較対象として見るのかで、重視するポイントは変わります。普段飲みなら継続性、運動時なら補給設計との相性まで見る必要があります。

---

## 比較表：プロトン水を選ぶときのチェック項目

| 比較項目 | 見る理由 | チェックの目安 |
|---|---|---|
| pH値 | 飲用設計の方向性を把握しやすい | 中性寄りか、極端な数値か |
| シリカ | ミネラル比較の代表指標になりやすい | 数値が開示されているか |
| バナジウム | 商品差を見やすい微量成分 | 数値が公開されているか |
| 採水地・製法 | 商品背景の比較材料になる | 採水地・製法が明示されているか |
| 価格 | 継続可否に直結する | 月単位で見て無理がないか |

---

## énazuma7を比較例にすると何が見えるか

プロトン水の比較例として見やすいのが、énazuma7のように数値が整理されている商品です。

<div class="spec-table">
<table>
<thead><tr><th>項目</th><th>数値・情報</th><th>見方</th></tr></thead>
<tbody>
<tr><td>pH</td><td><strong>7.3</strong></td><td>中性寄りで日常飲用の比較に使いやすい</td></tr>
<tr><td>シリカ</td><td><strong>72mg/L</strong></td><td>国内産として高めの比較軸</td></tr>
<tr><td>バナジウム</td><td><strong>4.7μg/L</strong></td><td>微量ミネラルとして差が見える</td></tr>
<tr><td>採水地</td><td>大分県玖珠町 地下200m</td><td>由来を把握しやすい</td></tr>
<tr><td>製法</td><td>独自電解製法</td><td>商品の設計意図を読みやすい</td></tr>
</tbody>
</table>
</div>

ここで重要なのは、énazuma7が優れていると断定することではなく、**比較に使える数字が揃っている**という点です。プロトン水を選ぶときは、こうした比較可能な情報の量そのものが判断材料になります。

---

## こんな選び方は避けたい

### 「体に良さそう」で決める

抽象的なコピーだけで選ぶと、後から他商品と比較しにくくなります。

### 数値が一切開示されていない

成分や採水地、製法がほとんど見えない場合、比較のしようがありません。

### 価格だけで判断する

安さは重要ですが、水として継続する前提なら、飲みやすさや成分開示も同時に見る必要があります。

---

## まとめ：プロトン水は「比較しやすいデータ」で選ぶ

プロトン水の選び方を一言でまとめると、**名称や雰囲気ではなく、比較しやすい数字があるかで選ぶ**ということです。

| 選び方の軸 | 優先度 |
|---|---|
| pH・ミネラルなどの数値 | 高い |
| 採水地・製法の明示 | 高い |
| 継続コスト | 高い |
| イメージ訴求の強さ | 低い |

エンジニア的に言えば、仕様が見えないものは比較しにくい。プロトン水も同じです。毎日飲む水として検討するなら、まずは成分表と数値が見える商品から比較する方が合理的です。

<div class="cta-box">
<p>比較しやすい成分データを見ながらプロトン水を検討したい方は、公式サイトの数値情報も確認しておくと判断しやすくなります。</p>
<a href="https://store.blueoceanint.co.jp/?blueoceanint=33" class="cta-btn" target="_blank" rel="noopener">énazuma7の成分・価格を確認する →</a>
</div>

<div class="author-box">
<div class="author-box-avatar">IT</div>
<div class="author-box-body">
<p class="author-box-name"><a href="/about">IT健康ラボ管理人</a></p>
<p class="author-box-title">視能訓練士（国家資格）/ 総合病院眼科5年・手術室勤務 / フリーランスITエンジニア7年（Java・JavaScript）</p>
<p class="author-box-bio">医療従事者としてのエビデンス重視の視点と、ITエンジニアの比較思考で健康製品の成分を整理。感覚ではなく、仕様として読めるデータを重視しています。</p>
</div>
</div>

<div class="disclaimer">
⚠️ <strong>免責事項</strong>：本記事は食品としての一般的な情報提供を目的としており、特定の疾病の治療・予防を目的とした医学的アドバイスではありません。
</div>
---
title: "プロトン水の飲み方｜タイミング・量・続け方の考え方を解説"
description: "プロトン水の飲み方を、朝・仕事中・運動時・食事中のタイミング別に整理。どのくらい飲むか、続けるときの考え方をデータ志向で解説します。"
date: "2026-04-11"
category: "プロトン水"
slug: "how-to-drink-proton-water"
tldr:
  - "プロトン水の飲み方は、特別な裏技より日常の水分補給にどう組み込むかが重要"
  - "朝、仕事中、運動時など、飲む場面ごとに役割を分けると続けやすい"
  - "量は一気飲みより、普段の摂水計画の中で無理なく置き換える方が現実的"
faq:
  - question: "プロトン水はいつ飲むのが一番いいですか？"
    answer: "特定の正解時間があるというより、朝の水分補給、仕事中、運動前後など、普段の水分摂取の中に無理なく組み込む方が続けやすいです。日常のベースウォーターとして扱うのが現実的です。"
references:
  - title: "厚生労働省 健康のため水を飲もう講座"
    url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/topics/bukyoku/kenkou/suido/nomou/"
  - title: "厚生労働省 熱中症の予防について"
    url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/nettyuu/index.html"
  - title: "国立健康・栄養研究所 健康食品の素材情報データベース"
    url: "https://hfnet.nibiohn.go.jp/"
---

## はじめに：プロトン水は「いつ飲むか」より「どう組み込むか」

プロトン水の飲み方を調べている人は、「朝がいいのか」「食事中か」「運動前後か」といったタイミングが気になると思います。

ただ、結論から言えば、**特別な飲み方を探すより、普段の水分補給の中にどう組み込むかを決める方が重要**です。

水そのものは毎日の行動に紐づくものなので、続けられる飲み方かどうかが最終的な判断になります。この記事では、プロトン水を日常のどこで飲みやすいかを場面別に整理します。

---

## 基本方針：ベースウォーターとして考える

プロトン水を飲む場合でも、水分補給の基本は変わりません。一度に大量に飲むより、日常の中で分散して飲む方が現実的です。

エンジニア的に言えば、**バッチ処理より定期実行**です。朝に一気に飲むより、1日の流れの中で安定して摂る方が続けやすいです。

---

## タイミング別の考え方

### 朝

起床後は、睡眠中に失った水分を補うタイミングとして分かりやすいです。朝の1杯を固定すると、習慣化しやすくなります。

### 仕事中

デスクワーク中は水分補給が抜けやすいため、最も実用的なタイミングです。特に長時間の集中作業や会議が続く日は、ルールベースで飲む方が安定します。

### 食事中・食後

普段の飲み物を置き換える形で使いやすいタイミングです。ただし、ここに特別な効果を期待しすぎるより、単純に水分摂取を安定させる目的で考える方が無理がありません。

### 運動前後

運動前後の水分補給では、他の水やスポーツドリンクとどう使い分けるかが重要です。発汗量が多い場合は、ナトリウム補給も別で考える必要があります。

---

## 飲む量の考え方

プロトン水だけを特別扱いして大量に飲む必要はありません。基本は、日々の水分摂取量の一部をプロトン水に置き換える形で十分です。

| 飲み方 | 考え方 |
|---|---|
| 朝の1杯 | 習慣化しやすい |
| 仕事中に少しずつ | 最も現実的 |
| 運動前後に使う | 他の補給設計と一緒に考える |
| 一気飲み | 続きにくく、実用性が低い |

---

## こんな人は続けやすい

### 普段から水を飲む習慣がある人

すでに水分補給の習慣がある人は、置き換えだけで始めやすいです。

### デスクワーク中心の人

仕事中の飲み物として固定しやすいため、習慣にしやすいです。

### 数字で選びたい人

飲み方よりも、どの成分をどう見ているかを意識しやすい人は、継続の納得感を持ちやすいです。

---

## まとめ：飲み方の正解は「続けられる配置」

プロトン水の飲み方で大事なのは、特別な裏技ではなく、**日常のどこに置くと続けられるか**です。

| 優先したいこと | 飲み方の考え方 |
|---|---|
| 習慣化したい | 朝の1杯か仕事中に固定 |
| デスクワーク中心 | 仕事中に少しずつ |
| 運動にも使いたい | 他の補給設計と合わせて使う |

毎日飲むものは、理論より運用が大事です。プロトン水も、生活の中で無理なく置き換えられるかどうかを基準にした方が、結局は続けやすくなります。

<div class="cta-box">
<p>日常の水分補給にどう組み込めそうかを考えながら、成分データや価格もまとめて確認したい方は公式情報も見ておくと判断しやすくなります。</p>
<a href="https://store.blueoceanint.co.jp/?blueoceanint=33" class="cta-btn" target="_blank" rel="noopener">énazuma7の詳細を見る →</a>
</div>

<div class="author-box">
<div class="author-box-avatar">IT</div>
<div class="author-box-body">
<p class="author-box-name"><a href="/about">IT健康ラボ管理人</a></p>
<p class="author-box-title">視能訓練士（国家資格）/ 総合病院眼科5年・手術室勤務 / フリーランスITエンジニア7年（Java・JavaScript）</p>
<p class="author-box-bio">健康製品も運用設計が大事だと考えています。続かない方法より、日常に組み込める方法の方が結果として合理的です。</p>
</div>
</div>

<div class="disclaimer">
⚠️ <strong>免責事項</strong>：本記事は食品としての一般的な情報提供を目的としており、特定の疾病の治療・予防を目的とした医学的アドバイスではありません。
</div>

 succeeded in 485ms:
enazuma7-review.md
how-to-choose-proton-water.md
how-to-drink-proton-water.md
kickboxer-hydration.md
marathon-runner-hydration.md
mulberry-leaf-extract-analysis.md
pe-cream-ingredients.md
pine-needle-extract-analysis.md
proton-x-enzyme-analysis.md
silica-water-vs-proton-water.md
what-is-proton-water.md

codex
これから編集に入ります。`BreadcrumbList` の追加、RSS 生成スクリプトとビルド統合、共有ボタン実装、X 投稿スクリプト追加をまとめて反映し、その後に依存追加とビルド確認まで進めます。
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command 'npm install twitter-api-v2' in C:\Users\haruc\projects\se-health-lab
 succeeded in 1826ms:

added 1 package, and audited 125 packages in 1s

80 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

2026-04-10T11:02:49.148032Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in C:\Users\haruc\projects\se-health-lab\package.json:
  "scripts": {
    "dev": "next dev",
    "generate-og": "node scripts/generate-og.js",
    "tweets": "node scripts/generate-tweets.js",
    "build": "node scripts/generate-og.js && next build",
    "start": "next start"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "remark": "^15.0.0",
    "remark-gfm": "^4.0.1",
    "remark-html": "^16.0.1"
  },
codex
依存追加で `package.json` が更新されたので、パッチの一部がずれました。内容を再読して差分を整理し、編集を分けて安全に当て直します。
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command 'Get-Content package.json' in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Test-Path components\\ShareButtons.tsx; Test-Path scripts\\generate-rss.js; Test-Path scripts\\tweet-post.js" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content -LiteralPath 'app\\posts\\[slug]\\page.tsx'" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content -LiteralPath 'app\\category\\[slug]\\page.tsx'" in C:\Users\haruc\projects\se-health-lab
 succeeded in 429ms:
import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = 'https://se-health-lab.com';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  const url = `${BASE_URL}/posts/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      locale: 'ja_JP',
      siteName: 'ITエンジニアの健康科学ラボ',
      images: [{ url: `${BASE_URL}/og/${slug}.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}/og/${slug}.png`],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.params.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 4);
  const recentPosts = allPosts
    .filter((p) => p.slug !== slug && p.category !== post.category)
    .slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/posts/${slug}`,
    author: {
      '@type': 'Person',
      name: 'IT健康ラボ管理人',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ITエンジニアの健康科学ラボ',
      url: BASE_URL,
    },
  };
  const faqJsonLd = post.faq && post.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />

      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">トップ</Link><span>›</span>{post.title}
        </div>
      </div>

      <div className="article-wrapper">
        <main>
          <article className="article-main">
            <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>

            <div className="article-trust-box">
              <div className="article-trust-label">この記事について</div>
              <ul className="article-trust-list">
                <li>公的機関・学会・一次情報を優先して確認</li>
                <li>体験談ではなく成分表と数値を中心に整理</li>
                <li>食品・化粧品としての情報提供を目的に記載</li>
              </ul>
            </div>

            {post.tldr && post.tldr.length > 0 && (
              <div className="article-tldr">
                <div className="article-tldr-label">TL;DR — この記事のポイント</div>
                <ul>
                  {post.tldr.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            )}

            {post.headings.length > 0 && (
              <div className="article-outline">
                <div className="article-outline-label">この記事の構成</div>
                <ol className="article-outline-list">
                  {post.headings.map((heading, i) => (
                    <li key={i}>{heading}</li>
                  ))}
                </ol>
              </div>
            )}

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {(relatedPosts.length > 0 || recentPosts.length > 0) && (
              <div className="article-next-reads">
                <h2 className="article-next-reads-title">次に読むなら</h2>
                <div className="article-next-reads-list">
                  {[...relatedPosts, ...recentPosts].slice(0, 4).map((p) => (
                    <Link key={p.slug} href={`/posts/${p.slug}`} className="article-next-read-card">
                      <span className="article-next-read-cat">{p.category}</span>
                      <strong>{p.title}</strong>
                      <span>{p.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {post.faq && post.faq.length > 0 && (
              <section className="article-faq">
                <h2 className="article-faq-title">よくある質問</h2>
                <div className="article-faq-list">
                  {post.faq.map((item, index) => (
                    <div key={index} className="article-faq-card">
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {post.references && post.references.length > 0 && (
              <div className="article-references">
                <h2 className="references-title">参考文献・データソース</h2>
                <ul className="references-list">
                  {post.references.map((ref, i) => (
                    <li key={i}>
                      <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a>
                      {ref.isPrimary && <span className="reference-badge">一次情報</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </main>

        <aside className="sidebar">
          <div className="sidebar-box">
            <div className="sidebar-box-title">同カテゴリの関連記事</div>
            <ul className="sidebar-list">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {recentPosts.length > 0 && (
            <div className="sidebar-box">
              <div className="sidebar-box-title">新着記事</div>
              <ul className="sidebar-list">
                {recentPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <Footer />
    </>
  );
}

 succeeded in 460ms:
{
  "name": "se-health-lab",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "generate-og": "node scripts/generate-og.js",
    "tweets": "node scripts/generate-tweets.js",
    "build": "node scripts/generate-og.js && next build",
    "start": "next start"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "remark": "^15.0.0",
    "remark-gfm": "^4.0.1",
    "remark-html": "^16.0.1",
    "twitter-api-v2": "^1.29.0"
  },
  "devDependencies": {
    "@resvg/resvg-js": "^2.6.2",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5"
  }
}

 succeeded in 449ms:
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllCategories, getPostsByCategory } from '@/lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = 'https://se-health-lab.com';

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryData = getPostsByCategory(slug);
  if (!categoryData) {
    return {};
  }

  const { category } = categoryData;
  const url = `${BASE_URL}/category/${category.slug}`;
  const imageUrl = `${BASE_URL}/og/category-${category.slug}.png`;

  return {
    title: `${category.name}の記事一覧`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${category.name}の記事一覧`,
      description: category.description,
      locale: 'ja_JP',
      siteName: 'ITエンジニアの健康科学ラボ',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name}の記事一覧`,
      description: category.description,
      images: [imageUrl],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryData = getPostsByCategory(slug);

  if (!categoryData) {
    notFound();
  }

  const { category, posts } = categoryData;
  const featuredPost = category.featuredSlug
    ? posts.find((post) => post.slug === category.featuredSlug)
    : undefined;
  const readingGuidePosts = (category.readingGuide ?? [])
    .map((guide) => ({
      label: guide.label,
      post: posts.find((post) => post.slug === guide.slug),
    }))
    .filter((item) => item.post)
    .map((item) => ({ label: item.label, post: item.post! }));
  const listPosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts;
  const faqJsonLd = category.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: category.faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: category.faq.answer,
            },
          },
        ],
      }
    : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />

      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">トップ</Link><span>›</span>{category.name}
        </div>
      </div>

      <section className="category-hero">
        <div className="category-hero-inner">
          <span className="category-hero-label">CATEGORY</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <div className="wrapper">
        <main>
          {featuredPost && (
            <section className="category-featured">
              <div className="category-featured-label">このカテゴリのおすすめ</div>
              <article className="category-featured-card">
                <Link href={`/category/${featuredPost.categorySlug}`} className="post-card-cat">
                  {featuredPost.category}
                </Link>
                <h2><Link href={`/posts/${featuredPost.slug}`}>{featuredPost.title}</Link></h2>
                <p className="post-card-desc">{featuredPost.description}</p>
                {featuredPost.tldr && featuredPost.tldr.length > 0 && (
                  <ul className="post-card-tldr">
                    {featuredPost.tldr.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <p className="post-card-meta">{featuredPost.date} | 読了目安 {featuredPost.readingMinutes}分</p>
              </article>
            </section>
          )}

          {readingGuidePosts.length > 0 && (
            <section className="category-reading-guide">
              <div className="category-reading-guide-label">読み順ガイド</div>
              <div className="category-reading-guide-list">
                {readingGuidePosts.map(({ label, post }) => (
                  <Link key={`${label}-${post.slug}`} href={`/posts/${post.slug}`} className="category-reading-guide-card">
                    <span className="category-reading-guide-step">{label}</span>
                    <strong>{post.title}</strong>
                    <span>{post.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="post-list">
            {listPosts.map((post) => (
              <article className="post-card" key={post.slug}>
                <Link href={`/category/${post.categorySlug}`} className="post-card-cat">{post.category}</Link>
                <h2><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>
                <p className="post-card-desc">{post.description}</p>
                {post.tldr && post.tldr.length > 0 && (
                  <ul className="post-card-tldr">
                    {post.tldr.slice(0, 2).map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <p className="post-card-meta">{post.date} | 読了目安 {post.readingMinutes}分</p>
              </article>
            ))}
          </div>

          {category.faq && (
            <section className="category-faq">
              <div className="category-faq-label">FAQ</div>
              <div className="category-faq-card">
                <h2>{category.faq.question}</h2>
                <p>{category.faq.answer}</p>
              </div>
            </section>
          )}
        </main>

        <Sidebar />
      </div>

      <Footer />
    </>
  );
}

 succeeded in 461ms:
False
False
False

apply patch
patch: completed
C:\Users\haruc\projects\se-health-lab\components\ShareButtons.tsx
C:\Users\haruc\projects\se-health-lab\scripts\generate-rss.js
C:\Users\haruc\projects\se-health-lab\scripts\tweet-post.js
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

apply patch
patch: completed
C:\Users\haruc\projects\se-health-lab\app\category\[slug]\page.tsx
C:\Users\haruc\projects\se-health-lab\app\layout.tsx
C:\Users\haruc\projects\se-health-lab\app\posts\[slug]\page.tsx
C:\Users\haruc\projects\se-health-lab\package.json
diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

apply patch
patch: completed
C:\Users\haruc\projects\se-health-lab\app\globals.css
diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/globals.css b/app/globals.css
index f76efa03aa9a672dbbbac7aeaffd1f0f34750108..125e8341773ce855cbe4a28add1bb4e54acbdf2f
--- a/app/globals.css
+++ b/app/globals.css
@@ -1253,3 +1253,47 @@
   .site-logo .name { font-size: 21px; }
   .site-logo .tagline { font-size: 10px; }
 }
+
+.share-buttons {
+  display: flex;
+  align-items: center;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-bottom: 24px;
+}
+.share-buttons-label {
+  font-size: 11px;
+  font-weight: 900;
+  letter-spacing: 0.12em;
+  color: var(--muted);
+  text-transform: uppercase;
+}
+.share-buttons-list {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+.share-button {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 72px;
+  padding: 8px 14px;
+  border: 1px solid var(--border);
+  border-radius: var(--radius);
+  background: var(--bg-alt);
+  color: var(--text);
+  font-size: 12px;
+  font-weight: 700;
+  line-height: 1;
+  text-decoration: none;
+  transition: transform .2s, box-shadow .2s, border-color .2s;
+}
+.share-button:hover {
+  text-decoration: none;
+  transform: translateY(-1px);
+  box-shadow: var(--shadow);
+}
+.share-button-x:hover { border-color: #000; }
+.share-button-line:hover { border-color: #06c755; }
+.share-button-hatena:hover { border-color: #00a4de; }
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/globals.css b/app/globals.css
index f76efa03aa9a672dbbbac7aeaffd1f0f34750108..125e8341773ce855cbe4a28add1bb4e54acbdf2f
--- a/app/globals.css
+++ b/app/globals.css
@@ -1253,3 +1253,47 @@
   .site-logo .name { font-size: 21px; }
   .site-logo .tagline { font-size: 10px; }
 }
+
+.share-buttons {
+  display: flex;
+  align-items: center;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-bottom: 24px;
+}
+.share-buttons-label {
+  font-size: 11px;
+  font-weight: 900;
+  letter-spacing: 0.12em;
+  color: var(--muted);
+  text-transform: uppercase;
+}
+.share-buttons-list {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+.share-button {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 72px;
+  padding: 8px 14px;
+  border: 1px solid var(--border);
+  border-radius: var(--radius);
+  background: var(--bg-alt);
+  color: var(--text);
+  font-size: 12px;
+  font-weight: 700;
+  line-height: 1;
+  text-decoration: none;
+  transition: transform .2s, box-shadow .2s, border-color .2s;
+}
+.share-button:hover {
+  text-decoration: none;
+  transform: translateY(-1px);
+  box-shadow: var(--shadow);
+}
+.share-button-x:hover { border-color: #000; }
+.share-button-line:hover { border-color: #06c755; }
+.share-button-hatena:hover { border-color: #00a4de; }
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

codex
編集は入りました。ここから `feed.xml` 生成と本番ビルドで、追加したスクリプトと TSX 差し込みが通るか確認します。
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command 'npm run generate-rss' in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command 'Get-Content package.json' in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Get-Content components\\ShareButtons.tsx" in C:\Users\haruc\projects\se-health-lab
 succeeded in 435ms:
type ShareButtonsProps = {
  title: string;
  url: string;
};

const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return {
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
  };
};

export default function ShareButtons(props: ShareButtonsProps) {
  const links = buildShareLinks(props);

  return (
    <div className="share-buttons" aria-label="この記事を共有">
      <span className="share-buttons-label">Share</span>
      <div className="share-buttons-list">
        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
          X
        </a>
        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
          LINE
        </a>
        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
          はてブ
        </a>
      </div>
    </div>
  );
}

 succeeded in 464ms:
{
  "name": "se-health-lab",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "generate-og": "node scripts/generate-og.js",
    "generate-rss": "node scripts/generate-rss.js",
    "tweets": "node scripts/generate-tweets.js",
    "tweet-post": "node scripts/tweet-post.js",
    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
    "start": "next start"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "remark": "^15.0.0",
    "remark-gfm": "^4.0.1",
    "remark-html": "^16.0.1",
    "twitter-api-v2": "^1.29.0"
  },
  "devDependencies": {
    "@resvg/resvg-js": "^2.6.2",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5"
  }
}

 succeeded in 821ms:

> se-health-lab@0.1.0 generate-rss
> node scripts/generate-rss.js

✓ RSS generated: C:\Users\haruc\projects\se-health-lab\public\feed.xml

diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/globals.css b/app/globals.css
index f76efa03aa9a672dbbbac7aeaffd1f0f34750108..125e8341773ce855cbe4a28add1bb4e54acbdf2f
--- a/app/globals.css
+++ b/app/globals.css
@@ -1253,3 +1253,47 @@
   .site-logo .name { font-size: 21px; }
   .site-logo .tagline { font-size: 10px; }
 }
+
+.share-buttons {
+  display: flex;
+  align-items: center;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-bottom: 24px;
+}
+.share-buttons-label {
+  font-size: 11px;
+  font-weight: 900;
+  letter-spacing: 0.12em;
+  color: var(--muted);
+  text-transform: uppercase;
+}
+.share-buttons-list {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+.share-button {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 72px;
+  padding: 8px 14px;
+  border: 1px solid var(--border);
+  border-radius: var(--radius);
+  background: var(--bg-alt);
+  color: var(--text);
+  font-size: 12px;
+  font-weight: 700;
+  line-height: 1;
+  text-decoration: none;
+  transition: transform .2s, box-shadow .2s, border-color .2s;
+}
+.share-button:hover {
+  text-decoration: none;
+  transform: translateY(-1px);
+  box-shadow: var(--shadow);
+}
+.share-button-x:hover { border-color: #000; }
+.share-button-line:hover { border-color: #06c755; }
+.share-button-hatena:hover { border-color: #00a4de; }
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command 'npm run build' in C:\Users\haruc\projects\se-health-lab
 succeeded in 13773ms:

> se-health-lab@0.1.0 build
> node scripts/generate-og.js && node scripts/generate-rss.js && next build

✓ C:\Users\haruc\projects\se-health-lab\public\og-image.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\enazuma7-review.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\how-to-choose-proton-water.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\how-to-drink-proton-water.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\kickboxer-hydration.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\marathon-runner-hydration.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\mulberry-leaf-extract-analysis.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\pe-cream-ingredients.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\pine-needle-extract-analysis.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\proton-x-enzyme-analysis.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\silica-water-vs-proton-water.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\what-is-proton-water.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\category-proton-water.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\category-supplements.png
✓ C:\Users\haruc\projects\se-health-lab\public\og\category-pe-products.png

✓ 完了: 11 件の記事OGP + カテゴリOGP + サイト共通OGP
✓ RSS generated: C:\Users\haruc\projects\se-health-lab\public\feed.xml
   ▲ Next.js 15.5.14

   Creating an optimized production build ...
 ✓ Compiled successfully in 1910ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/23) ...
   Generating static pages (5/23) 
   Generating static pages (11/23) 
   Generating static pages (17/23) 
 ✓ Generating static pages (23/23)
   Finalizing page optimization ...
   Collecting build traces ...
   Exporting (0/2) ...
 ✓ Exporting (2/2)

Route (app)                                 Size  First Load JS
┌ ○ /                                      509 B         106 kB
├ ○ /_not-found                            993 B         103 kB
├ ○ /about                                 509 B         106 kB
├ ● /category/[slug]                       509 B         106 kB
├   ├ /category/proton-water
├   ├ /category/supplements
├   └ /category/pe-products
├ ○ /contact                               509 B         106 kB
├ ● /posts/[slug]                          509 B         106 kB
├   ├ /posts/enazuma7-review
├   ├ /posts/how-to-choose-proton-water
├   ├ /posts/how-to-drink-proton-water
├   └ [+8 more paths]
├ ○ /privacy                               509 B         106 kB
├ ○ /robots.txt                            127 B         102 kB
└ ○ /sitemap.xml                           127 B         102 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-aaafc19c72668c72.js       46.1 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.97 kB


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)


diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/globals.css b/app/globals.css
index f76efa03aa9a672dbbbac7aeaffd1f0f34750108..125e8341773ce855cbe4a28add1bb4e54acbdf2f
--- a/app/globals.css
+++ b/app/globals.css
@@ -1253,3 +1253,47 @@
   .site-logo .name { font-size: 21px; }
   .site-logo .tagline { font-size: 10px; }
 }
+
+.share-buttons {
+  display: flex;
+  align-items: center;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-bottom: 24px;
+}
+.share-buttons-label {
+  font-size: 11px;
+  font-weight: 900;
+  letter-spacing: 0.12em;
+  color: var(--muted);
+  text-transform: uppercase;
+}
+.share-buttons-list {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+.share-button {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 72px;
+  padding: 8px 14px;
+  border: 1px solid var(--border);
+  border-radius: var(--radius);
+  background: var(--bg-alt);
+  color: var(--text);
+  font-size: 12px;
+  font-weight: 700;
+  line-height: 1;
+  text-decoration: none;
+  transition: transform .2s, box-shadow .2s, border-color .2s;
+}
+.share-button:hover {
+  text-decoration: none;
+  transform: translateY(-1px);
+  box-shadow: var(--shadow);
+}
+.share-button-x:hover { border-color: #000; }
+.share-button-line:hover { border-color: #06c755; }
+.share-button-hatena:hover { border-color: #00a4de; }
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

codex
ビルドまで通りました。最終報告用に、変更箇所の行番号だけ拾っておきます。
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "rg -n \"ShareButtons|breadcrumbJsonLd|rel=\\\"alternate\\\"|share-buttons|generate-rss|tweet-post|TwitterApi|application/rss\\+xml\" app components scripts package.json" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "rg -n \"ShareButtons title=|dangerouslySetInnerHTML|breadcrumbJsonLd\" -LiteralPath 'app\\posts\\[slug]\\page.tsx'" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "rg -n \"breadcrumbJsonLd|dangerouslySetInnerHTML\" -LiteralPath 'app\\category\\[slug]\\page.tsx'" in C:\Users\haruc\projects\se-health-lab
2026-04-10T11:04:47.546123Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.4 seconds
Output:
rg: unrecognized file type: eralPath

 exited 1 in 421ms:
rg: unrecognized file type: eralPath

 exited 1 in 422ms:
rg: regex parse error:
    (?:ShareButtons|breadcrumbJsonLd|rel=\)
    ^
error: unclosed group

2026-04-10T11:04:47.546424Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.4 seconds
Output:
rg: regex parse error:
    (?:ShareButtons|breadcrumbJsonLd|rel=\)
    ^
error: unclosed group

2026-04-10T11:04:47.572182Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.4 seconds
Output:
rg: unrecognized file type: eralPath

 exited 1 in 442ms:
rg: unrecognized file type: eralPath

diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/globals.css b/app/globals.css
index f76efa03aa9a672dbbbac7aeaffd1f0f34750108..125e8341773ce855cbe4a28add1bb4e54acbdf2f
--- a/app/globals.css
+++ b/app/globals.css
@@ -1253,3 +1253,47 @@
   .site-logo .name { font-size: 21px; }
   .site-logo .tagline { font-size: 10px; }
 }
+
+.share-buttons {
+  display: flex;
+  align-items: center;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-bottom: 24px;
+}
+.share-buttons-label {
+  font-size: 11px;
+  font-weight: 900;
+  letter-spacing: 0.12em;
+  color: var(--muted);
+  text-transform: uppercase;
+}
+.share-buttons-list {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+.share-button {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 72px;
+  padding: 8px 14px;
+  border: 1px solid var(--border);
+  border-radius: var(--radius);
+  background: var(--bg-alt);
+  color: var(--text);
+  font-size: 12px;
+  font-weight: 700;
+  line-height: 1;
+  text-decoration: none;
+  transition: transform .2s, box-shadow .2s, border-color .2s;
+}
+.share-button:hover {
+  text-decoration: none;
+  transform: translateY(-1px);
+  box-shadow: var(--shadow);
+}
+.share-button-x:hover { border-color: #000; }
+.share-button-line:hover { border-color: #06c755; }
+.share-button-hatena:hover { border-color: #00a4de; }
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Select-String -Path app\\layout.tsx,components\\ShareButtons.tsx,scripts\\generate-rss.js,scripts\\tweet-post.js,package.json,app\\globals.css -Pattern 'alternate|ShareButtons|share-buttons|generate-rss|tweet-post|TwitterApi'" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Select-String -LiteralPath 'app\\posts\\[slug]\\page.tsx' -Pattern 'ShareButtons|breadcrumbJsonLd|dangerouslySetInnerHTML'" in C:\Users\haruc\projects\se-health-lab
exec
"C:\\Program Files\\PowerShell\\7\\pwsh.exe" -Command "Select-String -LiteralPath 'app\\category\\[slug]\\page.tsx' -Pattern 'breadcrumbJsonLd|dangerouslySetInnerHTML'" in C:\Users\haruc\projects\se-health-lab
 succeeded in 473ms:

app\posts\[slug]\page.tsx:4:import [7mShareButtons[0m from '@/components/ShareButtons';
app\posts\[slug]\page.tsx:90:  const [7mbreadcrumbJsonLd[0m = {
app\posts\[slug]\page.tsx:120:        [7mdangerouslySetInnerHTML[0m={{ __html: JSON.stringify(articleJsonLd) }}
app\posts\[slug]\page.tsx:125:          [7mdangerouslySetInnerHTML[0m={{ __html: JSON.stringify(faqJsonLd) }}
app\posts\[slug]\page.tsx:130:        [7mdangerouslySetInnerHTML[0m={{ __html: JSON.stringify(breadcrumbJsonLd) }}
app\posts\[slug]\page.tsx:146:            <[7mShareButtons[0m title={post.title} url={shareUrl} />
app\posts\[slug]\page.tsx:179:              [7mdangerouslySetInnerHTML[0m={{ __html: post.contentHtml }}
app\posts\[slug]\page.tsx:181:            <[7mShareButtons[0m title={post.title} url={shareUrl} />


 succeeded in 475ms:

app\layout.tsx:14:  [7malternate[0ms: { canonical: BASE_URL },
app\layout.tsx:46:        <link rel="[7malternate[0m" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href=[0m
[7m[0m"/feed.xml" />[0m
components\ShareButtons.tsx:1:type [7mShareButtons[0mProps = {
components\ShareButtons.tsx:6:const buildShareLinks = ({ title, url }: [7mShareButtons[0mProps) => {
components\ShareButtons.tsx:17:export default function [7mShareButtons[0m(props: ShareButtonsProps) {
components\ShareButtons.tsx:21:    <div className="[7mshare-buttons[0m" aria-label="この記事を共有">
components\ShareButtons.tsx:22:      <span className="[7mshare-buttons[0m-label">Share</span>
components\ShareButtons.tsx:23:      <div className="[7mshare-buttons[0m-list">
scripts\tweet-post.js:4:const { [7mTwitterApi[0m } = require('twitter-api-v2');
scripts\tweet-post.js:48:    throw new Error('使い方: npm run [7mtweet-post[0m -- <post-slug>');
scripts\tweet-post.js:63:  const client = new [7mTwitterApi[0m({
package.json:8:    "[7mgenerate-rss[0m": "node scripts/generate-rss.js",
package.json:10:    "[7mtweet-post[0m": "node scripts/tweet-post.js",
package.json:11:    "build": "node scripts/generate-og.js && node scripts/[7mgenerate-rss[0m.js && next build",
app\globals.css:1257:.[7mshare-buttons[0m {
app\globals.css:1264:.[7mshare-buttons[0m-label {
app\globals.css:1271:.[7mshare-buttons[0m-list {


 succeeded in 509ms:

app\category\[slug]\page.tsx:90:  const [7mbreadcrumbJsonLd[0m = {
app\category\[slug]\page.tsx:114:          [7mdangerouslySetInnerHTML[0m={{ __html: JSON.stringify(faqJsonLd) }}
app\category\[slug]\page.tsx:119:        [7mdangerouslySetInnerHTML[0m={{ __html: JSON.stringify(breadcrumbJsonLd) }}


diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/globals.css b/app/globals.css
index f76efa03aa9a672dbbbac7aeaffd1f0f34750108..125e8341773ce855cbe4a28add1bb4e54acbdf2f
--- a/app/globals.css
+++ b/app/globals.css
@@ -1253,3 +1253,47 @@
   .site-logo .name { font-size: 21px; }
   .site-logo .tagline { font-size: 10px; }
 }
+
+.share-buttons {
+  display: flex;
+  align-items: center;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-bottom: 24px;
+}
+.share-buttons-label {
+  font-size: 11px;
+  font-weight: 900;
+  letter-spacing: 0.12em;
+  color: var(--muted);
+  text-transform: uppercase;
+}
+.share-buttons-list {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+.share-button {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 72px;
+  padding: 8px 14px;
+  border: 1px solid var(--border);
+  border-radius: var(--radius);
+  background: var(--bg-alt);
+  color: var(--text);
+  font-size: 12px;
+  font-weight: 700;
+  line-height: 1;
+  text-decoration: none;
+  transition: transform .2s, box-shadow .2s, border-color .2s;
+}
+.share-button:hover {
+  text-decoration: none;
+  transform: translateY(-1px);
+  box-shadow: var(--shadow);
+}
+.share-button-x:hover { border-color: #000; }
+.share-button-line:hover { border-color: #06c755; }
+.share-button-hatena:hover { border-color: #00a4de; }
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

codex
実装しました。`BreadcrumbList` を記事・カテゴリの両ページに追加し、記事ページには共有ボタンを2箇所差し込み、RSS 生成と X 投稿スクリプトも追加しています。

主な変更は [app/posts/[slug]/page.tsx](/C:/Users/haruc/projects/se-health-lab/app/posts/[slug]/page.tsx#L4), [app/category/[slug]/page.tsx](/C:/Users/haruc/projects/se-health-lab/app/category/[slug]/page.tsx#L90), [components/ShareButtons.tsx](/C:/Users/haruc/projects/se-health-lab/components/ShareButtons.tsx#L1), [scripts/generate-rss.js](/C:/Users/haruc/projects/se-health-lab/scripts/generate-rss.js#L1), [scripts/tweet-post.js](/C:/Users/haruc/projects/se-health-lab/scripts/tweet-post.js#L1), [app/layout.tsx](/C:/Users/haruc/projects/se-health-lab/app/layout.tsx#L46), [app/globals.css](/C:/Users/haruc/projects/se-health-lab/app/globals.css#L1257), [package.json](/C:/Users/haruc/projects/se-health-lab/package.json#L5) です。RSS は [public/feed.xml](/C:/Users/haruc/projects/se-health-lab/public/feed.xml) に生成されます。

検証は `npm run generate-rss` と `npm run build` まで実行し、どちらも成功しています。`tweet-post` は `.env.local` に `X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_TOKEN_SECRET` が必要で、実行は `npm run tweet-post -- <post-slug>` です。
diff --git a/app/category/[slug]/page.tsx b/app/category/[slug]/page.tsx
index 658d0d5c3f8bd4c0b53a6dbdc8649bd3a667902a..12a8d03ccc5d37e842585d600830775588b5abd4
--- a/app/category/[slug]/page.tsx
+++ b/app/category/[slug]/page.tsx
@@ -87,6 +87,24 @@
         ],
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: category.name,
+        item: `${BASE_URL}/category/${category.slug}`,
+      },
+    ],
+  };
 
   return (
     <>
@@ -96,6 +114,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
diff --git a/app/globals.css b/app/globals.css
index f76efa03aa9a672dbbbac7aeaffd1f0f34750108..125e8341773ce855cbe4a28add1bb4e54acbdf2f
--- a/app/globals.css
+++ b/app/globals.css
@@ -1253,3 +1253,47 @@
   .site-logo .name { font-size: 21px; }
   .site-logo .tagline { font-size: 10px; }
 }
+
+.share-buttons {
+  display: flex;
+  align-items: center;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-bottom: 24px;
+}
+.share-buttons-label {
+  font-size: 11px;
+  font-weight: 900;
+  letter-spacing: 0.12em;
+  color: var(--muted);
+  text-transform: uppercase;
+}
+.share-buttons-list {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+.share-button {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 72px;
+  padding: 8px 14px;
+  border: 1px solid var(--border);
+  border-radius: var(--radius);
+  background: var(--bg-alt);
+  color: var(--text);
+  font-size: 12px;
+  font-weight: 700;
+  line-height: 1;
+  text-decoration: none;
+  transition: transform .2s, box-shadow .2s, border-color .2s;
+}
+.share-button:hover {
+  text-decoration: none;
+  transform: translateY(-1px);
+  box-shadow: var(--shadow);
+}
+.share-button-x:hover { border-color: #000; }
+.share-button-line:hover { border-color: #06c755; }
+.share-button-hatena:hover { border-color: #00a4de; }
diff --git a/app/layout.tsx b/app/layout.tsx
index 2771cb818ac4d4ffc6b4a7b30d5e4142b1f77ef3..87dcbaaec3395813c09453e6c82761c772b67c0d
--- a/app/layout.tsx
+++ b/app/layout.tsx
@@ -43,6 +43,7 @@
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
+        <link rel="alternate" type="application/rss+xml" title="ITエンジニアの健康科学ラボ RSS" href="/feed.xml" />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
diff --git a/app/posts/[slug]/page.tsx b/app/posts/[slug]/page.tsx
index 74aaffe2b27d504d420419ddeb42d6551e154080..d2431fb6b0e43f9380b3d62575458fe3179d9a3d
--- a/app/posts/[slug]/page.tsx
+++ b/app/posts/[slug]/page.tsx
@@ -1,6 +1,7 @@
 import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
 import Header from '@/components/Header';
 import Footer from '@/components/Footer';
+import ShareButtons from '@/components/ShareButtons';
 import Link from 'next/link';
 import type { Metadata } from 'next';
 
@@ -86,6 +87,31 @@
         })),
       }
     : null;
+  const breadcrumbJsonLd = {
+    '@context': 'https://schema.org',
+    '@type': 'BreadcrumbList',
+    itemListElement: [
+      {
+        '@type': 'ListItem',
+        position: 1,
+        name: 'Home',
+        item: BASE_URL,
+      },
+      {
+        '@type': 'ListItem',
+        position: 2,
+        name: post.category,
+        item: `${BASE_URL}/category/${post.categorySlug}`,
+      },
+      {
+        '@type': 'ListItem',
+        position: 3,
+        name: post.title,
+        item: `${BASE_URL}/posts/${slug}`,
+      },
+    ],
+  };
+  const shareUrl = `${BASE_URL}/posts/${slug}`;
 
   return (
     <>
@@ -99,6 +125,10 @@
           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
         />
       )}
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
+      />
       <Header />
 
       <div className="breadcrumb">
@@ -113,6 +143,7 @@
             <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
             <h1 className="article-title">{post.title}</h1>
             <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>
+            <ShareButtons title={post.title} url={shareUrl} />
 
             <div className="article-trust-box">
               <div className="article-trust-label">この記事について</div>
@@ -147,6 +178,7 @@
               className="article-body"
               dangerouslySetInnerHTML={{ __html: post.contentHtml }}
             />
+            <ShareButtons title={post.title} url={shareUrl} />
 
             {(relatedPosts.length > 0 || recentPosts.length > 0) && (
               <div className="article-next-reads">
diff --git a/components/ShareButtons.tsx b/components/ShareButtons.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..ca6b0bf6eeb07412a897b996176fab93f002a070
--- /dev/null
+++ b/components/ShareButtons.tsx
@@ -0,0 +1,36 @@
+type ShareButtonsProps = {
+  title: string;
+  url: string;
+};
+
+const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
+  const encodedTitle = encodeURIComponent(title);
+  const encodedUrl = encodeURIComponent(url);
+
+  return {
+    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
+    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
+    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
+  };
+};
+
+export default function ShareButtons(props: ShareButtonsProps) {
+  const links = buildShareLinks(props);
+
+  return (
+    <div className="share-buttons" aria-label="この記事を共有">
+      <span className="share-buttons-label">Share</span>
+      <div className="share-buttons-list">
+        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
+          X
+        </a>
+        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
+          LINE
+        </a>
+        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
+          はてブ
+        </a>
+      </div>
+    </div>
+  );
+}
diff --git a/package.json b/package.json
index 60a5a16fd63db14928fd35ee0e36a44e00577f0a..596970a7996e80f6e06e97775e8b8a6c3060059f
--- a/package.json
+++ b/package.json
@@ -5,8 +5,10 @@
   "scripts": {
     "dev": "next dev",
     "generate-og": "node scripts/generate-og.js",
+    "generate-rss": "node scripts/generate-rss.js",
     "tweets": "node scripts/generate-tweets.js",
-    "build": "node scripts/generate-og.js && next build",
+    "tweet-post": "node scripts/tweet-post.js",
+    "build": "node scripts/generate-og.js && node scripts/generate-rss.js && next build",
     "start": "next start"
   },
   "dependencies": {
diff --git a/scripts/generate-rss.js b/scripts/generate-rss.js
new file mode 100644
index 0000000000000000000000000000000000000000..868f1cd662ee93743c1457973d7ce89152598045
--- /dev/null
+++ b/scripts/generate-rss.js
@@ -0,0 +1,71 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+
+const SITE_URL = 'https://se-health-lab.com';
+const SITE_TITLE = 'ITエンジニアの健康科学ラボ';
+const SITE_DESCRIPTION = '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。';
+
+function escapeXml(str) {
+  return String(str)
+    .replace(/&/g, '&amp;')
+    .replace(/</g, '&lt;')
+    .replace(/>/g, '&gt;')
+    .replace(/"/g, '&quot;')
+    .replace(/'/g, '&apos;');
+}
+
+function toRfc2822(dateString) {
+  return new Date(dateString).toUTCString();
+}
+
+const postsDir = path.join(__dirname, '..', 'content', 'posts');
+const outputPath = path.join(__dirname, '..', 'public', 'feed.xml');
+
+const posts = fs.readdirSync(postsDir)
+  .filter((fileName) => fileName.endsWith('.md'))
+  .map((fileName) => {
+    const fullPath = path.join(postsDir, fileName);
+    const raw = fs.readFileSync(fullPath, 'utf-8');
+    const { data } = matter(raw);
+    const slug = data.slug || path.basename(fileName, '.md');
+
+    return {
+      slug,
+      title: data.title || slug,
+      description: data.description || '',
+      date: data.date || new Date(fs.statSync(fullPath).mtime).toISOString().slice(0, 10),
+      category: data.category || '',
+    };
+  })
+  .sort((a, b) => (a.date < b.date ? 1 : -1));
+
+const itemsXml = posts.map((post) => {
+  const url = `${SITE_URL}/posts/${post.slug}`;
+  const categoryXml = post.category ? `\n      <category>${escapeXml(post.category)}</category>` : '';
+
+  return `    <item>
+      <title>${escapeXml(post.title)}</title>
+      <link>${url}</link>
+      <guid>${url}</guid>
+      <pubDate>${toRfc2822(post.date)}</pubDate>
+      <description>${escapeXml(post.description)}</description>${categoryXml}
+    </item>`;
+}).join('\n');
+
+const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
+<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
+  <channel>
+    <title>${escapeXml(SITE_TITLE)}</title>
+    <link>${SITE_URL}</link>
+    <description>${escapeXml(SITE_DESCRIPTION)}</description>
+    <language>ja</language>
+    <lastBuildDate>${toRfc2822(posts[0]?.date || new Date().toISOString())}</lastBuildDate>
+    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
+${itemsXml}
+  </channel>
+</rss>
+`;
+
+fs.writeFileSync(outputPath, rssXml, 'utf-8');
+console.log(`✓ RSS generated: ${outputPath}`);
diff --git a/scripts/tweet-post.js b/scripts/tweet-post.js
new file mode 100644
index 0000000000000000000000000000000000000000..ce0ff46d726fc5e4d5dde34d55194babf10b469a
--- /dev/null
+++ b/scripts/tweet-post.js
@@ -0,0 +1,79 @@
+const fs = require('fs');
+const path = require('path');
+const matter = require('gray-matter');
+const { TwitterApi } = require('twitter-api-v2');
+
+const SITE_URL = 'https://se-health-lab.com';
+const envPath = path.join(__dirname, '..', '.env.local');
+
+function loadEnvFile(filePath) {
+  if (!fs.existsSync(filePath)) {
+    throw new Error('.env.local が見つかりません。X API認証情報を設定してください。');
+  }
+
+  const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
+  for (const line of lines) {
+    const trimmed = line.trim();
+    if (!trimmed || trimmed.startsWith('#')) continue;
+
+    const separatorIndex = trimmed.indexOf('=');
+    if (separatorIndex === -1) continue;
+
+    const key = trimmed.slice(0, separatorIndex).trim();
+    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
+
+    if (!(key in process.env)) {
+      process.env[key] = value;
+    }
+  }
+}
+
+function requireEnv(key) {
+  const value = process.env[key];
+  if (!value) {
+    throw new Error(`${key} が設定されていません。`);
+  }
+  return value;
+}
+
+function buildTweet(post) {
+  return `${post.title}\n${SITE_URL}/posts/${post.slug}`;
+}
+
+async function main() {
+  loadEnvFile(envPath);
+
+  const slug = process.argv[2];
+  if (!slug) {
+    throw new Error('使い方: npm run tweet-post -- <post-slug>');
+  }
+
+  const postPath = path.join(__dirname, '..', 'content', 'posts', `${slug}.md`);
+  if (!fs.existsSync(postPath)) {
+    throw new Error(`記事ファイルが見つかりません: ${postPath}`);
+  }
+
+  const raw = fs.readFileSync(postPath, 'utf-8');
+  const { data } = matter(raw);
+  const post = {
+    slug,
+    title: data.title || slug,
+  };
+
+  const client = new TwitterApi({
+    appKey: requireEnv('X_API_KEY'),
+    appSecret: requireEnv('X_API_SECRET'),
+    accessToken: requireEnv('X_ACCESS_TOKEN'),
+    accessSecret: requireEnv('X_ACCESS_TOKEN_SECRET'),
+  });
+
+  const tweet = buildTweet(post);
+  const response = await client.v2.tweet(tweet);
+  console.log(`✓ Tweet posted: ${response.data.id}`);
+}
+
+main().catch((error) => {
+  console.error('✗ Failed to post tweet');
+  console.error(error.message);
+  process.exit(1);
+});

tokens used
105,231

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.

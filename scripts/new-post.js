const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const templatePath = path.join(projectRoot, 'content', 'posts', '_post-template.md');
const postsDir = path.join(projectRoot, 'content', 'posts');

function parseArgs(argv) {
  const args = { _: [] };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) {
      args._.push(arg);
      continue;
    }

    const key = arg.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    i += 1;
  }

  return args;
}

function toIsoDate(value) {
  if (!value) return new Date().toISOString().slice(0, 10);
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`日付が不正です: ${value}`);
  }
  return parsed.toISOString().slice(0, 10);
}

function titleFromSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function replaceQuotedField(content, fieldName, value) {
  const pattern = new RegExp(`^${fieldName}:\\s+"[^"]*"`, 'm');
  return content.replace(pattern, `${fieldName}: "${value.replace(/"/g, '\\"')}"`);
}

function replaceList(content, fieldName, values) {
  const escaped = values.map((value) => `  - ${value}`).join('\n');
  const pattern = new RegExp(`^${fieldName}:\\n(?:  - .*\\n?)+`, 'm');
  return content.replace(pattern, `${fieldName}:\n${escaped}\n`);
}

function buildTemplateContent(template, { slug, title, date, category }) {
  let content = template;
  content = replaceQuotedField(content, 'title', title);
  content = replaceQuotedField(content, 'date', date);
  content = replaceQuotedField(content, 'category', category);
  content = replaceQuotedField(content, 'slug', slug);
  content = replaceQuotedField(content, 'tweet_title', title);
  content = replaceList(content, 'hashtags', ['メインタグ', '補助タグ', '健康科学ラボ']);
  return content;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const slug = args._[0];

  if (!slug) {
    throw new Error('使い方: npm run new-post -- <slug> [--title "記事タイトル"] [--category "カテゴリ"] [--date YYYY-MM-DD]');
  }

  if (slug.startsWith('_') || slug.endsWith('.md')) {
    throw new Error('slug は拡張子なし、先頭 "_" なしで指定してください。');
  }

  if (!fs.existsSync(templatePath)) {
    throw new Error(`テンプレートが見つかりません: ${templatePath}`);
  }

  const title = args.title || titleFromSlug(slug) || '新規記事タイトル';
  const date = toIsoDate(args.date);
  const category = args.category || 'プロトン水';
  const filePath = path.join(postsDir, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    throw new Error(`記事ファイルはすでに存在します: ${filePath}`);
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  const output = buildTemplateContent(template, { slug, title, date, category });
  fs.writeFileSync(filePath, output, 'utf8');

  console.log(`✓ 新規記事を作成しました: ${filePath}`);
  console.log(`  slug: ${slug}`);
  console.log(`  title: ${title}`);
  console.log(`  date: ${date}`);
  console.log(`  category: ${category}`);
}

main();

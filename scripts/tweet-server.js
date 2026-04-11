const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const matter = require('gray-matter');

const PORT = 3001;
const SITE_URL = 'https://se-health-lab.com';
const BROWSER_DIR = path.join(__dirname, '..', 'browser');
const POSTED_JSON = path.join(BROWSER_DIR, 'posted.json');
const POSTS_DIR = path.join(__dirname, '..', 'content', 'posts');
const BAT_FILE = path.join(__dirname, 'open-dashboard.bat');

const CATEGORY_TAGS = {
  'プロトン水': '#プロトン水 #水素水 #énazuma7 #機能性水',
  'PE製品': '#PE製品 #薬用コスメ #スキンケア #成分解析',
  'スポーツ栄養': '#スポーツ栄養 #水分補給 #アスリート',
  'サプリメント': '#サプリメント #成分解析 #腸活 #健康投資',
};

// --- データ操作 ---

function buildTweet({ title, slug, category, tldr }) {
  const url = `${SITE_URL}/posts/${slug}`;
  const tags = CATEGORY_TAGS[category] || `#${category} #健康科学`;
  const points = (tldr || []).slice(0, 2).map(p => `・${p}`).join('\n');
  const body = points
    ? `${points}\n\n記事全文 → ${url}`
    : `記事全文 → ${url}`;
  return `【${title}】\n\n${body}\n\n${tags} #ITエンジニア #健康科学ラボ`;
}

function getTweetLength(tweet) {
  return tweet.replace(/https?:\/\/\S+/g, 'x'.repeat(23)).length;
}

function loadPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
      const { data } = matter(raw);
      return { ...data, slug: data.slug || path.basename(file, '.md') };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function loadPosted() {
  try {
    return JSON.parse(fs.readFileSync(POSTED_JSON, 'utf-8'));
  } catch {
    return [];
  }
}

function savePosted(list) {
  fs.writeFileSync(POSTED_JSON, JSON.stringify(list, null, 2), 'utf-8');
}

function getLanAddress() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const addr of iface) {
      if (addr.family === 'IPv4' && !addr.internal) return addr.address;
    }
  }
  return 'localhost';
}

// --- HTML生成 ---

function buildHtml(posts, posted) {
  const postedSet = new Set(posted);

  const unposted = posts.filter(p => !postedSet.has(p.slug));
  const postedPosts = posts.filter(p => postedSet.has(p.slug));
  const recommended = new Set(unposted.slice(0, 3).map(p => p.slug));

  function card(post, isPosted) {
    const tweet = buildTweet(post);
    const len = getTweetLength(tweet);
    const lenWarn = len > 280 ? `<span class="warn">${len}文字 ⚠️</span>` : `<span class="ok">${len}文字</span>`;
    const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    const isRec = recommended.has(post.slug);

    const cardClass = isPosted ? 'card posted' : isRec ? 'card recommended' : 'card';
    const badge = isRec ? '<span class="badge">今日のおすすめ</span>' : '';

    const actions = isPosted
      ? `<button class="btn-undo" onclick="markUnposted('${post.slug}', this)">投稿済みを元に戻す</button>`
      : `
        <a class="btn-post" href="${intentUrl}" target="_blank" rel="noopener">Xで投稿 →</a>
        <button class="btn-done" onclick="markPosted('${post.slug}', this)">投稿済みにする ✓</button>
      `;

    return `
<div class="${cardClass}" id="card-${post.slug}">
  <div class="card-header">
    ${badge}
    <div class="card-title">${post.title}</div>
    <div class="card-meta">${post.date} &nbsp;|&nbsp; ${post.category} &nbsp;|&nbsp; ${lenWarn}</div>
  </div>
  <pre class="tweet-preview">${escapeHtml(tweet)}</pre>
  <div class="card-actions">${actions}</div>
</div>`;
  }

  const unpostedHtml = unposted.length
    ? unposted.map(p => card(p, false)).join('\n')
    : '<p class="empty">未投稿記事はありません 🎉</p>';

  const postedHtml = postedPosts.length
    ? `<details><summary>投稿済み（${postedPosts.length}件）</summary>${postedPosts.map(p => card(p, true)).join('\n')}</details>`
    : '';

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>X投稿ダッシュボード</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
         background: #f5f7fa; color: #1a1a2e; padding: 16px; }
  h1 { font-size: 1.2rem; margin-bottom: 4px; }
  .subtitle { font-size: 0.8rem; color: #666; margin-bottom: 16px; }
  .card { background: #fff; border-radius: 12px; padding: 16px;
          margin-bottom: 12px; box-shadow: 0 1px 4px rgba(0,0,0,.08); }
  .card.recommended { border-left: 4px solid #1d9bf0; }
  .card.posted { opacity: 0.5; }
  .badge { display: inline-block; background: #1d9bf0; color: #fff;
           font-size: 0.7rem; padding: 2px 8px; border-radius: 99px; margin-bottom: 6px; }
  .card-title { font-weight: 700; font-size: 0.95rem; margin-bottom: 4px; }
  .card-meta { font-size: 0.75rem; color: #888; margin-bottom: 10px; }
  .ok { color: #16a34a; }
  .warn { color: #dc2626; }
  pre.tweet-preview { background: #f8f9fa; border-radius: 8px; padding: 12px;
                      font-size: 0.8rem; white-space: pre-wrap; word-break: break-all;
                      line-height: 1.5; margin-bottom: 12px; font-family: inherit; }
  .card-actions { display: flex; gap: 8px; flex-wrap: wrap; }
  .btn-post { background: #1d9bf0; color: #fff; border: none; border-radius: 99px;
              padding: 8px 16px; font-size: 0.85rem; cursor: pointer;
              text-decoration: none; display: inline-block; font-weight: 600; }
  .btn-done { background: #16a34a; color: #fff; border: none; border-radius: 99px;
              padding: 8px 16px; font-size: 0.85rem; cursor: pointer; font-weight: 600; }
  .btn-undo { background: #6b7280; color: #fff; border: none; border-radius: 99px;
              padding: 6px 14px; font-size: 0.8rem; cursor: pointer; }
  .btn-reset { background: #ef4444; color: #fff; border: none; border-radius: 8px;
               padding: 8px 16px; font-size: 0.85rem; cursor: pointer; margin-bottom: 16px; }
  details summary { cursor: pointer; padding: 8px 0; color: #666;
                    font-size: 0.9rem; margin-bottom: 8px; }
  .empty { color: #888; text-align: center; padding: 24px; }
  .section-title { font-size: 0.85rem; font-weight: 700; color: #444;
                   margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
</style>
</head>
<body>
<h1>📣 X投稿ダッシュボード</h1>
<p class="subtitle">未投稿: ${unposted.length}件 / 全${posts.length}件</p>

<button class="btn-reset" onclick="resetAll()">すべてリセット</button>

<div class="section-title">未投稿</div>
${unpostedHtml}

${postedHtml}

<script>
async function markPosted(slug, btn) {
  await fetch('/mark-posted', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug })
  });
  location.reload();
}

async function markUnposted(slug, btn) {
  await fetch('/mark-unposted', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug })
  });
  location.reload();
}

async function resetAll() {
  if (!confirm('投稿済み記録をすべてリセットしますか？')) return;
  await fetch('/reset', { method: 'POST' });
  location.reload();
}
</script>
</body>
</html>`;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// --- APIハンドラ ---

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); } catch { resolve({}); }
    });
    req.on('error', reject);
  });
}

// --- サーバー ---

function init() {
  if (!fs.existsSync(BROWSER_DIR)) fs.mkdirSync(BROWSER_DIR);
  if (!fs.existsSync(POSTED_JSON)) savePosted([]);

  // open-dashboard.bat を生成
  const projectDir = path.resolve(path.join(__dirname, '..'));
  const batContent = `@echo off\ncd /d "${projectDir}"\nnode scripts/tweet-server.js\n`;
  fs.writeFileSync(BAT_FILE, batContent, 'utf-8');
}

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  if (method === 'GET' && url === '/') {
    const posts = loadPosts();
    const posted = loadPosted();
    const html = buildHtml(posts, posted);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  if (method === 'POST' && url === '/mark-posted') {
    const body = await parseBody(req);
    if (body.slug) {
      const posted = loadPosted();
      if (!posted.includes(body.slug)) {
        posted.push(body.slug);
        savePosted(posted);
      }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"ok":true}');
    return;
  }

  if (method === 'POST' && url === '/mark-unposted') {
    const body = await parseBody(req);
    if (body.slug) {
      const posted = loadPosted().filter(s => s !== body.slug);
      savePosted(posted);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"ok":true}');
    return;
  }

  if (method === 'POST' && url === '/reset') {
    savePosted([]);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"ok":true}');
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

init();

const lanAddress = getLanAddress();

server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('✅ X投稿ダッシュボード 起動中');
  console.log('─'.repeat(40));
  console.log(`  PC:      http://localhost:${PORT}`);
  console.log(`  Android: http://${lanAddress}:${PORT}`);
  console.log('─'.repeat(40));
  console.log('  Ctrl+C で停止');
  console.log('');
  console.log('【Windowsタスクスケジューラ 登録コマンド（初回のみ実行）】');
  console.log(`schtasks /create /tn "SEHealthLab Tweet 09:00" /tr "${BAT_FILE}" /sc daily /st 09:00 /f`);
  console.log(`schtasks /create /tn "SEHealthLab Tweet 12:00" /tr "${BAT_FILE}" /sc daily /st 12:00 /f`);
  console.log('');

  // PCのブラウザを自動で開く
  const { exec } = require('child_process');
  exec(`start http://localhost:${PORT}`);
});

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const matter = require('gray-matter');
const { buildQueuedTweet, getTweetLength, MAX_TWEET_LENGTH, normalizeHashtag } = require('./lib/tweet-utils');

const PORT = 3001;
const BROWSER_DIR = path.join(__dirname, '..', 'browser');
const POSTED_JSON = path.join(BROWSER_DIR, 'posted.json');
const POSTS_DIR = path.join(__dirname, '..', 'content', 'posts');
const SOCIAL_POSTS_JSON = path.join(__dirname, '..', 'content', 'social', 'x-posts.json');
const BAT_FILE = path.join(__dirname, 'open-dashboard.bat');

function loadSocialConfig() {
  try {
    return JSON.parse(fs.readFileSync(SOCIAL_POSTS_JSON, 'utf-8'));
  } catch {
    return { items: [] };
  }
}

function saveSocialConfig(config) {
  fs.writeFileSync(SOCIAL_POSTS_JSON, JSON.stringify(config, null, 2), 'utf-8');
}

function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

function updateSocialPostMeta(id, updater) {
  const config = loadSocialConfig();
  if (!Array.isArray(config.items)) return false;

  let updated = false;
  config.items = config.items.map(item => {
    if ((item.id || '') !== id) return item;
    updated = true;
    return updater({ ...item });
  });

  if (updated) saveSocialConfig(config);
  return updated;
}

function loadPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md') && !f.startsWith('_'));
  return files
    .map(file => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
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
    })
    .sort((a, b) => {
      if (a.sortPriority !== b.sortPriority) return a.sortPriority - b.sortPriority;
      return a.date < b.date ? 1 : -1;
    });
}

function loadSocialPosts() {
  try {
    const raw = loadSocialConfig();
    const items = Array.isArray(raw.items) ? raw.items : [];
    return items.map((item, index) => ({
      ...item,
      id: item.id || `${item.kind || 'social'}-${index + 1}`,
      slug: item.id || `${item.kind || 'social'}-${index + 1}`,
      date: item.date || 'テンプレート',
      category: item.category || 'ITエンジニア健康',
      sourceLabel: item.kind === 'question' ? '質問・アンケート' : '豆知識',
      theme: item.theme || '',
      goal: item.goal || '',
      reusable: Boolean(item.reusable),
      status: item.status || 'ready',
      lastUsedAt: item.lastUsedAt || null,
      sortPriority: Number(item.priority) || 999,
      hashtags: Array.isArray(item.hashtags) ? item.hashtags.map(normalizeHashtag).filter(Boolean) : [],
    }));
  } catch {
    return [];
  }
}

function loadQueue() {
  return [...loadPosts(), ...loadSocialPosts()].sort((a, b) => {
    if (a.sortPriority !== b.sortPriority) return a.sortPriority - b.sortPriority;
    const aDate = a.date || '';
    const bDate = b.date || '';
    if (aDate === bDate) return String(a.id).localeCompare(String(b.id), 'ja');
    return aDate < bDate ? 1 : -1;
  });
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

  const unposted = posts.filter(p => !postedSet.has(p.id) && !postedSet.has(p.slug));
  const postedPosts = posts.filter(p => postedSet.has(p.id) || postedSet.has(p.slug));
  const recommended = new Set(unposted.slice(0, 4).map(p => p.id));

  function card(post, isPosted) {
    const tweet = buildQueuedTweet(post);
    const len = getTweetLength(tweet);
    const lenWarn = len > MAX_TWEET_LENGTH ? `<span class="warn">${len}文字 ⚠️</span>` : `<span class="ok">${len}文字</span>`;
    const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    const isRec = recommended.has(post.id);

    const cardClass = isPosted ? 'card posted' : isRec ? 'card recommended' : 'card';
    const badge = isRec ? '<span class="badge">今日のおすすめ</span>' : '';
    const typeBadge = `<span class="type-badge">${escapeHtml(post.sourceLabel || '投稿')}</span>`;
    const metaChips = post.kind === 'article'
      ? ''
      : `
        <div class="card-chips">
          ${post.theme ? `<span class="chip">テーマ: ${escapeHtml(post.theme)}</span>` : ''}
          ${post.goal ? `<span class="chip">狙い: ${escapeHtml(post.goal)}</span>` : ''}
          <span class="chip">状態: ${escapeHtml(formatStatus(post.status))}</span>
          ${post.lastUsedAt ? `<span class="chip">最終使用: ${escapeHtml(post.lastUsedAt)}</span>` : '<span class="chip">最終使用: 未使用</span>'}
          <span class="chip">${post.reusable ? '再利用可' : '再利用なし'}</span>
        </div>
      `;
    const reviewControls = post.kind === 'article'
      ? ''
      : `
        <div class="review-controls">
          <label class="review-label" for="status-${post.id}">状態</label>
          <select class="status-select" id="status-${post.id}">
            ${buildStatusOptions(post.status)}
          </select>
          <button class="btn-status" onclick="updateStatus('${post.id}')">状態を保存</button>
        </div>
      `;

    const actions = isPosted
      ? `<button class="btn-undo" onclick="markUnposted('${post.id}', this)">投稿済みを元に戻す</button>`
      : `
        <a class="btn-post" href="${intentUrl}" target="_blank" rel="noopener">Xで投稿 →</a>
        <button class="btn-copy" onclick="copyTweet('${post.id}')">コピー</button>
        <button class="btn-done" onclick="markPosted('${post.id}', this)">投稿済みにする ✓</button>
      `;

    return `
<div class="${cardClass}" id="card-${post.id}">
  <div class="card-header">
    ${badge}
    ${typeBadge}
    <div class="card-title">${post.title}</div>
    <div class="card-meta">${post.date} &nbsp;|&nbsp; ${post.category} &nbsp;|&nbsp; ${lenWarn}</div>
    ${metaChips}
    ${reviewControls}
  </div>
  <pre class="tweet-preview" id="tweet-${post.id}">${escapeHtml(tweet)}</pre>
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
  .type-badge { display: inline-block; background: #e2e8f0; color: #334155;
                font-size: 0.7rem; padding: 2px 8px; border-radius: 99px; margin-left: 6px; margin-bottom: 6px; }
  .card-title { font-weight: 700; font-size: 0.95rem; margin-bottom: 4px; }
  .card-meta { font-size: 0.75rem; color: #888; margin-bottom: 10px; }
  .card-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
  .chip { background: #eef2ff; color: #334155; border-radius: 999px; padding: 4px 8px;
          font-size: 0.72rem; line-height: 1.2; }
  .review-controls { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 10px; }
  .review-label { font-size: 0.78rem; color: #475569; font-weight: 600; }
  .status-select { border: 1px solid #cbd5e1; border-radius: 8px; padding: 6px 10px;
                   font-size: 0.8rem; background: #fff; color: #0f172a; }
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
  .btn-copy { background: #0f172a; color: #fff; border: none; border-radius: 99px;
              padding: 8px 16px; font-size: 0.85rem; cursor: pointer; font-weight: 600; }
  .btn-status { background: #475569; color: #fff; border: none; border-radius: 99px;
                padding: 7px 14px; font-size: 0.8rem; cursor: pointer; font-weight: 600; }
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
<p class="subtitle">未投稿: ${unposted.length}件 / 全${posts.length}件（記事シェア + 豆知識 + 質問）</p>

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

async function copyTweet(id) {
  const text = document.getElementById('tweet-' + id)?.innerText || '';
  if (!text) return;
  await navigator.clipboard.writeText(text);
}

async function updateStatus(id) {
  const status = document.getElementById('status-' + id)?.value;
  if (!status) return;
  await fetch('/update-status', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, status })
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

function formatStatus(status) {
  const map = {
    ready: '使用可能',
    active: '重点運用',
    paused: '休止中',
    archived: 'アーカイブ',
  };
  return map[status] || status || '未設定';
}

function buildStatusOptions(currentStatus) {
  const statuses = [
    ['ready', '使用可能'],
    ['active', '重点運用'],
    ['paused', '休止中'],
    ['archived', 'アーカイブ'],
  ];

  return statuses
    .map(([value, label]) => `<option value="${value}"${value === currentStatus ? ' selected' : ''}>${label}</option>`)
    .join('');
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
    const posts = loadQueue();
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
      updateSocialPostMeta(body.slug, item => ({
        ...item,
        status: 'active',
        lastUsedAt: getTodayString(),
      }));
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
      updateSocialPostMeta(body.slug, item => ({
        ...item,
        status: 'ready',
        lastUsedAt: null,
      }));
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"ok":true}');
    return;
  }

  if (method === 'POST' && url === '/reset') {
    savePosted([]);
    const config = loadSocialConfig();
    if (Array.isArray(config.items)) {
      config.items = config.items.map(item => ({
        ...item,
        status: 'ready',
        lastUsedAt: null,
      }));
      saveSocialConfig(config);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"ok":true}');
    return;
  }

  if (method === 'POST' && url === '/update-status') {
    const body = await parseBody(req);
    const allowed = new Set(['ready', 'active', 'paused', 'archived']);
    if (body.id && allowed.has(body.status)) {
      updateSocialPostMeta(body.id, item => ({
        ...item,
        status: body.status,
      }));
    }
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

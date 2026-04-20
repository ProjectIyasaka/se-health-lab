#!/usr/bin/env python3
"""
find_readers.py - se-health-lab 潜在読者アカウント収集スクリプト

使い方:
  pip install -U scweet
  python scripts/find_readers.py

認証: C:/Users/haruc/reader-finder/cookies/config.json に auth_token を設定
結果:
  C:/Users/haruc/reader-finder/data/readers_YYYYMMDD.csv
  C:/Users/haruc/reader-finder/index.html  (ブラウザで閲覧可)
  C:/Users/haruc/reader-finder/seen_ids.json  (重複排除用・累積)

PostgreSQL に切り替える場合:
  USE_POSTGRES = True に変更し、DB_URL を設定してください。
  pip install asyncpg が必要です。
"""

import asyncio
import csv
import json
import random
import urllib.request
from abc import ABC, abstractmethod
from datetime import datetime
from pathlib import Path

# ---------------------------------------------------------------------------
# パス設定
# ---------------------------------------------------------------------------
READER_FINDER_DIR = Path("C:/Users/haruc/reader-finder")
CONFIG_FILE = READER_FINDER_DIR / "cookies" / "config.json"
DATA_DIR = READER_FINDER_DIR / "data"
INDEX_HTML = READER_FINDER_DIR / "index.html"
SEEN_IDS_FILE = READER_FINDER_DIR / "seen_ids.json"
SCWEET_DB = READER_FINDER_DIR / "cookies" / "scweet_state.db"

# ---------------------------------------------------------------------------
# 設定
# ---------------------------------------------------------------------------
MAX_NEW_PER_DAY = 30        # 1日の最大新規取得数（様子を見ながら増やす）
MIN_FOLLOWERS = 30
MAX_FOLLOWERS = 30_000
MIN_TWEETS = 50
MAX_PER_QUERY = 20

# ストレージ選択: False = ファイルベース、True = PostgreSQL
USE_POSTGRES = False
DB_URL = "postgresql://user:password@localhost:5432/reader_finder"

# ---------------------------------------------------------------------------
# 検索キーワード
# ---------------------------------------------------------------------------
SEARCH_QUERIES = [
    "プロトン水",
    "シリカ水 健康",
    "水素水 効果",
    "ITエンジニア 健康管理",
    "SE 健康",
    "プログラマー サプリ",
    "エンジニア 筋トレ",
    "マルベリー サプリメント",
    "エンジニア 水分補給",
    "プログラマー 体調管理",
    # 睡眠・疲労回復
    "エンジニア 睡眠",
    "プログラマー 疲労回復",
    "睡眠 サプリ",
    "疲労回復 健康",
    # メンタルヘルス
    "エンジニア メンタルヘルス",
    "ストレス解消 健康",
    "マインドフルネス",
    "メンタルヘルス 習慣",
]

ENGINEER_WORDS = [
    "エンジニア", "プログラマ", "SE", "SIer", "developer", "engineer",
    "IT", "開発", "コーダー", "インフラ", "DevOps", "クラウド", "システム",
]
HEALTH_WORDS = [
    "健康", "サプリ", "筋トレ", "ダイエット", "栄養", "運動",
    "水素水", "プロトン", "wellness", "ヘルス", "フィットネス",
    "スポーツ", "マラソン", "格闘技", "ボクシング", "トレーニング",
    "睡眠", "疲労", "メンタル", "ストレス",
    "マインドフルネス", "リカバリー", "休養", "リラックス",
]


# ---------------------------------------------------------------------------
# ストレージ抽象レイヤー（File / PostgreSQL を切り替え可能）
# ---------------------------------------------------------------------------
class UserStore(ABC):
    @abstractmethod
    async def load_seen_ids(self) -> set[str]:
        """過去に取得済みのユーザー名一覧を返す"""

    @abstractmethod
    async def save_users(self, users: list[dict]) -> None:
        """新規ユーザーを保存し seen_ids を更新する"""

    @abstractmethod
    async def close(self) -> None:
        pass


class FileStore(UserStore):
    def __init__(self):
        DATA_DIR.mkdir(parents=True, exist_ok=True)
        self._seen: set[str] = set()

    async def load_seen_ids(self) -> set[str]:
        if SEEN_IDS_FILE.exists():
            data = json.loads(SEEN_IDS_FILE.read_text(encoding="utf-8"))
            self._seen = set(data)
            print(f"✓ 既取得: {len(self._seen):,} 件 ({SEEN_IDS_FILE})")
        else:
            print("✓ seen_ids.json なし（初回実行）")
        return self._seen

    async def save_users(self, users: list[dict]) -> None:
        if not users:
            return
        today = datetime.now().strftime("%Y%m%d")
        csv_file = DATA_DIR / f"readers_{today}.csv"
        file_exists = csv_file.exists()
        with open(csv_file, "a", newline="", encoding="utf-8-sig") as f:
            writer = csv.DictWriter(f, fieldnames=users[0].keys())
            if not file_exists:
                writer.writeheader()
            writer.writerows(users)
        new_ids = {u["username"] for u in users}
        self._seen |= new_ids
        SEEN_IDS_FILE.write_text(
            json.dumps(sorted(self._seen), ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

    async def close(self) -> None:
        pass


class PostgresStore(UserStore):
    """PostgreSQL ストレージ（USE_POSTGRES = True で有効）

    テーブル定義:
        CREATE TABLE readers (
            username    TEXT PRIMARY KEY,
            name        TEXT,
            followers   INTEGER,
            following   INTEGER,
            tweets      INTEGER,
            bio         TEXT,
            score       INTEGER,
            profile_url TEXT,
            found_by    TEXT,
            fetched_at  TIMESTAMPTZ DEFAULT NOW()
        );
    """

    def __init__(self):
        self._pool = None

    async def _get_pool(self):
        if self._pool is None:
            import asyncpg
            self._pool = await asyncpg.create_pool(DB_URL)
            await self._pool.execute("""
                CREATE TABLE IF NOT EXISTS readers (
                    username    TEXT PRIMARY KEY,
                    name        TEXT,
                    followers   INTEGER,
                    following   INTEGER,
                    tweets      INTEGER,
                    bio         TEXT,
                    score       INTEGER,
                    profile_url TEXT,
                    found_by    TEXT,
                    fetched_at  TIMESTAMPTZ DEFAULT NOW()
                )
            """)
        return self._pool

    async def load_seen_ids(self) -> set[str]:
        pool = await self._get_pool()
        rows = await pool.fetch("SELECT username FROM readers")
        seen = {r["username"] for r in rows}
        print(f"✓ DB既取得: {len(seen):,} 件")
        return seen

    async def save_users(self, users: list[dict]) -> None:
        if not users:
            return
        pool = await self._get_pool()
        await pool.executemany(
            """
            INSERT INTO readers
              (username, name, followers, following, tweets,
               bio, score, profile_url, found_by)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
            ON CONFLICT (username) DO NOTHING
            """,
            [(u["username"], u["name"], u["followers"], u["following"],
              u["tweets"], u["bio"], u["score"], u["profile_url"], u["found_by"])
             for u in users],
        )

    async def close(self) -> None:
        if self._pool:
            await self._pool.close()


# ---------------------------------------------------------------------------
# Discord 通知
# ---------------------------------------------------------------------------
def notify_discord(webhook_url: str, message: str) -> None:
    payload = json.dumps({"content": message}).encode("utf-8")
    req = urllib.request.Request(
        webhook_url,
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=10):
            pass
    except Exception as e:
        print(f"  ⚠ Discord通知失敗: {e}")


# ---------------------------------------------------------------------------
# ユーティリティ
# ---------------------------------------------------------------------------
def score_user(profile: dict) -> int:
    score = 0
    bio = (profile.get("description") or "").lower()
    for kw in ENGINEER_WORDS:
        if kw.lower() in bio:
            score += 2
    for kw in HEALTH_WORDS:
        if kw.lower() in bio:
            score += 3
    followers = profile.get("followers_count", 0) or 0
    tweets = profile.get("statuses_count", 0) or 0
    if 500 <= followers <= 10_000:
        score += 2
    elif 100 <= followers < 500:
        score += 1
    if tweets >= 500:
        score += 1
    return score


async def wait_read_profile():
    """プロフィールを読む速さ（5〜15秒）"""
    wait = random.uniform(5.0, 15.0)
    await asyncio.sleep(wait)


async def wait_next_search():
    """次の検索キーワードを考える速さ（30〜60秒）"""
    if random.random() < 0.20:
        wait = random.uniform(90.0, 180.0)
        print(f"  … 少し休憩 ({wait:.0f}s)")
    else:
        wait = random.uniform(30.0, 60.0)
        print(f"  … 次の検索へ ({wait:.0f}s)")
    await asyncio.sleep(wait)


def generate_html(results: list[dict], run_at: str, total_seen: int) -> str:
    data_json = json.dumps(results, ensure_ascii=False)
    return f"""<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>se-health-lab 潜在読者リスト</title>
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{ font-family: -apple-system, 'Hiragino Sans', sans-serif; background: #f5f5f5; color: #333; }}
  .header {{ background: #1da1f2; color: white; padding: 20px 24px; }}
  .header h1 {{ font-size: 20px; font-weight: 700; }}
  .meta {{ display: flex; gap: 12px; margin-top: 8px; flex-wrap: wrap; }}
  .meta span {{ background: rgba(255,255,255,0.2); padding: 3px 10px; border-radius: 10px; font-size: 12px; }}
  .controls {{ padding: 16px 24px; background: white; border-bottom: 1px solid #e0e0e0;
               display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }}
  .controls input {{ padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px;
                     font-size: 14px; width: 260px; }}
  .controls select {{ padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; }}
  .stats {{ padding: 12px 24px; background: #e8f4fd; font-size: 13px; color: #555; }}
  table {{ width: 100%; border-collapse: collapse; background: white; }}
  th {{ background: #f9f9f9; padding: 10px 14px; text-align: left; font-size: 13px;
        color: #666; border-bottom: 2px solid #e0e0e0; white-space: nowrap; }}
  td {{ padding: 10px 14px; font-size: 13px; border-bottom: 1px solid #f0f0f0; vertical-align: top; }}
  tr:hover td {{ background: #fafeff; }}
  .name {{ font-weight: 600; }}
  .screen-name a {{ color: #1da1f2; text-decoration: none; }}
  .screen-name a:hover {{ text-decoration: underline; }}
  .bio {{ color: #555; max-width: 300px; line-height: 1.4; }}
  .score-bar {{ display: flex; align-items: center; gap: 6px; }}
  .score-pip {{ width: 10px; height: 10px; border-radius: 2px; background: #1da1f2; }}
  .score-pip.empty {{ background: #e0e0e0; }}
  .score-num {{ font-weight: 600; color: #1da1f2; min-width: 20px; }}
  .tag {{ display: inline-block; padding: 2px 7px; border-radius: 10px;
          font-size: 11px; background: #e8f4fd; color: #1a7ab5; margin: 1px; }}
  .num {{ text-align: right; color: #555; }}
  .empty {{ text-align: center; padding: 40px; color: #999; }}
</style>
</head>
<body>
<div class="header">
  <h1>📊 se-health-lab 潜在読者リスト</h1>
  <div class="meta">
    <span>最終取得: {run_at}</span>
    <span>今回新規: <strong id="total">0</strong> 件</span>
    <span>累計取得済み: <strong>{total_seen:,}</strong> 件</span>
  </div>
</div>
<div class="controls">
  <input type="text" id="search" placeholder="名前・Bio・キーワードで絞り込み…" oninput="render()">
  <select id="sort" onchange="render()">
    <option value="score_desc">スコア（高い順）</option>
    <option value="followers_desc">フォロワー（多い順）</option>
    <option value="followers_asc">フォロワー（少ない順）</option>
  </select>
  <select id="keyword_filter" onchange="render()">
    <option value="">すべてのキーワード</option>
  </select>
</div>
<div class="stats" id="stats"></div>
<table>
  <thead>
    <tr>
      <th>アカウント</th>
      <th>Bio</th>
      <th class="num">フォロワー</th>
      <th class="num">ツイート数</th>
      <th>スコア</th>
      <th>発見キーワード</th>
    </tr>
  </thead>
  <tbody id="tbody"></tbody>
</table>
<script>
const ALL_DATA = {data_json};
const MAX_PIPS = 10;
const kwSet = [...new Set(ALL_DATA.map(r => r.found_by))].sort();
const kwSel = document.getElementById('keyword_filter');
kwSet.forEach(kw => {{
  const opt = document.createElement('option');
  opt.value = kw; opt.textContent = kw;
  kwSel.appendChild(opt);
}});
function render() {{
  const q = document.getElementById('search').value.toLowerCase();
  const sort = document.getElementById('sort').value;
  const kf = document.getElementById('keyword_filter').value;
  let data = ALL_DATA.filter(r => {{
    const text = ('@' + r.username + r.name + r.bio + r.found_by).toLowerCase();
    return (!q || text.includes(q)) && (!kf || r.found_by === kf);
  }});
  data.sort((a, b) => {{
    if (sort === 'score_desc') return b.score - a.score;
    if (sort === 'followers_desc') return b.followers - a.followers;
    if (sort === 'followers_asc') return a.followers - b.followers;
    return 0;
  }});
  document.getElementById('total').textContent = ALL_DATA.length;
  document.getElementById('stats').textContent =
    `表示中: ${{data.length}} 件 ／ 今回新規: ${{ALL_DATA.length}} 件`;
  const tbody = document.getElementById('tbody');
  if (data.length === 0) {{
    tbody.innerHTML = '<tr><td colspan="6" class="empty">該当なし</td></tr>';
    return;
  }}
  tbody.innerHTML = data.map(r => {{
    const pips = Array.from({{length: MAX_PIPS}}, (_, i) =>
      `<span class="score-pip ${{i < r.score ? '' : 'empty'}}"></span>`).join('');
    return `<tr>
      <td>
        <div class="name">${{r.name}}</div>
        <div class="screen-name"><a href="${{r.profile_url}}" target="_blank">@${{r.username}}</a></div>
      </td>
      <td><div class="bio">${{r.bio || '—'}}</div></td>
      <td class="num">${{r.followers.toLocaleString()}}</td>
      <td class="num">${{r.tweets.toLocaleString()}}</td>
      <td><div class="score-bar"><span class="score-num">${{r.score}}</span>${{pips}}</div></td>
      <td><span class="tag">${{r.found_by}}</span></td>
    </tr>`;
  }}).join('');
}}
render();
</script>
</body>
</html>"""


# ---------------------------------------------------------------------------
# メイン
# ---------------------------------------------------------------------------
async def main():
    # auth_token 読み込み
    if not CONFIG_FILE.exists():
        print(f"⚠ 設定ファイルが見つかりません: {CONFIG_FILE}")
        return
    config = json.loads(CONFIG_FILE.read_text(encoding="utf-8"))
    auth_token = config.get("auth_token")
    if not auth_token:
        print("⚠ config.json に auth_token がありません")
        return
    discord_webhook_url = config.get("discord_webhook_url")

    # Scweet クライアント初期化
    from Scweet.client import Scweet
    s = Scweet(
        auth_token=auth_token,
        db_path=str(SCWEET_DB),
    )

    # ストレージ初期化
    store: UserStore = PostgresStore() if USE_POSTGRES else FileStore()
    seen_ids = await store.load_seen_ids()
    session_seen: set[str] = set()

    new_results: list[dict] = []
    queries = SEARCH_QUERIES.copy()
    random.shuffle(queries)

    est_min = (10 * MAX_NEW_PER_DAY + 45 * len(queries)) // 60
    print(f"\n検索開始（{len(queries)} キーワード、上限: {MAX_NEW_PER_DAY} 件）")
    print(f"⏱ 目安所要時間: 約 {est_min}〜{est_min * 2} 分\n")

    for i, query in enumerate(queries, 1):
        if len(new_results) >= MAX_NEW_PER_DAY:
            print(f"\n⏹ 上限 {MAX_NEW_PER_DAY} 件に達しました。終了します。")
            break

        remaining = MAX_NEW_PER_DAY - len(new_results)
        print(f"[{i}/{len(queries)}] 🔍 {query}  （残り枠: {remaining} 件）")

        try:
            # ツイートを検索してユーザー名を収集
            tweets = await s.asearch(query, limit=MAX_PER_QUERY, display_type="Latest")

            new_names: list[str] = []
            for tweet in tweets:
                user_data = tweet.get("user") or {}
                sn = user_data.get("screen_name") or ""
                if not sn:
                    continue
                username = sn.lstrip("@")
                if username in seen_ids or username in session_seen:
                    continue
                session_seen.add(username)
                new_names.append(username)

            print(f"  → ツイート {len(tweets)} 件、新規ユーザー候補 {len(new_names)} 名")

            if not new_names:
                if i < len(queries):
                    await wait_next_search()
                continue

            # ユーザープロフィールを一括取得
            print(f"  → プロフィール取得中…")
            profiles = await s.aget_user_info(new_names)

            added = 0
            for profile in profiles:
                if len(new_results) >= MAX_NEW_PER_DAY:
                    break

                username = profile.get("username") or ""
                if not username:
                    continue

                followers = profile.get("followers_count") or 0
                tweets_count = profile.get("statuses_count") or 0

                if not (MIN_FOLLOWERS <= followers <= MAX_FOLLOWERS):
                    continue
                if tweets_count < MIN_TWEETS:
                    continue

                new_results.append({
                    "username": username,
                    "name": profile.get("name") or "",
                    "followers": followers,
                    "following": profile.get("following_count") or 0,
                    "tweets": tweets_count,
                    "bio": (profile.get("description") or "").replace("\n", " "),
                    "score": score_user(profile),
                    "profile_url": f"https://x.com/{username}",
                    "found_by": query,
                })
                added += 1
                await wait_read_profile()

            print(f"  → {added} 件追加（累計 {len(new_results)} 件）")

        except Exception as e:
            print(f"  ⚠ エラー: {e}")
            wait = random.uniform(60.0, 120.0)
            print(f"  … エラー後に待機 ({wait:.0f}s)")
            await asyncio.sleep(wait)
            continue

        if i < len(queries) and len(new_results) < MAX_NEW_PER_DAY:
            await wait_next_search()

    await store.close()

    if not new_results:
        print("\n⚠ 新規取得ユーザーが0件でした。")
        return



    new_results.sort(key=lambda x: x["score"], reverse=True)
    await store.save_users(new_results)

    run_at = datetime.now().strftime("%Y-%m-%d %H:%M")
    total_seen_after = len(seen_ids) + len(new_results)
    INDEX_HTML.write_text(
        generate_html(new_results, run_at, total_seen_after), encoding="utf-8"
    )

    today = datetime.now().strftime("%Y%m%d")
    print(f"\n✅ 完了！新規 {len(new_results)} 件（累計 {total_seen_after:,} 件）")
    print(f"📄 CSV  : {DATA_DIR / f'readers_{today}.csv'}")
    print(f"🗂 IDs  : {SEEN_IDS_FILE}")
    print(f"🌐 HTML : {INDEX_HTML}")

    if discord_webhook_url:
        top = "\n".join(
            f"  @{r['username']} (スコア:{r['score']}) {r['bio'][:40]}"
            for r in new_results[:5]
        )
        msg = (
            f"✅ **se-health-lab 読者収集完了** ({run_at})\n"
            f"新規: **{len(new_results)} 件** ／ 累計: **{total_seen_after:,} 件**\n"
            f"```\n{top}\n```"
        )
        notify_discord(discord_webhook_url, msg)
    print("\n--- 上位10件 ---")
    for r in new_results[:10]:
        print(
            f"  @{r['username']:24s} "
            f"フォロワー:{r['followers']:>6,}  "
            f"スコア:{r['score']}  "
            f"{r['bio'][:50]}"
        )


async def _run():
    try:
        await main()
    except Exception as e:
        print(f"\n💥 致命的エラー: {e}")
        if CONFIG_FILE.exists():
            config = json.loads(CONFIG_FILE.read_text(encoding="utf-8"))
            webhook = config.get("discord_webhook_url")
            if webhook:
                notify_discord(webhook, f"💥 **se-health-lab 読者収集エラー**\n```{e}```")
        raise


if __name__ == "__main__":
    asyncio.run(_run())

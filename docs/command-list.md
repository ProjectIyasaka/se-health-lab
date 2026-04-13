# コマンド一覧

`se-health-lab` の運用で使うコマンドをまとめたメモです。  
前提: PowerShell で `C:\Users\haruc\projects\se-health-lab` に移動して実行します。

## 基本

```powershell
cd C:\Users\haruc\projects\se-health-lab
```

## 開発・確認

| コマンド | 用途 |
|---|---|
| `npm run dev` | Next.js の開発サーバーを起動 |
| `npm run build` | OG画像生成・RSS生成を含めて本番ビルド |
| `npm run start` | build 後の本番サーバーを起動 |

## 記事運用

| コマンド | 用途 |
|---|---|
| `npm run new-post` | 新規記事テンプレートを作成 |
| `npm run generate-og` | OG画像を再生成 |
| `npm run generate-rss` | RSSを再生成 |

## X運用

| コマンド | 用途 |
|---|---|
| `npm run tweets` | 記事シェア・豆知識・質問を含む投稿文一覧を生成して確認 |
| `npm run tweet-dashboard` | X投稿ダッシュボードを起動 |
| `npm run tweet-post -- <post-slug>` | X API 経由で記事投稿を実行する旧フロー。通常運用では使わず、必要時のみ使用 |

## よく使う運用フロー

### 1. 水曜の豆知識・質問投稿

```powershell
cd C:\Users\haruc\projects\se-health-lab
npm run tweet-dashboard
```

ダッシュボードでやること:

1. 豆知識または質問カードを選ぶ
2. `Xで投稿` または `コピー` を押す
3. 投稿後に `投稿済みにする` を押す
4. 必要なら `状態` を `active` `paused` `archived` に更新する

### 2. 投稿文の事前確認

```powershell
cd C:\Users\haruc\projects\se-health-lab
npm run tweets
```

用途:

- 文字数オーバー確認
- 豆知識・質問の文面確認
- 記事シェアのタグ確認

### 3. 新しい豆知識・質問ネタを追加

編集対象:

- `content/social/x-posts.json`

追加後の確認:

```powershell
cd C:\Users\haruc\projects\se-health-lab
npm run tweets
npm run tweet-dashboard
```

### 4. 月次レビュー

```powershell
cd C:\Users\haruc\projects\se-health-lab
npm run tweet-dashboard
```

月次レビューで見る項目:

- `theme` : どのテーマに偏っているか
- `goal` : その投稿で何を狙っていたか
- `status` : `ready` `active` `paused` `archived`
- `lastUsedAt` : 最後に使った日

状態変更の目安:

- `active` : 今月も優先して回すネタ
- `ready` : 再利用可能だが今月は優先しない
- `paused` : しばらく寝かせる
- `archived` : 今後は使わない

月次レビュー後にやること:

1. 反応の良かったテーマを `active` に寄せる
2. 使いすぎたネタは `paused` にする
3. 古い問いや弱いネタは `archived` にする
4. 必要なら `content/social/x-posts.json` に新ネタを追加する

## 補足

- 通常のX運用は API を使わず、`tweet-dashboard` から公式投稿ダイアログを開く方式
- 豆知識・質問の管理データは `content/social/x-posts.json`
- `投稿済みにする` を押すと、対象ネタの `lastUsedAt` と `status` が更新される

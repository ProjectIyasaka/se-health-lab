import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Sidebar() {
  const posts = getSortedPostsData();
  const recentPosts = posts.slice(0, 5);

  // カテゴリ別の記事数（重複除去）
  const categoryMap = posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] ?? 0) + 1;
    return acc;
  }, {});

  // カテゴリごとの代表記事slug（最新）
  const categorySlug = (cat: string) => posts.find((p) => p.category === cat)!.slug;

  return (
    <aside className="sidebar">
      <div className="sidebar-box">
        <div className="sidebar-box-title">新着記事</div>
        <ul className="sidebar-list">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-box">
        <div className="sidebar-box-title">カテゴリ</div>
        <ul className="sidebar-list">
          {Object.entries(categoryMap).map(([cat, count]) => (
            <li key={cat}>
              <Link href={`/posts/${categorySlug(cat)}`}>{cat}（{count}）</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-box">
        <div className="sidebar-box-title">このサイトについて</div>
        <ul className="sidebar-list">
          <li>現役ITエンジニアが「成分データ」と「科学的根拠」で健康製品を徹底解説。「なんとなく体に良い」ではなく「なぜ体に良いのか」をエンジニア目線で語ります。</li>
        </ul>
      </div>
    </aside>
  );
}

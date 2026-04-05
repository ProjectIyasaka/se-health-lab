import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-box">
        <div className="sidebar-box-title">新着記事</div>
        <ul className="sidebar-list">
          <li><Link href="/posts/kickboxer-hydration">キックボクサーの水分補給を科学する</Link></li>
          <li><Link href="/posts/pe-cream-ingredients">PE製品の成分をエンジニアが解析</Link></li>
          <li><Link href="/posts/marathon-runner-hydration">マラソンランナーの水分補給を科学する</Link></li>
        </ul>
      </div>

      <div className="sidebar-box">
        <div className="sidebar-box-title">カテゴリ</div>
        <ul className="sidebar-list">
          <li><Link href="/posts/what-is-proton-water">プロトン水</Link></li>
          <li><Link href="/posts/pe-cream-ingredients">PE製品</Link></li>
        </ul>
      </div>

      <div className="sidebar-box">
        <div className="sidebar-box-title">タグ</div>
        <div className="tag-cloud">
          <Link href="/posts/what-is-proton-water">プロトン水</Link>
          <Link href="/posts/what-is-proton-water">水素水</Link>
          <Link href="/posts/what-is-proton-water">énazuma7</Link>
          <Link href="/posts/pe-cream-ingredients">PE製品</Link>
          <Link href="/posts/pe-cream-ingredients">薬用コスメ</Link>
          <Link href="/posts/marathon-runner-hydration">マラソン</Link>
          <Link href="/posts/marathon-runner-hydration">スポーツ栄養</Link>
          <Link href="/posts/pe-cream-ingredients">成分解析</Link>
        </div>
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

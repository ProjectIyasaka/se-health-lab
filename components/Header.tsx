import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className="site-logo">
            <span className="name">IT健康ラボ</span>
            <span className="tagline">現役エンジニアが成分データで語る健康科学</span>
          </div>
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul className="site-nav">
            <li><Link href="/">トップ</Link></li>
            <li><Link href="/category/proton-water">プロトン水</Link></li>
            <li><Link href="/category/supplements">サプリメント</Link></li>
            <li><Link href="/category/pe-products">PE製品</Link></li>
            <li><Link href="/about">管理人</Link></li>
          </ul>
          <DarkModeToggle />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

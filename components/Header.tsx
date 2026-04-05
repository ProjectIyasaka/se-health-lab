import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

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
        <nav>
          <ul className="site-nav">
            <li><Link href="/">トップ</Link></li>
            <li><Link href="/posts/what-is-proton-water">プロトン水</Link></li>
            <li><Link href="/posts/pe-cream-ingredients">PE製品</Link></li>
            <li><Link href="/about">管理人</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}

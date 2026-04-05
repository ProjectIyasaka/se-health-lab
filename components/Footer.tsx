import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <ul className="footer-links">
          <li><Link href="/">トップ</Link></li>
          <li><Link href="/privacy">プライバシーポリシー</Link></li>
          <li><Link href="/contact">お問い合わせ</Link></li>
        </ul>
        <p className="footer-copy">&copy; 2026 ITエンジニアの健康科学ラボ</p>
      </div>
    </footer>
  );
}

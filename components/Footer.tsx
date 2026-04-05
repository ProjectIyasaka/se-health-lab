import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-disclaimer-bar">
        <p className="footer-disclaimer-text">【免責事項】当サイトの記事は成分・数値データの情報提供を目的としており、医療的アドバイスではありません。記事はあくまで成分データの解析であり、効果を保証するものではありません。健康上の問題は必ず医療機関にご相談ください。一部記事にはアフィリエイトリンクが含まれます。</p>
      </div>
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

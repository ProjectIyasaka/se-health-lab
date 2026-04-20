'use client';
import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/', label: 'トップ' },
  { href: '/category/proton-water', label: 'プロトン水' },
  { href: '/category/supplements', label: 'サプリメント' },
  { href: '/category/pe-products', label: 'PE製品' },
  { href: '/about', label: '管理人' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? '✕' : '☰'}
      </button>
      {open && (
        <nav id="mobile-nav-menu" className="mobile-nav" aria-label="モバイルナビゲーション">
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

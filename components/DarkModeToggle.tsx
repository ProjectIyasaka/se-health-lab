'use client';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved === 'dark';
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button className="dark-toggle" onClick={toggle} aria-label="ダークモード切替" title="ダークモード切替">
      {dark ? '☀' : '🌙'}
    </button>
  );
}

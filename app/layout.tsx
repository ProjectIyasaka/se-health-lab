import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const BASE_URL = 'https://se-health-lab.com';

export const metadata: Metadata = {
  title: {
    default: 'ITエンジニアの健康科学ラボ | 成分データで語る健康科学',
    template: '%s | IT健康ラボ',
  },
  description: '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: BASE_URL,
    siteName: 'ITエンジニアの健康科学ラボ',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITエンジニアの健康科学ラボ | 成分データで語る健康科学',
    description: '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。',
    images: [`${BASE_URL}/og-image.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ITエンジニアの健康科学ラボ',
  url: BASE_URL,
  description: '現役ITエンジニアが成分データで語る健康科学',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');})();` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G2W2CT50W1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G2W2CT50W1');
          `}
        </Script>
      </body>
    </html>
  );
}

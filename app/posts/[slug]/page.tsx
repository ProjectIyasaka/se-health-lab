import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = 'https://se-health-lab.com';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  const url = `${BASE_URL}/posts/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      locale: 'ja_JP',
      siteName: 'ITエンジニアの健康科学ラボ',
      images: [{ url: `${BASE_URL}/og/${slug}.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}/og/${slug}.png`],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.params.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 4);
  const recentPosts = allPosts
    .filter((p) => p.slug !== slug && p.category !== post.category)
    .slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/posts/${slug}`,
    author: {
      '@type': 'Person',
      name: 'IT健康ラボ管理人',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ITエンジニアの健康科学ラボ',
      url: BASE_URL,
    },
  };
  const faqJsonLd = post.faq && post.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />

      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">トップ</Link><span>›</span>{post.title}
        </div>
      </div>

      <div className="article-wrapper">
        <main>
          <article className="article-main">
            <Link href={`/category/${post.categorySlug}`} className="article-cat">{post.category}</Link>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-meta">公開 {post.date} | 更新 {post.updatedAt} | 読了目安 {post.readingMinutes}分 | IT健康ラボ管理人</p>

            <div className="article-trust-box">
              <div className="article-trust-label">この記事について</div>
              <ul className="article-trust-list">
                <li>公的機関・学会・一次情報を優先して確認</li>
                <li>体験談ではなく成分表と数値を中心に整理</li>
                <li>食品・化粧品としての情報提供を目的に記載</li>
              </ul>
            </div>

            {post.tldr && post.tldr.length > 0 && (
              <div className="article-tldr">
                <div className="article-tldr-label">TL;DR — この記事のポイント</div>
                <ul>
                  {post.tldr.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            )}

            {post.headings.length > 0 && (
              <div className="article-outline">
                <div className="article-outline-label">この記事の構成</div>
                <ol className="article-outline-list">
                  {post.headings.map((heading, i) => (
                    <li key={i}>{heading}</li>
                  ))}
                </ol>
              </div>
            )}

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {(relatedPosts.length > 0 || recentPosts.length > 0) && (
              <div className="article-next-reads">
                <h2 className="article-next-reads-title">次に読むなら</h2>
                <div className="article-next-reads-list">
                  {[...relatedPosts, ...recentPosts].slice(0, 4).map((p) => (
                    <Link key={p.slug} href={`/posts/${p.slug}`} className="article-next-read-card">
                      <span className="article-next-read-cat">{p.category}</span>
                      <strong>{p.title}</strong>
                      <span>{p.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {post.faq && post.faq.length > 0 && (
              <section className="article-faq">
                <h2 className="article-faq-title">よくある質問</h2>
                <div className="article-faq-list">
                  {post.faq.map((item, index) => (
                    <div key={index} className="article-faq-card">
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {post.references && post.references.length > 0 && (
              <div className="article-references">
                <h2 className="references-title">参考文献・データソース</h2>
                <ul className="references-list">
                  {post.references.map((ref, i) => (
                    <li key={i}>
                      <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a>
                      {ref.isPrimary && <span className="reference-badge">一次情報</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </main>

        <aside className="sidebar">
          <div className="sidebar-box">
            <div className="sidebar-box-title">同カテゴリの関連記事</div>
            <ul className="sidebar-list">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {recentPosts.length > 0 && (
            <div className="sidebar-box">
              <div className="sidebar-box-title">新着記事</div>
              <ul className="sidebar-list">
                {recentPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <Footer />
    </>
  );
}

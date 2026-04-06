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
  const allPosts = getSortedPostsData().filter((p) => p.slug !== slug).slice(0, 5);

  const jsonLd = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">トップ</Link><span>›</span>{post.title}
        </div>
      </div>

      <div className="article-wrapper">
        <main>
          <article className="article-main">
            <span className="article-cat">{post.category}</span>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-meta">{post.date} | IT健康ラボ管理人</p>

            {post.tldr && post.tldr.length > 0 && (
              <div className="article-tldr">
                <div className="article-tldr-label">TL;DR — この記事のポイント</div>
                <ul>
                  {post.tldr.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            )}

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {post.references && post.references.length > 0 && (
              <div className="article-references">
                <h2 className="references-title">参考文献・データソース</h2>
                <ul className="references-list">
                  {post.references.map((ref, i) => (
                    <li key={i}>
                      <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </main>

        <aside className="sidebar">
          <div className="sidebar-box">
            <div className="sidebar-box-title">関連記事</div>
            <ul className="sidebar-list">
              {allPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/posts/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
}

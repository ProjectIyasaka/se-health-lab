import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllCategories, getPostsByCategory } from '@/lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = 'https://se-health-lab.com';

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryData = getPostsByCategory(slug);
  if (!categoryData) {
    return {};
  }

  const { category } = categoryData;
  const url = `${BASE_URL}/category/${category.slug}`;
  const imageUrl = `${BASE_URL}/og/category-${category.slug}.png`;

  return {
    title: `${category.name}の記事一覧`,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${category.name}の記事一覧`,
      description: category.description,
      locale: 'ja_JP',
      siteName: 'ITエンジニアの健康科学ラボ',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name}の記事一覧`,
      description: category.description,
      images: [imageUrl],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryData = getPostsByCategory(slug);

  if (!categoryData) {
    notFound();
  }

  const { category, posts } = categoryData;
  const featuredPost = category.featuredSlug
    ? posts.find((post) => post.slug === category.featuredSlug)
    : undefined;
  const readingGuidePosts = (category.readingGuide ?? [])
    .map((guide) => ({
      label: guide.label,
      post: posts.find((post) => post.slug === guide.slug),
    }))
    .filter((item) => item.post)
    .map((item) => ({ label: item.label, post: item.post! }));
  const listPosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts;
  const faqJsonLd = category.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: category.faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: category.faq.answer,
            },
          },
        ],
      }
    : null;
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category.name,
        item: `${BASE_URL}/category/${category.slug}`,
      },
    ],
  };

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">トップ</Link><span>›</span>{category.name}
        </div>
      </div>

      <section className="category-hero" id="main-content">
        <div className="category-hero-inner">
          <span className="category-hero-label">CATEGORY</span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <div className="wrapper">
        <main>
          {featuredPost && (
            <section className="category-featured">
              <div className="category-featured-label">このカテゴリのおすすめ</div>
              <article className="category-featured-card">
                <Link href={`/category/${featuredPost.categorySlug}`} className="post-card-cat">
                  {featuredPost.category}
                </Link>
                <h2><Link href={`/posts/${featuredPost.slug}`}>{featuredPost.title}</Link></h2>
                <p className="post-card-desc">{featuredPost.description}</p>
                {featuredPost.tldr && featuredPost.tldr.length > 0 && (
                  <ul className="post-card-tldr">
                    {featuredPost.tldr.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <p className="post-card-meta">{featuredPost.date} | 読了目安 {featuredPost.readingMinutes}分</p>
              </article>
            </section>
          )}

          {readingGuidePosts.length > 0 && (
            <section className="category-reading-guide">
              <div className="category-reading-guide-label">読み順ガイド</div>
              <div className="category-reading-guide-list">
                {readingGuidePosts.map(({ label, post }) => (
                  <Link key={`${label}-${post.slug}`} href={`/posts/${post.slug}`} className="category-reading-guide-card">
                    <span className="category-reading-guide-step">{label}</span>
                    <strong>{post.title}</strong>
                    <span>{post.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="post-list">
            {listPosts.map((post) => (
              <article className="post-card" key={post.slug}>
                <Link href={`/category/${post.categorySlug}`} className="post-card-cat">{post.category}</Link>
                <h2><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>
                <p className="post-card-desc">{post.description}</p>
                {post.tldr && post.tldr.length > 0 && (
                  <ul className="post-card-tldr">
                    {post.tldr.slice(0, 2).map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <p className="post-card-meta">{post.date} | 読了目安 {post.readingMinutes}分</p>
              </article>
            ))}
          </div>

          {category.faq && (
            <section className="category-faq">
              <div className="category-faq-label">FAQ</div>
              <div className="category-faq-card">
                <h2>{category.faq.question}</h2>
                <p>{category.faq.answer}</p>
              </div>
            </section>
          )}
        </main>

        <Sidebar />
      </div>

      <Footer />
    </>
  );
}

import Link from 'next/link';
import { getAllCategories, getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ITエンジニアの健康科学ラボ | 成分データで語る健康科学',
  description: '現役ITエンジニアが成分データで語る健康科学。プロトン水・薬用コスメを実験中。データと数値で健康製品を徹底解説します。',
};

export default function Home() {
  const posts = getSortedPostsData();
  const recentlyUpdatedPosts = [...posts]
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, 3);
  const categories = getAllCategories().map((category) => ({
    ...category,
    count: posts.filter((post) => post.category === category.name).length,
  }));

  return (
    <>
      <Header />

      <section className="hero" id="main-content">
        <div className="hero-inner">
          <h1>ITエンジニアの健康科学ラボ</h1>
          <p>「なんとなく体に良い」ではなく、「なぜ体に良いのか」をエンジニア目線で語ります。<br />
          プロトン水・薬用コスメ・スポーツ栄養を成分データと数値で徹底解説。</p>
        </div>
      </section>

      <section className="home-categories">
        <div className="home-categories-inner">
          <div className="home-categories-head">
            <span className="home-categories-label">CATEGORY</span>
            <h2>カテゴリから探す</h2>
            <p>知りたいテーマごとに、基礎解説から成分比較までまとめて読めます。</p>
          </div>
          <div className="home-categories-grid">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="home-category-card">
                <strong>{category.name}</strong>
                <span>{category.description}</span>
                <em>{category.count}記事</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-updated">
        <div className="home-updated-inner">
          <div className="home-updated-head">
            <span className="home-updated-label">UPDATED</span>
            <h2>最近更新した記事</h2>
          </div>
          <div className="home-updated-list">
            {recentlyUpdatedPosts.map((post) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="home-updated-card">
                <span className="home-updated-date">更新 {post.updatedAt}</span>
                <strong>{post.title}</strong>
                <span className="home-updated-meta">{post.category} | 読了目安 {post.readingMinutes}分</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="wrapper">
        <main>
          <div className="post-list">
            {posts.map((post) => (
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
        </main>

        <Sidebar />
      </div>

      <Footer />
    </>
  );
}

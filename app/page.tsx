import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
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

  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-inner">
          <h1>ITエンジニアの健康科学ラボ</h1>
          <p>「なんとなく体に良い」ではなく、「なぜ体に良いのか」をエンジニア目線で語ります。<br />
          プロトン水・薬用コスメ・スポーツ栄養を成分データと数値で徹底解説。</p>
        </div>
      </section>

      <div className="wrapper">
        <main>
          <div className="post-list">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                <span className="post-card-cat">{post.category}</span>
                <h2><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>
                <p className="post-card-desc">{post.description}</p>
                <p className="post-card-meta">{post.date}</p>
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

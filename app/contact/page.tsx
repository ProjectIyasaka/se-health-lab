import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | IT健康ラボ',
  description: 'ITエンジニアの健康科学ラボへのお問い合わせページです。',
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="page-wrapper">
        <h1 className="page-title">お問い合わせ</h1>
        <div className="page-body">
          <p>当サイトへのお問い合わせは、以下のフォームよりお送りください。内容を確認の上、数日以内にご返信いたします。</p>
          <p>なお、商品の効能・副作用に関するご質問や医療相談はお受けできません。医療機関または専門家にご相談ください。</p>

          <form className="contact-form" action="#" method="post">
            <div className="form-group">
              <label>お名前 <span className="required">必須</span></label>
              <input type="text" name="name" placeholder="山田 太郎" required />
            </div>
            <div className="form-group">
              <label>メールアドレス <span className="required">必須</span></label>
              <input type="email" name="email" placeholder="example@email.com" required />
            </div>
            <div className="form-group">
              <label>件名 <span className="required">必須</span></label>
              <input type="text" name="subject" placeholder="お問い合わせ件名" required />
            </div>
            <div className="form-group">
              <label>メッセージ <span className="required">必須</span></label>
              <textarea name="message" rows={6} placeholder="お問い合わせ内容をご記入ください。" required></textarea>
            </div>
            <button type="submit" className="submit-btn">送信する</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

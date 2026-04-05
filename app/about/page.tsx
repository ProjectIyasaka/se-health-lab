import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '管理人プロフィール | IT健康ラボ',
  description: 'IT健康ラボ管理人のプロフィール。視能訓練士（国家資格）5年・フリーランスITエンジニア7年。医療従事者としての知識とデータ分析力で、健康製品の成分を科学的に解説します。',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">トップ</Link><span>›</span>管理人プロフィール
        </div>
      </div>

      <div className="page-wrapper">

        <div className="profile-header">
          <div className="profile-avatar">IT</div>
          <div className="profile-intro">
            <h1 className="profile-name">IT健康ラボ管理人</h1>
            <p className="profile-title">視能訓練士（国家資格） / フリーランスITエンジニア / 健康科学ライター</p>
            <p className="profile-tagline">「データで語れないものは信用しない」——成分表を読むのが趣味のエンジニアが、健康製品の&quot;なぜ&quot;を解説します。</p>
          </div>
        </div>

        <div className="profile-badges">
          <span className="badge" style={{ background: '#e8f4fd', color: '#1a6fa8', borderColor: '#1a6fa8' }}>視能訓練士（国家資格）</span>
          <span className="badge" style={{ background: '#e8f4fd', color: '#1a6fa8', borderColor: '#1a6fa8' }}>眼科医療 5年</span>
          <span className="badge">エンジニア歴7年</span>
          <span className="badge">フリーランス</span>
          <span className="badge">Java / JavaScript</span>
          <span className="badge">Salesforce</span>
          <span className="badge">Python</span>
          <span className="badge">古武道 初段</span>
        </div>

        <div className="page-body">

          <h2>自己紹介</h2>
          <p>視能訓練士（国家資格）として5年間、総合病院の眼科に勤務しました。視能訓練士は、視力・眼位・視野などの検査・訓練を専門とする医療職です。外来検査業務のほか手術室にも入り、術前・術中・術後の医療チームの一員として臨床の現場を経験しています。医療の最前線で「エビデンスのない健康情報がいかに多いか」を痛感したことが、成分・数値・科学的根拠を重視するスタンスの出発点です。</p>
          <p>その後フリーランスのITエンジニアに転身し、7年のキャリアを積んでいます。主な専門領域はJava・JavaScript・Salesforce・Pythonで、業務システム開発からWebアプリ、CRM構築まで幅広く担当してきました。</p>
          <p>医療従事者としての知識とエンジニアのデータ分析力、この2つの視点を掛け合わせることが、当サイトの成分解説における差別化の核心です。成分表は製品の&quot;ソースコード&quot;。医療×IT両方の目線でそこを読み解きます。</p>

          <h2>スポーツ・身体活動歴</h2>
          <p>健康への関心は、学生時代からの身体活動が土台になっています。</p>
          <ul>
            <li><strong>器械体操</strong>：高校まで本格的に取り組み、身体制御・体幹の重要性を体感</li>
            <li><strong>キックボクシング</strong>：3年間継続。コンディショニングと栄養管理の実践的な知識を習得</li>
            <li><strong>古武道</strong>：1年間修行し初段を取得。身体の使い方・回復の科学に深い関心を持つ契機に</li>
          </ul>
          <p>これらの経験から「コンディションは管理できる」という確信を持つようになり、機能性水・薬用コスメといった製品への科学的な興味につながっています。</p>
          <p>当サイトで取り上げるénazuma7（イナズマセブン）が<strong>東京都体操協会 パルクール委員会の公式スポンサー</strong>であり、<strong>プロボクシングの堤駿斗・堤麗斗選手と協賛関係</strong>にあることも、この製品に注目した理由のひとつだ。体操・格闘技という自身のバックグラウンドと重なるスポーツ現場で選ばれている水という点が、成分データ調査を始めるきっかけになった。</p>

          <h2>このサイトを始めた理由</h2>
          <p>フリーランスとして働く中で、慢性的な疲労・集中力の低下・肌荒れを繰り返した時期がありました。市場には「なんとなく体に良さそう」な製品が溢れていますが、成分根拠が明示されているものは少数です。</p>
          <p>エンジニアとして「根拠のない選択はリスクである」という前提で、自ら成分を調べ・比較・使用した記録をまとめたのがIT健康ラボの出発点です。</p>
          <p>特定製品の宣伝ではなく、<strong>「なぜその製品なのか」を数値と科学的根拠で説明すること</strong>を一貫した方針としています。</p>

          <h2>記事の執筆スタンス</h2>
          <ul>
            <li>成分・数値・化学的メカニズムを中心に解説し、感情的な表現は避ける</li>
            <li>医薬部外品・機能性食品の効能表示は薬機法・景表法の範囲内で記述する</li>
            <li>研究段階の情報には必ず注釈を付し、断定的な健康効果の主張は行わない</li>
            <li>実際に使用した製品のみを取り上げ、使用感・変化を数週間単位で記録する</li>
          </ul>

          <h2>専門スキル・資格</h2>
          <table className="profile-table">
            <thead>
              <tr><th>分野</th><th>詳細</th></tr>
            </thead>
            <tbody>
              <tr><td>医療資格</td><td><strong>視能訓練士（国家資格）</strong> / 総合病院 眼科 5年勤務（手術室勤務経験あり）</td></tr>
              <tr><td>プログラミング言語</td><td>Java / JavaScript / Python</td></tr>
              <tr><td>プラットフォーム</td><td>Salesforce（CRM構築・カスタマイズ）</td></tr>
              <tr><td>エンジニア形態</td><td>フリーランス（7年）</td></tr>
              <tr><td>武道・スポーツ</td><td>古武道 初段 / キックボクシング3年 / 器械体操（高校まで）</td></tr>
              <tr><td>その他の経歴</td><td>BAR店長（2年）</td></tr>
            </tbody>
          </table>

          <h2>免責・メディアポリシー</h2>
          <p>当サイトの記事は、食品・化粧品・医薬部外品の成分情報を科学的観点から整理する目的で執筆しています。特定の疾病の治療・予防を目的とした医学的アドバイスではありません。健康上の問題については、必ず医療機関にご相談ください。</p>
          <p>一部記事にはアフィリエイトリンクが含まれます。リンク先の製品については実際に使用した上で紹介しており、報酬の有無に関わらず内容の公正性を保つことを方針としています。</p>

        </div>

        <div className="profile-contact-cta">
          <p>取材・コラボレーション・成分についての質問は、お気軽にお問い合わせください。</p>
          <Link href="/contact" className="cta-btn" style={{ background: 'var(--green)', color: '#fff' }}>お問い合わせはこちら</Link>
        </div>

      </div>

      <Footer />
    </>
  );
}

import { Hero } from "@/components/Hero";
import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />

      {/* LATEST TOPICS */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>LATEST <span>TOPICS</span></h2>
          <div className={styles.topicsGrid}>
            {[
              { date: '2025.12.10', title: '【試合結果】関東学生ラクロスリーグ戦 ブロック3位入賞', tag: 'GAME' },
              { date: '2025.11.25', title: '新チーム始動！2026年度スローガンは「覇氣」', tag: 'NEWS' },
              { date: '2025.11.01', title: '【新入生向け】体験会の日程が決まりました', tag: 'RECRUIT' },
            ].map((topic, i) => (
              <Link href="/blog" key={i} className={styles.topicCard}>
                <div className={styles.topicImage} style={{ background: `url(/images/topic-${i + 1}.jpg) center/cover` }} />
                <div className={styles.topicContent}>
                  <div className={styles.topicDate}>{topic.date}</div>
                  <h3 className={styles.topicTitle}>{topic.title}</h3>
                  <span className={styles.topicTag}>{topic.tag}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/blog" className="btn-cta" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* CONCEPT PARALLAX */}
      <section className={styles.conceptSection}>
        <div className={styles.conceptText}>覇氣</div>
        <div className={styles.conceptMain}>
          圧倒する、空気を変える、<br />
          強い主体性を持つ。
        </div>
      </section>

      {/* IMPACT DATA */}
      <section className={styles.impactSection}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>TEAM <span>IMPACT</span></h2>
          <p style={{ color: '#aaa' }}>数字で見る獨協ラクロス</p>
          <div className={styles.impactGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>160<span style={{ fontSize: '2rem' }}>km/h</span></div>
              <span className={styles.statLabel}>MAX SHOT SPEED</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>80<span style={{ fontSize: '2rem' }}>+</span></div>
              <span className={styles.statLabel}>MEMBERS</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>33<span style={{ fontSize: '2rem' }}>th</span></div>
              <span className={styles.statLabel}>SINCE 1992</span>
            </div>
          </div>
        </div>
      </section>

      {/* MOOD / SHORT MOVIES */}
      <section className={styles.moodSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>TEAM <span>MOOD</span></h2>
          <div className={styles.videoGrid}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.videoCard}>
                <div className={styles.videoPlaceholder}>
                  MOVIE {i}<br />(COMING SOON)
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICIAL SNS */}
      <section className={styles.section}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.sectionTitle}>OFFICIAL <span>SNS</span></h2>
          <div className={styles.snsGrid}>
            {/* Instagram */}
            <a href="https://www.instagram.com/dokkyomlax?igsh=c2prb2EwdThtNnVo&utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.snsCard} style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
              <h3>INSTAGRAM</h3>
              <p>@dokkyomlax</p>
            </a>
            {/* Twitter (X) */}
            <a href="https://x.com/dokkyo_men_lax?s=21&t=PdKSOHTH7r38zAycVK9nVw" target="_blank" rel="noopener noreferrer" className={styles.snsCard} style={{ background: '#000' }}>
              <h3>X (Twitter)</h3>
              <p>@dokkyo_men_lax</p>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@blitz.lax?_r=1&_t=ZS-92I0fG8EHpP" target="_blank" rel="noopener noreferrer" className={styles.snsCard} style={{ background: '#000' }}>
              <h3>TikTok</h3>
              <p>@blitz.lax</p>
            </a>
          </div>
        </div>
      </section>

      {/* RECRUIT CTA */}
      <section className={styles.section} style={{ background: 'linear-gradient(to right, #4e008e, #2e004f)' }}>
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-oswald)', fontSize: '3rem', marginBottom: '1rem' }}>JOIN THE TEAM</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>初心者から日本一へ。君の挑戦を待っている。</p>
          <Link href="/recruit" className="btn-cta">
            RECRUIT PAGE
          </Link>
        </div>
      </section>
    </>
  );
}

import styles from './BlogPost.module.css';
import blogPosts from '@/data/blog-posts.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
    const post = blogPosts.find((p) => p.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={post.image} alt={post.title} className={styles.headerImage} />
                <div className={styles.headerOverlay}>
                    <div className="container">
                        <div className={styles.meta}>
                            <span className={styles.date}>{post.date}</span>
                            <span className={styles.category}>{post.category}</span>
                        </div>
                        <h1 className={styles.title}>{post.title}</h1>
                    </div>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '800px' }}>
                <article className={styles.content}>
                    {post.content.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </article>

                <div className={styles.backLink}>
                    <Link href="/blog" className="btn-cta" style={{ background: 'transparent', border: '1px solid #fff' }}>
                        ← ブログ一覧に戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}

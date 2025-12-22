import styles from './Blog.module.css';
import blogPosts from '@/data/blog-posts.json';
import Link from 'next/link';

export const metadata = {
    title: 'BLOG | DOKKYO BLITZ',
    description: '獨協大学男子ラクロス部 ブログ・活動報告',
};

export default function BlogPage() {
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className={styles.blogContainer}>
            <div className="container">
                <div className={styles.header}>
                    <h1 className={styles.title}>BLOG & NEWS</h1>
                    <p className={styles.subtitle}>チームの最新情報・活動報告</p>
                </div>

                <div className={styles.postsGrid}>
                    {sortedPosts.map((post) => (
                        <Link
                            href={`/blog/${post.id}`}
                            key={post.id}
                            className={styles.postCard}
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className={styles.postImage}
                            />
                            <div className={styles.postContent}>
                                <div className={styles.postMeta}>
                                    <span className={styles.postDate}>{post.date}</span>
                                    <span className={styles.postCategory}>{post.category}</span>
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

"use client";

import Link from 'next/link';
import styles from './HeroMenu.module.css';

const MENU_ITEMS = [
    {
        title: 'ABOUT',
        subtitle: '男子ラクロス部について',
        href: '/about',
        bgImage: '/images/hero-bg.jpg'
    },
    {
        title: 'MEMBER',
        subtitle: '部員紹介',
        href: '/member',
        bgImage: '/images/topic-1.jpg'
    },
    {
        title: 'SCHEDULE',
        subtitle: '試合情報',
        href: '/schedule',
        bgImage: '/images/topic-2.jpg'
    },
    {
        title: 'BLOG',
        subtitle: 'ブログ',
        href: '/blog',
        bgImage: '/images/topic-3.jpg'
    },
    {
        title: 'RECRUIT',
        subtitle: '部員募集',
        href: '/recruit',
        bgImage: '/images/recruit-bg.jpg'
    }
];

export const HeroMenu = () => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuGrid}>
                {MENU_ITEMS.map((item) => (
                    <Link key={item.title} href={item.href} className={styles.menuItem}>
                        <div
                            className={styles.menuItemBg}
                            style={{ backgroundImage: `url(${item.bgImage})` }}
                        />
                        <div className={styles.menuContent}>
                            <span className={styles.menuTitle}>{item.title}</span>
                            <span className={styles.menuSubtitle}>{item.subtitle}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

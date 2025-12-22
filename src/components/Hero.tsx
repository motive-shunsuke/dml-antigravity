"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.flash} />

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span>DOKKYO MEN'S LACROSSE</span>
                    覇氣
                </motion.h1>
            </div>

            <div className={styles.scrollDown}>SCROLL DOWN</div>
        </section>
    );
};

"use client";

import styles from './MemberCard.module.css';
import { useState } from 'react';

interface Props {
    member: {
        name: string;
        grade: number;
        department: string;
        highSchool: string;
        position: string;
        message?: string;
    }
}

export const MemberCard = ({ member }: Props) => {
    const [imgError, setImgError] = useState(false);
    // remove spaces from name for filename
    const imageName = member.name.replace(/\s+/g, '');
    const imagePath = `/images/members/${imageName}.jpg`;

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {!imgError ? (
                    <img
                        src={imagePath}
                        alt={member.name}
                        className={styles.photo}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className={styles.placeholder} />
                )}
            </div>
            <div className={styles.header}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.position}>{member.position}</span>
            </div>
            <div className={styles.info}>
                <span>学年: {member.grade}</span>
                <span>{member.department}</span>
                <span>出身高校: {member.highSchool}</span>
            </div>
            {member.message && (
                <p className={styles.message}>"{member.message}"</p>
            )}
        </div>
    );
};

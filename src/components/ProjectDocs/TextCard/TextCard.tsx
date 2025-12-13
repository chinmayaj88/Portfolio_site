'use client';

import styles from './TextCard.module.css';

interface TextCardProps {
  text: string;
}

export default function TextCard({ text }: TextCardProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}


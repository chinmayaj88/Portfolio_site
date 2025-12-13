'use client';

import styles from './QuoteCard.module.css';

interface QuoteCardProps {
  text: string;
}

export default function QuoteCard({ text }: QuoteCardProps) {
  return (
    <blockquote className={styles.container}>
      <p className={styles.text}>{text}</p>
    </blockquote>
  );
}


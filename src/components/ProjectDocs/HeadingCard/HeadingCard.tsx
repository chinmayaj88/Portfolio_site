'use client';

import styles from './HeadingCard.module.css';

interface HeadingCardProps {
  text: string;
  level?: number;
}

export default function HeadingCard({ text, level = 1 }: HeadingCardProps) {
  const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
  const className = level === 1 
    ? styles.h1 
    : level === 2 
    ? styles.h2 
    : styles.h3;

  return (
    <HeadingTag className={className}>{text}</HeadingTag>
  );
}


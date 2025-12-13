'use client';

import styles from './ListCard.module.css';

interface ListCardProps {
  items: string[];
}

export default function ListCard({ items }: ListCardProps) {
  return (
    <ul className={styles.container}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>{item}</li>
      ))}
    </ul>
  );
}


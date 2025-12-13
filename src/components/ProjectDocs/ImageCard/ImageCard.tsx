'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageCard({ src, alt, caption }: ImageCardProps) {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={600}
          className={styles.image}
        />
      </motion.div>
      {caption && (
        <p className={styles.caption}>{caption}</p>
      )}
    </div>
  );
}


'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.css';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Animated 404 Number */}
        <motion.div
          className={styles.numberContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            className={styles.number}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            404
          </motion.h1>
          <motion.div
            className={styles.underline}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className={styles.title}>Page Not Found</h2>
          <p className={styles.description}>
            Oops! The page you're looking for doesn't exist or has been moved.
            <br />
            Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className={styles.primaryButton}
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Go Home
          </motion.button>
          <motion.button
            className={styles.secondaryButton}
            onClick={() => router.back()}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Go Back
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className={styles.decorative}>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={styles.dot}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}


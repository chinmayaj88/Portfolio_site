'use client';

import { motion } from 'motion/react';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service in production
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Something went wrong!
          </motion.h1>
          
          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We encountered an unexpected error. Don't worry, our team has been notified.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className={styles.primaryButton}
              onClick={reset}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Again
            </motion.button>
            <Link href="/" className={styles.secondaryButton}>
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}


'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if loading screen has been shown in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (hasSeenLoading) {
      setIsLoading(false);
      return;
    }

    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Smooth acceleration and deceleration
        const increment = prev < 30 ? 1.5 : prev < 70 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 20);

    // Complete loading after smooth animation
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        sessionStorage.setItem('hasSeenLoading', 'true');
        setIsLoading(false);
      }, 300);
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loadingScreen}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.content}>
            {/* Minimal Logo/Name */}
            <motion.div
              className={styles.logoContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.h1
                className={styles.logo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Chinmaya Jena
              </motion.h1>
            </motion.div>

            {/* Minimal Progress Bar */}
            <motion.div
              className={styles.progressContainer}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '200px' }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


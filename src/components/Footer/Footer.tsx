"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <motion.div
            className={styles.logoSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className={styles.logoSvg}
                >
                  <path d="M88.08,128a22,22,0,1,1,22-22A22,22,0,0,1,88.08,128Zm92,0a22,22,0,1,1,22-22A22,22,0,0,1,180.08,128Zm-46-74a22,22,0,1,0,22-22A22,22,0,0,0,134.08,54Z" />
                </svg>
              </div>
              <h3 className={styles.logoText}>AXY STY</h3>
            </Link>
          </motion.div>

          {/* Credits */}
          <motion.div
            className={styles.credits}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className={styles.copyright}>
              Copyright © Web Design and Development, {currentYear}
            </p>
            <p className={styles.builtWith}>
              <span className={styles.framerIcon}>🖼️</span> Built in Framer with 💚
            </p>
          </motion.div>

          {/* Creator */}
          <motion.div
            className={styles.creator}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className={styles.createdBy}>Created by</p>
            <div className={styles.creatorInfo}>
              <div className={styles.avatar}>
                <span>👨‍💻</span>
              </div>
              <span className={styles.creatorName}>Akshay L Shetty</span>
            </div>
          </motion.div>
        </div>

        {/* Made in Framer Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className={styles.badgeIcon}>🖼️</span>
          <span className={styles.badgeText}>Made in Framer</span>
        </motion.div>
      </div>
    </footer>
  );
}


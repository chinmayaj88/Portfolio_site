"use client";

import { motion } from "motion/react";
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className={styles.logoLink}>
              <motion.div 
                className={styles.logoIcon}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className={styles.logoSvg}
                >
                  <path d="M88.08,128a22,22,0,1,1,22-22A22,22,0,0,1,88.08,128Zm92,0a22,22,0,1,1,22-22A22,22,0,0,1,180.08,128Zm-46-74a22,22,0,1,0,22-22A22,22,0,0,0,134.08,54Z" />
                </svg>
              </motion.div>
              <motion.h3 
                className={styles.logoText}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
              >
                AXY STY
              </motion.h3>
            </Link>
          </motion.div>

          {/* Credits */}
          <motion.div
            className={styles.credits}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <motion.p 
              className={styles.copyright}
              whileHover={{ x: 2 }}
            >
              Copyright © Web Design and Development, {currentYear}
            </motion.p>
            <motion.p 
              className={styles.builtWith}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className={styles.framerIcon}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🖼️
              </motion.span> Built in Framer with 💚
            </motion.p>
          </motion.div>

          {/* Creator */}
          <motion.div
            className={styles.creator}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <p className={styles.createdBy}>Created by</p>
            <motion.div 
              className={styles.creatorInfo}
              whileHover={{ x: 3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className={styles.avatar}
                whileHover={{ rotate: 20, scale: 1.2 }}
              >
                <span>👨‍💻</span>
              </motion.div>
              <span className={styles.creatorName}>Akshay L Shetty</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}


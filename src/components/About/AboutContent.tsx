"use client";

import { motion } from "motion/react";
import styles from "./AboutContent.module.css";
import { aboutData } from "@/data/aboutData";

export default function AboutContent() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          <span>{aboutData.statusText}</span>
        </div>
        <h1 className={styles.title}>{aboutData.title}</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.bioWrapper}
      >
        {aboutData.bioParagraphs.map((paragraph, index) => (
          <p key={index} className={styles.bioText}>
            {paragraph}
          </p>
        ))}
      </motion.div>
    </div>
  );
}


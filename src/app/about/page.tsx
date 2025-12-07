"use client";

import { motion } from "framer-motion";
import { AboutProfile, AboutContent, ContactForm } from "@/components/About";
import styles from "./page.module.css";

export default function About() {
  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Sticky Profile */}
          <div className={styles.leftColumn}>
            <div className={styles.stickyWrapper}>
              <AboutProfile />
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className={styles.rightColumn}>
            <section className={styles.section}>
              <AboutContent />
            </section>
            
            <section className={styles.section}>
              <ContactForm />
            </section>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

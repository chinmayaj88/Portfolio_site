"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactData } from "@/data/contactData";
import styles from "./SocialSection.module.css";

export default function SocialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.backgroundPattern}>
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <div className={styles.line4} />
      </div>
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.badge}>
            <span className={styles.dot}></span>
            [04] — Contact me
          </span>
          <h2 className={styles.title}>{contactData.title}</h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Social Cards */}
          {contactData.socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.cardLabel}>{link.name}</span>
              <div className={styles.iconWrapper}>
                <motion.div 
                  className={styles.iconCircle}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className={styles.iconText}>{link.icon}</span>
                </motion.div>
              </div>
            </motion.a>
          ))}

          {/* Get in Touch Card (Green) */}
          <motion.a
            href={`mailto:${contactData.email}`}
            className={`${styles.card} ${styles.ctaCard}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.ctaLabel}>Get in touch</span>
            <div className={styles.iconWrapper}>
              <motion.span 
                className={styles.arrowIcon}
                animate={{ x: [0, 4, 0], y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↘
              </motion.span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}


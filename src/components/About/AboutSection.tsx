"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { contactData } from "@/data/contactData";
import { aboutData } from "@/data/aboutData";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
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

        <div className={styles.content}>
          {/* Left Column */}
          <motion.div
            className={styles.leftColumn}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.profileBlock}>
              <Image
                src={contactData.avatar}
                alt="Profile"
                width={60}
                height={60}
                className={styles.avatar}
              />
              <div className={styles.socialIcons}>
                {/* Placeholder icons matching the image */}
                <span className={styles.miniIcon}>in</span>
                <span className={styles.miniIcon}>ig</span>
                <span className={styles.miniIcon}>yt</span>
              </div>
            </div>

            <h3 className={styles.email}>{contactData.email}</h3>
            
            <p className={styles.shortBio}>
              {aboutData.shortBio}
            </p>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Follow on Insta</span>
              <span className={styles.arrowIcon}>↗</span>
            </motion.a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {aboutData.bioParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.bioText}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


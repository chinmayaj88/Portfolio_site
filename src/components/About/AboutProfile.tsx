"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { contactData } from "@/data/contactData";
import styles from "./AboutProfile.module.css";

export default function AboutProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.profileBlock}>
        <Image
          src={contactData.avatar}
          alt="Profile"
          width={60}
          height={60}
          className={styles.avatar}
        />
        <div className={styles.socialIcons}>
          <span className={styles.miniIcon}>in</span>
          <span className={styles.miniIcon}>ig</span>
          <span className={styles.miniIcon}>yt</span>
        </div>
      </div>

      <h3 className={styles.email}>{contactData.email}</h3>
      
      <p className={styles.shortBio}>
        I'm Akshay, a passionate Product Designer with a love for crafting intuitive, user-friendly, and visually striking digital experiences.
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
    </div>
  );
}


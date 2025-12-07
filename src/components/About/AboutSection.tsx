"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contactData } from "@/data/contactData";
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
            <span>Available online</span>
          </div>
          <h1 className={styles.title}>About me</h1>
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
          </motion.div>

          {/* Right Column */}
          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className={styles.bioText}>
              Hi, I'm Akshay L Shetty, a passionate Product Designer blending UI, UX, and creativity to craft seamless digital experiences. With a love for technology and an obsession with mobile innovation since childhood, I design interfaces that not only look stunning but feel intuitive. Beyond pixels, I'm also a creative artist, bringing imagination and craft into everything I build.
            </p>
            <p className={styles.bioText}>
              With over 7 years of experience, I've worked with a diverse range of clients and products from service-based startups to B2B SaaS platforms and B2C products, learning from each collaboration while helping teams bring their visions to life online.
            </p>
            <p className={styles.bioText}>
              Let's create something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


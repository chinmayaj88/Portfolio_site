"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactData } from "@/data/contactData";
import styles from "./Contact.module.css";
import Image from "next/image";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.section} ref={ref}>
      {/* Top Bar */}
      <motion.div
        className={styles.topBar}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.topBarContent}>
          <div className={styles.availabilityBadge}>
            <span className={styles.greenDot}></span>
            <span>Available for freelance</span>
          </div>
          <motion.button
            className={styles.backToTop}
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <div className={styles.arrowCircle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.button>
        </div>
      </motion.div>

      <div className={styles.container}>
        {/* Left Side - CTA */}
        <motion.div
          className={styles.leftSection}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={styles.mainHeading}>
            Let's create<br />
            something<br />
            extraordinary<br />
            together<span className={styles.greenDot}>.</span>
          </h2>
          <p className={styles.subtext}>Let's make an impact</p>
        </motion.div>

        {/* Right Side - Profile Card */}
        <motion.div
          className={styles.rightSection}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <motion.div
                className={styles.avatarWrapper}
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={contactData.avatar}
                  alt={contactData.name}
                  width={80}
                  height={80}
                  className={styles.avatar}
                />
              </motion.div>
              <div className={styles.profileInfo}>
                <h3 className={styles.profileName}>{contactData.name}</h3>
                <p className={styles.profileRole}>{contactData.role}</p>
                <div className={styles.socialLinks}>
                  {contactData.socialLinks.slice(0, 3).map((link, index) => (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon === "in" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      )}
                      {link.icon === "ig" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                      )}
                      {link.icon === "yt" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.contactDetails}>
              <p className={styles.contactLabel}>Contact me</p>
              <motion.a
                href={`mailto:${contactData.email}`}
                className={styles.email}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {contactData.email}
              </motion.a>
            </div>

            <div className={styles.description}>
              <p className={styles.descText}>
                Hit me up if you're looking for a{" "}
                <span className={styles.highlight}>fast, reliable<br />
                Product designer</span>{" "}
                who can bring your vision to life
              </p>
            </div>

            <motion.a
              href="https://www.behance.net/akshaylshetty"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.behanceButton}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(163, 255, 18, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>My Behance</span>
              <span className={styles.arrowIcon}>↗</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Made in Framer Badge */}
      <motion.div
        className={styles.madeInFramer}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className={styles.framerIcon}>🖼️</span>
        <span>Made in Framer</span>
      </motion.div>
    </section>
  );
}


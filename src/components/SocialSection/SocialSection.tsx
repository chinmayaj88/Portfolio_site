"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { contactData } from "@/data/contactData";
import { AnimatedText, GradientText } from "@/components/TextAnimations/AnimatedText";
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.span 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.dot}></span>
            <AnimatedText text="[04] — Contact me" delay={0.1} type="chars" />
          </motion.span>
          <h2 className={styles.title}>
            <GradientText>
              <AnimatedText text={contactData.title} delay={0.2} type="words" />
            </GradientText>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Social Cards */}
          {contactData.socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles[`pattern${index}`]}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -6,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25,
                  duration: 0.3 
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className={styles.cardLabel}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.08 + 0.15 }}
              >
                {link.name}
              </motion.span>
              <div className={styles.iconWrapper}>
                <motion.div 
                  className={styles.iconCircle}
                  whileHover={{ rotate: 20, scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
                >
                  <span className={styles.iconText}>
                    {link.icon === "gh" ? "gh" : link.icon === "in" ? "in" : link.icon === "ig" ? "ig" : link.icon}
                  </span>
                </motion.div>
              </div>
            </motion.a>
          ))}

          {/* Get in Touch Card (Green) */}
          <motion.a
            href={`mailto:${contactData.email}`}
            className={`${styles.card} ${styles.ctaCard} ${styles.pattern4}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              duration: 0.4,
              delay: contactData.socialLinks.length * 0.08,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{ 
              scale: 1.03, 
              y: -6,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 25,
                duration: 0.3 
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.ctaLabel}>Get in touch</span>
            <div className={styles.iconWrapper}>
              <motion.span 
                className={styles.arrowIcon}
                whileHover={{ rotate: 135, scale: 1.2 }}
                animate={{ x: [0, 3, 0], y: [0, 3, 0] }}
                transition={{ 
                  x: { duration: 1.5, repeat: Infinity },
                  y: { duration: 1.5, repeat: Infinity },
                  hover: { duration: 0.2 }
                }}
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


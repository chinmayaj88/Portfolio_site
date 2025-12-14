"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { contactData } from "@/data/contactData";
import { AnimatedText } from "@/components/TextAnimations/AnimatedText";
import styles from "./Contact.module.css";
import Image from "next/image";
import CallToAction from "../ProfileCard/CallToAction";

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
        transition={{ duration: 0.4 }}
      >
        <div className={styles.topBarContent}>
          <motion.div
            className={styles.availabilityBadge}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.greenDot}></span>
            <AnimatedText
              text="Available for freelance"
              delay={0.1}
              type="chars"
            />
          </motion.div>
          <motion.button
            className={styles.backToTop}
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 500 }}
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
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.headingWrapper}>
            <div className={styles.headingPattern}></div>
            <h2 className={styles.mainHeading}>
              Let's create
              <br />
              something
              <br />
              extraordinary
              <br />
              together<span className={styles.greenPeriod}>.</span>
            </h2>
          </div>
          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <AnimatedText
              text="Let's make an impact"
              delay={0.7}
              type="chars"
            />
          </motion.p>
        </motion.div>

        {/* Right Side - Profile Card */}
        <motion.div
          className={styles.rightSection}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className={styles.profileCard}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <div className={styles.profileHeader}>
              <motion.div
                className={styles.avatarWrapper}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Image
                  src={contactData.avatar}
                  alt={contactData.name}
                  width={80}
                  height={80}
                  className={styles.avatar}
                />
              </motion.div>
              <motion.div
                className={styles.profileInfo}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className={styles.profileName}>{contactData.name}</h3>
                <p className={styles.profileRole}>{contactData.role}</p>
                <div className={styles.socialLinks}>
                  {contactData.socialLinks
                    .filter((link) =>
                      ["github", "linkedin", "instagram"].includes(link.id)
                    )
                    .map((link, index) => (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: 0.7 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {link.icon === "gh" && (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        )}
                        {link.icon === "in" && (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        )}
                        {link.icon === "ig" && (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                          </svg>
                        )}
                      </motion.a>
                    ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className={styles.contactDetails}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className={styles.contactLabel}>Contact me</p>
              <motion.a
                href={`mailto:${contactData.email}`}
                className={styles.email}
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {contactData.email.split("@").map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && <span className={styles.greenAt}>@</span>}
                  </span>
                ))}
              </motion.a>
            </motion.div>

            <motion.div
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className={styles.descText}>
                I build scalable applications from frontend to backend, and
                deploy them on cloud infrastructure with DevOps best practices
                Ready to turn your ideas into reality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <CallToAction
                text={"Get in touch"}
                href={`mailto:${contactData.email}`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

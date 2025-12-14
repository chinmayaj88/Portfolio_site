"use client";

// @ts-ignore - motion package re-exports from framer-motion
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { aboutData } from "@/data/aboutData";
import { profileData } from "@/data/profileData";
import { experienceData } from "@/data/experienceData";
import { certificationsData } from "@/data/certificationsData";
import { contactData } from "@/data/contactData";
import Image from "next/image";
import styles from "./page.module.css";
import CallToAction from "@/components/ProfileCard/CallToAction";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Get social links (LinkedIn, GitHub, and Email)
  const socialLinks = contactData.socialLinks.filter((link) =>
    ["linkedin", "github", "email"].includes(link.id)
  );

  return (
    <main className={styles.main} ref={ref}>
      {/* About Me Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Status Badge */}
            <motion.div
              className={styles.statusBadge}
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className={styles.statusDot}></span>
              <span className={styles.statusText}>{aboutData.statusText}</span>
            </motion.div>

            {/* About Me Title */}
            <motion.h1
              className={styles.aboutTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {aboutData.title}
            </motion.h1>

            {/* Profile Picture and Social Icons */}
            <motion.div
              className={styles.profileSection}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.avatarWrapper}>
                <Image
                  src={profileData.avatar.src}
                  alt={profileData.avatar.alt}
                  width={150}
                  height={150}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.socialIcons}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.id === "linkedin" && <FaLinkedin size={20} />}
                    {link.id === "github" && <FaGithub size={20} />}
                    {link.id === "email" && <SiGmail size={20} />}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Email */}
            <motion.a
              href={`mailto:${contactData.email}`}
              className={styles.emailLink}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ x: 5 }}
            >
              {contactData.name}
            </motion.a>

            {/* Quote */}
            <motion.div
              className={styles.quote}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <p className={styles.quoteText}>"{aboutData.quote.text}"</p>
              {aboutData.quote.author && (
                <p className={styles.quoteAuthor}>— {aboutData.quote.author}</p>
              )}
            </motion.div>

            <CallToAction
              text={"Get in touch"}
              href={`mailto:${contactData.email}`}
            />
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <motion.div
              className={styles.heroBio}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {aboutData.bioParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className={styles.bioText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <div className={styles.contentWrapper}>
        {/* Experience Timeline */}
        {experienceData.length > 0 && (
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <div className={styles.sectionLine}></div>
            </div>
            <div className={styles.timeline}>
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h3 className={styles.companyName}>{exp.company}</h3>
                      <span className={styles.timelineDuration}>
                        {exp.duration}
                      </span>
                    </div>
                    <p className={styles.timelinePosition}>{exp.position}</p>
                    {exp.responsibilities &&
                      exp.responsibilities.length > 0 && (
                        <ul className={styles.timelineList}>
                          {exp.responsibilities
                            .slice(0, 3)
                            .map((resp, respIdx) => (
                              <li
                                key={respIdx}
                                className={styles.timelineListItem}
                              >
                                {resp.description}
                              </li>
                            ))}
                        </ul>
                      )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Certifications - Trophy Display */}
        {certificationsData.length > 0 && (
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Certifications</h2>
              <div className={styles.sectionLine}></div>
            </div>
            <div className={styles.trophiesGrid}>
              {certificationsData.map((cert, idx) => (
                <motion.a
                  key={cert.id}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.trophyCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                >
                  {cert.image && (
                    <div className={styles.trophyImage}>
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={280}
                        height={200}
                        className={styles.certImage}
                      />
                    </div>
                  )}
                  <div className={styles.trophyContent}>
                    <h3 className={styles.trophyName}>{cert.name}</h3>
                    <p className={styles.trophyIssuer}>{cert.issuer}</p>
                    <div className={styles.trophyMeta}>
                      <span className={styles.trophyDate}>
                        {cert.issueDate}
                      </span>
                      {cert.credentialId && (
                        <span className={styles.trophyId}>
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}

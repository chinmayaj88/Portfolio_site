'use client';

// @ts-ignore - motion package re-exports from framer-motion
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { aboutData } from '@/data/aboutData';
import { profileData } from '@/data/profileData';
import { experienceData } from '@/data/experienceData';
import { educationData } from '@/data/educationData';
import { certificationsData } from '@/data/certificationsData';
import { contactData } from '@/data/contactData';
import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <main className={styles.main} ref={ref}>
      {/* Hero Section - Clean Professional Layout */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            {/* Left Column - Profile Info */}
            <motion.div
              className={styles.leftColumn}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.statusBadge}
              >
                <span className={styles.statusDot}></span>
                <span>{aboutData.statusText}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className={styles.aboutTitle}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                {aboutData.title}
              </motion.h1>

              {/* Profile Picture with Social Icons */}
              <div className={styles.profileSection}>
                <motion.div
                  className={styles.avatarWrapper}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <Image
                    src={profileData.avatar.src}
                    alt={profileData.avatar.alt}
                    width={200}
                    height={200}
                    className={styles.profileImage}
                    priority
                  />
                </motion.div>

                {/* Social Icons - To the right of profile picture */}
                <motion.div
                  className={styles.socialLinks}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
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
                          delay: 0.6 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={link.name}
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
                </motion.div>
              </div>

              {/* Email */}
              <motion.a
                href={`mailto:${contactData.email}`}
                className={styles.emailLink}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {contactData.email}
              </motion.a>

              {/* Short Bio */}
              <motion.p
                className={styles.shortBio}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {aboutData.shortBio}
              </motion.p>

              {/* Follow on Insta Button */}
              <motion.a
                href={contactData.socialLinks.find(l => l.id === 'instagram')?.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instaButton}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Follow on Insta</span>
                <span className={styles.arrowIcon}>↗</span>
              </motion.a>
            </motion.div>

            {/* Right Column - Detailed Bio */}
            <motion.div
              className={styles.rightColumn}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {aboutData.bioParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className={styles.bioText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                >
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h3 className={styles.companyName}>{exp.company}</h3>
                      <span className={styles.timelineDuration}>{exp.duration}</span>
                    </div>
                    <p className={styles.timelinePosition}>{exp.position}</p>
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <ul className={styles.timelineList}>
                        {exp.responsibilities.slice(0, 3).map((resp, respIdx) => (
                          <li key={respIdx} className={styles.timelineListItem}>
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
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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
                      <span className={styles.trophyDate}>{cert.issueDate}</span>
                      {cert.credentialId && (
                        <span className={styles.trophyId}>ID: {cert.credentialId}</span>
                      )}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>
        )}

        {/* Education */}
        {educationData.length > 0 && (
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.sectionLine}></div>
            </div>
            <div className={styles.educationGrid}>
              {educationData.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  className={styles.educationCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                >
                  <div className={styles.educationIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5" />
                    </svg>
                  </div>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <p className={styles.field}>{edu.field}</p>
                  <p className={styles.institution}>{edu.institution}</p>
                  <div className={styles.educationMeta}>
                    <span>{edu.startDate} - {edu.endDate}</span>
                    {edu.grade && <span className={styles.grade}>{edu.grade}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}


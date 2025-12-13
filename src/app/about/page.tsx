'use client';

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
            <motion.div
              className={styles.heroImageSection}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className={styles.imageFrame}>
                  <Image
                    src={profileData.avatar.src}
                    alt={profileData.avatar.alt}
                    width={240}
                    height={240}
                    className={styles.profileImage}
                    priority
                  />
                </div>
              <div className={styles.socialIcons}>
                {contactData.socialLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={link.name}
                  >
                    {link.icon === 'in' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {link.icon === 'ig' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {link.icon === '✉' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v10.438h24v-10.438l-12 9.725z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </motion.div>
            
            <div className={styles.heroTextSection}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href={`mailto:${contactData.email}`} className={styles.emailLink}>
                  {contactData.email}
                </a>
              </motion.div>
              
              <motion.div
                className={styles.heroBio}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p>{aboutData.shortBio}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a
                  href={contactData.socialLinks.find(l => l.id === 'instagram')?.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  <span>Follow on Insta</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </motion.div>
            </div>
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


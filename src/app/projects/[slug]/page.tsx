"use client";

import { motion, useInView } from "motion/react";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import styles from "./page.module.css";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const slug = params?.slug as string;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Project not found</h1>
          <Link href="/projects" className={styles.backButton}>
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main} ref={ref}>
      {/* Animated Background */}
      <div className={styles.backgroundGradient} />
      <div className={styles.particlesBackground}>
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/projects" className={styles.backLink}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </Link>

          <div className={styles.badges}>
            <span className={`${styles.badge} ${styles.badgeCategory}`}>
              {project.category}
            </span>
            <span
              className={`${styles.badge} ${
                project.projectType === "personal"
                  ? styles.badgePersonal
                  : project.projectType === "company"
                    ? styles.badgeCompany
                    : styles.badgeFreelance
              }`}
            >
              {project.projectType.charAt(0).toUpperCase() +
                project.projectType.slice(1)}
            </span>
          </div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            className={styles.metaInfo}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.date && (
              <div className={styles.metaItem}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{project.date}</span>
              </div>
            )}
            {project.duration && (
              <div className={styles.metaItem}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{project.duration}</span>
              </div>
            )}
          </motion.div>

          <motion.div
            className={styles.actionButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                <span>View on GitHub</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Live Demo</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className={styles.image}
            priority
          />
          <div className={styles.imageOverlay} />
        </motion.div>

        {/* Description Section */}
        {project.description && (
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className={styles.sectionTitle}>About the Project</h2>
            <p className={styles.description}>{project.description}</p>
          </motion.div>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>Technologies Used</h2>
            <div className={styles.techStack}>
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className={styles.techTag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.featuresList}>
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.featureIcon}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Challenges & Solutions */}
        {(project.challenges || project.solution) && (
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className={styles.challengesGrid}>
              {project.challenges && (
                <div className={styles.challengeCard}>
                  <div className={styles.cardIcon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>Challenges</h3>
                  <p className={styles.cardContent}>{project.challenges}</p>
                </div>
              )}
              {project.solution && (
                <div className={styles.challengeCard}>
                  <div className={styles.cardIcon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>Solution</h3>
                  <p className={styles.cardContent}>{project.solution}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Impact */}
        {project.impact && (
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className={styles.impactTitle}>Impact & Results</h3>
              <p className={styles.impactContent}>{project.impact}</p>
            </div>
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className={styles.footerContent}>
            <h3 className={styles.footerTitle}>Interested in this project?</h3>
            <p className={styles.footerText}>
              Let's discuss how similar solutions can help your business grow.
            </p>
            <Link href="/contact" className={styles.contactButton}>
              <span>Get in Touch</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

"use client";

import { motion } from "motion/react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { AnimatedText } from "@/components/TextAnimations";
import { projectsData } from "@/data/projectsData";
import styles from "./page.module.css";

export default function ProjectWorkInProgress() {
  const params = useParams();
  
  // Get project name synchronously to avoid empty state
  const getProjectName = () => {
    if (!params?.slug) return "";
    const slug = params.slug as string;
    const project = projectsData.find((p) => p.id === slug);
    if (project) {
      return project.title;
    } else {
      // Fallback to formatted slug if project not found
      return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
  };
  
  const projectName = getProjectName();

  return (
    <main className={styles.main}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.backgroundCircle}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
        {/* Status Badge */}
        <motion.div
          className={styles.statusBadge}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className={styles.statusDot}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span>Work in Progress</span>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1 className={styles.title}>
            <AnimatedText text="Coming Soon" delay={0.1} type="words" />
          </h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {projectName && (
              <>
                The detailed documentation for <span className={styles.projectName}>{projectName}</span> is
                currently being prepared.
              </>
            )}
            {!projectName && "This project detail page is currently being prepared."}
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            I'm working hard to bring you comprehensive insights into this project, including architecture
            decisions, technical challenges, and implementation details. Check back soon!
          </motion.p>

          {/* Progress Indicator */}
          <motion.div
            className={styles.progressSection}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              />
            </div>
            <p className={styles.progressText}>65% Complete</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Link href="/projects" className={styles.backButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Back to Projects</span>
            </Link>

            <Link href="/contact" className={styles.contactButton}>
              <span>Get in Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className={styles.decorativeElements}>
          <motion.div
            className={styles.decorativeCircle1}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className={styles.decorativeCircle2}
            animate={{
              rotate: [360, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </div>
    </main>
  );
}


"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { projectsData, categories } from "@/data/projectsData";
import { AnimatedText, ScaleInText } from "@/components/TextAnimations";
import styles from "./Projects.module.css";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Only take first 2 projects to match the 3-column layout (2 projects + 1 CTA)
  const displayProjects = projectsData.slice(2, 4);

  return (
    <section className={`${styles.section} bg-gradient-mesh`} ref={ref}>
      <div className={styles.container}>
        <div className={styles.projectsGrid}>
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ 
                y: -12,
                rotateX: 2,
                rotateY: 2,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <motion.span 
                    className={styles.category}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.08 + 0.1 }}
                  >
                    {`[ ${project.category} ]`}
                  </motion.span>
                  {project.date && (
                    <motion.span 
                      className={styles.date}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 + 0.15 }}
                    >
                      {project.date}
                    </motion.span>
                  )}
                </div>
                <ScaleInText delay={index * 0.08 + 0.2}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </ScaleInText>
                <motion.p 
                  className={styles.projectSubtitle}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.08 + 0.25 }}
                >
                  {project.subtitle}
                </motion.p>
              </div>

              <div className={styles.imageWrapper}>
                <motion.div
                  className={styles.imageContainer}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className={styles.image}
                  />
                </motion.div>
                <div className={styles.overlay}>
                  <motion.a
                    href={project.link}
                    className={styles.viewButton}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View All Projects Card (Green) */}
          <motion.a
            href="/projects"
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.4,
              delay: 0.16,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.ctaContent}>
              <ScaleInText delay={0.2}>
                <h3 className={styles.ctaTitle}>
                  <AnimatedText text="View all projects" type="words" />
                </h3>
              </ScaleInText>
              <motion.p 
                className={styles.ctaSubtitle}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                My Behance
              </motion.p>
              <motion.div 
                className={styles.ctaIcon}
                whileHover={{ rotate: 90, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ↗
              </motion.div>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Scrolling Categories at Bottom */}
      <div className={styles.categoriesWrapper}>
        <motion.div
          className={styles.categoriesScroll}
          initial={{ x: 0 }}
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...categories, ...categories, ...categories, ...categories].map((category, index) => (
            <motion.div 
              key={index} 
              className={styles.categoryItem}
              whileHover={{ scale: 1.1, color: "#a3ff12" }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.star}>✳</span>
              <span>{category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


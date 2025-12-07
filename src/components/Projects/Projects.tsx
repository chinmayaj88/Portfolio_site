"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsData, categories } from "@/data/projectsData";
import styles from "./Projects.module.css";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Only take first 2 projects to match the 3-column layout (2 projects + 1 CTA)
  const displayProjects = projectsData.slice(2, 4);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.projectsGrid}>
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <span className={styles.category}>{`[ ${project.category} ]`}</span>
                  {project.date && (
                    <span className={styles.date}>{project.date}</span>
                  )}
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
              </div>

              <div className={styles.imageWrapper}>
                <motion.div
                  className={styles.imageContainer}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
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
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>View all projects</h3>
              <p className={styles.ctaSubtitle}>My Behance</p>
              <motion.div 
                className={styles.ctaIcon}
                whileHover={{ rotate: 45 }}
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
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...categories, ...categories, ...categories, ...categories].map((category, index) => (
            <div key={index} className={styles.categoryItem}>
              <span className={styles.star}>✳</span>
              <span>{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


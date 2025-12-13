"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { projectsData } from "@/data/projectsData";
import { AnimatedText, ScaleInText } from "@/components/TextAnimations";
import styles from "./Projects.module.css";
import Image from "next/image";
import InfiniteScrollMarquee from "../shared/InfiniteScrollMarquee/InfiniteScrollMarquee";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Take first 4 projects for the layout
  const topProjects = projectsData.slice(0, 2);
  const bottomProjects = projectsData.slice(2, 4);

  return (
    <>
      <InfiniteScrollMarquee
        items={["React", "Next.js", "Kubernetes", "OCI", "Terraform"]}
        duration={20}
      />
      <section className={`${styles.section} bg-gradient-mesh`} ref={ref}>
        <div className={styles.container}>
          {/* Top Row - 2 Large Projects */}
          <div className={styles.topGrid}>
            {topProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                className={styles.projectItem}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={
                  isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <div className={styles.projectInfo}>
                  <motion.span
                    className={styles.category}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                  >
                    [ {project.category} ]
                  </motion.span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                </div>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className={styles.image}
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom Row - 2 Projects + 1 CTA */}
          <div className={styles.bottomGrid}>
            {bottomProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                className={styles.projectItemSmall}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={
                  isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.15,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <div className={styles.projectInfo}>
                  <motion.span
                    className={styles.category}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 + 0.1 }}
                  >
                    [ {project.category} ]
                  </motion.span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                </div>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className={styles.image}
                    />
                  </div>
                </div>
              </motion.a>
            ))}

            {/* View All Projects Card (Green) */}
            <motion.a
              href="/projects"
              className={styles.ctaCard}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.1,
                delay: 0.1,
                // ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ 
                scale: 1.09,
                transition: { 
                  duration: 0.11,
                  ease: "easeOut"
                } 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.ctaContent}>
                <ScaleInText delay={0.5}>
                  <h3 className={styles.ctaTitle}>
                    <AnimatedText text="View all projects" type="words" />
                  </h3>
                </ScaleInText>
                <motion.p
                  className={styles.ctaSubtitle}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  My Behance
                </motion.p>
                <motion.div
                  className={styles.ctaIcon}
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  ↗
                </motion.div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
      <InfiniteScrollMarquee
        items={["React", "Next.js", "Kubernetes", "OCI", "Terraform"]}
        duration={20}
      />
    </>
  );
}

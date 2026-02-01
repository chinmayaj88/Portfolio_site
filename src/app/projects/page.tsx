"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./projects.module.css";
import { projectsData, Project } from "@/data/projectsData";

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Individual scroll tracking for each card
  // First card should be visible immediately, others reveal on scroll
  const cardInView = useInView(cardRef, {
    once: false,
    amount: index === 0 ? 0 : 0.2,
    margin: index === 0 ? "0px" : "0px 0px -150px 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      className={styles.projectLink}
      initial={
        index === 0
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              x: -80,
              scale: 0.96,
            }
      }
      animate={
        cardInView
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
            }
          : index === 0
            ? {
                opacity: 1,
                x: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                x: -80,
                scale: 0.96,
              }
      }
      transition={{
        duration: 0.7,
        delay: index === 0 ? 0 : 0,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 },
        scale: { duration: 0.7, type: "spring", stiffness: 200, damping: 20 },
        x: { duration: 0.7, type: "spring", stiffness: 120, damping: 18 },
      }}
      style={{}}
    >
      <div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageContainer}
          initial={
            index === 0
              ? { scale: 1, opacity: 1, x: 0 }
              : { scale: 1.05, opacity: 0, x: -40 }
          }
          animate={
            cardInView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : index === 0
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: -40,
                  }
          }
          transition={{
            opacity: {
              duration: index === 0 ? 0 : 0.7,
              delay: index === 0 ? 0 : 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
            x: {
              duration: 0.7,
              delay: index === 0 ? 0 : 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          }}
          style={{}}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1853}
            height={1126}
            className={styles.image}
          />
          {/* Image overlay gradient */}
          <motion.div
            className={styles.imageOverlay}
            initial={{ opacity: index === 0 ? 0.2 : 0.4 }}
            animate={
              cardInView
                ? { opacity: 0.2 }
                : index === 0
                  ? { opacity: 0.2 }
                  : { opacity: 0.4 }
            }
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.projectContent}
        initial={index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        animate={
          cardInView
            ? { opacity: 1, x: 0 }
            : index === 0
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -30 }
        }
        transition={{
          duration: 0.7,
          delay: index === 0 ? 0 : 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className={styles.projectMeta}>
          <motion.div
            className={styles.projectTypeTag}
            initial={
              index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            animate={
              cardInView
                ? { opacity: 1, x: 0 }
                : index === 0
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
            }
            transition={{
              duration: 0.6,
              delay: index === 0 ? 0 : 0.25,
              ease: "easeOut",
            }}
            style={{}}
          >
            <span
              className={`${styles.typeTag} ${
                project.projectType === "personal"
                  ? styles.typeTagPersonal
                  : project.projectType === "company"
                    ? styles.typeTagCompany
                    : styles.typeTagFreelance
              }`}
            >
              {project.projectType.charAt(0).toUpperCase() +
                project.projectType.slice(1)}
            </span>
          </motion.div>
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.titleSection}>
            <motion.h2
              className={styles.projectTitle}
              initial={
                index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              animate={
                cardInView
                  ? { opacity: 1, x: 0 }
                  : index === 0
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -30 }
              }
              transition={{
                duration: 0.7,
                delay: index === 0 ? 0 : 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{}}
            >
              {project.title}
            </motion.h2>
          </div>

          <motion.div
            className={styles.actionButtons}
            initial={index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={
              cardInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : index === 0
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 10,
                    }
            }
            transition={{
              duration: 0.5,
              delay: index === 0 ? 0 : 0.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.a
              href={project.link}
              className={styles.viewButton}
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className={styles.buttonText}>View</span>
              <motion.div
                className={styles.arrowIcon}
                whileHover={{ x: 3, y: -3 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                >
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                </svg>
              </motion.div>
            </motion.a>

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg
                  className={styles.githubIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </motion.svg>
                <span className={styles.buttonText}>GitHub</span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState<string>("all");

  const projectTypes = ["all", "personal", "company", "freelance"];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.projectType === filter);

  return (
    <main className={styles.main} ref={ref}>
      {/* Animated background particles */}
      <div className={styles.particlesBackground}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
        <motion.section
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <motion.span
              className={styles.badgeDot}
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
            <p className={styles.badgeText}>Things i love to do</p>
          </div>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Some of my Work
          </motion.h1>

          {/* Filter buttons */}
          <motion.div
            className={styles.filters}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {projectTypes.map((type) => (
              <motion.button
                key={type}
                className={`${styles.filterButton} ${
                  filter === type ? styles.active : ""
                }`}
                onClick={() => setFilter(type)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.08 }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        <motion.div className={styles.projectsGrid} layout>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}

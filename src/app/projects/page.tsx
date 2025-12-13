'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './projects.module.css';
import { projectsData, Project } from '@/data/projectsData';

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Individual scroll tracking for each card
  // First card should be visible immediately, others reveal on scroll
  const cardInView = useInView(cardRef, {
    once: false,
    amount: index === 0 ? 0 : 0.2,
    margin: index === 0 ? "0px" : "0px 0px -150px 0px"
  });

  return (
    <motion.a
      ref={cardRef}
      href={project.link}
      className={styles.projectLink}
      initial={index === 0 ? {
        opacity: 1,
        x: 0,
        scale: 1,
      } : {
        opacity: 0,
        x: -80,
        scale: 0.96,
      }}
      animate={cardInView ? {
        opacity: 1,
        x: 0,
        scale: 1,
      } : index === 0 ? {
        opacity: 1,
        x: 0,
        scale: 1,
      } : {
        opacity: 0,
        x: -80,
        scale: 0.96,
      }}
      transition={{
        duration: 0.7,
        delay: index === 0 ? 0 : 0,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 },
        scale: { duration: 0.7, type: 'spring', stiffness: 200, damping: 20 },
        x: { duration: 0.7, type: 'spring', stiffness: 120, damping: 18 },
      }}
      style={{}}
    >

      <div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageContainer}
          initial={index === 0 ? { scale: 1, opacity: 1, x: 0 } : { scale: 1.05, opacity: 0, x: -40 }}
          animate={cardInView ? {
            opacity: 1,
            x: 0,
          } : index === 0 ? {
            opacity: 1,
            x: 0,
          } : {
            opacity: 0,
            x: -40,
          }}
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
            animate={cardInView ? { opacity: 0.2 } : index === 0 ? { opacity: 0.2 } : { opacity: 0.4 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.projectContent}
        initial={index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        animate={cardInView ? { opacity: 1, x: 0 } : index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{
          duration: 0.7,
          delay: index === 0 ? 0 : 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className={styles.projectMeta}>
          <motion.div
            className={styles.codeBrackets}
            initial={index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            animate={cardInView ? { opacity: 1, x: 0 } : index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: 0.6,
              delay: index === 0 ? 0 : 0.25,
              ease: 'easeOut',
            }}
            style={{}}
          >
            <p className={styles.bracket}>{'{'}</p>
            <p className={styles.category}>
              {project.category}
            </p>
            <p className={styles.bracket}>{'}'}</p>
          </motion.div>
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.titleSection}>
            <motion.h2
              className={styles.projectTitle}
              initial={index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              animate={cardInView ? { opacity: 1, x: 0 } : index === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
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
            className={styles.viewMoreButton}
            initial={index === 0 ? { opacity: 1 } : { opacity: 0 }}
            animate={cardInView ? {
              opacity: 1
            } : index === 0 ? {
              opacity: 1
            } : {
              opacity: 0
            }}
            transition={{
              duration: 0.4,
              delay: index === 0 ? 0 : 0.3,
              ease: 'easeOut',
            }}
          >
            <span className={styles.viewMoreText}>View More</span>
            <div className={styles.buttonIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.a>
  );
}

export default function ProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

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
              ease: 'easeInOut',
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
                ease: 'easeInOut',
              }}
            />
            <p className={styles.badgeText}>Definitely not Recent</p>
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
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.08 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        <motion.div
          className={styles.projectsGrid}
          layout
        >
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

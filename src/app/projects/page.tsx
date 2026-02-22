"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";
import { projectsData, Project } from "@/data/projectsData";

/* ─── CARD ─────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  // once:true + GPU-friendly translateY — no x-slide, no scale, no nested animations
  const inView = useInView(cardRef, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -60px 0px",
  });

  const typeClass =
    project.projectType === "personal"
      ? styles.tagPersonal
      : project.projectType === "company"
        ? styles.tagCompany
        : styles.tagFreelance;

  // Stagger: max 3 per row, cap delay to avoid long waits
  const delay = Math.min(index % 3, 2) * 0.08;

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Image section */}
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={506}
          className={styles.image}
          priority={index < 3}
        />
        <div className={styles.imageOverlay} />

        {/* Project type badge — on the image */}
        <span className={`${styles.typeBadge} ${typeClass}`}>
          {project.projectType.charAt(0).toUpperCase() +
            project.projectType.slice(1)}
        </span>
      </div>

      {/* Card body */}
      <div className={styles.body}>
        {/* Category small label */}
        <p className={styles.category}>{project.category}</p>

        {/* Title */}
        <h2 className={styles.title}>{project.title}</h2>

        {/* Description */}
        {project.description && (
          <p className={styles.desc}>{project.description}</p>
        )}

        {/* Tech chips */}
        {project.technologies && project.technologies.length > 0 && (
          <div className={styles.techRow}>
            {project.technologies.slice(0, 5).map((t) => (
              <span key={t} className={styles.techChip}>
                {t}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className={styles.techChipMore}>
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className={styles.actions}>
          <Link href={project.link} className={styles.viewBtn}>
            <span>View Project</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghBtn}
              title="View on GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────── */
const PROJECT_TYPES = ["all", "personal", "company", "freelance"] as const;

export default function ProjectsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.projectType === filter);

  return (
    <main className={styles.main}>
      {/* CSS-only ambient background — no JS per-frame cost */}
      <div className={styles.orbA} aria-hidden="true" />
      <div className={styles.orbB} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── HERO ── */}
        <motion.section
          ref={heroRef}
          className={styles.hero}
          initial={{ opacity: 0, y: 24 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span>Things I love to build</span>
          </div>

          <h1 className={styles.heroTitle}>
            Some of my <span className={styles.heroAccent}>Work</span>
            <span className={styles.heroDot}>.</span>
          </h1>

          {/* Filter chips */}
          <div className={styles.filters}>
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                className={`${styles.filterBtn} ${filter === type ? styles.filterActive : ""}`}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
                {filter === type && (
                  <motion.span
                    className={styles.filterIndicator}
                    layoutId="filterIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.section>

        {/* ── GRID ── */}
        <div className={styles.grid}>
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

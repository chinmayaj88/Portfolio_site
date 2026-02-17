"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import {
  frontendImages,
  backendImages,
  devopsImages,
  aiImages,
  TechnologyImage,
} from "@/data/toolsImagesData";
import { AnimatedText } from "@/components/TextAnimations";
import styles from "./ToolsSkills.module.css";

interface MarqueeRowProps {
  images: TechnologyImage[];
  direction?: "left" | "right";
  speed?: number;
}

function MarqueeRow({
  images,
  direction = "left",
  speed = 30,
}: MarqueeRowProps) {
  // Duplicate array 3x for seamless loop
  const duplicated = [...images, ...images, ...images];
  const animationDuration = images.length * speed;

  return (
    <div className={styles.marqueeTrack}>
      <div
        className={`${styles.marqueeInner} ${direction === "right" ? styles.marqueeReverse : ""}`}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {duplicated.map((img, i) => (
          <div key={`${img.id}-${i}`} className={styles.techCard}>
            <div className={styles.techCardInner}>
              <div className={styles.techIconWrapper}>
                <Image
                  src={img.url}
                  alt={img.name}
                  width={48}
                  height={48}
                  className={styles.techIcon}
                  draggable={false}
                />
              </div>
              <span className={styles.techName}>{img.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CategoryRowProps {
  label: string;
  images: TechnologyImage[];
  direction?: "left" | "right";
  delay: number;
  isInView: boolean;
  index: number;
}

function CategoryRow({
  label,
  images,
  direction = "left",
  delay,
  isInView,
  index,
}: CategoryRowProps) {
  return (
    <motion.div
      className={styles.categoryRow}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={styles.categoryLabel}>
        <motion.span
          className={styles.categoryDot}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
        />
        <span className={styles.categoryText}>{label}</span>
      </div>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeFadeLeft} />
        <MarqueeRow images={images} direction={direction} speed={5} />
        <div className={styles.marqueeFadeRight} />
      </div>
    </motion.div>
  );
}

export default function ToolsSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const categories = [
    { label: "Frontend", images: frontendImages, direction: "left" as const },
    { label: "Backend", images: backendImages, direction: "right" as const },
    { label: "AI & Automation", images: aiImages, direction: "left" as const },
    {
      label: "DevOps & Cloud",
      images: devopsImages,
      direction: "right" as const,
    },
  ];

  return (
    <section className={`${styles.section} bg-grid`} ref={sectionRef}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.3 }}
          >
            <span className={styles.dot}></span>
            <AnimatedText
              text="[02] — Tools & Skills"
              delay={0.1}
              type="chars"
            />
          </motion.span>
          <h2 className={styles.title}>
            <AnimatedText text="My creative" delay={0.2} type="words" />
            <AnimatedText text="toolbox" delay={0.2} type="words" />
          </h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Technologies I use to build scalable systems, AI solutions, and
            cloud infrastructure
          </motion.p>
        </motion.div>

        <div className={styles.marqueeSection}>
          {categories.map((cat, index) => (
            <CategoryRow
              key={cat.label}
              label={cat.label}
              images={cat.images}
              direction={cat.direction}
              delay={0.2 + index * 0.12}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

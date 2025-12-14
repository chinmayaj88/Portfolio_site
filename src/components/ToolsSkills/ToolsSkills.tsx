"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import Image from "next/image";
import { skillsData } from "@/data/skillsData";
import { frontendImages, backendImages, devopsImages } from "@/data/toolsImagesData";
import { AnimatedText } from "@/components/TextAnimations";
import styles from "./ToolsSkills.module.css";

export default function ToolsSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className={`${styles.section} bg-grid`} ref={sectionRef}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.dot}></span>
            <AnimatedText text="[02] — Tools & Skills" delay={0.1} type="chars" />
          </motion.span>
          <h2 className={styles.title}>
            <AnimatedText text="My creative" delay={0.2} type="words" />
            <AnimatedText text="toolbox" delay={0.2} type="words" />
          </h2>
        </motion.div>
      </div>

      <div className={styles.loopingContainer}>
        <div className={styles.loopsGrid}>
          <motion.div 
            className={styles.loopSection}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className={styles.loopTitle}>Frontend</h3>
            <div className={styles.loopWrapper}>
              <LoopingImages images={frontendImages.map(img => img.url)} />
            </div>
          </motion.div>
          <motion.div 
            className={styles.loopSection}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className={styles.loopTitle}>Backend</h3>
            <div className={styles.loopWrapper}>
              <LoopingImages images={backendImages.map(img => img.url)} />
            </div>
          </motion.div>
          <motion.div 
            className={styles.loopSection}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className={styles.loopTitle}>DevOps & Cloud</h3>
            <div className={styles.loopWrapper}>
              <LoopingImages images={devopsImages.map(img => img.url)} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface LoopingImagesProps {
  images: string[];
}

export function LoopingImages({ images }: LoopingImagesProps) {
  const lastIndex = images.length - 1;

  return (
    <div className={styles.loopingWrapper}>
      <div className={styles.loopingInner}>
        {/* Render all squares except the last one */}
        {Array.from({ length: images.length }).map((_, index) =>
          index === lastIndex ? null : <Square index={index} images={images} key={index} />
        )}

        {/* Render the last square with the duplicate first (index 0) square masked inside it */}
        <Square index={lastIndex} images={images}>
          <SquareWithOffset index={0} parentIndex={lastIndex} images={images} />
        </Square>
      </div>
    </div>
  );
}

function SquareWithOffset({
  index,
  parentIndex,
  images,
}: {
  index: number;
  parentIndex: number;
  images: string[];
}) {
  const imageUrl = images[index];

  // For the specific case of the first square (index 0) inside the last square (index 7),
  // we want to position it at the same place as the original first square would be
  // This creates the illusion of continuity in the circle
  const firstSquareOffset = useMotionValue(0);

  useEffect(() => {
    // Create animation that goes from current value to 1
    const controls = animate(firstSquareOffset, 1, {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      ease: [0.42, 0, 0.58, 1],
      duration: 7,
    });
    return () => controls.stop();
  }, [firstSquareOffset]);

  // Calculate dynamic radius based on number of images
  const radius = images.length <= 6 ? 140 : images.length <= 7 ? 150 : 160;

  // Transform the offset to x and y coordinates relative to the parent square
  const x = useTransform(firstSquareOffset, (offset) => {
    // Calculate the angle for both the first square and the last square
    const firstAngle = ((getPathOffset(index, images.length) + offset) % 1) * Math.PI * 2;
    const lastAngle = ((getPathOffset(parentIndex, images.length) + offset) % 1) * Math.PI * 2;

    // Calculate the x position difference
    return Math.cos(firstAngle) * radius - Math.cos(lastAngle) * radius;
  });

  const y = useTransform(firstSquareOffset, (offset) => {
    // Calculate the angle for both the first square and the last square
    const firstAngle = ((getPathOffset(index, images.length) + offset) % 1) * Math.PI * 2;
    const lastAngle = ((getPathOffset(parentIndex, images.length) + offset) % 1) * Math.PI * 2;

    // Calculate the y position difference
    return Math.sin(firstAngle) * radius - Math.sin(lastAngle) * radius;
  });

  return (
    <motion.div
      className={styles.squareWithOffset}
      style={{ x, y }}
    >
      <div className={styles.squareContent}>
        <Image
          src={imageUrl}
          alt={`Square ${index}`}
          fill
          sizes="150px"
          priority
          className={styles.squareImage}
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

function Square({
  index,
  children,
  className,
  images,
}: {
  index: number;
  children?: React.ReactNode;
  className?: string;
  images: string[];
}) {
  const imageUrl = images[index];
  const pathOffset = useMotionValue(getPathOffset(index, images.length));

  // Animate the path offset
  useEffect(() => {
    // Create animation that goes from current value to current value + 1
    const controls = animate(pathOffset, pathOffset.get() + 1, {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      ease: [0.42, 0, 0.58, 1],
      duration: 7,
    });
    return () => controls.stop();
  }, [pathOffset]);

  // Calculate dynamic radius based on number of images
  const radius = images.length <= 6 ? 140 : images.length <= 7 ? 150 : 160;

  // Transform the offset to x and y coordinates
  const x = useTransform(pathOffset, (offset) => {
    const angle = (offset % 1) * Math.PI * 2;
    return Math.cos(angle) * radius;
  });

  const y = useTransform(pathOffset, (offset) => {
    const angle = (offset % 1) * Math.PI * 2;
    return Math.sin(angle) * radius;
  });

  // Calculate square size based on number of images
  const squareSize = images.length <= 6 ? 120 : images.length <= 7 ? 130 : 140;
  const halfSize = squareSize / 2;

  return (
    <motion.div
      key={index}
      className={`${styles.square} ${className || ""}`}
      style={{
        width: squareSize,
        height: squareSize,
        left: `calc(50% - ${halfSize}px)`,
        top: `calc(50% - ${halfSize}px)`,
        x,
        y,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
        zIndex: 10,
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: "easeOut",
        },
        scale: {
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: "easeOut",
        },
      }}
    >
      <div className={styles.squareContent}>
        <Image
          src={imageUrl}
          alt={`Square ${index}`}
          fill
          sizes="150px"
          priority
          className={styles.squareImage}
          draggable={false}
        />
      </div>
      <motion.div
        className={styles.squareChildren}
        initial={{
          scale: 1.1,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Helper function to get the path offset for a specific index
function getPathOffset(index: number, total: number) {
  return index / total;
}


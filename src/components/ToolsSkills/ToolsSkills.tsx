"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import Image from "next/image";
import { skillsData } from "@/data/skillsData";
import { AnimatedText } from "@/components/TextAnimations/AnimatedText";
import styles from "./ToolsSkills.module.css";

// Technology logo images - using reliable CDN sources
// Using devicons CDN which provides PNG/SVG logos for technologies
const skillImages = [
  // Node.js
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  // Python
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg",
  // React
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  // PostgreSQL
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  // AWS
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  // Docker
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  // Kubernetes
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain-wordmark.svg",
  // Express.js
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
];

// Ensure we have exactly 8 images for the circular animation
const images = skillImages.slice(0, 8);

export default function ToolsSkills() {
  const sectionRef = useRef(null);
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
        <LoopingImages />
      </div>
    </section>
  );
}

export function LoopingImages() {
  const lastIndex = images.length - 1;

  return (
    <div className={styles.loopingWrapper}>
      <div className={styles.loopingInner}>
        {/* Render all squares except the last one */}
        {Array.from({ length: images.length }).map((_, index) =>
          index === lastIndex ? null : <Square index={index} key={index} />
        )}

        {/* Render the last square with the duplicate first (index 0) square masked inside it */}
        <Square index={lastIndex}>
          <SquareWithOffset index={0} parentIndex={lastIndex} />
        </Square>
      </div>
    </div>
  );
}

function SquareWithOffset({
  index,
  parentIndex,
}: {
  index: number;
  parentIndex: number;
}) {
  const image = images[index];

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

  // Transform the offset to x and y coordinates relative to the parent square
  const x = useTransform(firstSquareOffset, (offset) => {
    // Calculate the angle for both the first square and the last square
    const firstAngle = ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
    const lastAngle = ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

    // Calculate the x position difference
    return Math.cos(firstAngle) * 180 - Math.cos(lastAngle) * 180;
  });

  const y = useTransform(firstSquareOffset, (offset) => {
    // Calculate the angle for both the first square and the last square
    const firstAngle = ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
    const lastAngle = ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

    // Calculate the y position difference
    return Math.sin(firstAngle) * 180 - Math.sin(lastAngle) * 180;
  });

  return (
    <motion.div
      className={styles.squareWithOffset}
      style={{ x, y }}
    >
      <Image
        src={image}
        alt={`Square ${index}`}
        fill
        sizes="150px"
        priority
        className={styles.squareImage}
        draggable={false}
      />
    </motion.div>
  );
}

function Square({
  index,
  children,
  className,
}: {
  index: number;
  children?: React.ReactNode;
  className?: string;
}) {
  const image = images[index];
  const pathOffset = useMotionValue(getPathOffset(index));

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

  // Transform the offset to x and y coordinates
  const x = useTransform(pathOffset, (offset) => {
    const angle = (offset % 1) * Math.PI * 2;
    return Math.cos(angle) * 180;
  });

  const y = useTransform(pathOffset, (offset) => {
    const angle = (offset % 1) * Math.PI * 2;
    return Math.sin(angle) * 180;
  });

  return (
    <motion.div
      key={index}
      className={`${styles.square} ${className || ""}`}
      style={{
        width: 150,
        height: 150,
        left: "calc(50% - 75px)",
        top: "calc(50% - 75px)",
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
      transition={{
        opacity: {
          duration: 1,
          delay: index * 0.12 + 0.35,
          ease: "easeOut",
        },
        scale: {
          duration: 1,
          delay: index * 0.12 + 0.35,
          ease: "easeOut",
        },
      }}
    >
      <Image
        src={image}
        alt={`Square ${index}`}
        fill
        sizes="150px"
        priority
        className={styles.squareImage}
        draggable={false}
      />
      <motion.div
        className={styles.squareChildren}
        initial={{
          scale: 1.1,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: index * 0.12 + 0.35,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Helper function to get the path offset for a specific index
function getPathOffset(index: number) {
  return index / 8;
}


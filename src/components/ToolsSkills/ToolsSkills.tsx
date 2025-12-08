"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { skillsData } from "@/data/skillsData";
import { AnimatedText, GradientText } from "@/components/TextAnimations/AnimatedText";
import styles from "./ToolsSkills.module.css";
import Image from "next/image";

export default function ToolsSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={`${styles.section} bg-grid`} ref={ref}>
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
            <br />
            <GradientText>
              <AnimatedText text="toolbox" delay={0.4} type="chars" />
            </GradientText>
          </h2>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 15px 50px -15px rgba(0,0,0,0.2)",
                borderColor: "rgba(163, 255, 18, 0.5)",
                scale: 1.02
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <div className={styles.skillHeader}>
                <div className={styles.iconWrapper}>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className={styles.icon}
                    />
                  </motion.div>
                </div>
                <div className={styles.skillInfo}>
                  <motion.h3 
                    className={styles.skillName}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                  >
                    {skill.name}
                  </motion.h3>
                  <motion.p 
                    className={styles.skillDescription}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.15 }}
                  >
                    {skill.description}
                  </motion.p>
                </div>
              </div>

              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${skill.percentage}%` } : { width: 0 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05 + 0.2,
                      ease: "easeOut",
                    }}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <motion.span
                  className={styles.percentage}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05 + 0.5,
                  }}
                >
                  {skill.percentage}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


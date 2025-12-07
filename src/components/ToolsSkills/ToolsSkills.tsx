"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "@/data/skillsData";
import styles from "./ToolsSkills.module.css";
import Image from "next/image";

export default function ToolsSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={styles.badge}>
            <span className={styles.dot}></span>
            [02] — Tools & Skills
          </span>
          <h2 className={styles.title}>
            My creative
            <br />
            toolbox
          </h2>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className={styles.skillHeader}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className={styles.icon}
                  />
                </div>
                <div className={styles.skillInfo}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <p className={styles.skillDescription}>{skill.description}</p>
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
                      duration: 1.2,
                      delay: index * 0.15 + 0.3,
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
                    duration: 0.4,
                    delay: index * 0.15 + 0.8,
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


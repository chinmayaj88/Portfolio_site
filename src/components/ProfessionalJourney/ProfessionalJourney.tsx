"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { experienceData } from "@/data/experienceData";
import { AnimatedText, TypewriterText } from "@/components/TextAnimations/AnimatedText";
import styles from "./ProfessionalJourney.module.css";
import Image from "next/image";

export default function ProfessionalJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className={`${styles.section} bg-noise`} ref={ref}>
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
            <AnimatedText text="[03] — Me" delay={0.1} type="chars" />
          </motion.span>
          <h2 className={styles.title}>
            {isInView && <TypewriterText text="Professional Journey" speed={0.06} />}
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.experienceCard}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileHover={{ 
                y: -8,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                scale: 1.01
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <motion.div
                    className={styles.logoWrapper}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={200}
                      height={60}
                      className={styles.logo}
                    />
                  </motion.div>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.position}>{exp.position}</h3>
                  </div>
                </div>
                <div className={styles.meta}>
                  <span className={styles.duration}>{exp.duration}</span>
                  <span className={styles.type}>{exp.type}</span>
                </div>
              </div>

              <div className={styles.responsibilities}>
                {exp.responsibilities.map((resp, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.responsibilityItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08 + idx * 0.05 + 0.2,
                    }}
                  >
                    <span className={styles.star}>✦</span>
                    <div>
                      <span className={styles.respTitle}>{resp.title}</span>{" "}
                      <span className={styles.respDesc}>{resp.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


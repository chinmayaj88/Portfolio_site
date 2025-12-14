"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { experienceData } from "@/data/experienceData";
import { AnimatedText, TypewriterText } from "@/components/TextAnimations/AnimatedText";
import { COLORS } from "@/constants/colors";
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
                  {exp.logo && (
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
                  )}
                  <div className={styles.roleInfo}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <p className={styles.companyName}>{exp.company}</p>
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

              {exp.projects && exp.projects.length > 0 && (
                <div className={styles.projectsSection}>
                  <motion.h3
                    className={styles.projectsTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + exp.responsibilities.length * 0.05 + 0.3,
                    }}
                  >
                    Key Projects
                  </motion.h3>
                  <div className={styles.projectsGrid}>
                    {exp.projects.map((project, projIdx) => (
                      <motion.div
                        key={project.id}
                        className={styles.projectCard}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        whileHover={{
                          y: -4,
                          backgroundColor: COLORS.accent10,
                          borderColor: COLORS.borderAccent,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08 + exp.responsibilities.length * 0.05 + 0.4 + projIdx * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <div className={styles.projectHeader}>
                          <h4 className={styles.projectName}>{project.title}</h4>
                          <div className={styles.techTags}>
                            {project.tech.split(", ").map((tech, techIdx) => (
                              <span key={techIdx} className={styles.techTag}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ul className={styles.achievementsList}>
                          {project.achievements.map((achievement, achIdx) => (
                            <motion.li
                              key={achIdx}
                              className={styles.achievementItem}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.08 + exp.responsibilities.length * 0.05 + 0.5 + projIdx * 0.1 + achIdx * 0.05,
                              }}
                            >
                              <span className={styles.achievementBullet}>▸</span>
                              <span className={styles.achievementText}>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


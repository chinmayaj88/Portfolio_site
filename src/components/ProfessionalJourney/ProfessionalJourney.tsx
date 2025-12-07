"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "@/data/experienceData";
import styles from "./ProfessionalJourney.module.css";
import Image from "next/image";

export default function ProfessionalJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
            [03] — Me
          </span>
          <h2 className={styles.title}>Professional Journey</h2>
        </motion.div>

        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.experienceCard}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <motion.div
                    className={styles.logoWrapper}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + idx * 0.1 + 0.3,
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


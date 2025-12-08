"use client";

import { motion } from "motion/react";
import OnlineStatus from "./OnlineStatus";
import { HeroSectionProps } from "./types";
import { GradientText, AnimatedText } from "@/components/TextAnimations";
import styles from "./HeroSection.module.css";

export default function HeroSection({
  name,
  role,
  location,
  status,
}: HeroSectionProps) {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.statusSection}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <OnlineStatus status={status} />
      </motion.div>

      <div className={styles.greetingSection}>
        <motion.div
          className={styles.greetingRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <motion.div
            className={styles.greetingLabel}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className={styles.labelText}>
              <AnimatedText text="Hi! I'm" type="chars" delay={0.2} />
            </p>
          </motion.div>
          <motion.div
            className={styles.namePill}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.namePillContent}>
              <p className={styles.nameText}>
                <GradientText>
                  <AnimatedText text={name} type="chars" delay={0.25} />
                </GradientText>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className={styles.descriptionRow}>
          <motion.div
            className={styles.roleRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className={styles.roleLabel}>
              <p className={styles.labelText}>a</p>
            </div>
            <motion.div
              className={styles.rolePill}
              whileHover={{ scale: 1.02, x: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.rolePillContent}>
                <p className={styles.roleText}>
                  <AnimatedText text={role} type="words" delay={0.35} />
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.locationRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className={styles.locationLabel}>
              <p className={styles.labelText}>from</p>
            </div>
            <motion.div
              className={styles.locationPill}
              whileHover={{ scale: 1.02, x: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.locationPillContent}>
                <p className={styles.locationText}>
                  <AnimatedText text={location} type="chars" delay={0.45} />
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

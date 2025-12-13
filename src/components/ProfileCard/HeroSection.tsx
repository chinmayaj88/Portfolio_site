"use client";

import { motion } from "motion/react";
import { useLoading } from "@/contexts/LoadingContext";
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
  const { isLoading } = useLoading();
  
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.statusSection}
        initial={{ opacity: 0, x: -20 }}
        animate={isLoading ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <OnlineStatus status={status} />
      </motion.div>

      <div className={styles.greetingSection}>
        <motion.div
          className={styles.greetingRow}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <motion.div
            className={styles.greetingLabel}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className={styles.labelText}>
              <AnimatedText text="Hi! I'm" type="chars" delay={isLoading ? 0 : 0.5} />
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
                  <AnimatedText text={name} type="chars" delay={isLoading ? 0 : 0.55} />
                </GradientText>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className={styles.descriptionRow}>
          <motion.div
            className={styles.roleRow}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
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
                  <AnimatedText text={role} type="words" delay={isLoading ? 0 : 0.6} />
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.locationRow}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
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
                  <AnimatedText text={location} type="chars" delay={isLoading ? 0 : 0.65} />
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

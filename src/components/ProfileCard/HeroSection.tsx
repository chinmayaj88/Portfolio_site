"use client";

import { motion } from "framer-motion";
import OnlineStatus from "./OnlineStatus";
import { HeroSectionProps } from "./types";
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
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <OnlineStatus status={status} />
      </motion.div>

      <div className={styles.greetingSection}>
        <motion.div
          className={styles.greetingRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className={styles.greetingLabel}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className={styles.labelText}>Hi!</p>
          </motion.div>
          <motion.div
            className={styles.namePill}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={styles.namePillContent}>
              <p className={styles.nameText}>
                <motion.span
                  className={styles.nameGradient}
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  {name}
                </motion.span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className={styles.descriptionRow}>
          <motion.div
            className={styles.roleRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                <p className={styles.roleText}>{role}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.locationRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
                <p className={styles.locationText}>{location}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

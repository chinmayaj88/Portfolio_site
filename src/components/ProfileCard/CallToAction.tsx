"use client";

import { motion } from "motion/react";
import { CallToActionProps } from "./types";
import styles from "./CallToAction.module.css";

export default function CallToAction({ text, href }: CallToActionProps) {
  return (
    <motion.a
      href={href}
      className={styles.button}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 40px rgba(163, 255, 18, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.textContainer}>
        <p className={styles.buttonText}>{text}</p>
      </div>
      <motion.div
        className={styles.iconContainer}
        whileHover={{ x: 4, y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className={styles.iconBox}>
          <div className={styles.iconContent}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              className={styles.icon}
              animate={{ rotate: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <g>
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </g>
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}

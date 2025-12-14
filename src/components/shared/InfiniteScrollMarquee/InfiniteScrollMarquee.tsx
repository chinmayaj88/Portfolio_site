"use client";

import { motion } from "framer-motion";
import styles from "./InfiniteScrollMarquee.module.css";
import { COLORS } from "@/constants/colors";

type InfiniteScrollMarqueeProps = {
  items: string[];
  duration?: number;
  direction?: "left" | "right";
  repeatCount?: number;
  hoverScale?: number;
  hoverColor?: string;
  showIcon?: boolean;
};

export default function InfiniteScrollMarquee({
  items,
  duration = 15,
  direction = "left",
  repeatCount = 4,
  hoverScale = 1.1,
  hoverColor = COLORS.accent,
  showIcon = true,
}: InfiniteScrollMarqueeProps) {
  const repeatedItems = Array(repeatCount).fill(items).flat();

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.scroll}
        initial={{ x: 0 }}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.item}
            whileHover={{ scale: hoverScale, color: hoverColor }}
            transition={{ duration: 0.2 }}
          >
            {showIcon && <span className={styles.icon}>✳</span>}
            <span>{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

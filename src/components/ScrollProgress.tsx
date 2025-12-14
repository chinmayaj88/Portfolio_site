"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { COLORS } from "@/constants/colors";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.accentHover})`,
        transformOrigin: "0%",
        scaleX,
        zIndex: 9999,
      }}
    />
  );
}


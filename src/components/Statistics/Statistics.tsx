"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { statsData } from "@/data/statsData";
import styles from "./Statistics.module.css";

function CounterAnimation({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            className={styles.statCard}
            style={{
              backgroundColor: stat.bgColor,
              color: stat.textColor,
            }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.9, y: 30 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className={styles.decorativeCircle}
              style={{
                backgroundColor:
                  stat.bgColor === "#a3ff12"
                    ? "rgba(0, 0, 0, 0.05)"
                    : stat.bgColor === "#1a1a1a"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.03)",
              }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15 + 0.2,
                ease: "easeOut",
              }}
            />

            <div className={styles.content}>
              <motion.div
                className={styles.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                }}
              >
                <CounterAnimation value={stat.value} suffix={stat.suffix} />
              </motion.div>

              <motion.div
                className={styles.labels}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.5,
                }}
              >
                <p className={styles.label}>{stat.label}</p>
                <p className={styles.sublabel}>{stat.sublabel}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


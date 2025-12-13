"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useRef, useEffect } from "react";
import { statsData } from "@/data/statsData";
import { AnimatedText } from "@/components/TextAnimations";
import styles from "./Statistics.module.css";

function CounterAnimation({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 0.6,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      <motion.span
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20, duration: 0.3 }}
      >
        {rounded}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -5 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        {suffix}
      </motion.span>
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={`${styles.section} bg-dots`} ref={ref}>
      <div className={styles.container}>
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            className={styles.statCard}
            style={{
              backgroundColor: stat.bgColor,
              color: stat.textColor,
            }}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.85, y: 30 }
            }
            transition={{
              duration: 0.25,
              delay: index * 0.05,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{
              scale: 1.08,
              rotate: index % 2 === 0 ? 3 : -3,
              transition: { type: "spring", stiffness: 500, damping: 25, duration: 0.2 }
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
                duration: 0.3,
                delay: index * 0.05 + 0.1,
                ease: "easeOut",
              }}
            />

            <div className={styles.content}>
              <motion.div
                className={styles.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05 + 0.15,
                }}
              >
                <CounterAnimation value={stat.value} suffix={stat.suffix} />
              </motion.div>

              <motion.div
                className={styles.labels}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05 + 0.25,
                }}
              >
                <motion.p 
                  className={styles.label}
                  initial={{ y: 10, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 + 0.3 }}
                >
                  <AnimatedText text={stat.label} type="chars" delay={index * 0.05 + 0.35} />
                </motion.p>
                <motion.p 
                  className={styles.sublabel}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 + 0.4 }}
                >
                  {stat.sublabel}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


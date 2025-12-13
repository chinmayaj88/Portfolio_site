"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLoading } from "@/contexts/LoadingContext";
import { ProfileImageProps } from "./types";
import styles from "./ProfileImage.module.css";

export default function ProfileImage({
  src,
  alt,
  width,
  height,
}: ProfileImageProps) {
  const { isLoading } = useLoading();
  
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isLoading ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.3,
      }}
    >
      <motion.div
        className={styles.imageWrapper}
        whileHover={{
          scale: 1.05,
          rotate: 2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(163, 255, 18, 0.2)",
              "0 0 40px rgba(163, 255, 18, 0.4)",
              "0 0 20px rgba(163, 255, 18, 0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ borderRadius: "50%" }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
            className={styles.image}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

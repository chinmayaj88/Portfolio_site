"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { brandsData } from "@/data/brandsData";
import styles from "./BrandsCarousel.module.css";

export default function BrandsCarousel() {
  // Duplicate the brands array for seamless loop
  const duplicatedBrands = [...brandsData, ...brandsData];

  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.backgroundContent} />
        </div>
        <div className={styles.content}>
          <ul className={styles.ul}>
            {duplicatedBrands.map((brand, index) => (
              <motion.li
                key={`${brand.id}-${index}`}
                className={styles.li}
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  rotate: 3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                }}
              >
                <div className={styles.itemWrapper}>
                  <div className={styles.iconPlaceholder} />
                  <div className={styles.imageContainer}>
                    <div className={styles.imageContent}>
                      <motion.div
                        className={styles.imageBox}
                        whileHover={{
                          filter: "brightness(1.3) contrast(1.15)",
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={brand.src}
                          alt={brand.alt}
                          width={brand.width}
                          height={brand.height}
                          className={styles.image}
                          priority={index < brandsData.length}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

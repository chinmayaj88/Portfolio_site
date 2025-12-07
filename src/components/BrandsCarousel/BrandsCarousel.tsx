"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      transition={{ duration: 0.6 }}
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
                  scale: 1.1,
                  y: -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
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
                          filter: "brightness(1.2) contrast(1.1)",
                        }}
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

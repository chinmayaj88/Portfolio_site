"use client";

import Image from "next/image";
import { brandsData } from "@/data/brandsData";
import styles from "./BrandsCarousel.module.css";

export default function BrandsCarousel() {
  // Duplicate the brands array for seamless loop
  const duplicatedBrands = [...brandsData, ...brandsData];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.backgroundContent} />
        </div>
        <div className={styles.content}>
          <ul className={styles.ul}>
            {duplicatedBrands.map((brand, index) => (
              <li key={`${brand.id}-${index}`} className={styles.li}>
                <div className={styles.itemWrapper}>
                  <div className={styles.iconPlaceholder} />
                  <div className={styles.imageContainer}>
                    <div className={styles.imageContent}>
                      <div className={styles.imageBox}>
                        <Image
                          src={brand.src}
                          alt={brand.alt}
                          width={brand.width}
                          height={brand.height}
                          className={styles.image}
                          priority={index < brandsData.length}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

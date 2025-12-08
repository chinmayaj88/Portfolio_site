'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './projects.module.css';

interface ProjectCard {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: ProjectCard[] = [
  {
    id: 'lenskart-supercards',
    title: 'Lenskart Supercards',
    category: 'Lenskart Product cards',
    image: 'https://framerusercontent.com/images/eYXqseQzAZ73eDQa7SSWQVuLfEc.jpg?width=1853&height=1126',
    link: 'https://akshaylshetty.framer.website/projects/lenskart-design',
  },
  {
    id: 'lenskart-cart',
    title: 'Lenskart Cart Redesign',
    category: 'Cart Redesign',
    image: 'https://framerusercontent.com/images/jKJfZTmBRpve694NdibNW2hX0.jpg?lossless=1&width=1853&height=1126',
    link: 'https://akshaylshetty.framer.website/projects/lenskart-cart-redesign',
  },
  {
    id: 'merlin-digital',
    title: 'Merlin Digital',
    category: 'Electronic Products',
    image: 'https://framerusercontent.com/images/WH2uWT7T4CbeqYSpSfcFv2v8ns.jpg?width=1393&height=808',
    link: 'https://akshaylshetty.framer.website/projects/merlin-digital',
  },
  {
    id: 'craft',
    title: 'Craft - Customised for You',
    category: 'E-commerce store',
    image: 'https://framerusercontent.com/images/sFvMK4enXodFm57LJupuFZYDpUM.jpg?lossless=1&width=1393&height=780',
    link: 'https://akshaylshetty.framer.website/projects/craft',
  },
];

export default function ProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <p className={styles.badgeText}>Definitely not Recent</p>
          </div>
          <h1 className={styles.title}>Some of my Work</h1>
        </section>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.id}`}
              className={styles.projectLink}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1853}
                    height={1126}
                    className={styles.image}
                  />
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <div className={styles.codeBrackets}>
                    <p className={styles.bracket}>{'{'}</p>
                    <p className={styles.category}>{project.category}</p>
                    <p className={styles.bracket}>{'}'}</p>
                  </div>
                </div>

                <div className={styles.projectInfo}>
                  <div className={styles.titleSection}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                  </div>

                  <motion.div
                    className={styles.viewMoreButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={styles.buttonContent}>
                      <div className={styles.buttonIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          focusable="false"
                        >
                          <g weight="regular">
                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className={styles.viewMoreText}>View More</p>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}

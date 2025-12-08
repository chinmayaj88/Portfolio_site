'use client';

import { projectsData } from '@/data/projectsData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import styles from './project-detail.module.css';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.id === params.slug);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  if (!project) {
    notFound();
  }

  const projectIndex = projectsData.findIndex((p) => p.id === params.slug);
  const relatedProjects = projectsData.filter((_, idx) => idx !== projectIndex).slice(0, 3);

  const projectDetails = {
    'lenskart-supercards': {
      description: "Lenskart's Product Listing Page (PLP) using a concept termed \"Supercards.\" The focus is on card-style layouts that appear clean, structured, and visually compelling for users as they browse product listings.",
      highlights: [
        {
          title: 'Consistent Visual Language',
          description: 'The "Supercards" are designed with attention to alignment, spacing, and hierarchy—ensuring a uniform appearance across the PLP.',
        },
        {
          title: 'Information Clarity',
          description: 'Each card is thoughtfully organized to present the most important product details (like product image, name, price, and key badges) at a glance.',
        },
        {
          title: 'Aesthetic Appeal',
          description: 'The design employs minimal, modern aesthetics—clean lines, balanced white space, and visual cues that elevate the overall browsing experience.',
        },
        {
          title: 'Tools Used',
          description: 'The project credits Adobe Photoshop and Figma as the primary tools used to craft these designs.',
        },
      ],
      impact: [
        'Improved browsing experience by reducing cognitive load.',
        'Created market-standard e-commerce cards with a premium look.',
        'Set a strong foundation for scalability across future product updates.',
      ],
      images: [
        'https://framerusercontent.com/images/O9bG7zUiS3W7xKw8E7wWko4xsLg.jpg?scale-down-to=1024&width=1800&height=1350',
        'https://framerusercontent.com/images/xodwSnrs20uz4R6H0QI5CTofn6M.jpg?scale-down-to=1024&width=1800&height=1350',
      ],
    },
    'lenskart-cart': {
      description: 'A complete redesign of the Lenskart cart interface with integrated gold membership pitch and design system updates for consistency across the platform.',
      highlights: [
        {
          title: 'Gold Membership Integration',
          description: 'Seamlessly integrated premium membership benefits display within the cart flow.',
        },
        {
          title: 'Design System Coherence',
          description: 'Ensured all components follow the updated design system for visual consistency.',
        },
        {
          title: 'User Flow Optimization',
          description: 'Streamlined the checkout process for improved conversion rates.',
        },
        {
          title: 'Responsive Design',
          description: 'Optimized for all device sizes from mobile to desktop.',
        },
      ],
      impact: [
        'Increased gold membership signups by improving visibility.',
        'Reduced cart abandonment through clearer information architecture.',
        'Standardized component usage across the platform.',
      ],
      images: [
        'https://framerusercontent.com/images/O9bG7zUiS3W7xKw8E7wWko4xsLg.jpg?scale-down-to=1024&width=1800&height=1350',
      ],
    },
    'merlin': {
      description: 'Complete logo design and rebranding initiative for Merlin Digital, establishing a modern identity for an electronics products company.',
      highlights: [
        {
          title: 'Logo Design',
          description: 'Created a distinctive and memorable logo that represents innovation and reliability.',
        },
        {
          title: 'Brand Identity',
          description: 'Developed comprehensive brand guidelines for consistent visual communication.',
        },
        {
          title: 'Market Positioning',
          description: 'Elevated brand perception in the competitive electronics market.',
        },
      ],
      impact: [
        'Enhanced brand recognition in target market.',
        'Created cohesive visual language across all touchpoints.',
        'Established strong brand foundation for growth.',
      ],
      images: [
        'https://framerusercontent.com/images/WH2uWT7T4CbeqYSpSfcFv2v8ns.jpg?width=1393&height=808',
      ],
    },
    'craft': {
      description: 'Complete product design and shopping experience redesign for Craft, a customization-focused e-commerce platform.',
      highlights: [
        {
          title: 'Customization Interface',
          description: 'Intuitive design system allowing users to easily customize products.',
        },
        {
          title: 'Shopping Experience',
          description: 'Streamlined flow from browsing to checkout with minimal friction.',
        },
        {
          title: 'Product Showcase',
          description: 'Highlighted customization options with clear visual hierarchy.',
        },
      ],
      impact: [
        'Improved user engagement through customization features.',
        'Increased average order value.',
        'Set benchmark for e-commerce customization UX.',
      ],
      images: [
        'https://framerusercontent.com/images/sFvMK4enXodFm57LJupuFZYDpUM.jpg?lossless=1&width=1393&height=780',
      ],
    },
  };

  const details =
    projectDetails[params.slug as keyof typeof projectDetails] || projectDetails['lenskart-supercards'];

  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>{project.title}</h1>
        </motion.section>

        {/* Project Meta */}
        <motion.div
          className={styles.projectMeta}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>Services</p>
            <p className={styles.metaValue}>{project.subtitle}</p>
          </div>
          <div className={styles.divider} />
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>Category</p>
            <p className={styles.metaValue}>{project.category}</p>
          </div>
          <div className={styles.divider} />
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>Client</p>
            <p className={styles.metaValue}>{project.category.split(' ')[0]}</p>
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className={styles.descriptionText}>{details.description}</p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1853}
            height={1126}
            className={styles.featuredImage}
            priority
          />
        </motion.div>

        {/* Highlights */}
        <motion.section
          className={styles.highlights}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Key Highlights</h2>
          <ul className={styles.highlightsList}>
            {details.highlights.map((highlight, idx) => (
              <li key={idx} className={styles.highlightItem}>
                <strong className={styles.highlightTitle}>{highlight.title}:</strong>
                {' ' + highlight.description}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Additional Images */}
        {details.images.length > 0 && (
          <>
            <motion.div
              className={styles.galleryImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Image
                src={details.images[0]}
                alt="Project detail"
                width={1800}
                height={1350}
                className={styles.image}
              />
            </motion.div>

            {/* Impact */}
            <motion.section
              className={styles.impact}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className={styles.sectionTitle}>Impact</h2>
              <ul className={styles.impactList}>
                {details.impact.map((point, idx) => (
                  <li key={idx} className={styles.impactItem}>
                    <p className={styles.impactText}>{point}</p>
                  </li>
                ))}
              </ul>
            </motion.section>

            {details.images.length > 1 && (
              <motion.div
                className={styles.galleryImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Image
                  src={details.images[1]}
                  alt="Project detail"
                  width={1800}
                  height={1350}
                  className={styles.image}
                />
              </motion.div>
            )}
          </>
        )}

        {/* Related Projects */}
        <motion.section
          className={styles.relatedProjects}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.badgeIndicator}>
              <span className={styles.badge} />
              <p className={styles.badgeText}>Latest projects</p>
            </div>
            <h2 className={styles.sectionHeading}>Some of my other stuff</h2>
          </div>

          <div className={styles.relatedGrid}>
            {relatedProjects.map((relProject) => (
              <Link key={relProject.id} href={`/projects/${relProject.id}`} className={styles.relatedCard}>
                <div className={styles.relatedImageWrapper}>
                  <Image
                    src={relProject.image}
                    alt={relProject.title}
                    width={1853}
                    height={1126}
                    className={styles.relatedImage}
                  />
                </div>
                <div className={styles.relatedContent}>
                  <div className={styles.relatedMeta}>
                    <span className={styles.bracket}>{'{'}</span>
                    <span className={styles.relatedCategory}>{relProject.category}</span>
                    <span className={styles.bracket}>{'}'}</span>
                  </div>
                  <h3 className={styles.relatedTitle}>{relProject.title}</h3>
                  {relProject.date && <p className={styles.relatedDate}>{relProject.date}</p>}
                  <p className={styles.relatedSubtitle}>{relProject.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Back to Projects Link */}
        <motion.div
          className={styles.backLink}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link href="/projects" className={styles.backButton}>
            ← Back to Projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

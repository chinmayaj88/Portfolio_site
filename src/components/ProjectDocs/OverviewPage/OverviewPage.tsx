'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projectsData';
import { ProjectDocPage } from '@/types/projectDocs.types';
import styles from './OverviewPage.module.css';
import { FiArrowUpRight } from 'react-icons/fi';

interface OverviewPageProps {
  project: Project;
  page: ProjectDocPage;
}

export default function OverviewPage({ project, page }: OverviewPageProps) {
  // Extract description from page content
  const description = page.content.find(item => item.type === 'text')?.content || '';
  
  // Extract images from page content
  const images = page.content.filter(item => item.type === 'image');
  
  return (
    <div className={styles.container}>
      {/* Main Title */}
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {project.title}
      </motion.h1>

      {/* Main Content Grid */}
      <div className={styles.contentGrid}>
        {/* Left Column - Project Info */}
        <motion.div 
          className={styles.leftColumn}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Services</span>
              <span className={styles.infoValue}>{project.subtitle || project.category}</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Category</span>
              <span className={styles.infoValue}>{project.category}</span>
            </div>
            
            {project.date && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Year</span>
                <span className={styles.infoValue}>{project.date}</span>
              </div>
            )}
          </div>

          {project.link.startsWith('http') ? (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewDetailButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span>View Detail</span>
              <FiArrowUpRight className={styles.buttonIcon} />
            </motion.a>
          ) : (
            <motion.div
              className={styles.viewDetailButton}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href={project.link} className={styles.viewDetailLink}>
                <span>View Detail</span>
                <FiArrowUpRight className={styles.buttonIcon} />
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Right Column - Description */}
        <motion.div 
          className={styles.rightColumn}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className={styles.description}>
            {description || 'A comprehensive project showcasing modern development practices and clean architecture principles.'}
          </p>
        </motion.div>
      </div>

      {/* Visual Examples Section */}
      {images.length > 0 && (
        <motion.div 
          className={styles.visualSection}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.imageGrid}>
            {images.map((imageItem, index) => (
              <motion.div
                key={index}
                className={styles.imageCard}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={imageItem.src || project.image}
                    alt={imageItem.alt || project.title}
                    width={1200}
                    height={800}
                    className={styles.image}
                    priority={index === 0}
                  />
                </div>
                {imageItem.caption && (
                  <p className={styles.imageCaption}>{imageItem.caption}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Fallback to project image if no images in content */}
      {images.length === 0 && project.image && (
        <motion.div 
          className={styles.visualSection}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}


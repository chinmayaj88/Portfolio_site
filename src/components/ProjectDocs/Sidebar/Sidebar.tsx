'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SidebarSection } from '@/types/projectDocs.types';
import styles from './Sidebar.module.css';

interface SidebarProps {
  sections: SidebarSection[];
  projectId: string;
}

export default function Sidebar({ sections, projectId }: SidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);
  };

  const isActive = (path: string) => {
    return pathname === `/projects/${projectId}${path}`;
  };

  const isSectionOpen = (sectionId: string) => {
    // Auto-open section if any of its items are active
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      const hasActiveItem = section.subsections?.some(sub => 
        isActive(sub.path)
      ) || isActive(section.path);
      return openSections.has(sectionId) || hasActiveItem;
    }
    return openSections.has(sectionId);
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {sections.map((section) => {
          const hasSubsections = section.subsections && section.subsections.length > 0;
          const isOpen = isSectionOpen(section.id);
          const sectionActive = isActive(section.path);

          return (
            <div key={section.id} className={styles.section}>
              {hasSubsections ? (
                <>
                  <button
                    className={`${styles.sectionButton} ${sectionActive ? styles.active : ''}`}
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className={styles.sectionTitle}>{section.title}</span>
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={styles.chevron}
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.subsections}
                      >
                        {section.subsections?.map((subsection) => (
                          <Link
                            key={subsection.id}
                            href={`/projects/${projectId}${subsection.path}`}
                            className={`${styles.subsectionLink} ${isActive(subsection.path) ? styles.active : ''}`}
                          >
                            {subsection.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={`/projects/${projectId}${section.path}`}
                  className={`${styles.sectionLink} ${sectionActive ? styles.active : ''}`}
                >
                  {section.title}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}


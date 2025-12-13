'use client';

import { use, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/ProjectDocs/Sidebar';
import ContentRenderer from '@/components/ProjectDocs/ContentRenderer';
import OverviewPage from '@/components/ProjectDocs/OverviewPage';
import { ProjectDocsConfig, ProjectDocPage } from '@/types/projectDocs.types';
import { projectsData, Project } from '@/data/projectsData';
import styles from './page.module.css';

export default function ProjectSectionPage({ 
  params 
}: { 
  params: Promise<{ slug: string; section: string }> 
}) {
  const { slug, section } = use(params);
  const [config, setConfig] = useState<ProjectDocsConfig | null>(null);
  const [page, setPage] = useState<ProjectDocPage | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function loadConfig() {
      try {
        // Load project data
        const projectData = projectsData.find(p => p.id === slug);
        if (projectData) {
          setProject(projectData);
        }

        // Load project config
        const { getProjectConfigLoader } = await import('@/data/projects');
        const loader = getProjectConfigLoader(slug);
        
        if (!loader) {
          console.error(`Project config not found for: ${slug}`);
          setLoading(false);
          return;
        }
        
        const configModule = await loader();
        const loadedConfig: ProjectDocsConfig = configModule.default;
        setConfig(loadedConfig);

        const path = `/${section}`;
        const loadedPage = loadedConfig.pages[path];
        
        if (!loadedPage) {
          console.error(`Page not found for path: ${path}`);
          setLoading(false);
          return;
        }
        
        setPage(loadedPage);
      } catch (error) {
        console.error('Failed to load project config:', error);
      } finally {
        setLoading(false);
      }
    }

    loadConfig();
  }, [slug, section]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!config || !page) {
    notFound();
  }

  const isOverview = section === 'overview';
  const shouldUseOverviewPage = isOverview && project;

  return (
    <div className={styles.container}>
      <Sidebar sections={config.sections} projectId={slug} />
      <main className={styles.content}>
        <div className={styles.contentWrapper}>
          {shouldUseOverviewPage ? (
            <OverviewPage project={project} page={page} />
          ) : (
            <>
              {mounted ? (
                <motion.h1 
                  className={styles.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {page.title}
                </motion.h1>
              ) : (
                <h1 className={styles.title}>
                  {page.title}
                </h1>
              )}
              <ContentRenderer content={page.content} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}


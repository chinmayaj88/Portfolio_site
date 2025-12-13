'use client';

import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/ProjectDocs/Sidebar';
import ContentRenderer from '@/components/ProjectDocs/ContentRenderer';
import { ProjectDocsConfig, ProjectDocPage } from '@/types/projectDocs.types';
import styles from '../page.module.css';

export default function ProjectSubsectionPage({ 
  params 
}: { 
  params: Promise<{ slug: string; section: string; subsection: string }> 
}) {
  const { slug, section, subsection } = use(params);
  const [config, setConfig] = useState<ProjectDocsConfig | null>(null);
  const [page, setPage] = useState<ProjectDocPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadConfig() {
      try {
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

        const path = `/${section}/${subsection}`;
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
  }, [slug, section, subsection]);

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

  return (
    <div className={styles.container}>
      <Sidebar sections={config.sections} projectId={slug} />
      <main className={styles.content}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>{page.title}</h1>
          <ContentRenderer content={page.content} />
        </div>
      </main>
    </div>
  );
}


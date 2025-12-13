'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SidebarSection } from '@/types/projectDocs.types';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [sections, setSections] = useState<SidebarSection[]>([]);

  useEffect(() => {
    async function loadConfig() {
      try {
        const { getProjectConfigLoader } = await import('@/data/projects');
        const loader = getProjectConfigLoader(slug);
        
        if (!loader) {
          console.error(`Project config not found for: ${slug}`);
          return;
        }
        
        const configModule = await loader();
        const config = configModule.default;
        setSections(config.sections);

        // Redirect to the first section or overview
        if (config.sections.length > 0) {
          const firstSection = config.sections[0];
          router.replace(`/projects/${slug}${firstSection.path}`);
        }
      } catch (error) {
        console.error('Failed to load project config:', error);
      }
    }

    loadConfig();
  }, [slug, router]);

  return null;
}


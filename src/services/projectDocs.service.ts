'use client';

import { ProjectDocsConfig, SidebarSection, ProjectDocPage } from '@/types/projectDocs.types';

// This service manages project documentation structure
// Each project should have its own config file in src/data/projects/[slug]/config.ts

export function getProjectDocsConfig(projectId: string): ProjectDocsConfig | null {
  try {
    // For client components, we'll use dynamic imports
    // This will be handled by Next.js dynamic imports
    if (typeof window === 'undefined') {
      // Server-side: use require
      const config = require(`@/data/projects/${projectId}/config`).default;
      return config;
    } else {
      // Client-side: return null and let the component handle loading
      // Components should use dynamic imports
      return null;
    }
  } catch (error) {
    console.error(`Project docs config not found for: ${projectId}`, error);
    return null;
  }
}

export function getProjectPage(projectId: string, path: string): ProjectDocPage | null {
  const config = getProjectDocsConfig(projectId);
  if (!config) return null;
  
  return config.pages[path] || null;
}

export function getSidebarSections(projectId: string): SidebarSection[] {
  const config = getProjectDocsConfig(projectId);
  if (!config) return [];
  
  return config.sections;
}

export function getProjectPaths(projectId: string): string[] {
  const config = getProjectDocsConfig(projectId);
  if (!config) return [];
  
  return Object.keys(config.pages);
}


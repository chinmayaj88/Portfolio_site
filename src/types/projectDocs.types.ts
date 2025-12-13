export interface SidebarSection {
  id: string;
  title: string;
  path: string;
  subsections?: SidebarSubsection[];
}

export interface SidebarSubsection {
  id: string;
  title: string;
  path: string;
}

export interface ProjectDocContent {
  type: 'text' | 'code' | 'image' | 'diagram' | 'heading' | 'list' | 'quote';
  content: string;
  language?: string; // For code blocks
  caption?: string; // For images
  alt?: string; // For images
  src?: string; // For images
  items?: string[]; // For lists
  level?: number; // For headings (h1, h2, etc.)
}

export interface ProjectDocPage {
  id: string;
  title: string;
  content: ProjectDocContent[];
}

export interface ProjectDocsConfig {
  projectId: string;
  sections: SidebarSection[];
  pages: Record<string, ProjectDocPage>; // key: path, value: page content
}


# Project Documentation Structure

This folder contains documentation configurations for each project.

## Structure

Each project should have its own folder with a `config.ts` file:

```
src/data/projects/
  └── [project-slug]/
      └── config.ts
```

## Example: `config.ts`

```typescript
import { ProjectDocsConfig } from '@/types/projectDocs.types';

const config: ProjectDocsConfig = {
  projectId: 'my-project',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      path: '/overview',
    },
    {
      id: 'architecture',
      title: 'Architecture',
      path: '/architecture',
      subsections: [
        {
          id: 'system-design',
          title: 'System Design',
          path: '/architecture/system-design',
        },
      ],
    },
  ],
  pages: {
    '/overview': {
      id: 'overview',
      title: 'Overview',
      content: [
        {
          type: 'heading',
          content: 'Project Title',
          level: 1,
        },
        {
          type: 'text',
          content: 'Project description...',
        },
        {
          type: 'code',
          content: 'const code = "example";',
          language: 'javascript',
        },
        {
          type: 'image',
          src: '/path/to/image.jpg',
          alt: 'Image description',
          caption: 'Optional caption',
        },
        {
          type: 'diagram',
          content: 'graph TD\n    A[Start] --> B[End]',
        },
        {
          type: 'list',
          items: [
            'Item 1',
            'Item 2',
          ],
        },
        {
          type: 'quote',
          content: 'Important quote or note',
        },
      ],
    },
  },
};

export default config;
```

## Content Types

- **text**: Plain text paragraph
- **heading**: Heading (h1, h2, h3) - use `level` property (1-3)
- **code**: Code snippet - use `language` property for syntax highlighting
- **image**: Image with optional caption
- **diagram**: Mermaid diagram
- **list**: Bulleted list
- **quote**: Highlighted quote block

## Routing

- Section page: `/projects/[slug]/[section]`
- Subsection page: `/projects/[slug]/[section]/[subsection]`

The sidebar automatically generates navigation based on the `sections` array in the config.


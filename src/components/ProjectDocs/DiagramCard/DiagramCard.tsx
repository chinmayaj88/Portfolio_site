'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './DiagramCard.module.css';

interface DiagramCardProps {
  diagram: string;
}

export default function DiagramCard({ diagram }: DiagramCardProps) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(false);
  const mermaidInitialized = useRef(false);

  useEffect(() => {
    if (!diagramRef.current || typeof window === 'undefined' || isRendered) {
      return;
    }

    let isMounted = true;

    const renderDiagram = async () => {
      try {
        // Dynamically import mermaid
        const mermaid = await import('mermaid');
        
        // Initialize mermaid only once
        if (!mermaidInitialized.current) {
          mermaid.default.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'inherit',
          });
          mermaidInitialized.current = true;
        }

        if (!isMounted || !diagramRef.current) return;

        // Clear previous content
        diagramRef.current.innerHTML = '';
        
        // Create a unique ID for this diagram
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Create a temporary element for mermaid to render into
        const tempDiv = document.createElement('div');
        tempDiv.id = id;
        tempDiv.textContent = diagram;
        
        if (!isMounted || !diagramRef.current) return;

        // Render the diagram
        const { svg } = await mermaid.default.render(id, diagram);
        
        if (!isMounted || !diagramRef.current) return;
        
        // Insert the rendered SVG
        diagramRef.current.innerHTML = svg;
        setIsRendered(true);
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error);
        if (diagramRef.current && isMounted) {
          diagramRef.current.innerHTML = `<p style="color: red; padding: 20px;">Error rendering diagram: ${error instanceof Error ? error.message : 'Unknown error'}</p>`;
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      renderDiagram();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [diagram, isRendered]);

  return (
    <div className={styles.container}>
      <div ref={diagramRef} className={styles.diagram} />
    </div>
  );
}


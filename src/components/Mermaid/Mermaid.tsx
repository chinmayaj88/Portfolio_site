'use client';

import { useEffect, useRef, useState } from 'react';

interface MermaidProps {
  chart: string;
  id?: string;
}

export default function Mermaid({ chart, id }: MermaidProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadMermaid = async () => {
      if (typeof window !== 'undefined' && !isLoaded) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            themeVariables: {
              primaryColor: '#a3ff12',
              primaryTextColor: '#000000',
              primaryBorderColor: '#a3ff12',
              lineColor: '#a3ff12',
              secondaryColor: '#f8f8f8',
              tertiaryColor: '#ffffff',
            },
          });
          setIsLoaded(true);
          
          if (mermaidRef.current) {
            const uniqueId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;
            mermaidRef.current.id = uniqueId;
            await mermaid.contentLoaded();
            mermaid.render(uniqueId, chart, (svgCode) => {
              if (mermaidRef.current) {
                mermaidRef.current.innerHTML = svgCode;
              }
            });
          }
        } catch (error) {
          console.error('Error loading Mermaid:', error);
        }
      }
    };

    loadMermaid();
  }, [chart, id, isLoaded]);

  return (
    <div 
      ref={mermaidRef} 
      className="mermaid-container"
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '24px',
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        margin: '24px 0',
        overflow: 'auto'
      }}
    />
  );
}


'use client';

import { useEffect, useRef, useState } from 'react';
import { COLORS } from '@/constants/colors';

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
              primaryColor: COLORS.accent,
              primaryTextColor: COLORS.textDark,
              primaryBorderColor: COLORS.accent,
              lineColor: COLORS.accent,
              secondaryColor: COLORS.backgroundLight,
              tertiaryColor: COLORS.text,
            },
          });
          setIsLoaded(true);
          
          if (mermaidRef.current) {
            const uniqueId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;
            mermaidRef.current.id = uniqueId;
            await mermaid.contentLoaded();
            const { svg } = await mermaid.render(uniqueId, chart);
            if (mermaidRef.current) {
              mermaidRef.current.innerHTML = svg;
            }
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
        background: COLORS.surfaceCardLight,
        borderRadius: '12px',
        border: `1px solid ${COLORS.borderLight}`,
        margin: '24px 0',
        overflow: 'auto'
      }}
    />
  );
}


'use client';

import { motion } from 'motion/react';
import { ProjectDocContent } from '@/types/projectDocs.types';
import CodeCard from '../CodeCard/CodeCard';
import ImageCard from '../ImageCard/ImageCard';
import DiagramCard from '../DiagramCard/DiagramCard';
import TextCard from '../TextCard/TextCard';
import ListCard from '../ListCard/ListCard';
import QuoteCard from '../QuoteCard/QuoteCard';
import HeadingCard from '../HeadingCard/HeadingCard';
import styles from './ContentRenderer.module.css';

interface ContentRendererProps {
  content: ProjectDocContent[];
}

export default function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className={styles.container}>
      {content.map((item, index) => {
        const isHeading = item.type === 'heading';
        const isFirstHeading = isHeading && index === 0;
        
        return (
          <motion.div
            key={index}
            className={styles.contentItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.4, 
              delay: isFirstHeading ? 0 : index * 0.05,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {(() => {
              switch (item.type) {
                case 'code':
                  return <CodeCard code={item.content} language={item.language || 'text'} />;
                case 'image':
                  return (
                    <ImageCard
                      src={item.src || ''}
                      alt={item.alt || ''}
                      caption={item.caption}
                    />
                  );
                case 'diagram':
                  return <DiagramCard diagram={item.content} />;
                case 'heading':
                  return <HeadingCard text={item.content} level={item.level || 1} />;
                case 'list':
                  return <ListCard items={item.items || []} />;
                case 'quote':
                  return <QuoteCard text={item.content} />;
                case 'text':
                default:
                  return <TextCard text={item.content} />;
              }
            })()}
          </motion.div>
        );
      })}
    </div>
  );
}


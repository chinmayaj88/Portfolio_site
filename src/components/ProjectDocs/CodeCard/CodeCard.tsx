'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeCard.module.css';

interface CodeCardProps {
  code: string;
  language?: string;
}

export default function CodeCard({ code, language = 'text' }: CodeCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Map common language aliases to Prism language names
  const getLanguage = (lang: string): string => {
    const languageMap: Record<string, string> = {
      'js': 'javascript',
      'ts': 'typescript',
      'py': 'python',
      'sh': 'bash',
      'shell': 'bash',
      'yml': 'yaml',
      'md': 'markdown',
      'json': 'json',
      'sql': 'sql',
      'dockerfile': 'dockerfile',
      'docker': 'dockerfile',
    };
    return languageMap[lang.toLowerCase()] || lang.toLowerCase();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.language}>{language}</span>
        <button className={styles.copyButton} onClick={copyToClipboard}>
          {copied ? (
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <path
                d="M13.5 4.5L6 12L2.5 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M5.5 4.5H3.5C2.67157 4.5 2 5.17157 2 6V12.5C2 13.3284 2.67157 14 3.5 14H10C10.8284 14 11.5 13.3284 11.5 12.5V10.5M5.5 4.5C5.5 3.67157 6.17157 3 7 3H12.5C13.3284 3 14 3.67157 14 4.5V10C14 10.8284 13.3284 11.5 12.5 11.5H11.5M5.5 4.5L11.5 10.5M11.5 10.5H7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={styles.codeWrapper}>
        <SyntaxHighlighter
          language={getLanguage(language)}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '24px',
            background: '#1e1e1e',
            borderRadius: 0,
            fontSize: '14px',
            lineHeight: '1.7',
            fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace",
          }}
          codeTagProps={{
            style: {
              fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace",
              fontSize: '14px',
            },
          }}
          PreTag="div"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}


/**
 * Color constants for the application
 * These match the CSS variables defined in globals.css
 * Use these in TypeScript/TSX files for inline styles or dynamic color assignments
 */
export const COLORS = {
  // Primary Accent Colors
  accent: '#a3ff12',
  accentHover: '#b5ff3a',
  accentRgb: '163, 255, 18',
  
  // Background Colors
  background: '#000000',
  backgroundDark: '#111111',
  backgroundLight: '#f9f9f9',
  surface: '#0a0a0a',
  surfaceLight: '#1a1a1a',
  surfaceCard: '#1a1a1a',
  surfaceCardLight: '#ffffff',
  
  // Text Colors
  text: '#ffffff',
  textDark: '#000000',
  textDarkGray: 'rgb(47, 47, 47)',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textMuted: 'rgba(255, 255, 255, 0.5)',
  textLightSecondary: 'rgba(0, 0, 0, 0.6)',
  textLightMuted: 'rgba(0, 0, 0, 0.7)',
  
  // Border Colors
  border: 'rgba(255, 255, 255, 0.08)',
  borderLight: 'rgba(0, 0, 0, 0.08)',
  borderAccent: 'rgba(163, 255, 18, 0.2)',
  
  // Accent Color Variations with Opacity
  accent10: 'rgba(163, 255, 18, 0.1)',
  accent15: 'rgba(163, 255, 18, 0.15)',
  accent20: 'rgba(163, 255, 18, 0.2)',
  accent30: 'rgba(163, 255, 18, 0.3)',
  accent35: 'rgba(163, 255, 18, 0.35)',
  
  // White/Black with Opacity
  white03: 'rgba(255, 255, 255, 0.03)',
  white05: 'rgba(255, 255, 255, 0.05)',
  white08: 'rgba(255, 255, 255, 0.08)',
  black05: 'rgba(0, 0, 0, 0.05)',
  black08: 'rgba(0, 0, 0, 0.08)',
} as const;


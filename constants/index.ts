/**
 * Application constants for Omnipresent Agent
 */

// Social media links
export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@VacantSeek',
  twitter: 'https://twitter.com/omnipresent',
  linkedin: 'https://linkedin.com/company/omnipresent',
} as const;

// Video configuration
export const VIDEO_CONFIG = {
  videoId: 'Zs60_ssuN6Y',
  thumbnailUrl: (videoId: string) => `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  embedUrl: (videoId: string, origin: string) => 
    `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&enablejsapi=1&widgetapi=1&origin=${encodeURIComponent(origin)}`,
} as const;

// Theme colors
export const THEME_COLORS = {
  dark: {
    accent: '#00D1FF',
    background: '#050505',
    card: '#0A0A0A',
    text: '#9CA3AF',
    heading: '#FFFFFF',
  },
  light: {
    accent: '#2563EB',
    background: '#FFFFFF',
    card: '#F8FAFC',
    text: '#475569',
    heading: '#0F172A',
  },
} as const;

// Animation durations (ms)
export const ANIMATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 1000,
} as const;

// Breakpoints (px)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Shared TypeScript interfaces for Omnipresent Agent
 */

// Theme context interface
export interface ThemeProps {
  isDarkMode: boolean;
}

// Navigation callback interface
export interface NavigationProps {
  onCtaClick?: () => void;
}

// Combined props for themed components with CTA
export interface ThemedComponentProps extends ThemeProps, NavigationProps {}

// AI Analysis result from Neural Scanner
export interface AnalysisResult {
  intent: string;
  heatLevel: string;
  nextAction: string;
  confidenceScore: number;
}

// Form submission data
export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  message?: string;
}

// Navigation page types
export type PageType = 'home' | 'get-offer' | 'legal' | 'investor-deck' | 'support';

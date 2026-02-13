/**
 * Utility functions for Omnipresent Agent
 */

/**
 * Combines class names, filtering out falsy values
 */
export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Scrolls to a section with smooth behavior
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Formats a phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

/**
 * Validates an email address
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a US zip code
 */
export const isValidZipCode = (zipCode: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
};

/**
 * Gets theme-aware class names
 */
export const getThemeClasses = (isDarkMode: boolean) => ({
  bgColor: isDarkMode ? 'bg-[#050505]' : 'bg-white',
  cardBg: isDarkMode ? 'bg-[#0A0A0A]' : 'bg-slate-50',
  borderColor: isDarkMode ? 'border-white/10' : 'border-blue-100',
  textColor: isDarkMode ? 'text-gray-400' : 'text-slate-600',
  headingColor: isDarkMode ? 'text-white' : 'text-slate-900',
  accentColor: isDarkMode ? 'text-[#00D1FF]' : 'text-[#2563EB]',
  bgAccent: isDarkMode ? 'bg-[#00D1FF]' : 'bg-blue-600',
});

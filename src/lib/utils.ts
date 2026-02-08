import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Handles conflicts and ensures the last class takes precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format email for mailto links
 */
export function formatMailto(email: string, subject?: string, body?: string): string {
  let link = `mailto:${email}`;
  const params = [];

  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);

  if (params.length > 0) {
    link += '?' + params.join('&');
  }

  return link;
}

/**
 * Truncate text to a specific length with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Format phone number for tel links
 */
export function formatTel(phone: string): string {
  return `tel:${phone.replace(/\s+/g, '')}`;
}

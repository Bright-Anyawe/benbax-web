import { LucideIcon } from 'lucide-react';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
  containerWidth?: 'default' | 'narrow' | 'wide';
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export interface ValuePropCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

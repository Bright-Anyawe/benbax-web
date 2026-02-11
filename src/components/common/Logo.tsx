import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'default' | 'compact';
}

const Logo: React.FC<LogoProps> = ({ className, theme = 'light', size = 'default' }) => {
  const sizeStyles = {
    default: 'h-11 w-[200px] sm:h-12 sm:w-[220px]',
    compact: 'h-10 w-[180px] sm:h-11 sm:w-[200px]',
  };

  return (
    <Link href="/" className={cn('inline-flex items-center', className)} aria-label={COMPANY_INFO.shortName}>
      <span
        className={cn(
          'relative block overflow-hidden rounded-lg',
          sizeStyles[size],
          theme === 'dark' && 'bg-white/95 p-1.5 shadow-sm',
        )}
      >
        <Image
          src="/images/benbax-logo.jpg"
          alt={`${COMPANY_INFO.shortName} logo`}
          fill
          sizes="(max-width: 640px) 180px, 220px"
          className="object-contain"
        />
      </span>
    </Link>
  );
};

export default Logo;

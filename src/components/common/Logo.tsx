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
  const sizeStyles: Record<
    NonNullable<LogoProps['size']>,
    { wrapper: string; image: string; brand: string; legal: string }
  > = {
    default: {
      wrapper: 'gap-2.5 sm:gap-3',
      image: 'h-12 w-auto sm:h-14',
      brand: 'text-base sm:text-lg',
      legal: 'text-[9px] sm:text-[10px]',
    },
    compact: {
      wrapper: 'gap-2 sm:gap-2.5',
      image: 'h-10 w-auto sm:h-12',
      brand: 'text-sm sm:text-base',
      legal: 'text-[8px] sm:text-[9px]',
    },
  };

  const toneStyles =
    theme === 'dark'
      ? {
          brand: 'text-white',
          legal: 'text-emerald-100/95',
        }
      : {
          brand: 'text-slate-900',
          legal: 'text-primary-dark',
        };

  const resolvedSize = sizeStyles[size];

  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center transition-transform duration-300 hover:scale-[1.02]', resolvedSize.wrapper, className)}
      aria-label={COMPANY_INFO.name}
    >
      <Image
        src="/images/Benbax_logo-removebg-preview.png"
        alt={`${COMPANY_INFO.shortName} logo`}
        width={500}
        height={500}
        className={cn('h-auto w-auto object-contain', resolvedSize.image)}
        priority
      />

      <span className="leading-tight">
        <span className={cn('block font-black uppercase tracking-[0.14em]', resolvedSize.brand, toneStyles.brand)}>
          {COMPANY_INFO.shortName}
        </span>
        <span className={cn('block font-semibold uppercase tracking-[0.22em]', resolvedSize.legal, toneStyles.legal)}>
          COMPANY LIMITED
        </span>
      </span>
    </Link>
  );
};

export default Logo;

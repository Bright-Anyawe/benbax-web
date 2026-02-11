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
    { wrapper: string; emblem: string; brand: string; legal: string }
  > = {
    default: {
      wrapper: 'gap-3 sm:gap-4',
      emblem: 'h-14 w-14 sm:h-16 sm:w-16',
      brand: 'text-lg sm:text-xl',
      legal: 'text-[9px] sm:text-[10px]',
    },
    compact: {
      wrapper: 'gap-2.5 sm:gap-3',
      emblem: 'h-12 w-12 sm:h-14 sm:w-14',
      brand: 'text-base sm:text-lg',
      legal: 'text-[8px] sm:text-[9px]',
    },
  };

  const toneStyles =
    theme === 'dark'
      ? {
          brand: 'text-white',
          legal: 'text-emerald-100/95',
          emblemOuter:
            'bg-gradient-to-br from-white/90 via-white to-white/90 ring-1 ring-white/50 shadow-[0_14px_30px_-20px_rgba(255,255,255,0.6)]',
        }
      : {
          brand: 'text-slate-900',
          legal: 'text-primary-dark',
          emblemOuter:
            'bg-gradient-to-br from-primary/10 via-white to-accent-cyan/20 ring-1 ring-primary/20 shadow-[0_12px_28px_-18px_rgba(46,188,59,0.9)]',
        };

  const resolvedSize = sizeStyles[size];

  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center', resolvedSize.wrapper, className)}
      aria-label={COMPANY_INFO.name}
    >
      <span className={cn('relative rounded-2xl p-1.5 transition-transform duration-300 group-hover:scale-[1.03]', toneStyles.emblemOuter)}>
        <span className={cn('relative block overflow-hidden rounded-xl', resolvedSize.emblem)}>
          <Image
            src="/images/benbax-company-ltd.png"
            alt={`${COMPANY_INFO.shortName} logo`}
            fill
            sizes="(max-width: 640px) 56px, 64px"
            className="object-cover object-[center_12%] scale-[1.35]"
          />
        </span>
      </span>

      <span className="leading-tight">
        <span className={cn('block font-black uppercase tracking-[0.14em]', resolvedSize.brand, toneStyles.brand)}>
          {COMPANY_INFO.shortName}
        </span>
        <span className={cn('block font-semibold uppercase tracking-[0.22em]', resolvedSize.legal, toneStyles.legal)}>
          LIMITED COMPANY
        </span>
      </span>
    </Link>
  );
};

export default Logo;

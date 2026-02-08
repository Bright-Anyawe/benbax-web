import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';

interface LogoProps {
  className?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className, textColor = 'text-primary' }) => {
  return (
    <Link href="/" className={cn('flex items-center space-x-2', className)}>
      <div className={cn('font-bold text-xl md:text-2xl', textColor)}>
        {COMPANY_INFO.shortName}
      </div>
    </Link>
  );
};

export default Logo;

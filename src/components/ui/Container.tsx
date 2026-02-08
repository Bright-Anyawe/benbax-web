import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'default' | 'narrow' | 'wide';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = 'default'
}) => {
  const widthStyles = {
    default: 'max-w-7xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-screen-2xl',
  };

  return (
    <div className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', widthStyles[maxWidth], className)}>
      {children}
    </div>
  );
};

export default Container;

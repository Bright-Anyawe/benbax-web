import React from 'react';
import { cn } from '@/lib/utils';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'card-base p-6',
        hover &&
          'transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

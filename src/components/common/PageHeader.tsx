import React from 'react';
import { cn } from '@/lib/utils';
import { PageHeaderProps } from '@/types';

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, className }) => {
  return (
    <div className={cn('text-center mb-12 md:mb-16', className)}>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;

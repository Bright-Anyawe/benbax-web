import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'btn-base';

    const variantStyles = {
      primary: 'bg-accent-orange text-white hover:bg-orange-600 focus:ring-accent-orange',
      secondary: 'bg-primary text-white hover:bg-primary-light focus:ring-primary',
      outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
      ghost: 'bg-transparent text-primary hover:bg-primary/10 focus:ring-primary',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

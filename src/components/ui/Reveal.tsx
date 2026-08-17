'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type RevealVariant = 'up' | 'fade' | 'right' | 'scale';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

const HIDDEN_STYLES: Record<RevealVariant, string> = {
  up: 'opacity-0 translate-y-8',
  fade: 'opacity-0',
  right: 'opacity-0 -translate-x-8',
  scale: 'opacity-0 scale-95',
};

const VISIBLE_STYLES = 'opacity-100 translate-y-0 translate-x-0 scale-100';

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  variant = 'up',
  delay = 0,
  duration = 700,
  once = true,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-[cubic-bezier(0.22,1,0.36,1)]',
        isVisible ? VISIBLE_STYLES : HIDDEN_STYLES[variant],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;

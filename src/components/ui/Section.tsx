import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = 'white',
  containerWidth = 'default'
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    primary: 'bg-primary text-white',
  };

  return (
    <section className={cn('section-padding', backgroundStyles[background], className)}>
      <Container maxWidth={containerWidth}>
        {children}
      </Container>
    </section>
  );
};

export default Section;

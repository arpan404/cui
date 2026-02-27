'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the gradient animates */
  animate?: boolean;
  /** Custom gradient colors array (CSS color values). Defaults to theme-aware primary colors. */
  gradientColors?: string[];
  /** Container class name */
  containerClassName?: string;
}

export function BackgroundGradient({
  className,
  containerClassName,
  animate = true,
  gradientColors,
  children,
  ...props
}: BackgroundGradientProps) {
  // Build gradient from colors or use theme-aware defaults
  const gradientStyle = React.useMemo(() => {
    if (gradientColors && gradientColors.length >= 2) {
      const stops = gradientColors.join(', ');
      return `linear-gradient(to right, ${stops})`;
    }
    // Theme-aware default using CSS variables
    return 'linear-gradient(to right, var(--primary), var(--chart-2), var(--primary))';
  }, [gradientColors]);

  return (
    <div className={cn('relative p-[2px] group rounded-xl', containerClassName)} {...props}>
      {/* Blurred outer glow */}
      <div
        className={cn(
          'absolute inset-0 rounded-xl opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80',
          animate && 'animate-gradient-xy',
        )}
        style={{ background: gradientStyle, backgroundSize: '200% 200%' }}
      />
      {/* Sharp border gradient */}
      <div
        className={cn(
          'absolute inset-0 rounded-xl opacity-70',
          animate && 'animate-gradient-xy',
        )}
        style={{ background: gradientStyle, backgroundSize: '200% 200%' }}
      />
      {/* Content container */}
      <div className={cn('relative rounded-[10px] bg-background', className)}>{children}</div>
    </div>
  );
}

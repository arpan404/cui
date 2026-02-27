'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface HeroHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Container class for the background */
  containerClassName?: string;
}

export function HeroHighlight({
  className,
  containerClassName,
  children,
  ...props
}: HeroHighlightProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden bg-background group', containerClassName)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, color-mix(in srgb, var(--primary) 8%, transparent), transparent 40%)`,
        }}
      />
      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
}

export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Highlight({ className, children, ...props }: HighlightProps) {
  return (
    <span
      className={cn(
        'relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 text-primary dark:from-primary/30 dark:to-primary/20',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

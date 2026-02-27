'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of grid cells in px */
  gridSize?: number;
  /** Color of grid lines */
  gridColor?: string;
  /** Show a radial fade mask */
  fade?: boolean;
}

export function GridBackground({
  className,
  gridSize = 40,
  gridColor,
  fade = true,
  children,
  ...props
}: GridBackgroundProps) {
  return (
    <div
      className={cn('relative w-full bg-background', className)}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${gridColor || 'var(--border)'} 1px, transparent 1px), linear-gradient(90deg, ${gridColor || 'var(--border)'} 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
      {fade && (
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export interface DotBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  dotSize?: number;
  dotColor?: string;
  dotSpacing?: number;
  fade?: boolean;
}

export function DotBackground({
  className,
  dotSize = 1.5,
  dotColor,
  dotSpacing = 22,
  fade = true,
  children,
  ...props
}: DotBackgroundProps) {
  return (
    <div
      className={cn('relative w-full bg-background', className)}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${dotColor || 'var(--muted-foreground)'} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          opacity: 0.3,
        }}
      />
      {fade && (
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

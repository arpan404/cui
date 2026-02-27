'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface MovingBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Border width */
  borderWidth?: number;
  /** Duration of animation in seconds */
  duration?: number;
  /** Border color */
  borderColor?: string;
  /** Border radius class */
  borderRadius?: string;
  /** Render as button */
  as?: 'div' | 'button';
  onClick?: () => void;
}

export function MovingBorder({
  className,
  borderWidth = 2,
  duration = 4,
  borderColor,
  borderRadius = 'rounded-xl',
  as: Component = 'div',
  children,
  ...props
}: MovingBorderProps) {
  return (
    <Component
      className={cn(
        'relative overflow-hidden bg-card p-px',
        borderRadius,
        Component === 'button' && 'cursor-pointer',
        className,
      )}
      {...(props as any)}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: 'inherit' }}
      >
        <div
          className="absolute inset-[-100%] animate-spin-slow"
          style={{
            animationDuration: `${duration}s`,
            background: `conic-gradient(from 0deg, transparent 0%, ${borderColor || 'var(--primary)'} 10%, transparent 20%)`,
          }}
        />
      </div>
      <div
        className={cn('relative bg-card', borderRadius)}
        style={{ margin: borderWidth }}
      >
        {children}
      </div>
    </Component>
  );
}

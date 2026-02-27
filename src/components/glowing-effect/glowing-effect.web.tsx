'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface GlowingEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Glow color */
  color?: string;
  /** Glow blur in px */
  blur?: number;
  /** Glow spread */
  spread?: number;
  /** Border radius class */
  borderRadius?: string;
}

export function GlowingEffect({
  className,
  color,
  blur = 40,
  spread = 2,
  borderRadius = 'rounded-xl',
  children,
  ...props
}: GlowingEffectProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('relative group', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className={cn(
          'pointer-events-none absolute -inset-px transition-opacity duration-500',
          borderRadius,
          isHovered ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          background: `radial-gradient(${blur * 4}px circle at ${position.x}px ${position.y}px, ${color || 'var(--primary)'}, transparent 60%)`,
          padding: `${spread}px`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {children}
    </div>
  );
}

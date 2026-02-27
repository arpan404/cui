'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spotlight radius in px */
  radius?: number;
  /** Spotlight color (CSS color value) */
  color?: string;
}

export function CardSpotlight({
  className,
  radius = 350,
  color,
  children,
  ...props
}: CardSpotlightProps) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  // Use color-mix for browser-safe gradient with CSS variables
  const spotlightColor = color || 'var(--primary)';

  return (
    <div
      ref={divRef}
      className={cn(
        'relative overflow-hidden rounded-xl border border-border bg-card p-6 sm:p-8 transition-shadow duration-300',
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, color-mix(in srgb, ${spotlightColor} 15%, transparent), transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

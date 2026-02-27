'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of spotlight in px */
  size?: number;
  /** Spotlight color (CSS color value, defaults to theme primary) */
  color?: string;
}

export function Spotlight({
  className,
  size = 400,
  color,
  children,
  ...props
}: SpotlightProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const positionRef = React.useRef({ x: 0, y: 0 });
  const animatedRef = React.useRef({ x: 0, y: 0 });
  const rafRef = React.useRef<number>(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [, forceUpdate] = React.useState(0);

  // Smooth interpolation loop
  React.useEffect(() => {
    let active = true;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      if (!active) return;
      const prev = animatedRef.current;
      const target = positionRef.current;
      const nx = lerp(prev.x, target.x, 0.15);
      const ny = lerp(prev.y, target.y, 0.15);

      if (Math.abs(nx - prev.x) > 0.1 || Math.abs(ny - prev.y) > 0.1) {
        animatedRef.current = { x: nx, y: ny };
        forceUpdate((c) => c + 1);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    if (isHovered) {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      active = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [isHovered]);

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    positionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  // Resolve color - use a default that works across browsers
  const spotlightColor = color || 'oklch(0.6 0.2 260)';

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${animatedRef.current.x}px ${animatedRef.current.y}px, color-mix(in srgb, ${spotlightColor} 12%, transparent), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

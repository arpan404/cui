'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface WobbleCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WobbleCard({ className, children, ...props }: WobbleCardProps) {
  const [transform, setTransform] = React.useState('');
  const [glarePosition, setGlarePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePosition({ x: x * 100, y: y * 100 });
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setIsHovered(false);
  }, []);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-200 ease-out',
        className,
      )}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, var(--primary), transparent 50%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

interface SparkleData {
  id: string;
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export interface SparklesProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of sparkles */
  count?: number;
  /** Min size of sparkles */
  minSize?: number;
  /** Max size of sparkles */
  maxSize?: number;
  /** Color of sparkles */
  color?: string;
}

function generateSparkle(color: string, minSize: number, maxSize: number): SparkleData {
  return {
    id: Math.random().toString(36).slice(2, 11),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * (maxSize - minSize) + minSize,
    delay: Math.random() * 2,
    duration: Math.random() * 1.5 + 0.5,
    color,
  };
}

export function Sparkles({
  className,
  count = 20,
  minSize = 2,
  maxSize = 6,
  color = 'var(--primary)',
  children,
  ...props
}: SparklesProps) {
  const [sparkles, setSparkles] = React.useState<SparkleData[]>([]);

  // Generate initial sparkles on mount
  React.useEffect(() => {
    setSparkles(Array.from({ length: count }, () => generateSparkle(color, minSize, maxSize)));
  }, [count, color, minSize, maxSize]);

  // Regenerate sparkles periodically for dynamic feel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => {
        const newSparkles = [...prev];
        // Replace 1-3 sparkles at a time for organic cycling
        const replaceCount = Math.min(3, Math.max(1, Math.floor(count * 0.15)));
        for (let i = 0; i < replaceCount; i++) {
          const idx = Math.floor(Math.random() * newSparkles.length);
          newSparkles[idx] = generateSparkle(color, minSize, maxSize);
        }
        return newSparkles;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [count, color, minSize, maxSize]);

  return (
    <div className={cn('relative inline-block', className)} {...props}>
      {sparkles.map((sparkle) => (
        <svg
          key={sparkle.id}
          className="absolute pointer-events-none animate-sparkle-spin"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
          viewBox="0 0 160 160"
          fill="none"
        >
          <path
            d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
            fill={sparkle.color}
          />
        </svg>
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

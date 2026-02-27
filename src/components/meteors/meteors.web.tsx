'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface MeteorsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of meteors */
  count?: number;
}

export function Meteors({ className, count = 20, ...props }: MeteorsProps) {
  const meteors = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 40) - 20}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
  }, [count]);

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} {...props}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rounded-full bg-foreground/40 shadow-[0_0_0_1px_var(--border)] animate-meteor"
          style={{
            left: meteor.left,
            top: meteor.top,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        >
          <span className="absolute top-1/2 -translate-y-1/2 w-[50px] h-px bg-gradient-to-r from-foreground/40 to-transparent" />
        </span>
      ))}
    </div>
  );
}

'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface LampEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color for the lamp glow (CSS color value) */
  color?: string;
  /** Duration of the expand animation in ms */
  expandDuration?: number;
  /** Delay before content appears in ms */
  contentDelay?: number;
}

export function LampEffect({ className, color, expandDuration = 1000, contentDelay = 700, children, ...props }: LampEffectProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Trigger animation on mount (small delay for initial render)
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div
      className={cn(
        'relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background',
        className,
      )}
      {...props}
    >
      {/* Expanding lamp cone */}
      <div className="relative flex w-full flex-1 items-center justify-center">
        {/* Conic light rays - animate from thin to wide */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 ease-out"
          style={{
            width: mounted ? '40rem' : '4rem',
            height: mounted ? '30rem' : '2rem',
            opacity: mounted ? 0.25 : 0,
            maxWidth: '100%',
            transition: `all ${expandDuration}ms ease-out`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 270deg, ${color || 'var(--primary)'} 0deg, transparent 60deg, transparent 300deg, ${color || 'var(--primary)'} 360deg)`,
              clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)',
            }}
          />
        </div>

        {/* Main glow - animate from narrow to wide */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 ease-out"
          style={{
            width: mounted ? '40rem' : '6rem',
            height: mounted ? '16rem' : '4rem',
            opacity: mounted ? 1 : 0,
            maxWidth: '100%',
            transition: `all ${expandDuration}ms ease-out`,
          }}
        >
          <div
            className="absolute inset-0 blur-3xl"
            style={{
              background: `linear-gradient(to bottom, ${color ? `${color}` : 'var(--primary)'}, transparent)`,
              opacity: 0.35,
            }}
          />
        </div>

        {/* Top shine line - animate width */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px ease-out"
          style={{
            width: mounted ? '24rem' : '2rem',
            opacity: mounted ? 1 : 0,
            maxWidth: '80%',
            background: `linear-gradient(to right, transparent, ${color || 'var(--primary)'}, transparent)`,
            transition: `all ${contentDelay}ms ease-out`,
          }}
        />

        {/* Secondary diffused glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 ease-out"
          style={{
            width: mounted ? '60rem' : '8rem',
            height: mounted ? '20rem' : '4rem',
            opacity: mounted ? 0.15 : 0,
            maxWidth: '120%',
            transition: `all ${expandDuration * 1.2}ms ease-out`,
          }}
        >
          <div
            className="absolute inset-0 blur-[80px]"
            style={{
              background: `radial-gradient(ellipse at top, ${color || 'var(--primary)'}, transparent 70%)`,
            }}
          />
        </div>
      </div>

      {/* Content - slides up on mount */}
      <div
        className="relative z-10 w-full ease-out"
        style={{
          transform: mounted ? 'translateY(0)' : 'translateY(40px)',
          opacity: mounted ? 1 : 0,
          transition: `all ${contentDelay}ms ease-out`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

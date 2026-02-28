'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

const COLORS = [
  'oklch(0.7 0.25 30)',   // red-orange
  'oklch(0.75 0.2 60)',   // orange
  'oklch(0.8 0.18 90)',   // yellow
  'oklch(0.72 0.2 145)',  // green
  'oklch(0.65 0.22 240)', // blue
  'oklch(0.6 0.25 290)',  // purple
  'oklch(0.65 0.24 330)', // pink
];

export interface ColourfulTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The text to colorize */
  text: string;
  /** Custom colors array */
  colors?: string[];
  /** Interval in ms for color rotation */
  interval?: number;
  /** CSS transition duration in ms */
  transitionDuration?: number;
}

export function ColourfulText({
  text,
  colors = COLORS,
  interval = 2000,
  transitionDuration = 700,
  className,
  ...props
}: ColourfulTextProps) {
  const [colorIndices, setColorIndices] = React.useState<number[]>(
    () => text.split('').map((_, i) => i % colors.length)
  );

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setColorIndices(prev =>
        prev.map((idx) => (idx + 1) % colors.length)
      );
    }, interval);
    return () => clearInterval(timerId);
  }, [colors.length, interval]);

  return (
    <span className={cn('inline-block', className)} {...props}>
      {text.split('').map((char, idx) => (
        <span
          key={idx}
          className="inline-block"
          style={{
            color: char === ' ' ? undefined : colors[colorIndices[idx] ?? 0],
            transition: `color ${transitionDuration}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

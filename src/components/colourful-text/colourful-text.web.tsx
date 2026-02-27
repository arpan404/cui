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
}

export function ColourfulText({
  text,
  colors = COLORS,
  className,
  ...props
}: ColourfulTextProps) {
  const [colorIndices, setColorIndices] = React.useState<number[]>(
    () => text.split('').map((_, i) => i % colors.length)
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndices(prev =>
        prev.map((idx) => (idx + 1) % colors.length)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <span className={cn('inline-block', className)} {...props}>
      {text.split('').map((char, idx) => (
        <span
          key={idx}
          className="inline-block transition-colors duration-700"
          style={{ color: char === ' ' ? undefined : colors[colorIndices[idx] ?? 0] }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

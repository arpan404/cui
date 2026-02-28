'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface FlipWordsProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Array of words to flip through */
  words: string[];
  /** Duration between flips in ms */
  duration?: number;
  /** Duration of the exit animation in ms */
  exitDuration?: number;
  /** Duration of the enter phase in ms */
  enterDuration?: number;
}

export function FlipWords({
  words,
  duration = 3000,
  exitDuration = 300,
  enterDuration = 50,
  className,
  ...props
}: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [phase, setPhase] = React.useState<'visible' | 'exit' | 'enter'>('visible');

  React.useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setPhase('exit');
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  React.useEffect(() => {
    if (phase === 'exit') {
      const exitTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setPhase('enter');
      }, exitDuration);
      return () => clearTimeout(exitTimer);
    }
    if (phase === 'enter') {
      const enterTimer = setTimeout(() => {
        setPhase('visible');
      }, enterDuration);
      return () => clearTimeout(enterTimer);
    }
  }, [phase, words.length, exitDuration, enterDuration]);

  const animStyles: React.CSSProperties = {
    transition: phase === 'enter' ? 'none' : `all ${exitDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    opacity: phase === 'exit' ? 0 : phase === 'enter' ? 0 : 1,
    transform:
      phase === 'exit'
        ? 'translateY(-12px) rotateX(45deg)'
        : phase === 'enter'
          ? 'translateY(12px) rotateX(-45deg)'
          : 'translateY(0) rotateX(0)',
    filter: phase === 'visible' ? 'blur(0px)' : 'blur(4px)',
  };

  return (
    <span className={cn('inline-block relative', className)} {...props}>
      <span className="inline-block" style={animStyles}>
        {words[currentIndex]}
      </span>
    </span>
  );
}

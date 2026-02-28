'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TextGenerateEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The text to generate */
  words: string;
  /** Duration per word in ms */
  duration?: number;
  /** Whether to start immediately */
  autoStart?: boolean;
  /** Callback when all words are shown */
  onComplete?: () => void;
  /** CSS transition duration in ms */
  transitionDuration?: number;
}

export function TextGenerateEffect({
  words,
  duration = 50,
  autoStart = true,
  onComplete,
  transitionDuration = 300,
  className,
  ...props
}: TextGenerateEffectProps) {
  const wordsArray = words.split(' ');
  const [visibleCount, setVisibleCount] = React.useState(autoStart ? 0 : wordsArray.length);

  React.useEffect(() => {
    if (!autoStart) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= wordsArray.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, duration);
    return () => clearInterval(interval);
  }, [wordsArray.length, duration, autoStart, onComplete]);

  return (
    <div className={cn('font-bold', className)} {...props}>
      {wordsArray.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className="inline-block mr-1.5"
          style={{
            opacity: idx < visibleCount ? 1 : 0,
            filter: idx < visibleCount ? 'blur(0px)' : 'blur(4px)',
            transform: idx < visibleCount ? 'translateY(0)' : 'translateY(4px)',
            transition: `all ${transitionDuration}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

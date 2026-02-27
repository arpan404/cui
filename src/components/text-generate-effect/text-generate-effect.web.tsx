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
}

export function TextGenerateEffect({
  words,
  duration = 50,
  autoStart = true,
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
      if (i >= wordsArray.length) clearInterval(interval);
    }, duration);
    return () => clearInterval(interval);
  }, [wordsArray.length, duration, autoStart]);

  return (
    <div className={cn('font-bold', className)} {...props}>
      {wordsArray.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className="inline-block mr-1.5 transition-all duration-300"
          style={{
            opacity: idx < visibleCount ? 1 : 0,
            filter: idx < visibleCount ? 'blur(0px)' : 'blur(4px)',
            transform: idx < visibleCount ? 'translateY(0)' : 'translateY(4px)',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

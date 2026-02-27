'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TypewriterEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The text to type */
  words: { text: string; className?: string }[];
  /** Typing speed in ms per character */
  speed?: number;
  /** Whether the cursor blinks */
  cursorBlink?: boolean;
}

export function TypewriterEffect({
  words,
  speed = 80,
  cursorBlink = true,
  className,
  ...props
}: TypewriterEffectProps) {
  const fullText = words.map(w => w.text).join('');
  const [displayedCount, setDisplayedCount] = React.useState(0);
  const [isDone, setIsDone] = React.useState(false);

  React.useEffect(() => {
    if (displayedCount >= fullText.length) {
      setIsDone(true);
      return;
    }
    const timeout = setTimeout(() => {
      setDisplayedCount(prev => prev + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayedCount, fullText.length, speed]);

  let charIndex = 0;

  return (
    <div className={cn('inline-flex items-baseline', className)} {...props}>
      {words.map((word, wordIdx) => {
        const startIdx = charIndex;
        charIndex += word.text.length;
        const visibleChars = Math.max(0, Math.min(word.text.length, displayedCount - startIdx));

        return (
          <span key={wordIdx} className={cn('mr-1', word.className)}>
            {word.text.slice(0, visibleChars)}
          </span>
        );
      })}
      <span
        className={cn(
          'inline-block w-[2px] h-[1em] bg-primary ml-0.5',
          cursorBlink && !isDone && 'animate-blink',
          isDone && 'opacity-0',
        )}
      />
    </div>
  );
}

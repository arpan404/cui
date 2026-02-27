import * as React from 'react';
import { Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface FlipWordsProps { className?: string; words: string[]; duration?: number; }
export function FlipWords({ words, className }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);
  return <Span className={cn('', className)}>{words[currentIndex]}</Span>;
}

import * as React from 'react';
import { Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface TypewriterEffectProps { className?: string; words: { text: string; className?: string }[]; speed?: number; cursorBlink?: boolean; }
export function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  return <Span className={cn('', className)}>{words.map(w => w.text).join('')}</Span>;
}

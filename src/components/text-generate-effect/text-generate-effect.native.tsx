import * as React from 'react';
import { Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface TextGenerateEffectProps { className?: string; words: string; duration?: number; autoStart?: boolean; }
export function TextGenerateEffect({ words, className }: TextGenerateEffectProps) {
  return <Span className={cn('font-bold', className)}>{words}</Span>;
}

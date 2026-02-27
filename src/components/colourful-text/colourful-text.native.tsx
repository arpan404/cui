import * as React from 'react';
import { Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface ColourfulTextProps { className?: string; text: string; colors?: string[]; }
export function ColourfulText({ text, className }: ColourfulTextProps) {
  return <Span className={cn('text-primary', className)}>{text}</Span>;
}

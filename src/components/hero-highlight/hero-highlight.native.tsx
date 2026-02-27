import * as React from 'react';
import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface HeroHighlightProps { className?: string; containerClassName?: string; children?: React.ReactNode; }
export function HeroHighlight({ className, children }: HeroHighlightProps) {
  return <Div className={cn('relative bg-background', className)}>{children}</Div>;
}

export interface HighlightProps { className?: string; children?: React.ReactNode; }
export function Highlight({ className, children }: HighlightProps) {
  return <Span className={cn('text-primary', className)}>{children}</Span>;
}

import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface SparklesProps { className?: string; children?: React.ReactNode; count?: number; minSize?: number; maxSize?: number; color?: string; }
export function Sparkles({ className, children }: SparklesProps) {
  return <Div className={cn('relative', className)}>{children}</Div>;
}

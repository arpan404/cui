import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface GridBackgroundProps { className?: string; children?: React.ReactNode; gridSize?: number; gridColor?: string; fade?: boolean; }
export function GridBackground({ className, children }: GridBackgroundProps) {
  return <Div className={cn('relative bg-background', className)}>{children}</Div>;
}

export interface DotBackgroundProps { className?: string; children?: React.ReactNode; dotSize?: number; dotColor?: string; dotSpacing?: number; fade?: boolean; }
export function DotBackground({ className, children }: DotBackgroundProps) {
  return <Div className={cn('relative bg-background', className)}>{children}</Div>;
}

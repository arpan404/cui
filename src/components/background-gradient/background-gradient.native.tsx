import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface BackgroundGradientProps { className?: string; containerClassName?: string; animate?: boolean; children?: React.ReactNode; }
export function BackgroundGradient({ className, children }: BackgroundGradientProps) {
  return <Div className={cn('rounded-xl border border-border bg-card', className)}>{children}</Div>;
}

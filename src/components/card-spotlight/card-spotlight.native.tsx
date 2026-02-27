import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface CardSpotlightProps { className?: string; children?: React.ReactNode; radius?: number; color?: string; }
export function CardSpotlight({ className, children }: CardSpotlightProps) {
  return <Div className={cn('rounded-xl border border-border bg-card p-6', className)}>{children}</Div>;
}

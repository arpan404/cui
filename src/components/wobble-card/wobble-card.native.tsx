import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface WobbleCardProps { className?: string; children?: React.ReactNode; }
export function WobbleCard({ className, children }: WobbleCardProps) {
  return <Div className={cn('rounded-2xl border border-border bg-card', className)}>{children}</Div>;
}

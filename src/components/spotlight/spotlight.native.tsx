import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface SpotlightProps { className?: string; children?: React.ReactNode; size?: number; color?: string; }
export function Spotlight({ className, children }: SpotlightProps) {
  return <Div className={cn('relative', className)}>{children}</Div>;
}

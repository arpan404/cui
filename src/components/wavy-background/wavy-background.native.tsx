import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface WavyBackgroundProps { className?: string; children?: React.ReactNode; layers?: number; colors?: string[]; speed?: number; }
export function WavyBackground({ className, children }: WavyBackgroundProps) {
  return <Div className={cn('relative bg-background', className)}>{children}</Div>;
}

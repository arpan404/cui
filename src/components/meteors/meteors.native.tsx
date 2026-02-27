import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface MeteorsProps { className?: string; count?: number; }
export function Meteors({ className }: MeteorsProps) {
  return <Div className={cn('absolute inset-0', className)} />;
}

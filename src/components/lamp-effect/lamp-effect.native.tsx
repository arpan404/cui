import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface LampEffectProps { className?: string; children?: React.ReactNode; }
export function LampEffect({ className, children }: LampEffectProps) {
  return <Div className={cn('items-center justify-center bg-background', className)}>{children}</Div>;
}

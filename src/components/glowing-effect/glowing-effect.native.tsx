import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface GlowingEffectProps { className?: string; children?: React.ReactNode; color?: string; blur?: number; spread?: number; borderRadius?: string; }
export function GlowingEffect({ className, children }: GlowingEffectProps) {
  return <Div className={cn('relative', className)}>{children}</Div>;
}

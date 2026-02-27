import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface MovingBorderProps { className?: string; children?: React.ReactNode; borderWidth?: number; duration?: number; borderColor?: string; borderRadius?: string; as?: 'div' | 'button'; onClick?: () => void; }
export function MovingBorder({ className, children }: MovingBorderProps) {
  return <Div className={cn('rounded-xl border border-primary bg-card', className)}>{children}</Div>;
}

import * as React from 'react';
import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface Card3DContainerProps { className?: string; containerClassName?: string; children?: React.ReactNode; }
export function Card3DContainer({ className, children }: Card3DContainerProps) {
  return <Div className={cn('', className)}>{children}</Div>;
}

export interface Card3DBodyProps { className?: string; children?: React.ReactNode; }
export function Card3DBody({ className, children }: Card3DBodyProps) {
  return <Div className={cn('rounded-xl border border-border bg-card p-6', className)}>{children}</Div>;
}

export interface Card3DItemProps { className?: string; children?: React.ReactNode; translateZ?: number; }
export function Card3DItem({ className, children }: Card3DItemProps) {
  return <Div className={cn('', className)}>{children}</Div>;
}

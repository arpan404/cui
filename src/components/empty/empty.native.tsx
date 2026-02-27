import * as React from 'react';

import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

type EmptyProps = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export function Empty({ className, ...props }: EmptyProps) {
  return <Div className={cn('flex min-h-[200px] flex-col items-center justify-center gap-3 p-8', className)} {...props} />;
}

export function EmptyIcon({ className, ...props }: EmptyProps) {
  return <Div className={cn('flex items-center justify-center', className)} {...props} />;
}

export function EmptyTitle({ className, ...props }: EmptyProps) {
  return <Span className={cn('text-lg font-semibold text-center', className)} {...props} />;
}

export function EmptyDescription({ className, ...props }: EmptyProps) {
  return <Span className={cn('text-sm text-muted-foreground text-center', className)} {...props} />;
}

export function EmptyAction({ className, ...props }: EmptyProps) {
  return <Div className={cn('mt-2', className)} {...props} />;
}

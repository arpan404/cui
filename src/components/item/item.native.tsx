import * as React from 'react';

import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

type BaseProps = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export function Item({ className, ...props }: BaseProps) {
  return <Div className={cn('flex flex-row items-center gap-3 py-2', className)} {...props} />;
}

export function ItemIcon({ className, ...props }: BaseProps) {
  return <Div className={cn('flex shrink-0 items-center justify-center', className)} {...props} />;
}

export function ItemContent({ className, ...props }: BaseProps) {
  return <Div className={cn('flex min-w-0 flex-1 flex-col gap-0.5', className)} {...props} />;
}

export function ItemLabel({ className, ...props }: BaseProps) {
  return <Span className={cn('text-sm font-medium leading-none', className)} {...props} />;
}

export function ItemDescription({ className, ...props }: BaseProps) {
  return <Span className={cn('text-xs text-muted-foreground', className)} {...props} />;
}

export function ItemTrailing({ className, ...props }: BaseProps) {
  return <Div className={cn('ml-auto flex shrink-0 items-center', className)} {...props} />;
}

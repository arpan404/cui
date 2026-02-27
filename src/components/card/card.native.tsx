import * as React from 'react';
import { type ViewProps } from 'react-native';

import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export function Card({ className, ...props }: ViewProps & { className?: string }) {
  return <Div className={cn('rounded-xl border border-border bg-card', className)} {...props} />;
}

export function CardHeader({ className, ...props }: ViewProps & { className?: string }) {
  return <Div className={cn('p-6', className)} {...props} />;
}

export function CardTitle({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <Span className={cn('text-lg font-semibold text-foreground', className)}>{children}</Span>;
}

export function CardDescription({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <Span className={cn('text-sm text-muted-foreground', className)}>{children}</Span>;
}

export function CardContent({ className, ...props }: ViewProps & { className?: string }) {
  return <Div className={cn('px-6 pb-6', className)} {...props} />;
}

export function CardFooter({ className, ...props }: ViewProps & { className?: string }) {
  return <Div className={cn('px-6 pb-6', className)} {...props} />;
}

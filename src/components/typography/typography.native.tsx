import * as React from 'react';

import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

type TypographyProps = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export function H1({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-4xl font-extrabold tracking-tight', className)} {...props} />;
}

export function H2({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-3xl font-semibold tracking-tight', className)} {...props} />;
}

export function H3({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-2xl font-semibold tracking-tight', className)} {...props} />;
}

export function H4({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-xl font-semibold tracking-tight', className)} {...props} />;
}

export function TypographyP({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-base leading-7', className)} {...props} />;
}

export function Lead({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-xl text-muted-foreground', className)} {...props} />;
}

export function Large({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-lg font-semibold', className)} {...props} />;
}

export function Small({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-sm font-medium leading-none', className)} {...props} />;
}

export function Muted({ className, ...props }: TypographyProps) {
  return <Span className={cn('text-sm text-muted-foreground', className)} {...props} />;
}

export function Blockquote({ className, ...props }: TypographyProps) {
  return <Div className={cn('border-l-2 border-border pl-6', className)}><Span className="italic" {...props} /></Div>;
}

export function InlineCode({ className, ...props }: TypographyProps) {
  return <Span className={cn('rounded bg-muted px-1 py-0.5 font-mono text-sm font-semibold', className)} {...props} />;
}

export function List({ className, children, ...props }: TypographyProps) {
  return <Div className={cn('ml-6', className)} {...props}>{children}</Div>;
}

import * as React from 'react';

import { Div } from '../primitives/index.web';
import { cn } from '../utils/cn';

type SharedLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  gap?: string;
};

export function Stack({ className, gap = 'gap-3', ...props }: SharedLayoutProps) {
  return <Div className={cn('flex flex-col', gap, className)} {...props} />;
}

export function VStack(props: SharedLayoutProps) {
  return <Stack {...props} />;
}

export function HStack({ className, gap = 'gap-3', ...props }: SharedLayoutProps) {
  return <Div className={cn('flex flex-row items-center', gap, className)} {...props} />;
}

export function Screen({ className, ...props }: SharedLayoutProps) {
  return <Div className={cn('min-h-screen w-full bg-background text-foreground', className)} {...props} />;
}

export function Container({ className, ...props }: SharedLayoutProps) {
  return <Div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6', className)} {...props} />;
}

export function Spacer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Div aria-hidden='true' className={cn('flex-1', className)} {...props} />;
}

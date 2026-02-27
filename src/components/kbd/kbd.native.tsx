import * as React from 'react';

import { Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export function Kbd({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Span
      className={cn(
        'rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </Span>
  );
}

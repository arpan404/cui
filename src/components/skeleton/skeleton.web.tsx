import * as React from 'react';

import { Div } from '../../primitives/index.web';
import { cn } from '../../utils/cn';

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Div
      aria-hidden='true'
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}

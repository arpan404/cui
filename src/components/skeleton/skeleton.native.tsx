import * as React from 'react';
import { type ViewProps } from 'react-native';

import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export function Skeleton({
  className,
  ...props
}: ViewProps & { className?: string }) {
  return (
    <Div
      accessibilityElementsHidden={true}
      className={cn('h-4 w-full animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}

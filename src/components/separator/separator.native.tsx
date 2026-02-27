import * as React from 'react';
import { type ViewProps } from 'react-native';

import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: ViewProps & {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <Div
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  );
}

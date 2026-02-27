import * as React from 'react';

import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export function AspectRatio({
  ratio = 1,
  className,
  children,
  ...props
}: {
  ratio?: number;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Div className={cn('relative w-full', className)} style={{ aspectRatio: ratio }} {...props}>
      {children}
    </Div>
  );
}

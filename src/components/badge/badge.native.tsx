import * as React from 'react';
import type { ViewProps } from 'react-native';

import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';
import { badgeVariants, type BadgeVariant } from './badge.shared';

export { badgeVariants, type BadgeVariant } from './badge.shared';

type BadgeProps = ViewProps & {
  className?: string;
  variant?: BadgeVariant;
  children?: React.ReactNode;
};

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <Div className={cn(badgeVariants({ variant }), className)} {...props}>
      {typeof children === 'string' ? (
        <Span className="text-xs">{children}</Span>
      ) : (
        children
      )}
    </Div>
  );
}

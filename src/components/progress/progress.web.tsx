import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '../../utils/cn';
import {
  progressVariants,
  progressIndicatorVariants,
  type ProgressSize,
  type ProgressVariant,
} from './progress.shared';

function Progress({
  className,
  value,
  size,
  variant,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  size?: ProgressSize;
  variant?: ProgressVariant;
}) {
  const isIndeterminate = value === undefined || value === null;

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        progressVariants({ size, variant }),
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          progressIndicatorVariants({ variant }),
          isIndeterminate && 'w-1/3 animate-[progress-indeterminate_1.5s_ease-in-out_infinite]',
          !isIndeterminate && 'w-full',
        )}
        style={isIndeterminate ? undefined : { transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
export { progressVariants, progressIndicatorVariants } from './progress.shared';

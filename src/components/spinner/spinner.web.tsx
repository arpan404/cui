import * as React from 'react';

import { cn } from '../../utils/cn';
import { spinnerVariants, type SpinnerSize } from './spinner.shared';

export { spinnerVariants, type SpinnerSize } from './spinner.shared';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
}

function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <div
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export { Spinner };

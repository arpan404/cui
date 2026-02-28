import * as React from 'react';

import { cn } from '../../utils/cn';
import { inputVariants, type InputSize } from './input.shared';

export { inputVariants, type InputSize } from './input.shared';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, size, ...props }, ref) {
    return <input ref={ref} className={cn(inputVariants({ size }), className)} {...props} />;
  },
);

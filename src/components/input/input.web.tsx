import * as React from 'react';

import { cn } from '../../utils/cn';

const inputBaseClass =
  'w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-ring/50 focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(inputBaseClass, className)} {...props} />;
  },
);

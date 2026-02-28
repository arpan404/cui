import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export const inputVariants = cva(
  'w-full rounded-md border border-input bg-background text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-ring/50 focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
  {
    variants: {
      size: {
        sm: 'h-8 text-xs px-2.5',
        default: 'h-10 px-3 py-2',
        lg: 'h-12 text-base px-4',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export type InputSize = NonNullable<VariantProps<typeof inputVariants>>['size'];

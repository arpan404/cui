import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export const textareaVariants = cva(
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/60 hover:border-ring/50 focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
  {
    variants: {
      size: {
        sm: 'min-h-16 text-xs',
        default: 'min-h-24',
        lg: 'min-h-36 text-base px-4 py-3',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
    },
    defaultVariants: {
      size: 'default',
      resize: 'vertical',
    },
  },
);

export type TextareaSize = NonNullable<VariantProps<typeof textareaVariants>>['size'];
export type TextareaResize = NonNullable<VariantProps<typeof textareaVariants>>['resize'];

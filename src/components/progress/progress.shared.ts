import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export const progressVariants = cva(
  'relative w-full overflow-hidden rounded-full',
  {
    variants: {
      size: {
        sm: 'h-1',
        default: 'h-2',
        lg: 'h-3',
        xl: 'h-4',
      },
      variant: {
        default: 'bg-primary/15',
        success: 'bg-green-500/15',
        warning: 'bg-yellow-500/15',
        destructive: 'bg-destructive/15',
      },
    },
    defaultVariants: { size: 'default', variant: 'default' },
  },
);

export const progressIndicatorVariants = cva(
  'h-full w-full flex-1 rounded-full transition-all duration-500 ease-out',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        destructive: 'bg-destructive',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export type ProgressSize = NonNullable<VariantProps<typeof progressVariants>>['size'];
export type ProgressVariant = NonNullable<VariantProps<typeof progressVariants>>['variant'];

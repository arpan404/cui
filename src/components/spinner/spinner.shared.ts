import { cva } from 'class-variance-authority';

export const spinnerVariants = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        sm: 'size-4',
        default: 'size-6',
        lg: 'size-8',
        xl: 'size-12',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export type SpinnerSize = NonNullable<Parameters<typeof spinnerVariants>[0]>['size'];

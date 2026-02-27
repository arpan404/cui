import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        warning:
          'border-warning/50 text-warning dark:border-warning [&>svg]:text-warning bg-warning',
        success:
          'border-success/50 text-success dark:border-success [&>svg]:text-success bg-success',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertVariant = 'default' | 'destructive' | 'warning' | 'success';

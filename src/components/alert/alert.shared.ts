import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/30 text-destructive bg-destructive/10 dark:border-destructive/40 dark:bg-destructive/15 [&>svg]:text-destructive',
        warning:
          'border-warning/30 text-warning-foreground bg-warning/10 [&>svg]:text-warning dark:border-warning/40 dark:bg-warning/15',
        success:
          'border-success/30 text-success-foreground bg-success/10 [&>svg]:text-success dark:border-success/40 dark:bg-success/15',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type AlertVariant = 'default' | 'destructive' | 'warning' | 'success';

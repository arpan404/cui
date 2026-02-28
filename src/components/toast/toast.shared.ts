import { cva } from 'class-variance-authority';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
        success:
          'border-success/30 bg-success/10 text-success-foreground dark:border-success/40 dark:bg-success/15',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type ToastVariant = NonNullable<Parameters<typeof toastVariants>[0]>['variant'];

export { toastVariants };
export type { ToastVariant };

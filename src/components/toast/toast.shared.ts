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
          'border-emerald-500/30 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100',
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

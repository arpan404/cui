import * as React from 'react';
import { Toaster as SonnerPrimitive } from 'sonner';

import { cn } from '../../utils/cn';

type SonnerToasterProps = React.ComponentProps<typeof SonnerPrimitive>;

function SonnerToaster({ className, ...props }: SonnerToasterProps) {
  return (
    <SonnerPrimitive
      data-slot="sonner-toaster"
      className={cn('toaster group', className)}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
}

export { SonnerToaster };
export { toast as sonnerToast } from 'sonner';
export type { SonnerToasterProps };

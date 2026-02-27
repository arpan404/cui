import * as React from 'react';

import { cn } from '../../utils/cn';

function Empty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="empty"
      className={cn('flex min-h-[200px] flex-col items-center justify-center gap-3 p-8 text-center', className)}
      {...props}
    />
  );
}

function EmptyIcon({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="empty-icon"
      className={cn('flex items-center justify-center text-muted-foreground [&_svg]:size-10', className)}
      {...props}
    />
  );
}

function EmptyTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="empty-title"
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  );
}

function EmptyDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="empty-description"
      className={cn('text-sm text-muted-foreground max-w-sm', className)}
      {...props}
    />
  );
}

function EmptyAction({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="empty-action"
      className={cn('mt-2', className)}
      {...props}
    />
  );
}

export { Empty, EmptyIcon, EmptyTitle, EmptyDescription, EmptyAction };

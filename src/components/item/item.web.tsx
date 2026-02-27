import * as React from 'react';

import { cn } from '../../utils/cn';

function Item({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item"
      className={cn('flex items-center gap-3 py-2', className)}
      {...props}
    />
  );
}

function ItemIcon({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-icon"
      className={cn('flex shrink-0 items-center justify-center text-muted-foreground [&_svg]:size-5', className)}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-content"
      className={cn('flex min-w-0 flex-1 flex-col gap-0.5', className)}
      {...props}
    />
  );
}

function ItemLabel({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="item-label"
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="item-description"
      className={cn('text-xs text-muted-foreground', className)}
      {...props}
    />
  );
}

function ItemTrailing({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="item-trailing"
      className={cn('ml-auto flex shrink-0 items-center', className)}
      {...props}
    />
  );
}

export { Item, ItemIcon, ItemContent, ItemLabel, ItemDescription, ItemTrailing };

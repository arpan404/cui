import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '../../utils/cn';

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot='popover' {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return (
    <PopoverPrimitive.Trigger data-slot='popover-trigger' {...props} />
  );
}

const popoverSizes = {
  sm: 'w-56',
  default: 'w-72',
  lg: 'w-96',
  auto: 'w-auto',
} as const;

type PopoverSize = keyof typeof popoverSizes;

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  size = 'default',
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> & {
  size?: PopoverSize;
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot='popover-content'
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[200] origin-(--radix-popover-content-transform-origin) rounded-md border border-border/20 p-4 shadow-md outline-none will-change-transform',
          popoverSizes[size],
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return (
    <PopoverPrimitive.Anchor data-slot='popover-anchor' {...props} />
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };

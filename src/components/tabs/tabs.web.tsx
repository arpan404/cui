import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../utils/cn';

const tabsListSizes = {
  sm: 'h-8',
  default: 'h-9',
  lg: 'h-10',
} as const;

const tabsTriggerSizes = {
  sm: 'text-xs px-2 py-1',
  default: 'text-sm px-2 py-1 sm:px-3 sm:py-1.5',
  lg: 'text-sm px-3 py-2',
} as const;

type TabsSize = keyof typeof tabsListSizes;

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & {
  size?: TabsSize;
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'bg-muted text-muted-foreground inline-flex w-fit items-center justify-center rounded-lg p-[3px] overflow-hidden',
        tabsListSizes[size],
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  children,
  size = 'default',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  size?: TabsSize;
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent font-medium whitespace-nowrap transition-[color,box-shadow] duration-150 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        tabsTriggerSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

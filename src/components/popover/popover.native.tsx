import * as React from 'react';

import { ButtonBase, Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

type PopoverContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

function usePopoverContext() {
  const ctx = React.useContext(PopoverContext);
  if (!ctx) throw new Error('Popover components must be used inside <Popover>.');
  return ctx;
}

export function Popover({
  open,
  defaultOpen = false,
  onOpenChange,
  className,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;
  const setOpen = (next: boolean) => {
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <PopoverContext.Provider value={{ open: currentOpen, setOpen }}>
      <Div className={cn('relative', className)}>{children}</Div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open, setOpen } = usePopoverContext();
  return (
    <ButtonBase
      className={className}
      accessibilityRole='button'
      accessibilityState={{ expanded: open }}
      onPress={() => setOpen(!open)}
    >
      {children}
    </ButtonBase>
  );
}

export function PopoverContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = usePopoverContext();
  if (!open) return null;
  return (
    <Div
      className={cn(
        'absolute z-50 mt-2 min-w-48 rounded-md border border-border bg-popover p-3',
        className,
      )}
    >
      {children}
    </Div>
  );
}

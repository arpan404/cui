import * as React from 'react';

import { ButtonBase, Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

type TooltipContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

function useTooltipContext() {
  const ctx = React.useContext(TooltipContext);
  if (!ctx) throw new Error('Tooltip components must be used inside <Tooltip>.');
  return ctx;
}

export function Tooltip({
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
    <TooltipContext.Provider value={{ open: currentOpen, setOpen }}>
      <Div className={cn('relative', className)}>{children}</Div>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { setOpen } = useTooltipContext();
  return (
    <ButtonBase
      className={className}
      accessibilityRole='button'
      onPress={() => setOpen(true)}
      onPressOut={() => setOpen(false)}
    >
      {children}
    </ButtonBase>
  );
}

export function TooltipContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useTooltipContext();
  if (!open) return null;
  return (
    <Div
      className={cn(
        'absolute z-50 -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-foreground px-2 py-1',
        className,
      )}
    >
      {typeof children === 'string' ? (
        <Span className='text-xs text-background'>{children}</Span>
      ) : (
        children
      )}
    </Div>
  );
}

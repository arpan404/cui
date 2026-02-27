import * as React from 'react';

import { ButtonBase, Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

type SelectContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  value?: string;
  setValue: (value: string) => void;
  disabled?: boolean;
};

const SelectContext = React.createContext<SelectContextValue | null>(null);

function useSelectContext() {
  const ctx = React.useContext(SelectContext);
  if (!ctx) throw new Error('Select components must be used inside <Select>.');
  return ctx;
}

export function Select({
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  className,
  children,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(false);
  const currentValue = value ?? internalValue;

  const setValue = (next: string) => {
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <SelectContext.Provider
      value={{ open, setOpen, value: currentValue, setValue, disabled }}
    >
      <Div className={cn('relative', className)}>{children}</Div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open, setOpen, disabled } = useSelectContext();

  return (
    <ButtonBase
      accessibilityRole='button'
      accessibilityState={{ expanded: open, disabled }}
      className={cn(
        'h-10 w-full flex-row items-center justify-between rounded-md border border-input bg-background px-3 py-2',
        disabled && 'opacity-60',
        className,
      )}
      disabled={disabled}
      onPress={() => {
        if (!disabled) setOpen(!open);
      }}
    >
      {typeof children === 'string' ? <Span>{children}</Span> : children}
      <Span className='text-xs text-muted-foreground'>▾</Span>
    </ButtonBase>
  );
}

export function SelectValue({
  placeholder = 'Select an option',
  className,
  children,
}: {
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { value } = useSelectContext();
  return (
    <Span className={cn(!value && 'text-muted-foreground', className)}>
      {children ?? value ?? placeholder}
    </Span>
  );
}

export function SelectContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useSelectContext();
  if (!open) return null;

  return (
    <Div
      className={cn(
        'absolute z-50 mt-1 w-full rounded-md border border-border bg-popover p-1',
        className,
      )}
    >
      {children}
    </Div>
  );
}

export function SelectGroup({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <Div className={className}>{children}</Div>;
}

export function SelectLabel({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Span className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}>
      {children}
    </Span>
  );
}

export function SelectSeparator({
  className,
}: {
  className?: string;
}) {
  return <Div className={cn('bg-border my-1 h-px', className)} />;
}

export function SelectItem({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { value: currentValue, setValue, setOpen } = useSelectContext();
  const active = currentValue === value;
  return (
    <ButtonBase
      accessibilityRole='button'
      accessibilityState={{ selected: active }}
      className={cn(
        'w-full rounded-sm px-2 py-1.5',
        active && 'bg-accent',
        className,
      )}
      onPress={() => {
        setValue(value);
        setOpen(false);
      }}
    >
      {typeof children === 'string' ? <Span>{children}</Span> : children}
    </ButtonBase>
  );
}

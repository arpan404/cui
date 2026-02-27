import * as React from 'react';
import { type ViewProps } from 'react-native';

import { ButtonBase, Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('Tabs components must be used inside <Tabs>.');
  return ctx;
}

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}: ViewProps & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const currentValue = value ?? internalValue;
  const setValue = (next: string) => {
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, setValue }}>
      <Div className={cn('gap-3', className)} {...props}>
        {children}
      </Div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  className,
  ...props
}: ViewProps & { className?: string }) {
  return (
    <Div
      accessibilityRole='tablist'
      className={cn(
        'inline-flex h-10 flex-row items-center rounded-md bg-muted p-1',
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: ViewProps & { value: string; className?: string; children?: React.ReactNode }) {
  const { value: currentValue, setValue } = useTabsContext();
  const active = currentValue === value;

  return (
    <ButtonBase
      accessibilityRole='tab'
      accessibilityState={{ selected: active }}
      className={cn(
        'rounded-sm px-3 py-1.5',
        active && 'bg-background',
        className,
      )}
      onPress={() => setValue(value)}
      {...props}
    >
      {typeof children === 'string' ? (
        <Span className={cn('text-sm', active ? 'text-foreground' : 'text-muted-foreground')}>
          {children}
        </Span>
      ) : (
        children
      )}
    </ButtonBase>
  );
}

export function TabsContent({
  value,
  className,
  children,
  ...props
}: ViewProps & { value: string; className?: string; children?: React.ReactNode }) {
  const { value: currentValue } = useTabsContext();
  if (currentValue !== value) return null;

  return (
    <Div className={className} {...props}>
      {children}
    </Div>
  );
}

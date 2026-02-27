import * as React from 'react';
import { Pressable, View, Text } from 'react-native';

import { cn } from '../../utils/cn';

type AccordionType = 'single' | 'multiple';

type AccordionContextType = {
  type: AccordionType;
  expandedItems: string[];
  toggleItem: (value: string) => void;
  disabled?: boolean;
};

const AccordionContext = React.createContext<AccordionContextType>({
  type: 'single',
  expandedItems: [],
  toggleItem: () => {},
});

function Accordion({
  type = 'single',
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
  children,
}: {
  type?: AccordionType;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
  collapsible?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const normalizeValue = (v?: string | string[]) => {
    if (v === undefined) return [];
    return Array.isArray(v) ? v : [v];
  };

  const [internalItems, setInternalItems] = React.useState<string[]>(
    normalizeValue(defaultValue),
  );
  const expandedItems = value !== undefined ? normalizeValue(value) : internalItems;

  const toggleItem = React.useCallback(
    (itemValue: string) => {
      let next: string[];
      if (type === 'single') {
        next = expandedItems.includes(itemValue) ? [] : [itemValue];
      } else {
        next = expandedItems.includes(itemValue)
          ? expandedItems.filter((v) => v !== itemValue)
          : [...expandedItems, itemValue];
      }
      if (value === undefined) setInternalItems(next);
      onValueChange?.(type === 'single' ? (next[0] ?? '') : next);
    },
    [type, expandedItems, value, onValueChange],
  );

  return (
    <AccordionContext.Provider value={{ type, expandedItems, toggleItem, disabled }}>
      <View className={className}>
        {children}
      </View>
    </AccordionContext.Provider>
  );
}

const AccordionItemContext = React.createContext<string>('');

function AccordionItem({
  value,
  className,
  children,
  disabled,
}: {
  value: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <AccordionItemContext.Provider value={value}>
      <View className={cn('border-b border-border', className)}>
        {children}
      </View>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const itemValue = React.useContext(AccordionItemContext);
  const { expandedItems, toggleItem, disabled } = React.useContext(AccordionContext);
  const isOpen = expandedItems.includes(itemValue);

  return (
    <Pressable
      onPress={() => !disabled && toggleItem(itemValue)}
      disabled={disabled}
      className={cn(
        'flex-row flex-1 items-center justify-between py-4',
        disabled && 'opacity-50',
        className,
      )}
      accessibilityRole='button'
      accessibilityState={{ expanded: isOpen }}
    >
      {typeof children === 'string' ? (
        <Text className='font-medium text-foreground'>{children}</Text>
      ) : (
        children
      )}
      <Text
        className={cn(
          'text-muted-foreground text-sm',
          isOpen && 'rotate-180',
        )}
      >
        ▼
      </Text>
    </Pressable>
  );
}

function AccordionContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const itemValue = React.useContext(AccordionItemContext);
  const { expandedItems } = React.useContext(AccordionContext);
  const isOpen = expandedItems.includes(itemValue);

  if (!isOpen) return null;

  return (
    <View className={cn('pb-4', className)}>
      {children}
    </View>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

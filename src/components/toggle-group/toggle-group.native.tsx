import * as React from 'react';
import { View, Pressable, type PressableProps } from 'react-native';

import { cn } from '../../utils/cn';
import { toggleVariants } from '../toggle/toggle.shared';
import type { VariantProps } from 'class-variance-authority';

type ToggleGroupContextType = {
  type: 'single' | 'multiple';
  value: string[];
  onValueChange: (value: string) => void;
  variant?: VariantProps<typeof toggleVariants>['variant'];
  size?: VariantProps<typeof toggleVariants>['size'];
};

const ToggleGroupContext = React.createContext<ToggleGroupContextType>({
  type: 'single',
  value: [],
  onValueChange: () => {},
});

interface ToggleGroupProps {
  type?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  variant?: VariantProps<typeof toggleVariants>['variant'];
  size?: VariantProps<typeof toggleVariants>['size'];
  className?: string;
  children?: React.ReactNode;
}

function ToggleGroup({
  type = 'single',
  value: controlledValue,
  defaultValue,
  onValueChange,
  variant,
  size,
  className,
  children,
}: ToggleGroupProps) {
  const normalizeValue = (v: string | string[] | undefined): string[] => {
    if (v === undefined) return [];
    return Array.isArray(v) ? v : [v];
  };

  const [internalValue, setInternalValue] = React.useState<string[]>(
    normalizeValue(defaultValue),
  );
  const value = controlledValue !== undefined
    ? normalizeValue(controlledValue)
    : internalValue;

  const handleValueChange = React.useCallback(
    (itemValue: string) => {
      let next: string[];
      if (type === 'single') {
        next = value.includes(itemValue) ? [] : [itemValue];
      } else {
        next = value.includes(itemValue)
          ? value.filter((v) => v !== itemValue)
          : [...value, itemValue];
      }
      if (controlledValue === undefined) setInternalValue(next);
      onValueChange?.(type === 'single' ? (next[0] || '') : next);
    },
    [type, value, controlledValue, onValueChange],
  );

  return (
    <View className={cn('flex-row items-center gap-1', className)}>
      <ToggleGroupContext.Provider
        value={{ type, value, onValueChange: handleValueChange, variant, size }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </View>
  );
}

interface ToggleGroupItemProps extends Omit<PressableProps, 'children'> {
  value: string;
  variant?: VariantProps<typeof toggleVariants>['variant'];
  size?: VariantProps<typeof toggleVariants>['size'];
  className?: string;
  children?: React.ReactNode;
}

function ToggleGroupItem({
  value: itemValue,
  variant,
  size,
  className,
  children,
  ...props
}: ToggleGroupItemProps) {
  const context = React.useContext(ToggleGroupContext);
  const pressed = context.value.includes(itemValue);

  return (
    <Pressable
      onPress={() => context.onValueChange(itemValue)}
      className={cn(
        toggleVariants({
          variant: variant || context.variant,
          size: size || context.size,
        }),
        pressed && 'bg-accent',
        'flex-1 rounded-none first:rounded-l-md last:rounded-r-md',
        className,
      )}
      accessibilityRole="button"
      accessibilityState={{ selected: pressed }}
      {...props}
    >
      {children}
    </Pressable>
  );
}

export { ToggleGroup, ToggleGroupItem };

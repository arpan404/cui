import * as React from 'react';
import { View, Pressable, type ViewProps } from 'react-native';

import { cn } from '../../utils/cn';

type RadioGroupContextType = {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
};

const RadioGroupContext = React.createContext<RadioGroupContextType>({});

type RadioGroupProps = ViewProps & {
  className?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

function RadioGroup({
  className,
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled,
  children,
  ...props
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [controlledValue, onValueChange],
  );

  return (
    <RadioGroupContext.Provider
      value={{ value, onValueChange: handleValueChange, disabled }}
    >
      <View
        accessibilityRole="radiogroup"
        className={cn('gap-2', className)}
        {...props}
      >
        {children}
      </View>
    </RadioGroupContext.Provider>
  );
}

type RadioGroupItemProps = ViewProps & {
  className?: string;
  value: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

function RadioGroupItem({
  className,
  value: itemValue,
  disabled: itemDisabled,
  ...props
}: RadioGroupItemProps) {
  const { value, onValueChange, disabled: groupDisabled } =
    React.useContext(RadioGroupContext);
  const isSelected = value === itemValue;
  const isDisabled = itemDisabled || groupDisabled;

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: isSelected, disabled: isDisabled }}
      onPress={() => !isDisabled && onValueChange?.(itemValue)}
      disabled={isDisabled}
      className={cn(
        'h-4 w-4 rounded-full border border-primary items-center justify-center',
        isDisabled && 'opacity-50',
        className,
      )}
      {...props}
    >
      {isSelected && (
        <View className="h-2.5 w-2.5 rounded-full bg-primary" />
      )}
    </Pressable>
  );
}

export { RadioGroup, RadioGroupItem };

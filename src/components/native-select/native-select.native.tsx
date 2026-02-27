import * as React from 'react';
import { Modal, Pressable, View, Text, FlatList } from 'react-native';

import { cn } from '../../utils/cn';

interface NativeSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface NativeSelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options?: NativeSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function NativeSelect({
  value: controlledValue,
  defaultValue,
  onValueChange,
  options = [],
  placeholder = 'Select...',
  disabled,
  className,
}: NativeSelectProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');
  const [open, setOpen] = React.useState(false);
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const selectedOption = options.find((o) => o.value === value);

  const handleSelect = React.useCallback(
    (optValue: string) => {
      if (controlledValue === undefined) setInternalValue(optValue);
      onValueChange?.(optValue);
      setOpen(false);
    },
    [controlledValue, onValueChange],
  );

  return (
    <>
      <Pressable
        onPress={() => !disabled && setOpen(true)}
        disabled={disabled}
        className={cn(
          'h-9 flex-row items-center justify-between rounded-md border border-input bg-background px-3',
          disabled && 'opacity-50',
          className,
        )}
        accessibilityRole="button"
      >
        <Text
          className={cn(
            'text-sm',
            selectedOption ? 'text-foreground' : 'text-muted-foreground',
          )}
        >
          {selectedOption?.label || placeholder}
        </Text>
        <Text className="text-muted-foreground text-xs">▼</Text>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable
          className="flex-1 items-center justify-center bg-black/20"
          onPress={() => setOpen(false)}
        >
          <View className="bg-popover w-[280px] max-h-[300px] rounded-md border border-border shadow-lg">
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => !item.disabled && handleSelect(item.value)}
                  disabled={item.disabled}
                  className={cn(
                    'px-3 py-2.5',
                    item.value === value && 'bg-accent',
                    item.disabled && 'opacity-50',
                  )}
                >
                  <Text
                    className={cn(
                      'text-sm',
                      item.value === value
                        ? 'text-accent-foreground font-medium'
                        : 'text-popover-foreground',
                    )}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

function NativeSelectOptionComponent() {
  return null;
}

export { NativeSelect, NativeSelectOptionComponent as NativeSelectOption };

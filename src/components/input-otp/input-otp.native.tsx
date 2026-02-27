import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import { cn } from '../../utils/cn';

interface InputOTPContextValue {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  disabled?: boolean;
}

const InputOTPContext = React.createContext<InputOTPContextValue | null>(null);

function useInputOTPContext() {
  const context = React.useContext(InputOTPContext);
  if (!context) {
    throw new Error('InputOTP components must be used within InputOTP');
  }
  return context;
}

function InputOTP({
  className,
  maxLength,
  value,
  onChange,
  disabled,
  autoFocus,
  children,
}: {
  className?: string;
  maxLength: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  children?: React.ReactNode;
}) {
  const inputRef = React.useRef<{ focus(): void }>(null);

  const handleChange = (text: string) => {
    const newValue = text.replace(/[^0-9]/g, '').slice(0, maxLength);
    onChange(newValue);
  };

  return (
    <InputOTPContext.Provider value={{ value, onChange, maxLength, disabled }}>
      <Pressable
        className={cn('flex-row items-center gap-2', className)}
        onPress={() => inputRef.current?.focus()}
      >
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={handleChange}
          keyboardType='number-pad'
          maxLength={maxLength}
          autoFocus={autoFocus}
          editable={!disabled}
          className='absolute opacity-0 h-0 w-0'
        />
        {children}
      </Pressable>
    </InputOTPContext.Provider>
  );
}

function InputOTPGroup({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-row items-center', className)}>
      {children}
    </View>
  );
}

function InputOTPSlot({
  index,
  className,
}: {
  index: number;
  className?: string;
}) {
  const { value, disabled } = useInputOTPContext();
  const char = value[index] || '';
  const isActive = value.length === index;

  return (
    <View
      className={cn(
        'h-10 w-10 items-center justify-center border border-input',
        isActive && 'border-2 border-ring',
        disabled && 'opacity-50',
        className,
      )}
    >
      <Text className='text-sm text-foreground'>{char}</Text>
    </View>
  );
}

function InputOTPSeparator({
  className,
}: {
  className?: string;
}) {
  return (
    <View className={cn('mx-2', className)}>
      <View className='h-1 w-1 rounded-full bg-border' />
    </View>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

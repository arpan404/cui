import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import { cn } from '../../utils/cn';

interface TimePickerProps {
  value?: string;
  onChange: (time: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

function TimePicker({
  value,
  onChange,
  placeholder = 'Select time',
  disabled = false,
  className,
}: TimePickerProps) {
  const [hours, setHours] = React.useState(() => {
    if (value) {
      const parts = value.split(':');
      return parts[0] || '';
    }
    return '';
  });
  const [minutes, setMinutes] = React.useState(() => {
    if (value) {
      const parts = value.split(':');
      return parts[1] || '';
    }
    return '';
  });

  const minuteRef = React.useRef<{ focus(): void }>(null);

  React.useEffect(() => {
    if (value) {
      const parts = value.split(':');
      setHours(parts[0] || '');
      setMinutes(parts[1] || '');
    }
  }, [value]);

  const handleHoursChange = (text: string) => {
    const num = text.replace(/[^0-9]/g, '').slice(0, 2);
    const n = parseInt(num, 10);
    if (num === '' || (n >= 0 && n <= 23)) {
      setHours(num);
      if (num.length === 2) {
        minuteRef.current?.focus();
      }
      if (num && minutes) {
        onChange(`${num.padStart(2, '0')}:${minutes.padStart(2, '0')}`);
      }
    }
  };

  const handleMinutesChange = (text: string) => {
    const num = text.replace(/[^0-9]/g, '').slice(0, 2);
    const n = parseInt(num, 10);
    if (num === '' || (n >= 0 && n <= 59)) {
      setMinutes(num);
      if (hours && num) {
        onChange(`${hours.padStart(2, '0')}:${num.padStart(2, '0')}`);
      }
    }
  };

  return (
    <View
      className={cn(
        'flex-row items-center h-10 rounded-md border border-input bg-background px-3',
        disabled && 'opacity-50',
        className,
      )}
    >
      <Text className='text-muted-foreground mr-2 text-sm'>🕐</Text>
      <TextInput
        value={hours}
        onChangeText={handleHoursChange}
        placeholder='HH'
        keyboardType='number-pad'
        maxLength={2}
        editable={!disabled}
        className='text-sm text-foreground w-8 text-center'
      />
      <Text className='text-foreground text-sm'>:</Text>
      <TextInput
        ref={minuteRef}
        value={minutes}
        onChangeText={handleMinutesChange}
        placeholder='MM'
        keyboardType='number-pad'
        maxLength={2}
        editable={!disabled}
        className='text-sm text-foreground w-8 text-center'
      />
    </View>
  );
}

export { TimePicker };
export type { TimePickerProps };

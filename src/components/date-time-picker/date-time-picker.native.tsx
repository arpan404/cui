import * as React from 'react';
import { View, Text, TextInput, Pressable, Modal } from 'react-native';

import { cn } from '../../utils/cn';
import { Calendar } from '../calendar/calendar.native';

const MONTH_NAMES_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function formatDateTime(date: Date, time: string): string {
  const month = MONTH_NAMES_SHORT[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year} ${time}`;
}

interface DateTimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

function DateTimePicker({
  value,
  onChange,
  placeholder = 'Pick a date and time',
  className,
  disabled,
}: DateTimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(() =>
    value ? new Date(value) : undefined,
  );
  const [hours, setHours] = React.useState(() => {
    if (value) {
      const d = new Date(value);
      return String(d.getHours()).padStart(2, '0');
    }
    return '';
  });
  const [minutes, setMinutes] = React.useState(() => {
    if (value) {
      const d = new Date(value);
      return String(d.getMinutes()).padStart(2, '0');
    }
    return '';
  });

  React.useEffect(() => {
    if (value) {
      const d = new Date(value);
      setSelectedDate(d);
      setHours(String(d.getHours()).padStart(2, '0'));
      setMinutes(String(d.getMinutes()).padStart(2, '0'));
    }
  }, [value]);

  const minuteRef = React.useRef<{ focus(): void }>(null);

  const emitChange = (date: Date | undefined, h: string, m: string) => {
    if (date && h && m) {
      const combined = new Date(date);
      combined.setHours(parseInt(h), parseInt(m), 0, 0);
      onChange?.(combined.toISOString());
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    emitChange(date, hours, minutes);
  };

  const handleHoursChange = (text: string) => {
    const num = text.replace(/[^0-9]/g, '').slice(0, 2);
    const n = parseInt(num, 10);
    if (num === '' || (n >= 0 && n <= 23)) {
      setHours(num);
      if (num.length === 2) minuteRef.current?.focus();
      emitChange(selectedDate, num, minutes);
    }
  };

  const handleMinutesChange = (text: string) => {
    const num = text.replace(/[^0-9]/g, '').slice(0, 2);
    const n = parseInt(num, 10);
    if (num === '' || (n >= 0 && n <= 59)) {
      setMinutes(num);
      emitChange(selectedDate, hours, num);
    }
  };

  const displayValue = selectedDate && hours && minutes
    ? formatDateTime(selectedDate, `${hours}:${minutes}`)
    : placeholder;

  return (
    <>
      <Pressable
        onPress={() => !disabled && setOpen(true)}
        className={cn(
          'flex-row items-center h-10 rounded-md border border-input bg-background px-3',
          disabled && 'opacity-50',
          className,
        )}
      >
        <Text className='text-muted-foreground mr-2 text-sm'>📅</Text>
        <Text
          className={cn(
            'text-sm flex-1',
            selectedDate ? 'text-foreground' : 'text-muted-foreground',
          )}
        >
          {displayValue}
        </Text>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType='fade'
        onRequestClose={() => setOpen(false)}
      >
        <View className='flex-1 items-center justify-center bg-black/50 p-4'>
          <Pressable
            className='absolute inset-0'
            onPress={() => setOpen(false)}
          />
          <View className='bg-background rounded-lg border border-border shadow-lg w-full max-w-sm'>
            <Calendar
              mode='single'
              selected={selectedDate}
              onSelect={handleDateSelect}
            />

            {/* Time picker section */}
            <View className='flex-row items-center justify-center gap-2 px-3 py-3 border-t border-border'>
              <Text className='text-sm text-muted-foreground mr-1'>🕐</Text>
              <TextInput
                value={hours}
                onChangeText={handleHoursChange}
                placeholder='HH'
                keyboardType='number-pad'
                maxLength={2}
                className='text-sm text-foreground w-10 text-center border border-input rounded-md h-9'
              />
              <Text className='text-foreground text-sm font-medium'>:</Text>
              <TextInput
                ref={minuteRef}
                value={minutes}
                onChangeText={handleMinutesChange}
                placeholder='MM'
                keyboardType='number-pad'
                maxLength={2}
                className='text-sm text-foreground w-10 text-center border border-input rounded-md h-9'
              />
            </View>

            <View className='flex-row justify-end p-3 border-t border-border'>
              <Pressable
                onPress={() => {
                  setSelectedDate(undefined);
                  setHours('');
                  setMinutes('');
                  onChange?.('');
                  setOpen(false);
                }}
                className='px-3 py-2 mr-2'
              >
                <Text className='text-sm text-muted-foreground'>Clear</Text>
              </Pressable>
              <Pressable
                onPress={() => setOpen(false)}
                className='px-3 py-2 bg-primary rounded-md'
              >
                <Text className='text-sm text-primary-foreground'>Done</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export { DateTimePicker };
export type { DateTimePickerProps };

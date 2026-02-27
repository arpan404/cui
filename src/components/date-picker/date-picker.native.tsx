import * as React from 'react';
import { View, Text, Pressable, Modal } from 'react-native';

import { cn } from '../../utils/cn';
import { Calendar } from '../calendar/calendar.native';

const MONTH_NAMES_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function formatDate(date: Date): string {
  const month = MONTH_NAMES_SHORT[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

interface DatePickerProps {
  value?: string;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  className,
  disabled,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const date = value ? new Date(value) : undefined;

  const handleSelect = (selectedDate: Date | undefined) => {
    onChange?.(selectedDate);
    if (selectedDate) {
      setOpen(false);
    }
  };

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
            date ? 'text-foreground' : 'text-muted-foreground',
          )}
        >
          {date ? formatDate(date) : placeholder}
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
              selected={date}
              onSelect={handleSelect}
            />
            <View className='flex-row justify-end p-3 border-t border-border'>
              <Pressable
                onPress={() => {
                  onChange?.(undefined);
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

export { DatePicker };
export type { DatePickerProps };

import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import { cn } from '../../utils/cn';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

interface CalendarProps {
  mode?: 'single';
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  showOutsideDays?: boolean;
  className?: string;
  initialFocus?: boolean;
}

function Calendar({
  mode = 'single',
  selected,
  onSelect,
  showOutsideDays = true,
  className,
}: CalendarProps) {
  const [viewDate, setViewDate] = React.useState(() => {
    if (selected) return new Date(selected.getFullYear(), selected.getMonth(), 1);
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);

  const prevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleDayPress = (day: Date) => {
    if (mode === 'single') {
      if (selected && isSameDay(selected, day)) {
        onSelect?.(undefined);
      } else {
        onSelect?.(day);
      }
    }
  };

  // Build grid cells
  const cells: Array<{ date: Date; isOutside: boolean }> = [];

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({
      date: new Date(year, month - 1, daysInPrevMonth - i),
      isOutside: true,
    });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      date: new Date(year, month, d),
      isOutside: false,
    });
  }

  // Next month days to fill remaining cells
  const remaining = 7 - (cells.length % 7);
  if (remaining < 7) {
    for (let d = 1; d <= remaining; d++) {
      cells.push({
        date: new Date(year, month + 1, d),
        isOutside: true,
      });
    }
  }

  // Split into weeks
  const weeks: Array<Array<{ date: Date; isOutside: boolean }>> = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  return (
    <View className={cn('bg-background p-3', className)}>
      {/* Header */}
      <View className='flex-row items-center justify-between mb-4'>
        <Pressable onPress={prevMonth} className='h-8 w-8 items-center justify-center rounded-md'>
          <Text className='text-foreground text-lg'>‹</Text>
        </Pressable>
        <Text className='text-sm font-medium text-foreground'>
          {MONTH_NAMES[month]} {year}
        </Text>
        <Pressable onPress={nextMonth} className='h-8 w-8 items-center justify-center rounded-md'>
          <Text className='text-foreground text-lg'>›</Text>
        </Pressable>
      </View>

      {/* Day names */}
      <View className='flex-row mb-1'>
        {DAY_NAMES.map(name => (
          <View key={name} className='flex-1 items-center'>
            <Text className='text-muted-foreground text-xs font-normal'>
              {name}
            </Text>
          </View>
        ))}
      </View>

      {/* Calendar grid */}
      {weeks.map((week, weekIdx) => (
        <View key={weekIdx} className='flex-row mt-1'>
          {week.map((cell, dayIdx) => {
            if (cell.isOutside && !showOutsideDays) {
              return <View key={dayIdx} className='flex-1 aspect-square' />;
            }

            const isSelected = selected ? isSameDay(cell.date, selected) : false;
            const isTodayDate = isToday(cell.date);

            return (
              <Pressable
                key={dayIdx}
                onPress={() => handleDayPress(cell.date)}
                className={cn(
                  'flex-1 aspect-square items-center justify-center rounded-md',
                  isSelected && 'bg-primary',
                  isTodayDate && !isSelected && 'bg-accent',
                )}
              >
                <Text
                  className={cn(
                    'text-sm',
                    cell.isOutside && 'text-muted-foreground',
                    !cell.isOutside && !isSelected && 'text-foreground',
                    isSelected && 'text-primary-foreground font-medium',
                    isTodayDate && !isSelected && 'text-accent-foreground',
                  )}
                >
                  {cell.date.getDate()}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
}

export { Calendar };
export type { CalendarProps };

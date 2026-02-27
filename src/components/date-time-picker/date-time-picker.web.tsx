import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, ClockIcon } from 'lucide-react';

import { cn } from '../../utils/cn';
import { Button } from '../button/button.web';
import { Calendar } from '../calendar/calendar.web';
import { Input } from '../input/input.web';
import { Label } from '../label/label.web';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../popover/popover.web';

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
  const [date, setDate] = React.useState<Date | undefined>(
    value ? new Date(value) : undefined,
  );
  const [time, setTime] = React.useState<string>(
    value ? format(new Date(value), 'HH:mm') : '',
  );

  React.useEffect(() => {
    if (value) {
      const dateObj = new Date(value);
      setDate(dateObj);
      setTime(format(dateObj, 'HH:mm'));
    } else {
      setDate(undefined);
      setTime('');
    }
  }, [value]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate && time) {
      const combined = new Date(selectedDate);
      const parts = time.split(':');
      combined.setHours(parseInt(parts[0] || '0'), parseInt(parts[1] || '0'), 0, 0);
      onChange?.(combined.toISOString());
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setTime(newTime);
    if (date && newTime) {
      const combined = new Date(date);
      const parts = newTime.split(':');
      combined.setHours(parseInt(parts[0] || '0'), parseInt(parts[1] || '0'), 0, 0);
      onChange?.(combined.toISOString());
    }
  };

  const displayValue =
    date && time
      ? `${format(date, 'PPP')} ${format(new Date(`1970-01-01T${time}:00`), 'p')}`
      : placeholder;

  return (
    <div data-slot='date-time-picker' className={cn('flex gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            disabled={disabled}
            className={cn(
              'flex-1 justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {displayValue}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <div className='flex items-center gap-1'>
        <ClockIcon className='h-4 w-4 text-muted-foreground' />
        <Input
          type='time'
          value={time}
          onChange={handleTimeChange}
          disabled={disabled}
          className='w-32'
        />
      </div>
    </div>
  );
}

export { DateTimePicker };
export type { DateTimePickerProps };

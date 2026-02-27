import * as React from 'react';
import { CheckIcon, ChevronsUpDownIcon, XIcon } from 'lucide-react';

import { cn } from '../../utils/cn';
import { Button } from '../button/button.web';
import { Badge } from '../badge/badge.web';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../popover/popover.web';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../command/command.web';

type Option = {
  label: string;
  value: string;
};

interface MultiSelectComboboxProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  maxDisplay?: number;
}

function MultiSelectCombobox({
  options,
  selected,
  onChange,
  placeholder = 'Select items...',
  className,
  maxDisplay = 3,
}: MultiSelectComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(item => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleRemove = (value: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    onChange(selected.filter(item => item !== value));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn(
            'w-full justify-between h-auto min-h-10 hover:bg-background',
            className,
          )}
        >
          <div className='flex flex-wrap gap-1 items-center'>
            {selected.length === 0 && (
              <span className='text-muted-foreground font-normal'>
                {placeholder}
              </span>
            )}
            {selected.length > 0 && (
              <>
                {selected.slice(0, maxDisplay).map(value => (
                  <Badge
                    key={value}
                    variant='secondary'
                    className='mr-1 mb-1'
                  >
                    {options.find(option => option.value === value)?.label ||
                      value}
                    <span
                      role='button'
                      tabIndex={0}
                      onClick={e => handleRemove(value, e)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleRemove(value);
                        }
                      }}
                      className='ml-1 cursor-pointer'
                    >
                      <XIcon className='h-3 w-3 text-muted-foreground hover:text-foreground' />
                    </span>
                  </Badge>
                ))}
                {selected.length > maxDisplay && (
                  <Badge variant='secondary' className='mr-1 mb-1'>
                    + {selected.length - maxDisplay} more
                  </Badge>
                )}
              </>
            )}
          </div>
          <ChevronsUpDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='w-[--radix-popover-trigger-width] p-0'
        align='start'
      >
        <Command>
          <CommandInput placeholder='Search...' />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup className='max-h-64 overflow-y-auto'>
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => handleSelect(option.value)}
                >
                  <div
                    className={cn(
                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                      selected.includes(option.value)
                        ? 'bg-primary text-primary-foreground'
                        : 'opacity-50 [&_svg]:invisible',
                    )}
                  >
                    <CheckIcon className='h-4 w-4' />
                  </div>
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { MultiSelectCombobox };
export type { Option as MultiSelectOption, MultiSelectComboboxProps };

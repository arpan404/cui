import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '../../utils/cn';

interface NativeSelectProps extends React.ComponentProps<'select'> {
  placeholder?: string;
}

function NativeSelect({
  className,
  children,
  ...props
}: NativeSelectProps) {
  return (
    <div data-slot="native-select" className="relative">
      <select
        className={cn(
          'border-input bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full appearance-none rounded-md border px-3 py-1 pr-8 text-sm shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon className="text-muted-foreground pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2" />
    </div>
  );
}

function NativeSelectOption({
  ...props
}: React.ComponentProps<'option'>) {
  return <option data-slot="native-select-option" {...props} />;
}

export { NativeSelect, NativeSelectOption };

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '../../utils/cn';
import { checkboxSizes, type CheckboxSize } from './checkbox.shared';

export { checkboxSizes, type CheckboxSize } from './checkbox.shared';

function Checkbox({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  size?: CheckboxSize;
}) {
  const sizeClasses = checkboxSizes[size];

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive min-w-4 min-h-4 shrink-0 border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        sizeClasses.root,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-colors duration-100"
      >
        <Check className={sizeClasses.icon} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

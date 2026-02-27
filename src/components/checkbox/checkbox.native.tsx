import * as React from 'react';

import { ButtonBase, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export function Checkbox({
  className,
  checked = false,
  onCheckedChange,
  disabled = false,
}: {
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <ButtonBase
      accessibilityRole='checkbox'
      accessibilityState={{ checked, disabled }}
      className={cn(
        'size-5 items-center justify-center rounded border border-input bg-background',
        checked && 'bg-primary border-primary',
        disabled && 'opacity-60',
        className,
      )}
      disabled={disabled}
      onPress={() => {
        if (!disabled) onCheckedChange?.(!checked);
      }}
    >
      {checked ? <Span className='text-xs text-primary-foreground'>✓</Span> : null}
    </ButtonBase>
  );
}

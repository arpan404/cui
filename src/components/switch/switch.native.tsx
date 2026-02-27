import * as React from 'react';
import { Switch as RNSwitch } from 'react-native';

import { Div } from '../../primitives/index.native';

export function Switch({
  className,
  checked = false,
  onCheckedChange,
  disabled = false,
  ...props
}: {
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <Div className={className}>
      <RNSwitch
        value={checked}
        disabled={disabled}
        accessibilityRole='switch'
        accessibilityState={{ checked, disabled }}
        onValueChange={onCheckedChange}
        {...props}
      />
    </Div>
  );
}

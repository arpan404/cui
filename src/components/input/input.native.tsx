import * as React from 'react';
import { TextInput, type TextInputProps } from 'react-native';

import { cn } from '../../utils/cn';

const inputBase =
  'w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground';

export const Input = React.forwardRef<any, TextInputProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <TextInput
      ref={ref}
      className={cn(inputBase, className)}
      accessibilityRole='none'
      {...props}
    />
  );
});

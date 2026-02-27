import * as React from 'react';
import { TextInput, type TextInputProps } from 'react-native';

import { cn } from '../../utils/cn';

export const Textarea = React.forwardRef<any, TextInputProps>(function Textarea(
  { className, multiline = true, textAlignVertical = 'top', ...props },
  ref,
) {
  return (
    <TextInput
      ref={ref}
      className={cn('min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground', className)}
      multiline={multiline}
      textAlignVertical={textAlignVertical}
      accessibilityRole='none'
      {...props}
    />
  );
});

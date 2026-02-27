import * as React from 'react';
import { Text, type TextProps } from 'react-native';

import { cn } from '../../utils/cn';

type LabelProps = TextProps & {
  className?: string;
  htmlFor?: string;
  children?: React.ReactNode;
};

function Label({ className, htmlFor, ...props }: LabelProps) {
  return (
    <Text
      nativeID={htmlFor}
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    />
  );
}

export { Label };
export type { LabelProps };

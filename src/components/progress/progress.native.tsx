import * as React from 'react';
import { View, type ViewProps } from 'react-native';

import { cn } from '../../utils/cn';

type ProgressProps = ViewProps & {
  className?: string;
  value?: number;
  max?: number;
  children?: React.ReactNode;
};

function Progress({ className, value = 0, max = 100, ...props }: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max, now: value }}
      className={cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <View
        className="bg-primary h-full rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </View>
  );
}

export { Progress };
export type { ProgressProps };

import * as React from 'react';
import { View, type ViewProps } from 'react-native';

import { cn } from '../../utils/cn';

type SliderProps = ViewProps & {
  className?: string;
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onValueChange?: (value: number[]) => void;
  children?: React.ReactNode;
};

function Slider({
  className,
  value: controlledValue,
  defaultValue = [0],
  min = 0,
  max = 100,
  disabled,
  ...props
}: SliderProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const values = controlledValue !== undefined ? controlledValue : internalValue;
  const percentage = Math.min(
    Math.max(((values[0] ?? min) - min) / (max - min) * 100, 0),
    100,
  );

  return (
    <View
      accessibilityRole="adjustable"
      accessibilityValue={{ min, max, now: values[0] }}
      className={cn(
        'relative flex w-full items-center',
        disabled && 'opacity-50',
        className,
      )}
      {...props}
    >
      <View className="bg-muted relative h-1.5 w-full overflow-hidden rounded-full">
        <View
          className="bg-primary absolute h-full rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </View>
      <View
        className="border-primary bg-background absolute size-4 rounded-full border shadow-sm"
        style={{ left: `${percentage}%`, marginLeft: -8 }}
      />
    </View>
  );
}

export { Slider };
export type { SliderProps };

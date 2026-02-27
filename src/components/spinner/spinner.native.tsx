import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import type { SpinnerSize } from './spinner.shared';

export { type SpinnerSize } from './spinner.shared';

const sizeMap: Record<NonNullable<SpinnerSize>, 'small' | 'large'> = {
  sm: 'small',
  default: 'small',
  lg: 'large',
  xl: 'large',
};

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
}

export function Spinner({ size = 'default', color }: SpinnerProps) {
  return (
    <ActivityIndicator
      size={sizeMap[size ?? 'default']}
      color={color}
    />
  );
}

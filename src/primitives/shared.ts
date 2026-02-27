import type * as React from 'react';

export type CommonPrimitiveProps = {
  className?: string;
  style?: React.CSSProperties | Record<string, unknown>;
  children?: React.ReactNode;
  testID?: string;
};

export type PrimitivePressProps = {
  onPress?: () => void;
};

import type { ComponentType } from 'react';

export type IconProps = {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
};

export type IconComponent = ComponentType<IconProps>;

import * as React from 'react';
import { ActivityIndicator, type ViewProps } from 'react-native';

import { ButtonBase, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';
import { buttonVariants, type ButtonSize, type ButtonVariant } from './button.shared';

export { buttonVariants, type ButtonVariant, type ButtonSize } from './button.shared';

export interface ButtonProps extends ViewProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export function Button({
  className,
  variant,
  size,
  loading = false,
  disabled,
  onPress,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      accessibilityRole='button'
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      className={cn(buttonVariants({ variant, size }), className)}
      onPress={onPress}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <ActivityIndicator /> : null}
      {typeof children === 'string' ? <Span>{children}</Span> : children}
    </ButtonBase>
  );
}

export function IconButton({ size = 'icon', ...props }: ButtonProps) {
  return <Button size={size} {...props} />;
}

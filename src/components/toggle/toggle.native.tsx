import * as React from 'react';
import { Pressable, type PressableProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { toggleVariants } from './toggle.shared';

interface ToggleProps extends Omit<PressableProps, 'children'> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: VariantProps<typeof toggleVariants>['variant'];
  size?: VariantProps<typeof toggleVariants>['size'];
  children?: React.ReactNode;
  className?: string;
}

function Toggle({
  pressed: controlledPressed,
  defaultPressed = false,
  onPressedChange,
  variant,
  size,
  className,
  children,
  ...props
}: ToggleProps) {
  const [internalPressed, setInternalPressed] = React.useState(defaultPressed);
  const pressed = controlledPressed !== undefined ? controlledPressed : internalPressed;

  const handlePress = React.useCallback(() => {
    const next = !pressed;
    if (controlledPressed === undefined) setInternalPressed(next);
    onPressedChange?.(next);
  }, [pressed, controlledPressed, onPressedChange]);

  return (
    <Pressable
      onPress={handlePress}
      className={cn(
        toggleVariants({ variant, size }),
        pressed && 'bg-accent',
        className,
      )}
      accessibilityRole="button"
      accessibilityState={{ selected: pressed }}
      {...props}
    >
      {children}
    </Pressable>
  );
}

export { Toggle, toggleVariants };
export type { ToggleVariant, ToggleSize } from './toggle.shared';

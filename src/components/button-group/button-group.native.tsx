import * as React from 'react';

import { Div } from '../../primitives/index.native';
import { cn } from '../../utils/cn';
import { buttonGroupVariants, type ButtonGroupOrientation } from './button-group.shared';

export { buttonGroupVariants, type ButtonGroupOrientation } from './button-group.shared';

export interface ButtonGroupProps {
  orientation?: ButtonGroupOrientation;
  className?: string;
  children?: React.ReactNode;
}

export function ButtonGroup({ className, orientation, children, ...props }: ButtonGroupProps) {
  return (
    <Div
      accessibilityRole="none"
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    >
      {children}
    </Div>
  );
}

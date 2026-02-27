import * as React from 'react';

import { cn } from '../../utils/cn';
import { buttonGroupVariants, type ButtonGroupOrientation } from './button-group.shared';

export { buttonGroupVariants, type ButtonGroupOrientation } from './button-group.shared';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: ButtonGroupOrientation;
}

function ButtonGroup({ className, orientation, ...props }: ButtonGroupProps) {
  return (
    <div
      data-slot="button-group"
      role="group"
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}

export { ButtonGroup };

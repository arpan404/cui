import * as React from 'react';

import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

type InputGroupProps = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export function InputGroup({ className, ...props }: InputGroupProps) {
  return <Div className={cn('flex flex-row items-stretch rounded-md', className)} {...props} />;
}

export function InputAddon({ className, children, ...props }: InputGroupProps) {
  return (
    <Div className={cn('flex items-center border border-border bg-muted px-3', className)} {...props}>
      {typeof children === 'string' ? <Span className="text-sm text-muted-foreground">{children}</Span> : children}
    </Div>
  );
}

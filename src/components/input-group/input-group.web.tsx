import * as React from 'react';

import { cn } from '../../utils/cn';

function InputGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        'flex items-stretch rounded-md shadow-xs [&>input]:rounded-none [&>input]:shadow-none [&>input:first-child]:rounded-l-md [&>input:last-child]:rounded-r-md',
        className,
      )}
      {...props}
    />
  );
}

function InputAddon({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-addon"
      className={cn(
        'flex items-center border bg-muted px-3 text-sm text-muted-foreground first:rounded-l-md first:border-r-0 last:rounded-r-md last:border-l-0',
        className,
      )}
      {...props}
    />
  );
}

export { InputGroup, InputAddon };

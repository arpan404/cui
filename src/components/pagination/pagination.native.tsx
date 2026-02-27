import * as React from 'react';

import { Div, Span, ButtonBase } from '../../primitives/index.native';
import { cn } from '../../utils/cn';
import { buttonVariants } from '../button/button.shared';

type BaseProps = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export function Pagination({ className, ...props }: BaseProps) {
  return <Div className={cn('flex w-full items-center justify-center', className)} {...props} />;
}

export function PaginationContent({ className, ...props }: BaseProps) {
  return <Div className={cn('flex flex-row items-center gap-1', className)} {...props} />;
}

export function PaginationItem({ className, ...props }: BaseProps) {
  return <Div className={cn('', className)} {...props} />;
}

export function PaginationLink({
  className,
  isActive,
  onPress,
  children,
  ...props
}: BaseProps & { isActive?: boolean; onPress?: () => void }) {
  return (
    <ButtonBase
      accessibilityRole="button"
      className={cn(
        buttonVariants({ variant: isActive ? 'outline' : 'ghost', size: 'icon' }),
        className,
      )}
      onPress={onPress}
      {...props}
    >
      {typeof children === 'string' ? <Span>{children}</Span> : children}
    </ButtonBase>
  );
}

export function PaginationPrevious({ className, ...props }: BaseProps & { onPress?: () => void }) {
  return (
    <ButtonBase
      accessibilityRole="button"
      accessibilityLabel="Go to previous page"
      className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'gap-1 pl-2.5', className)}
      {...props}
    >
      <Span className="text-sm">Previous</Span>
    </ButtonBase>
  );
}

export function PaginationNext({ className, ...props }: BaseProps & { onPress?: () => void }) {
  return (
    <ButtonBase
      accessibilityRole="button"
      accessibilityLabel="Go to next page"
      className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'gap-1 pr-2.5', className)}
      {...props}
    >
      <Span className="text-sm">Next</Span>
    </ButtonBase>
  );
}

export function PaginationEllipsis({ className, ...props }: BaseProps) {
  return (
    <Div className={cn('flex size-10 items-center justify-center', className)} {...props}>
      <Span className="text-muted-foreground">...</Span>
    </Div>
  );
}

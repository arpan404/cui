import * as React from 'react';

import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

interface FieldContextValue {
  id: string;
  error?: string;
}

const FieldContext = React.createContext<FieldContextValue | null>(null);

export function useField() {
  const ctx = React.useContext(FieldContext);
  if (!ctx) throw new Error('useField must be used within <Field>');
  return ctx;
}

type BaseProps = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export function Field({ className, error, children, ...props }: BaseProps & { error?: string }) {
  const id = React.useId();
  const ctx = React.useMemo(() => ({ id, error }), [id, error]);

  return (
    <FieldContext.Provider value={ctx}>
      <Div className={cn('gap-2', className)} {...props}>
        {children}
      </Div>
    </FieldContext.Provider>
  );
}

export function FieldLabel({ className, ...props }: BaseProps) {
  const { error } = useField();
  return (
    <Span
      className={cn('text-sm font-medium leading-none', error && 'text-destructive', className)}
      {...props}
    />
  );
}

export function FieldDescription({ className, ...props }: BaseProps) {
  return <Span className={cn('text-xs text-muted-foreground', className)} {...props} />;
}

export function FieldError({ className, children, ...props }: BaseProps) {
  const { error } = useField();
  const message = children ?? error;
  if (!message) return null;

  return (
    <Span
      accessibilityRole="alert"
      className={cn('text-xs font-medium text-destructive', className)}
      {...props}
    >
      {message}
    </Span>
  );
}

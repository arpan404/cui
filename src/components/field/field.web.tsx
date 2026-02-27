import * as React from 'react';

import { cn } from '../../utils/cn';

interface FieldContextValue {
  id: string;
  descriptionId: string;
  errorId: string;
  error?: string;
}

const FieldContext = React.createContext<FieldContextValue | null>(null);

function useField() {
  const ctx = React.useContext(FieldContext);
  if (!ctx) throw new Error('useField must be used within a <Field>');
  return ctx;
}

function Field({
  className,
  error,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { error?: string }) {
  const id = React.useId();
  const ctx = React.useMemo(
    () => ({
      id,
      descriptionId: `${id}-description`,
      errorId: `${id}-error`,
      error,
    }),
    [id, error],
  );

  return (
    <FieldContext.Provider value={ctx}>
      <div
        data-slot="field"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FieldContext.Provider>
  );
}

function FieldLabel({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { id, error } = useField();
  return (
    <label
      data-slot="field-label"
      htmlFor={id}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        error && 'text-destructive',
        className,
      )}
      {...props}
    />
  );
}

function FieldDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { descriptionId } = useField();
  return (
    <p
      data-slot="field-description"
      id={descriptionId}
      className={cn('text-[0.8rem] text-muted-foreground', className)}
      {...props}
    />
  );
}

function FieldError({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { errorId, error } = useField();
  const message = children ?? error;
  if (!message) return null;

  return (
    <p
      data-slot="field-error"
      id={errorId}
      role="alert"
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    >
      {message}
    </p>
  );
}

export { Field, FieldLabel, FieldDescription, FieldError, useField };

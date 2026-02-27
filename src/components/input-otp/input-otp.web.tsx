import * as React from 'react';

import { cn } from '../../utils/cn';

interface InputOTPContextValue {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  disabled?: boolean;
}

const InputOTPContext = React.createContext<InputOTPContextValue | null>(null);

function useInputOTPContext() {
  const context = React.useContext(InputOTPContext);
  if (!context) {
    throw new Error('InputOTP components must be used within InputOTP');
  }
  return context;
}

interface InputOTPProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  maxLength: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
}

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  (
    {
      className,
      maxLength,
      value,
      onChange,
      disabled,
      autoFocus,
      children,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value
        .replace(/[^0-9]/g, '')
        .slice(0, maxLength);
      onChange(newValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !value) {
        e.preventDefault();
      }
    };

    const handleContainerClick = () => {
      inputRef.current?.focus();
    };

    return (
      <InputOTPContext.Provider
        value={{ value, onChange, maxLength, disabled }}
      >
        <div
          ref={ref}
          data-slot='input-otp'
          className={cn('flex items-center gap-2', className)}
          onClick={handleContainerClick}
          {...props}
        >
          <input
            ref={inputRef}
            type='text'
            inputMode='numeric'
            pattern='[0-9]*'
            autoComplete='one-time-code'
            value={value}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className='sr-only'
            maxLength={maxLength}
          />
          {children}
        </div>
      </InputOTPContext.Provider>
    );
  },
);
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot='input-otp-group'
    className={cn('flex items-center', className)}
    {...props}
  />
));
InputOTPGroup.displayName = 'InputOTPGroup';

interface InputOTPSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
}

const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ index, className, ...props }, ref) => {
    const { value, disabled } = useInputOTPContext();
    const char = value[index] || '';
    const isActive = value.length === index;

    return (
      <div
        ref={ref}
        data-slot='input-otp-slot'
        className={cn(
          'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
          isActive && 'z-10 ring-2 ring-ring ring-offset-background',
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
        {...props}
      >
        {char}
        {isActive && (
          <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
            <div className='h-4 w-px animate-pulse bg-foreground duration-1000' />
          </div>
        )}
      </div>
    );
  },
);
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' data-slot='input-otp-separator' className='mx-2' {...props}>
    <div className='h-1 w-1 rounded-full bg-border' />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { XIcon } from 'lucide-react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { toastVariants } from './toast.shared';

function ToastProvider({
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Provider>) {
  return <ToastPrimitive.Provider data-slot="toast-provider" {...props} />;
}

function ToastViewport({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        className,
      )}
      {...props}
    />
  );
}

function Toast({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Root> &
  VariantProps<typeof toastVariants>) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      className={cn(
        toastVariants({ variant }),
        'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
        className,
      )}
      {...props}
    />
  );
}

function ToastAction({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Action>) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      className={cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
        className,
      )}
      {...props}
    />
  );
}

function ToastClose({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Close>) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      className={cn(
        'text-foreground/50 hover:text-foreground absolute right-1 top-1 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-destructive-foreground/70 group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive/50',
        className,
      )}
      toast-close=""
      {...props}
    >
      <XIcon className="size-4" />
    </ToastPrimitive.Close>
  );
}

function ToastTitle({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn('text-sm font-semibold [&+div]:text-xs', className)}
      {...props}
    />
  );
}

function ToastDescription({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Description>) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn('text-sm opacity-90', className)}
      {...props}
    />
  );
}

// Toast hook and imperative API
type ToastData = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: VariantProps<typeof toastVariants>['variant'];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const TOAST_LIMIT = 3;

type ToastAction =
  | { type: 'ADD'; toast: ToastData }
  | { type: 'UPDATE'; toast: Partial<ToastData> & Pick<ToastData, 'id'> }
  | { type: 'DISMISS'; toastId: string }
  | { type: 'REMOVE'; toastId: string };

let toastCount = 0;

function genId() {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER;
  return toastCount.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: 'REMOVE', toastId });
  }, 1000000);

  toastTimeouts.set(toastId, timeout);
}

function reducer(state: ToastData[], action: ToastAction): ToastData[] {
  switch (action.type) {
    case 'ADD':
      return [action.toast, ...state].slice(0, TOAST_LIMIT);
    case 'UPDATE':
      return state.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t,
      );
    case 'DISMISS': {
      const { toastId } = action;
      addToRemoveQueue(toastId);
      return state.map((t) =>
        t.id === toastId ? { ...t, open: false } : t,
      );
    }
    case 'REMOVE':
      return state.filter((t) => t.id !== action.toastId);
  }
}

const listeners: Array<(state: ToastData[]) => void> = [];
let memoryState: ToastData[] = [];

function dispatch(action: ToastAction) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

type ToastInput = Omit<ToastData, 'id'>;

function toast(input: ToastInput) {
  const id = genId();
  const dismiss = () => dispatch({ type: 'DISMISS', toastId: id });

  dispatch({
    type: 'ADD',
    toast: {
      ...input,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update: (data: Partial<ToastData>) => dispatch({ type: 'UPDATE', toast: { ...data, id } }) };
}

function useToast() {
  const [state, setState] = React.useState<ToastData[]>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    toasts: state,
    toast,
    dismiss: (toastId: string) => dispatch({ type: 'DISMISS', toastId }),
  };
}

function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, variant, ...props }) => (
        <Toast key={id} variant={variant} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  Toaster,
  useToast,
  toast,
};
export type { ToastData };
export type { ToastVariant } from './toast.shared';

import * as React from 'react';
import { View, Text, Pressable, Animated, Dimensions } from 'react-native';

import { cn } from '../../utils/cn';

type ToastData = {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
};

type ToastContextType = {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, 'id'>) => void;
  dismissToast: (id: string) => void;
};

const ToastContext = React.createContext<ToastContextType>({
  toasts: [],
  addToast: () => {},
  dismissToast: () => {},
});

let toastCounter = 0;

function ToastProvider({ children }: { children?: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);

  const addToast = React.useCallback((input: Omit<ToastData, 'id'>) => {
    const id = String(++toastCounter);
    setToasts((prev) => [...prev, { ...input, id }]);
    const duration = input.duration || 5000;
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const dismissToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

function ToastViewport({ className }: { className?: string }) {
  const { toasts, dismissToast } = React.useContext(ToastContext);

  if (toasts.length === 0) return null;

  return (
    <View className={cn('absolute bottom-4 left-4 right-4 gap-2', className)}>
      {toasts.map((t) => (
        <Pressable
          key={t.id}
          onPress={() => dismissToast(t.id)}
          className={cn(
            'rounded-md border border-border p-4 shadow-lg',
            t.variant === 'destructive' && 'bg-destructive border-destructive',
            t.variant === 'success' && 'bg-emerald-50 border-emerald-500/30 dark:bg-emerald-950/50',
            (!t.variant || t.variant === 'default') && 'bg-background',
          )}
        >
          {t.title && (
            <Text
              className={cn(
                'text-sm font-semibold',
                t.variant === 'destructive' ? 'text-destructive-foreground' : 'text-foreground',
              )}
            >
              {t.title}
            </Text>
          )}
          {t.description && (
            <Text
              className={cn(
                'text-sm opacity-90',
                t.variant === 'destructive' ? 'text-destructive-foreground' : 'text-foreground',
              )}
            >
              {t.description}
            </Text>
          )}
        </Pressable>
      ))}
    </View>
  );
}

function Toast({ children, className }: { children?: React.ReactNode; className?: string; variant?: string }) {
  return <View className={cn('rounded-md border p-4', className)}>{children}</View>;
}

function ToastTitle({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <Text className={cn('text-sm font-semibold text-foreground', className)}>{children}</Text>;
}

function ToastDescription({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <Text className={cn('text-sm text-foreground opacity-90', className)}>{children}</Text>;
}

function ToastClose({ className, onPress }: { className?: string; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} className={cn('absolute right-1 top-1 p-1', className)} accessibilityRole="button">
      <Text className="text-foreground/50 text-xs">✕</Text>
    </Pressable>
  );
}

function ToastAction({ children, className, onPress }: { children?: React.ReactNode; className?: string; altText?: string; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} className={cn('rounded-md border px-3 py-1', className)} accessibilityRole="button">
      {typeof children === 'string' ? <Text className="text-sm font-medium">{children}</Text> : children}
    </Pressable>
  );
}

function useToast() {
  const context = React.useContext(ToastContext);
  return {
    toasts: context.toasts,
    toast: context.addToast,
    dismiss: context.dismissToast,
  };
}

function toast(input: Omit<ToastData, 'id'>) {
  console.warn('toast() called outside of ToastProvider. Wrap your app with <ToastProvider>.');
}

function Toaster() {
  return <ToastViewport />;
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

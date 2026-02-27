import * as React from 'react';
import { View, Text, Pressable, Animated } from 'react-native';

import { cn } from '../../utils/cn';

type ToastData = {
  id: string;
  title?: string;
  description?: string;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
};

type SonnerContextType = {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, 'id'>) => void;
  removeToast: (id: string) => void;
};

const SonnerContext = React.createContext<SonnerContextType>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

let sonnerCounter = 0;

function SonnerToaster({ children }: { children?: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);

  const addToast = React.useCallback((input: Omit<ToastData, 'id'>) => {
    const id = String(++sonnerCounter);
    setToasts((prev) => [...prev, { ...input, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, input.duration || 4000);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <SonnerContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {toasts.length > 0 && (
        <View className="absolute bottom-4 left-4 right-4 gap-2">
          {toasts.map((t) => (
            <Pressable
              key={t.id}
              onPress={() => removeToast(t.id)}
              className={cn(
                'rounded-md border border-border bg-background p-4 shadow-lg',
                t.type === 'error' && 'bg-destructive border-destructive',
                t.type === 'success' && 'bg-emerald-50 border-emerald-500/30 dark:bg-emerald-950/50',
              )}
            >
              {t.title && (
                <Text className={cn('text-sm font-semibold', t.type === 'error' ? 'text-destructive-foreground' : 'text-foreground')}>
                  {t.title}
                </Text>
              )}
              {t.description && (
                <Text className={cn('text-sm', t.type === 'error' ? 'text-destructive-foreground' : 'text-muted-foreground')}>
                  {t.description}
                </Text>
              )}
            </Pressable>
          ))}
        </View>
      )}
    </SonnerContext.Provider>
  );
}

function sonnerToast(titleOrOpts: string | Omit<ToastData, 'id'>) {
  console.warn('sonnerToast() called outside SonnerToaster. Wrap your app with <SonnerToaster>.');
}

export { SonnerToaster, sonnerToast };

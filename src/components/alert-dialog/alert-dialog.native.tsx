import * as React from 'react';
import { Modal, Pressable, View, Text } from 'react-native';

import { cn } from '../../utils/cn';
import { buttonVariants } from '../button/button.shared';

type AlertDialogContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AlertDialogContext = React.createContext<AlertDialogContextType>({
  open: false,
  onOpenChange: () => {},
});

function AlertDialog({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange: controlledOnOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const onOpenChange = React.useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setInternalOpen(next);
      controlledOnOpenChange?.(next);
    },
    [controlledOpen, controlledOnOpenChange],
  );

  return (
    <AlertDialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </AlertDialogContext.Provider>
  );
}

function AlertDialogTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { onOpenChange } = React.useContext(AlertDialogContext);
  return (
    <Pressable
      onPress={() => onOpenChange(true)}
      className={className}
      accessibilityRole='button'
    >
      {children}
    </Pressable>
  );
}

function AlertDialogPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

function AlertDialogOverlay({ className }: { className?: string }) {
  return null;
}

function AlertDialogContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open, onOpenChange } = React.useContext(AlertDialogContext);
  if (!open) return null;

  return (
    <Modal
      visible={open}
      transparent
      animationType='fade'
      onRequestClose={() => onOpenChange(false)}
    >
      <View className='flex-1 items-center justify-center bg-black/50 p-4'>
        <View
          className={cn(
            'bg-background w-full max-w-lg gap-4 rounded-lg border border-border p-6 shadow-lg',
            className,
          )}
          accessibilityRole='alert'
          accessibilityViewIsModal
        >
          {children}
        </View>
      </View>
    </Modal>
  );
}

function AlertDialogHeader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('gap-2', className)}>
      {children}
    </View>
  );
}

function AlertDialogFooter({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-row justify-end gap-2', className)}>
      {children}
    </View>
  );
}

function AlertDialogTitle({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Text className={cn('text-lg font-semibold text-foreground', className)}>
      {children}
    </Text>
  );
}

function AlertDialogDescription({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Text className={cn('text-muted-foreground text-sm', className)}>
      {children}
    </Text>
  );
}

function AlertDialogAction({
  className,
  children,
  onPress,
}: {
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(buttonVariants(), className)}
      accessibilityRole='button'
    >
      <Text className='text-primary-foreground text-sm font-medium'>{children}</Text>
    </Pressable>
  );
}

function AlertDialogCancel({
  className,
  children,
  onPress,
}: {
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}) {
  const { onOpenChange } = React.useContext(AlertDialogContext);
  return (
    <Pressable
      onPress={() => {
        onPress?.();
        onOpenChange(false);
      }}
      className={cn(buttonVariants({ variant: 'outline' }), className)}
      accessibilityRole='button'
    >
      <Text className='text-foreground text-sm font-medium'>{children}</Text>
    </Pressable>
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

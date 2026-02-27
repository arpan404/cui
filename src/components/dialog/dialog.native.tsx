import * as React from 'react';
import { Modal, Pressable, View, Text } from 'react-native';

import { cn } from '../../utils/cn';

type DialogContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DialogContext = React.createContext<DialogContextType>({
  open: false,
  onOpenChange: () => {},
});

function useDialogContext() {
  return React.useContext(DialogContext);
}

function Dialog({
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
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

function DialogTrigger({
  className,
  children,
  asChild,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}) {
  const { onOpenChange } = useDialogContext();
  return (
    <Pressable
      onPress={() => onOpenChange(true)}
      className={className}
      accessibilityRole='button'
      {...props}
    >
      {children}
    </Pressable>
  );
}

function DialogPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

function DialogClose({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { onOpenChange } = useDialogContext();
  return (
    <Pressable
      onPress={() => onOpenChange(false)}
      className={className}
      accessibilityRole='button'
      accessibilityLabel='Close'
      {...props}
    >
      {children}
    </Pressable>
  );
}

function DialogOverlay({ className }: { className?: string }) {
  return null; // Overlay is handled by the Modal component
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
}: {
  className?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
}) {
  const { open, onOpenChange } = useDialogContext();
  if (!open) return null;

  return (
    <Modal
      visible={open}
      transparent
      animationType='fade'
      onRequestClose={() => onOpenChange(false)}
    >
      <View className='flex-1 items-center justify-center bg-black/50 p-4'>
        <Pressable
          className='absolute inset-0'
          onPress={() => onOpenChange(false)}
          accessibilityLabel='Close dialog'
        />
        <View
          className={cn(
            'bg-background w-full max-w-lg gap-4 rounded-lg border border-border p-6 shadow-lg',
            className,
          )}
          accessibilityRole='none'
          accessibilityViewIsModal
        >
          {children}
          {showCloseButton && (
            <Pressable
              onPress={() => onOpenChange(false)}
              className='absolute top-3 right-3 p-1 opacity-70'
              accessibilityRole='button'
              accessibilityLabel='Close'
            >
              <Text className='text-foreground text-lg'>✕</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
}

function DialogHeader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('gap-2 pr-8', className)}>
      {children}
    </View>
  );
}

function DialogFooter({
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

function DialogTitle({
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

function DialogDescription({
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

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};

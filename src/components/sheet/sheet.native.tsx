import * as React from 'react';
import { Modal, Pressable, View, Text } from 'react-native';

import { cn } from '../../utils/cn';

type SheetContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SheetContext = React.createContext<SheetContextType>({
  open: false,
  onOpenChange: () => {},
});

function Sheet({
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
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

function SheetTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { onOpenChange } = React.useContext(SheetContext);
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

function SheetClose({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { onOpenChange } = React.useContext(SheetContext);
  return (
    <Pressable
      onPress={() => onOpenChange(false)}
      className={className}
      accessibilityRole='button'
      accessibilityLabel='Close'
    >
      {children}
    </Pressable>
  );
}

function SheetContent({
  className,
  children,
  side = 'right',
}: {
  className?: string;
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  const { open, onOpenChange } = React.useContext(SheetContext);
  if (!open) return null;

  const sideClasses = {
    right: 'absolute right-0 top-0 bottom-0 w-3/4 max-w-sm border-l border-border',
    left: 'absolute left-0 top-0 bottom-0 w-3/4 max-w-sm border-r border-border',
    top: 'absolute top-0 left-0 right-0 border-b border-border',
    bottom: 'absolute bottom-0 left-0 right-0 border-t border-border',
  };

  return (
    <Modal
      visible={open}
      transparent
      animationType='slide'
      onRequestClose={() => onOpenChange(false)}
    >
      <View className='flex-1'>
        <Pressable
          className='absolute inset-0 bg-black/50'
          onPress={() => onOpenChange(false)}
          accessibilityLabel='Close sheet'
        />
        <View
          className={cn(
            'bg-background flex flex-col gap-4 shadow-lg',
            sideClasses[side],
            className,
          )}
          accessibilityViewIsModal
        >
          {children}
          <Pressable
            onPress={() => onOpenChange(false)}
            className='absolute top-4 right-4 p-1 opacity-70'
            accessibilityRole='button'
            accessibilityLabel='Close'
          >
            <Text className='text-foreground'>✕</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

function SheetHeader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('gap-1.5 p-4', className)}>
      {children}
    </View>
  );
}

function SheetFooter({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('mt-auto gap-2 p-4', className)}>
      {children}
    </View>
  );
}

function SheetTitle({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Text className={cn('text-foreground font-semibold', className)}>
      {children}
    </Text>
  );
}

function SheetDescription({
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
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};

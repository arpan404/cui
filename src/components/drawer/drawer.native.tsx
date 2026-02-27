import * as React from 'react';
import { Modal, Pressable, View, Text } from 'react-native';

import { cn } from '../../utils/cn';

type DrawerContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DrawerContext = React.createContext<DrawerContextType>({
  open: false,
  onOpenChange: () => {},
});

function Drawer({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange: controlledOnOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  shouldScaleBackground?: boolean;
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
    <DrawerContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DrawerContext.Provider>
  );
}

function DrawerTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { onOpenChange } = React.useContext(DrawerContext);
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

function DrawerPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

function DrawerClose({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { onOpenChange } = React.useContext(DrawerContext);
  return (
    <Pressable
      onPress={() => onOpenChange(false)}
      className={className}
      accessibilityRole='button'
    >
      {children}
    </Pressable>
  );
}

function DrawerOverlay({ className }: { className?: string }) {
  return null;
}

function DrawerContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open, onOpenChange } = React.useContext(DrawerContext);
  if (!open) return null;

  return (
    <Modal
      visible={open}
      transparent
      animationType='slide'
      onRequestClose={() => onOpenChange(false)}
    >
      <View className='flex-1'>
        <Pressable
          className='absolute inset-0 bg-black/80'
          onPress={() => onOpenChange(false)}
          accessibilityLabel='Close drawer'
        />
        <View
          className={cn(
            'absolute inset-x-0 bottom-0 bg-background rounded-t-xl border-t border-border',
            className,
          )}
          accessibilityViewIsModal
        >
          <View className='mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted' />
          {children}
        </View>
      </View>
    </Modal>
  );
}

function DrawerHeader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('gap-1.5 p-4 items-center', className)}>
      {children}
    </View>
  );
}

function DrawerFooter({
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

function DrawerTitle({
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

function DrawerDescription({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Text className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </Text>
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};

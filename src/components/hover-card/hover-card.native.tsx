import * as React from 'react';
import { Modal, Pressable, View } from 'react-native';

import { cn } from '../../utils/cn';

type HoverCardContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const HoverCardContext = React.createContext<HoverCardContextType>({
  open: false,
  onOpenChange: () => {},
});

function HoverCard({
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
    <HoverCardContext.Provider value={{ open, onOpenChange }}>
      {children}
    </HoverCardContext.Provider>
  );
}

function HoverCardTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { onOpenChange } = React.useContext(HoverCardContext);
  return (
    <Pressable
      onLongPress={() => onOpenChange(true)}
      className={className}
      accessibilityRole="button"
    >
      {children}
    </Pressable>
  );
}

function HoverCardContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  align?: string;
  sideOffset?: number;
}) {
  const { open, onOpenChange } = React.useContext(HoverCardContext);
  if (!open) return null;

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={() => onOpenChange(false)}
    >
      <Pressable
        className="flex-1 items-center justify-center bg-black/20"
        onPress={() => onOpenChange(false)}
      >
        <View
          className={cn(
            'bg-popover w-64 rounded-md border border-border p-4 shadow-lg',
            className,
          )}
        >
          {children}
        </View>
      </Pressable>
    </Modal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };

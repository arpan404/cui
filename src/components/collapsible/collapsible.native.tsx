import * as React from 'react';
import { Pressable, View } from 'react-native';

import { cn } from '../../utils/cn';

type CollapsibleContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
};

const CollapsibleContext = React.createContext<CollapsibleContextType>({
  open: false,
  onOpenChange: () => {},
});

function Collapsible({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange: controlledOnOpenChange,
  disabled,
  className,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  className?: string;
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
    <CollapsibleContext.Provider value={{ open, onOpenChange, disabled }}>
      <View className={className}>
        {children}
      </View>
    </CollapsibleContext.Provider>
  );
}

function CollapsibleTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open, onOpenChange, disabled } = React.useContext(CollapsibleContext);
  return (
    <Pressable
      onPress={() => !disabled && onOpenChange(!open)}
      disabled={disabled}
      className={cn(disabled && 'opacity-50', className)}
      accessibilityRole='button'
      accessibilityState={{ expanded: open }}
    >
      {children}
    </Pressable>
  );
}

function CollapsibleContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = React.useContext(CollapsibleContext);
  if (!open) return null;

  return (
    <View className={className}>
      {children}
    </View>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

import * as React from 'react';
import { Modal, Pressable, View, Text } from 'react-native';

import { cn } from '../../utils/cn';

type ContextMenuContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ContextMenuContext = React.createContext<ContextMenuContextType>({
  open: false,
  onOpenChange: () => {},
});

function ContextMenu({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <ContextMenuContext.Provider value={{ open, onOpenChange: setOpen }}>
      {children}
    </ContextMenuContext.Provider>
  );
}

function ContextMenuTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { onOpenChange } = React.useContext(ContextMenuContext);
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

function ContextMenuContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open, onOpenChange } = React.useContext(ContextMenuContext);
  if (!open) return null;

  return (
    <Modal visible={open} transparent animationType="fade" onRequestClose={() => onOpenChange(false)}>
      <Pressable className="flex-1 items-center justify-center bg-black/20" onPress={() => onOpenChange(false)}>
        <View className={cn('bg-popover min-w-[200px] max-w-[300px] rounded-md border border-border p-1 shadow-lg', className)}>
          {children}
        </View>
      </Pressable>
    </Modal>
  );
}

function ContextMenuGroup({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <View className={className}>{children}</View>;
}

function ContextMenuItem({
  className, children, onPress, disabled, variant = 'default', inset,
}: {
  className?: string; children?: React.ReactNode; onPress?: () => void;
  disabled?: boolean; variant?: 'default' | 'destructive'; inset?: boolean;
}) {
  const { onOpenChange } = React.useContext(ContextMenuContext);
  return (
    <Pressable
      onPress={() => { onPress?.(); onOpenChange(false); }}
      disabled={disabled}
      className={cn('flex-row items-center gap-2 rounded-sm px-2 py-1.5', variant === 'destructive' && 'bg-destructive/10', disabled && 'opacity-50', inset && 'pl-8', className)}
      accessibilityRole="menuitem"
    >
      {typeof children === 'string' ? (
        <Text className={cn('text-sm text-popover-foreground', variant === 'destructive' && 'text-destructive')}>{children}</Text>
      ) : children}
    </Pressable>
  );
}

function ContextMenuCheckboxItem({
  className, children, checked, onCheckedChange, disabled,
}: {
  className?: string; children?: React.ReactNode; checked?: boolean;
  onCheckedChange?: (checked: boolean) => void; disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={() => onCheckedChange?.(!checked)}
      disabled={disabled}
      className={cn('flex-row items-center gap-2 rounded-sm py-1.5 pr-2 pl-8', disabled && 'opacity-50', className)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      <View className="absolute left-2 h-3.5 w-3.5 items-center justify-center">
        {checked && <Text className="text-foreground text-xs">✓</Text>}
      </View>
      {typeof children === 'string' ? <Text className="text-sm text-popover-foreground">{children}</Text> : children}
    </Pressable>
  );
}

function ContextMenuRadioGroup({ className, children }: { className?: string; children?: React.ReactNode; value?: string; onValueChange?: (v: string) => void }) {
  return <View className={className}>{children}</View>;
}

function ContextMenuRadioItem({ className, children, disabled }: { className?: string; children?: React.ReactNode; value?: string; disabled?: boolean }) {
  return (
    <Pressable disabled={disabled} className={cn('flex-row items-center gap-2 rounded-sm py-1.5 pr-2 pl-8', disabled && 'opacity-50', className)} accessibilityRole="radio">
      {typeof children === 'string' ? <Text className="text-sm text-popover-foreground">{children}</Text> : children}
    </Pressable>
  );
}

function ContextMenuLabel({ className, children, inset }: { className?: string; children?: React.ReactNode; inset?: boolean }) {
  return <Text className={cn('px-2 py-1.5 text-sm font-medium text-foreground', inset && 'pl-8', className)}>{children}</Text>;
}

function ContextMenuSeparator({ className }: { className?: string }) {
  return <View className={cn('bg-border -mx-1 my-1 h-px', className)} />;
}

function ContextMenuShortcut({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <Text className={cn('text-muted-foreground ml-auto text-xs', className)}>{children}</Text>;
}

function ContextMenuSub({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

function ContextMenuSubTrigger({ className, children, inset }: { className?: string; children?: React.ReactNode; inset?: boolean }) {
  return (
    <Pressable className={cn('flex-row items-center gap-2 rounded-sm px-2 py-1.5', inset && 'pl-8', className)} accessibilityRole="menuitem">
      {typeof children === 'string' ? <Text className="text-sm text-popover-foreground">{children}</Text> : children}
      <Text className="ml-auto text-muted-foreground text-xs">›</Text>
    </Pressable>
  );
}

function ContextMenuSubContent({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <View className={cn('p-1', className)}>{children}</View>;
}

export {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuGroup,
  ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioGroup,
  ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator,
  ContextMenuShortcut, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent,
};

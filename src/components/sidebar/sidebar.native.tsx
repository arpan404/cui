import * as React from 'react';
import { View, Text, Pressable, Modal, ScrollView } from 'react-native';

import { cn } from '../../utils/cn';
import { Button } from '../button/button.native';
import { Input } from '../input/input.native';
import { Separator } from '../separator/separator.native';
import { Skeleton } from '../skeleton/skeleton.native';

// On native, the sidebar is always drawer mode.
// No fixed desktop sidebar, no cookie persistence, no keyboard shortcuts.

type SidebarContextProps = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }
  return context;
}

function SidebarProvider({
  defaultOpen = false,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  children,
}: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}) {
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (setOpenProp) {
        setOpenProp(value);
      } else {
        _setOpen(value);
      }
    },
    [setOpenProp],
  );

  const toggleSidebar = React.useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state: open ? 'expanded' : 'collapsed',
      open,
      setOpen,
      openMobile: open,
      setOpenMobile: setOpen,
      isMobile: true,
      toggleSidebar,
    }),
    [open, setOpen, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <View className={cn('flex-1', className)}>
        {children}
      </View>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  className,
  children,
}: {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
  className?: string;
  children?: React.ReactNode;
}) {
  const { open, setOpen } = useSidebar();

  return (
    <Modal
      visible={open}
      transparent
      animationType='slide'
      onRequestClose={() => setOpen(false)}
    >
      <View className='flex-1 flex-row'>
        <View
          className={cn(
            'w-72 bg-background border-r border-border flex-col h-full',
            className,
          )}
        >
          {children}
        </View>
        <Pressable
          className='flex-1'
          onPress={() => setOpen(false)}
        />
      </View>
    </Modal>
  );
}

function SidebarTrigger({
  className,
  onPress,
}: {
  className?: string;
  onPress?: () => void;
}) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant='ghost'
      size='icon'
      className={cn('size-7', className)}
      onPress={() => {
        onPress?.();
        toggleSidebar();
      }}
    >
      <Text className='text-foreground text-lg'>☰</Text>
    </Button>
  );
}

function SidebarRail({ className }: { className?: string }) {
  // No-op on native — rail is a desktop concept
  return null;
}

function SidebarInset({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-1', className)}>
      {children}
    </View>
  );
}

function SidebarInput({
  className,
  ...props
}: {
  className?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}) {
  return (
    <Input
      className={cn('h-8', className)}
      {...props}
    />
  );
}

function SidebarHeader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-col gap-2 p-2', className)}>
      {children}
    </View>
  );
}

function SidebarFooter({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-col gap-2 p-2', className)}>
      {children}
    </View>
  );
}

function SidebarSeparator({ className }: { className?: string }) {
  return (
    <Separator className={cn('mx-2', className)} />
  );
}

function SidebarContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <ScrollView
      className={cn('flex-1', className)}
      showsVerticalScrollIndicator={false}
    >
      <View className='flex-col gap-2'>
        {children}
      </View>
    </ScrollView>
  );
}

function SidebarGroup({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-col p-2', className)}>
      {children}
    </View>
  );
}

function SidebarGroupLabel({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}) {
  return (
    <View className={cn('h-8 flex-row items-center px-2', className)}>
      {typeof children === 'string' ? (
        <Text className='text-xs font-medium text-muted-foreground'>
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}

function SidebarGroupAction({
  className,
  children,
  onPress,
}: {
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  asChild?: boolean;
}) {
  return (
    <Pressable
      className={cn(
        'absolute top-3.5 right-3 w-5 h-5 items-center justify-center rounded-md',
        className,
      )}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}

function SidebarGroupContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('w-full', className)}>
      {children}
    </View>
  );
}

function SidebarMenu({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-col gap-1', className)}>
      {children}
    </View>
  );
}

function SidebarMenuItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('relative', className)}>
      {children}
    </View>
  );
}

function SidebarMenuButton({
  isActive = false,
  className,
  children,
  onPress,
}: {
  asChild?: boolean;
  isActive?: boolean;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  tooltip?: string | Record<string, unknown>;
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <Pressable
      className={cn(
        'flex-row items-center gap-2 rounded-md p-2 h-8',
        isActive && 'bg-accent',
        className,
      )}
      onPress={onPress}
    >
      {typeof children === 'string' ? (
        <Text className={cn(
          'text-sm text-foreground',
          isActive && 'font-medium',
        )}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

function SidebarMenuAction({
  className,
  children,
  onPress,
}: {
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  return (
    <Pressable
      className={cn(
        'absolute top-1.5 right-1 w-5 h-5 items-center justify-center rounded-md',
        className,
      )}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}

function SidebarMenuBadge({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View
      className={cn(
        'absolute right-1 top-1.5 h-5 min-w-5 items-center justify-center rounded-md px-1',
        className,
      )}
    >
      {typeof children === 'string' ? (
        <Text className='text-xs font-medium text-muted-foreground'>
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
}: {
  className?: string;
  showIcon?: boolean;
}) {
  return (
    <View className={cn('flex-row h-8 items-center gap-2 px-2', className)}>
      {showIcon && <Skeleton className='size-4 rounded-md' />}
      <Skeleton className='h-4 flex-1 rounded-md' />
    </View>
  );
}

function SidebarMenuSub({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View
      className={cn(
        'ml-3.5 flex-col gap-1 border-l border-border pl-2.5 py-0.5',
        className,
      )}
    >
      {children}
    </View>
  );
}

function SidebarMenuSubItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('relative', className)}>
      {children}
    </View>
  );
}

function SidebarMenuSubButton({
  isActive = false,
  size = 'md',
  className,
  children,
  onPress,
}: {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <Pressable
      className={cn(
        'flex-row items-center gap-2 rounded-md px-2 h-7',
        isActive && 'bg-accent',
        className,
      )}
      onPress={onPress}
    >
      {typeof children === 'string' ? (
        <Text className={cn(
          size === 'sm' ? 'text-xs' : 'text-sm',
          'text-foreground',
          isActive && 'font-medium',
        )}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};

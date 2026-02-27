import * as React from 'react';
import { View, Text, TextInput, FlatList, Pressable, Modal } from 'react-native';

import { cn } from '../../utils/cn';

type CommandContextType = {
  search: string;
  onSearchChange: (value: string) => void;
  filter?: (value: string, search: string) => boolean;
};

const CommandContext = React.createContext<CommandContextType>({
  search: '',
  onSearchChange: () => {},
});

function Command({
  className,
  children,
  filter,
}: {
  className?: string;
  children?: React.ReactNode;
  filter?: (value: string, search: string) => boolean;
}) {
  const [search, setSearch] = React.useState('');

  return (
    <CommandContext.Provider value={{ search, onSearchChange: setSearch, filter }}>
      <View
        className={cn(
          'bg-popover rounded-md overflow-hidden',
          className,
        )}
      >
        {children}
      </View>
    </CommandContext.Provider>
  );
}

function CommandDialog({
  open,
  onOpenChange,
  title = 'Command Palette',
  children,
  className,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <Modal
      visible={open}
      transparent
      animationType='fade'
      onRequestClose={() => onOpenChange?.(false)}
    >
      <View className='flex-1 items-center justify-center bg-black/50 p-4'>
        <Pressable
          className='absolute inset-0'
          onPress={() => onOpenChange?.(false)}
        />
        <View className={cn('bg-background w-full max-w-lg rounded-lg border border-border shadow-lg', className)}>
          <Command>{children}</Command>
        </View>
      </View>
    </Modal>
  );
}

function CommandInput({
  className,
  placeholder,
  value,
  onValueChange,
}: {
  className?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  const { search, onSearchChange } = React.useContext(CommandContext);
  const currentValue = value !== undefined ? value : search;
  const handleChange = onValueChange || onSearchChange;

  return (
    <View className='flex-row items-center gap-2 border-b border-border px-3 h-11'>
      <Text className='text-muted-foreground text-sm'>⌕</Text>
      <TextInput
        className={cn(
          'flex-1 bg-transparent text-sm text-foreground py-3',
          className,
        )}
        placeholder={placeholder}
        placeholderTextColor='#9ca3af'
        value={currentValue}
        onChangeText={handleChange}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
}

function CommandList({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('max-h-[300px]', className)}>
      {children}
    </View>
  );
}

function CommandEmpty({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('py-6 items-center', className)}>
      <Text className='text-sm text-muted-foreground'>
        {children || 'No results found.'}
      </Text>
    </View>
  );
}

function CommandGroup({
  className,
  heading,
  children,
}: {
  className?: string;
  heading?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('overflow-hidden p-1', className)}>
      {heading && (
        <Text className='text-muted-foreground px-2 py-1.5 text-xs font-medium'>
          {heading}
        </Text>
      )}
      {children}
    </View>
  );
}

function CommandItem({
  className,
  children,
  onSelect,
  disabled,
  value,
}: {
  className?: string;
  children?: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  value?: string;
}) {
  return (
    <Pressable
      onPress={onSelect}
      disabled={disabled}
      className={cn(
        'flex-row items-center gap-2 rounded-sm px-2 py-1.5',
        disabled && 'opacity-50',
        className,
      )}
      accessibilityRole='menuitem'
    >
      {typeof children === 'string' ? (
        <Text className='text-sm text-foreground'>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

function CommandShortcut({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Text className={cn('text-muted-foreground ml-auto text-xs', className)}>
      {children}
    </Text>
  );
}

function CommandSeparator({
  className,
}: {
  className?: string;
}) {
  return <View className={cn('bg-border -mx-1 h-px my-1', className)} />;
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

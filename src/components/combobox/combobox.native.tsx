import * as React from 'react';
import { View, Text, TextInput, Pressable, FlatList, Modal } from 'react-native';

import { cn } from '../../utils/cn';

interface ComboboxOption {
  value: string;
  label: string;
  description?: string;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  className?: string;
}

function Combobox({
  options,
  value,
  onValueChange,
  onSearch,
  placeholder = 'Select option...',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No options found.',
  disabled = false,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const selectedOption = options.find(option => option.value === value);

  const filteredOptions = React.useMemo(() => {
    if (!search) return options;
    const q = search.toLowerCase();
    return options.filter(
      o =>
        o.label.toLowerCase().includes(q) ||
        o.description?.toLowerCase().includes(q),
    );
  }, [options, search]);

  const handleSelect = (optionValue: string) => {
    onValueChange(optionValue === value ? '' : optionValue);
    setOpen(false);
    setSearch('');
  };

  const handleSearchChange = (text: string) => {
    setSearch(text);
    onSearch?.(text);
  };

  return (
    <>
      <Pressable
        onPress={() => !disabled && setOpen(true)}
        className={cn(
          'flex-row items-center justify-between h-10 rounded-md border border-input bg-background px-3',
          disabled && 'opacity-50',
          className,
        )}
        accessibilityRole='button'
      >
        <Text
          className={cn(
            'text-sm flex-1',
            selectedOption ? 'text-foreground' : 'text-muted-foreground',
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Text className='text-muted-foreground text-xs ml-2'>▽</Text>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType='slide'
        onRequestClose={() => setOpen(false)}
      >
        <View className='flex-1 bg-black/50'>
          <Pressable className='flex-1' onPress={() => setOpen(false)} />
          <View className='bg-background rounded-t-xl border-t border-border max-h-[70%]'>
            <View className='flex-row items-center gap-2 border-b border-border px-4 h-12'>
              <Text className='text-muted-foreground text-sm'>⌕</Text>
              <TextInput
                className='flex-1 text-sm text-foreground'
                placeholder={searchPlaceholder}
                placeholderTextColor='#9ca3af'
                value={search}
                onChangeText={handleSearchChange}
                autoCapitalize='none'
                autoCorrect={false}
                autoFocus
              />
            </View>
            {filteredOptions.length === 0 ? (
              <View className='py-6 items-center'>
                <Text className='text-sm text-muted-foreground'>
                  {emptyMessage}
                </Text>
              </View>
            ) : (
              <FlatList
                data={filteredOptions}
                keyExtractor={item => item.value}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => handleSelect(item.value)}
                    className='flex-row items-center gap-2 px-4 py-3'
                  >
                    <Text
                      className={cn(
                        'text-sm w-5',
                        value === item.value
                          ? 'text-primary'
                          : 'text-transparent',
                      )}
                    >
                      ✓
                    </Text>
                    <View className='flex-1'>
                      <Text className='text-sm text-foreground'>
                        {item.label}
                      </Text>
                      {item.description && (
                        <Text className='text-xs text-muted-foreground'>
                          {item.description}
                        </Text>
                      )}
                    </View>
                  </Pressable>
                )}
              />
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

export { Combobox };
export type { ComboboxOption, ComboboxProps };

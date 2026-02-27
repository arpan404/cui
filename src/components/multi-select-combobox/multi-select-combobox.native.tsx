import * as React from 'react';
import { View, Text, TextInput, Pressable, FlatList, Modal } from 'react-native';

import { cn } from '../../utils/cn';

type Option = {
  label: string;
  value: string;
};

interface MultiSelectComboboxProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  maxDisplay?: number;
}

function MultiSelectCombobox({
  options,
  selected,
  onChange,
  placeholder = 'Select items...',
  className,
  maxDisplay = 3,
}: MultiSelectComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const filteredOptions = React.useMemo(() => {
    if (!search) return options;
    const q = search.toLowerCase();
    return options.filter(o => o.label.toLowerCase().includes(q));
  }, [options, search]);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(item => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleRemove = (value: string) => {
    onChange(selected.filter(item => item !== value));
  };

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        className={cn(
          'flex-row items-center justify-between min-h-[40px] rounded-md border border-input bg-background px-3 py-2',
          className,
        )}
      >
        <View className='flex-row flex-wrap gap-1 flex-1'>
          {selected.length === 0 && (
            <Text className='text-sm text-muted-foreground'>{placeholder}</Text>
          )}
          {selected.slice(0, maxDisplay).map(value => (
            <Pressable
              key={value}
              onPress={() => handleRemove(value)}
              className='flex-row items-center bg-secondary rounded-md px-2 py-0.5 mr-1 mb-1'
            >
              <Text className='text-xs text-secondary-foreground'>
                {options.find(o => o.value === value)?.label || value}
              </Text>
              <Text className='text-xs text-muted-foreground ml-1'>✕</Text>
            </Pressable>
          ))}
          {selected.length > maxDisplay && (
            <View className='bg-secondary rounded-md px-2 py-0.5 mr-1 mb-1'>
              <Text className='text-xs text-secondary-foreground'>
                + {selected.length - maxDisplay} more
              </Text>
            </View>
          )}
        </View>
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
                placeholder='Search...'
                placeholderTextColor='#9ca3af'
                value={search}
                onChangeText={setSearch}
                autoCapitalize='none'
                autoCorrect={false}
                autoFocus
              />
            </View>

            {/* Selected count */}
            {selected.length > 0 && (
              <View className='flex-row items-center justify-between px-4 py-2 border-b border-border'>
                <Text className='text-xs text-muted-foreground'>
                  {selected.length} selected
                </Text>
                <Pressable onPress={() => onChange([])}>
                  <Text className='text-xs text-primary'>Clear all</Text>
                </Pressable>
              </View>
            )}

            {filteredOptions.length === 0 ? (
              <View className='py-6 items-center'>
                <Text className='text-sm text-muted-foreground'>
                  No item found.
                </Text>
              </View>
            ) : (
              <FlatList
                data={filteredOptions}
                keyExtractor={item => item.value}
                renderItem={({ item }) => {
                  const isSelected = selected.includes(item.value);
                  return (
                    <Pressable
                      onPress={() => handleSelect(item.value)}
                      className='flex-row items-center gap-3 px-4 py-3'
                    >
                      <View
                        className={cn(
                          'h-4 w-4 items-center justify-center rounded-sm border border-primary',
                          isSelected
                            ? 'bg-primary'
                            : 'bg-transparent',
                        )}
                      >
                        {isSelected && (
                          <Text className='text-primary-foreground text-xs'>✓</Text>
                        )}
                      </View>
                      <Text className='text-sm text-foreground flex-1'>
                        {item.label}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            )}

            <View className='flex-row justify-end p-3 border-t border-border'>
              <Pressable
                onPress={() => {
                  setOpen(false);
                  setSearch('');
                }}
                className='px-4 py-2 bg-primary rounded-md'
              >
                <Text className='text-sm text-primary-foreground'>Done</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export { MultiSelectCombobox };
export type { Option as MultiSelectOption, MultiSelectComboboxProps };

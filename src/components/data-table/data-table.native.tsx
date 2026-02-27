import * as React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

import { cn } from '../../utils/cn';

interface DataTableColumn<TData> {
  id: string;
  header: string;
  accessorKey?: keyof TData;
  cell?: (item: TData) => React.ReactNode;
  width?: number;
}

interface DataTableProps<TData> {
  columns: DataTableColumn<TData>[];
  data: TData[];
  className?: string;
}

function DataTable<TData>({
  columns,
  data,
  className,
}: DataTableProps<TData>) {
  const renderHeader = () => (
    <View className="flex-row border-b border-border bg-muted/50">
      {columns.map((col) => (
        <View
          key={col.id}
          className="px-3 py-2.5"
          style={{ width: col.width || 150 }}
        >
          <Text className="text-sm font-medium text-muted-foreground">
            {col.header}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderRow = ({ item, index }: { item: TData; index: number }) => (
    <View
      className={cn(
        'flex-row border-b border-border',
        index % 2 === 0 ? 'bg-background' : 'bg-muted/20',
      )}
    >
      {columns.map((col) => (
        <View
          key={col.id}
          className="px-3 py-2.5"
          style={{ width: col.width || 150 }}
        >
          {col.cell ? (
            col.cell(item)
          ) : (
            <Text className="text-sm text-foreground">
              {col.accessorKey
                ? String(item[col.accessorKey] ?? '')
                : ''}
            </Text>
          )}
        </View>
      ))}
    </View>
  );

  return (
    <View className={cn('rounded-md border border-border overflow-hidden', className)}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {renderHeader()}
          <FlatList
            data={data}
            renderItem={renderRow}
            keyExtractor={(_, index) => String(index)}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
      {data.length === 0 && (
        <View className="h-24 items-center justify-center">
          <Text className="text-sm text-muted-foreground">No results.</Text>
        </View>
      )}
    </View>
  );
}

export { DataTable };
export type { DataTableProps, DataTableColumn };

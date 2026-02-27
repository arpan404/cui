import * as React from 'react';
import { View, Text, ScrollView, type ViewProps, type TextProps } from 'react-native';

import { cn } from '../../utils/cn';

type TableProps = ViewProps & {
  className?: string;
  children?: React.ReactNode;
};

function Table({ className, children, ...props }: TableProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className={cn('w-full', className)} {...props}>
        {children}
      </View>
    </ScrollView>
  );
}

function TableHeader({ className, children, ...props }: TableProps) {
  return (
    <View className={cn('border-b border-border', className)} {...props}>
      {children}
    </View>
  );
}

function TableBody({ className, children, ...props }: TableProps) {
  return (
    <View className={cn('', className)} {...props}>
      {children}
    </View>
  );
}

function TableFooter({ className, children, ...props }: TableProps) {
  return (
    <View
      className={cn('bg-muted/50 border-t border-border', className)}
      {...props}
    >
      {children}
    </View>
  );
}

function TableRow({ className, children, ...props }: TableProps) {
  return (
    <View
      className={cn('flex-row border-b border-border/40', className)}
      {...props}
    >
      {children}
    </View>
  );
}

type TableCellProps = ViewProps & {
  className?: string;
  children?: React.ReactNode;
};

function TableHead({ className, children, ...props }: TableCellProps) {
  return (
    <View
      className={cn('h-10 justify-center px-2', className)}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text className="text-foreground text-sm font-medium">{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

function TableCell({ className, children, ...props }: TableCellProps) {
  return (
    <View className={cn('justify-center p-2', className)} {...props}>
      {typeof children === 'string' ? (
        <Text className="text-sm">{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

type TableCaptionProps = TextProps & {
  className?: string;
  children?: React.ReactNode;
};

function TableCaption({ className, children, ...props }: TableCaptionProps) {
  return (
    <Text
      className={cn('text-muted-foreground mt-4 text-center text-sm', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
export type { TableProps, TableCellProps, TableCaptionProps };

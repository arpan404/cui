import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import { cn } from '../../utils/cn';

function Breadcrumb({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View
      className={className}
      accessibilityRole='header'
      accessibilityLabel='breadcrumb'
    >
      {children}
    </View>
  );
}

function BreadcrumbList({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-row flex-wrap items-center gap-1.5', className)}>
      {children}
    </View>
  );
}

function BreadcrumbItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-row items-center gap-1.5', className)}>
      {children}
    </View>
  );
}

function BreadcrumbLink({
  className,
  children,
  onPress,
}: {
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  href?: string;
}) {
  return (
    <Pressable onPress={onPress} accessibilityRole='link'>
      {typeof children === 'string' ? (
        <Text className={cn('text-sm text-muted-foreground', className)}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

function BreadcrumbPage({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Text className={cn('text-sm text-foreground font-normal', className)}>
      {children}
    </Text>
  );
}

function BreadcrumbSeparator({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('mx-0.5', className)}>
      {children || <Text className='text-muted-foreground text-xs'>›</Text>}
    </View>
  );
}

function BreadcrumbEllipsis({
  className,
}: {
  className?: string;
}) {
  return (
    <View className={cn('h-9 w-9 items-center justify-center', className)}>
      <Text className='text-muted-foreground'>···</Text>
    </View>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

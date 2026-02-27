import * as React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';

import { cn } from '../../utils/cn';

function NavigationMenu({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-row items-center', className)}>
      {children}
    </View>
  );
}

function NavigationMenuList({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('flex-row items-center gap-1', className)}>
      {children}
    </View>
  );
}

function NavigationMenuItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  value?: string;
}) {
  return (
    <View className={cn('relative', className)}>
      {children}
    </View>
  );
}

function NavigationMenuTrigger({
  className,
  children,
  onPress,
}: {
  className?: string;
  children?: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'flex-row items-center rounded-md bg-background px-4 py-2',
        className,
      )}
      accessibilityRole="button"
    >
      {typeof children === 'string' ? (
        <Text className="text-sm font-medium text-foreground">{children}</Text>
      ) : children}
      <Text className="ml-1 text-xs text-muted-foreground">▼</Text>
    </Pressable>
  );
}

function NavigationMenuContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('mt-1 rounded-md border border-border bg-popover p-2 shadow-lg', className)}>
      {children}
    </View>
  );
}

function NavigationMenuLink({
  className,
  children,
  href,
  onPress,
}: {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onPress?: () => void;
  active?: boolean;
}) {
  const handlePress = React.useCallback(() => {
    if (onPress) {
      onPress();
    } else if (href) {
      Linking.openURL(href);
    }
  }, [href, onPress]);

  return (
    <Pressable
      onPress={handlePress}
      className={cn(
        'rounded-md px-4 py-2',
        className,
      )}
      accessibilityRole="link"
    >
      {typeof children === 'string' ? (
        <Text className="text-sm font-medium text-foreground">{children}</Text>
      ) : children}
    </Pressable>
  );
}

function NavigationMenuIndicator({
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <View className={cn('h-0.5 bg-primary', className)} />;
}

function NavigationMenuViewport({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <View className={cn('mt-1', className)}>
      {children}
    </View>
  );
}

const navigationMenuLinkStyle = 'flex-row items-center rounded-md px-4 py-2';

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuLinkStyle,
};

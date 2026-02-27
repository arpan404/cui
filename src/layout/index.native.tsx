import * as React from 'react';
import { View, type ViewProps } from 'react-native';

import { cn } from '../utils/cn';

type SharedLayoutProps = ViewProps & {
  className?: string;
  gap?: string;
};

export function Stack({ className, gap = 'gap-3', ...props }: SharedLayoutProps) {
  return <View className={cn('flex flex-col', gap, className)} {...props} />;
}

export function VStack(props: SharedLayoutProps) {
  return <Stack {...props} />;
}

export function HStack({ className, gap = 'gap-3', ...props }: SharedLayoutProps) {
  return <View className={cn('flex flex-row items-center', gap, className)} {...props} />;
}

export function Screen({ className, ...props }: SharedLayoutProps) {
  return <View className={cn('flex-1 w-full bg-background', className)} {...props} />;
}

export function Container({ className, ...props }: SharedLayoutProps) {
  return <View className={cn('mx-auto w-full px-4', className)} {...props} />;
}

export function Spacer({ className, ...props }: ViewProps & { className?: string }) {
  return <View aria-hidden={true} className={cn('flex-1', className)} {...props} />;
}

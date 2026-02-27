import * as React from 'react';
import { View, Text } from 'react-native';

import { cn } from '../../utils/cn';

function ResizablePanelGroup({
  className,
  children,
  direction = 'horizontal',
}: {
  className?: string;
  children?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
}) {
  return (
    <View
      className={cn(
        'flex-1',
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        className,
      )}
    >
      {children}
    </View>
  );
}

function ResizablePanel({
  className,
  children,
  defaultSize = 50,
}: {
  className?: string;
  children?: React.ReactNode;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}) {
  return (
    <View className={cn('flex-1', className)} style={{ flex: defaultSize / 100 }}>
      {children}
    </View>
  );
}

function ResizableHandle({
  className,
  withHandle,
}: {
  className?: string;
  withHandle?: boolean;
}) {
  return (
    <View
      className={cn(
        'bg-border items-center justify-center',
        'w-px',
        className,
      )}
    >
      {withHandle && (
        <View className="bg-border h-4 w-3 items-center justify-center rounded-sm border border-border">
          <Text className="text-muted-foreground text-[8px]">&#8942;</Text>
        </View>
      )}
    </View>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { cn } from '../../utils/cn';

function ScrollArea({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <ScrollView
      className={cn('relative', className)}
      showsVerticalScrollIndicator
      {...props}
    >
      {children}
    </ScrollView>
  );
}

// ScrollBar is a no-op on native — RN handles scrollbars natively
function ScrollBar(_props: {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}) {
  return null;
}

export { ScrollArea, ScrollBar };

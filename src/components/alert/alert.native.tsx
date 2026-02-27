import * as React from 'react';
import { View, Text, type ViewProps, type TextProps } from 'react-native';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { alertVariants, type AlertVariant } from './alert.shared';

type AlertProps = ViewProps & VariantProps<typeof alertVariants> & {
  className?: string;
  children?: React.ReactNode;
};

function Alert({ className, variant, children, ...props }: AlertProps) {
  return (
    <View
      accessibilityRole="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
    </View>
  );
}

type AlertTitleProps = TextProps & {
  className?: string;
  children?: React.ReactNode;
};

function AlertTitle({ className, children, ...props }: AlertTitleProps) {
  return (
    <Text
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

type AlertDescriptionProps = ViewProps & {
  className?: string;
  children?: React.ReactNode;
};

function AlertDescription({ className, children, ...props }: AlertDescriptionProps) {
  return (
    <View className={cn('text-sm', className)} {...props}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </View>
  );
}

export { Alert, AlertTitle, AlertDescription, alertVariants };
export type { AlertVariant, AlertProps, AlertTitleProps, AlertDescriptionProps };

import * as React from 'react';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../drawer/drawer.native';

// On native, ResponsiveDialog always uses Drawer (bottom sheet)
// since native devices are always considered "mobile"

interface ResponsiveDialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function ResponsiveDialog({
  children,
  open,
  onOpenChange,
}: ResponsiveDialogProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      {children}
    </Drawer>
  );
}

function ResponsiveDialogTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}) {
  return (
    <DrawerTrigger className={className}>
      {children}
    </DrawerTrigger>
  );
}

function ResponsiveDialogContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <DrawerContent className={className}>
      {children}
    </DrawerContent>
  );
}

function ResponsiveDialogHeader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <DrawerHeader className={className}>
      {children}
    </DrawerHeader>
  );
}

function ResponsiveDialogTitle({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <DrawerTitle className={className}>
      {children}
    </DrawerTitle>
  );
}

function ResponsiveDialogDescription({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <DrawerDescription className={className}>
      {children}
    </DrawerDescription>
  );
}

function ResponsiveDialogFooter({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <DrawerFooter className={className}>
      {children}
    </DrawerFooter>
  );
}

export {
  ResponsiveDialog,
  ResponsiveDialogTrigger,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
};

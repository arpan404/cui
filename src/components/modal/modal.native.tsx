import * as React from 'react';
import { Modal as RNModal } from 'react-native';

import { HStack, Stack } from '../../layout/index.native';
import { Div, P } from '../../primitives/index.native';
import { cn } from '../../utils/cn';
import { Button } from '../button/button.native';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card/card.native';
import { Input } from '../input/input.native';
import type { AlertDialogProps, DeleteConfirmDialogProps, ModalProps } from './modal.shared';

export type { ModalProps, AlertDialogProps, DeleteConfirmDialogProps } from './modal.shared';

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  footer,
  children,
  className,
  disableAnimation = false,
}: ModalProps) {
  return (
    <RNModal
      visible={open}
      transparent
      animationType={disableAnimation ? 'none' : 'fade'}
      onRequestClose={() => onOpenChange(false)}
    >
      <Div
        className='flex-1 items-center justify-center bg-black/40 p-4'
        accessibilityViewIsModal={true}
      >
        <Card className={cn('w-full max-w-lg', className)} accessibilityRole='summary'>
          {(title || description) && (
            <CardHeader>
              {title ? <CardTitle>{title}</CardTitle> : null}
              {description ? <CardDescription>{description}</CardDescription> : null}
            </CardHeader>
          )}
          {children ? <CardContent>{children}</CardContent> : null}
          {footer ? <CardFooter>{footer}</CardFooter> : null}
        </Card>
      </Div>
    </RNModal>
  );
}

export function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  destructive = false,
  onConfirm,
  loading = false,
}: AlertDialogProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      footer={
        <HStack className='w-full justify-end'>
          <Button variant='outline' onPress={() => onOpenChange(false)} disabled={loading}>
            {cancelText}
          </Button>
          <Button
            variant={destructive ? 'destructive' : 'default'}
            onPress={() => {
              void onConfirm();
            }}
            loading={loading}
            disabled={loading}
          >
            {confirmText}
          </Button>
        </HStack>
      }
    />
  );
}

export function DeleteConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title = 'Are you sure?',
  description = 'This action cannot be undone. This will permanently delete the item and associated data.',
  itemName,
  confirmText = 'Delete',
  cancelText = 'Cancel',
  requireTypedConfirmation = false,
  confirmationWord = 'DELETE',
  isLoading = false,
}: DeleteConfirmDialogProps) {
  const [typedConfirmation, setTypedConfirmation] = React.useState('');

  React.useEffect(() => {
    if (!open) setTypedConfirmation('');
  }, [open]);

  const disabled =
    isLoading ||
    (requireTypedConfirmation && typedConfirmation.trim() !== confirmationWord);

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      footer={
        <HStack className='w-full justify-end'>
          <Button variant='outline' onPress={() => onOpenChange(false)} disabled={isLoading}>
            {cancelText}
          </Button>
          <Button
            variant='destructive'
            disabled={disabled}
            loading={isLoading}
            onPress={() => {
              void onConfirm();
            }}
          >
            {confirmText}
          </Button>
        </HStack>
      }
    >
      <Stack>
        {itemName ? <P className='text-sm text-muted-foreground'>Item: {itemName}</P> : null}
        {requireTypedConfirmation ? (
          <>
            <P className='text-sm text-muted-foreground'>Type {confirmationWord} to confirm</P>
            <Input
              value={typedConfirmation}
              onChangeText={setTypedConfirmation}
              placeholder={confirmationWord}
            />
          </>
        ) : null}
      </Stack>
    </Modal>
  );
}

import * as React from 'react';

import { HStack, Stack } from '../../layout/index.web';
import { A, Div, Span } from '../../primitives/index.web';
import { cn } from '../../utils/cn';
import { Button } from '../button/button.web';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card/card.web';
import { Input } from '../input/input.web';
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
  const titleId = React.useId();
  const descriptionId = React.useId();
  const modalRef = React.useRef<HTMLDivElement>(null);
  const lastFocusedRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    modalRef.current?.focus();
  }, [open]);

  React.useEffect(() => {
    if (open) return;
    lastFocusedRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <Div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      <button
        aria-label='Close modal overlay'
        className='absolute inset-0 bg-background/65 backdrop-blur-sm'
        onClick={() => onOpenChange(false)}
      />
      <Card
        ref={modalRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={cn(
          'relative z-10 w-full max-w-lg overflow-hidden',
          !disableAnimation && 'animate-in fade-in-0 zoom-in-95 duration-150',
          className,
        )}
        onKeyDown={event => {
          if (event.key === 'Escape') {
            event.preventDefault();
            onOpenChange(false);
          }
        }}
      >
        {(title || description) && (
          <CardHeader>
            {title ? <CardTitle id={titleId}>{title}</CardTitle> : null}
            {description ? (
              <CardDescription id={descriptionId}>{description}</CardDescription>
            ) : null}
          </CardHeader>
        )}
        {children ? <CardContent>{children}</CardContent> : null}
        {footer ? <CardFooter>{footer}</CardFooter> : null}
      </Card>
    </Div>
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
          <Button variant='outline' onClick={() => onOpenChange(false)} disabled={loading}>
            {cancelText}
          </Button>
          <Button
            variant={destructive ? 'destructive' : 'default'}
            onClick={() => {
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
      description={
        <>
          {description}
          {itemName ? <Span className='mt-2 block font-medium text-foreground'>Item: {itemName}</Span> : null}
        </>
      }
      footer={
        <HStack className='w-full justify-end'>
          <Button variant='outline' onClick={() => onOpenChange(false)} disabled={isLoading}>
            {cancelText}
          </Button>
          <Button
            variant='destructive'
            disabled={disabled}
            loading={isLoading}
            onClick={() => {
              void onConfirm();
            }}
          >
            {confirmText}
          </Button>
        </HStack>
      }
    >
      {requireTypedConfirmation ? (
        <Stack gap='gap-2'>
          <Span className='text-sm text-muted-foreground'>
            Type <Span className='font-mono font-semibold text-foreground'>{confirmationWord}</Span> to confirm
          </Span>
          <Input
            value={typedConfirmation}
            onChange={event => setTypedConfirmation(event.target.value)}
            placeholder={confirmationWord}
          />
        </Stack>
      ) : null}
    </Modal>
  );
}

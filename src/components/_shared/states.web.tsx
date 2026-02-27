import * as React from 'react';

import { Stack } from '../../layout/index.web';
import { A, P, Span } from '../../primitives/index.web';
import { cn } from '../../utils/cn';
import { Button } from '../button/button.web';
import { Card } from '../card/card.web';

export function LoadingState({
  title = 'Loading',
  description = 'Please wait while we fetch your data.',
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <Card className={cn('p-8', className)} role='status' aria-live='polite'>
      <Stack className='items-center text-center'>
        <Span
          aria-hidden='true'
          className='size-8 animate-spin rounded-full border-2 border-primary border-t-transparent'
        />
        <P className='text-base font-medium'>{title}</P>
        <P className='text-sm text-muted-foreground'>{description}</P>
      </Stack>
    </Card>
  );
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'Please retry the action.',
  onRetry,
  className,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <Card className={cn('p-8', className)} role='alert'>
      <Stack className='items-center text-center'>
        <Span className='text-2xl' role='img' aria-label='Error'>
          !
        </Span>
        <P className='text-base font-medium'>{title}</P>
        <P className='text-sm text-muted-foreground'>{message}</P>
        {onRetry ? (
          <Button variant='outline' onClick={onRetry}>
            Retry
          </Button>
        ) : null}
      </Stack>
    </Card>
  );
}

export function EmptyState({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: { label: string; onClick?: () => void; href?: string };
  className?: string;
}) {
  return (
    <Card className={cn('p-8', className)}>
      <Stack className='items-center text-center'>
        <Span className='text-4xl'>○</Span>
        <P className='text-base font-medium'>{title}</P>
        {description ? <P className='text-sm text-muted-foreground'>{description}</P> : null}
        {action ? (
          action.href ? (
            <A href={action.href} className='inline-flex'>
              <Button>{action.label}</Button>
            </A>
          ) : (
            <Button onClick={action.onClick}>{action.label}</Button>
          )
        ) : null}
      </Stack>
    </Card>
  );
}

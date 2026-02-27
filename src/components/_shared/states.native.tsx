import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { Stack } from '../../layout/index.native';
import { P } from '../../primitives/index.native';
import { cn } from '../../utils/cn';
import { Button } from '../button/button.native';
import { Card } from '../card/card.native';

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
    <Card className={cn('p-8', className)} accessibilityLiveRegion='polite'>
      <Stack className='items-center'>
        <ActivityIndicator />
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
    <Card className={cn('p-8', className)}>
      <Stack className='items-center'>
        <P className='text-base font-medium'>{title}</P>
        <P className='text-sm text-muted-foreground'>{message}</P>
        {onRetry ? <Button variant='outline' onPress={onRetry}>Retry</Button> : null}
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
  action?: { label: string; onClick?: () => void };
  className?: string;
}) {
  return (
    <Card className={cn('p-8', className)}>
      <Stack className='items-center'>
        <P className='text-base font-medium'>{title}</P>
        {description ? <P className='text-sm text-muted-foreground'>{description}</P> : null}
        {action ? <Button onPress={action.onClick}>{action.label}</Button> : null}
      </Stack>
    </Card>
  );
}

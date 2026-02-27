import * as React from 'react';
import { Div, Span, P } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface InfiniteMovingCardsProps { className?: string; items: { quote: string; name: string; title: string; }[]; direction?: 'left' | 'right'; speed?: 'fast' | 'normal' | 'slow'; pauseOnHover?: boolean; }
export function InfiniteMovingCards({ items, className }: InfiniteMovingCardsProps) {
  return (
    <Div className={cn('flex-row gap-4', className)}>
      {items.slice(0, 3).map((item, idx) => (
        <Div key={idx} className="rounded-xl border border-border bg-card px-6 py-5">
          <P className="text-sm text-foreground">{item.quote}</P>
          <Span className="text-sm font-medium">{item.name}</Span>
          <Span className="text-xs text-muted-foreground">{item.title}</Span>
        </Div>
      ))}
    </Div>
  );
}

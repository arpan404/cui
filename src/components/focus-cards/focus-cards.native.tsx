import * as React from 'react';
import { Div, Span } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface FocusCardItem { title: string; src: string; }
export interface FocusCardsProps { className?: string; cards: FocusCardItem[]; }
export function FocusCards({ cards, className }: FocusCardsProps) {
  return (
    <Div className={cn('gap-4', className)}>
      {cards.map((card, idx) => (
        <Div key={idx} className="rounded-xl bg-card p-4">
          <Span className="text-lg font-semibold">{card.title}</Span>
        </Div>
      ))}
    </Div>
  );
}

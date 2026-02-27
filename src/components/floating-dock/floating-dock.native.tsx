import * as React from 'react';
import { Div, Span, ButtonBase } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface DockItem { title: string; icon: React.ReactNode; href?: string; onClick?: () => void; }
export interface FloatingDockProps { className?: string; items: DockItem[]; position?: 'bottom' | 'top'; }
export function FloatingDock({ items, className }: FloatingDockProps) {
  return (
    <Div className={cn('flex-row items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2', className)}>
      {items.map((item, idx) => (
        <ButtonBase key={idx} onPress={item.onClick} className="items-center justify-center rounded-xl bg-secondary p-2.5">
          {item.icon}
        </ButtonBase>
      ))}
    </Div>
  );
}

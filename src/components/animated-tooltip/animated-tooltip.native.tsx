import * as React from 'react';
import { Div, Img } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface AnimatedTooltipItem { id: number; name: string; designation: string; image: string; }
export interface AnimatedTooltipProps { className?: string; items: AnimatedTooltipItem[]; }
export function AnimatedTooltip({ items, className }: AnimatedTooltipProps) {
  return (
    <Div className={cn('flex-row items-center', className)}>
      {items.map((item) => (
        <Img key={item.id} source={{ uri: item.image }} className="size-10 rounded-full border-2 border-background -ml-3" />
      ))}
    </Div>
  );
}

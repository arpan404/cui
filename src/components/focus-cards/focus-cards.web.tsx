'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface FocusCardItem {
  title: string;
  src: string;
}

export interface FocusCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: FocusCardItem[];
}

export function FocusCards({ cards, className, ...props }: FocusCardsProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div
      className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full', className)}
      {...props}
    >
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={cn(
            'group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-out',
            hoveredIndex !== null && hoveredIndex !== idx && 'blur-sm scale-[0.98] opacity-60',
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={card.src}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white drop-shadow-md">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface AnimatedTooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface AnimatedTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AnimatedTooltipItem[];
}

export function AnimatedTooltip({ items, className, ...props }: AnimatedTooltipProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className={cn('flex items-center -space-x-3', className)} {...props}>
      {items.map((item) => {
        const isHovered = hoveredIndex === item.id;

        return (
          <div
            key={item.id}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip - always rendered, transition-controlled visibility */}
            <div
              className="absolute left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none"
              style={{
                bottom: '100%',
                marginBottom: '8px',
                opacity: isHovered ? 1 : 0,
                transform: isHovered
                  ? 'translateX(-50%) translateY(0) scale(1)'
                  : 'translateX(-50%) translateY(8px) scale(0.9)',
                transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 shadow-lg">
                <p className="text-sm font-medium text-background">{item.name}</p>
                <p className="text-xs text-background/70">{item.designation}</p>
              </div>
              <div className="h-2 w-2 rotate-45 bg-foreground -mt-1" />
            </div>
            <img
              src={item.image}
              alt={item.name}
              className={cn(
                'relative size-12 rounded-full border-2 border-background object-cover transition-all duration-200',
                isHovered && 'z-30 scale-110',
              )}
            />
          </div>
        );
      })}
    </div>
  );
}

'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface InfiniteMovingCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
}

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
  ...props
}: InfiniteMovingCardsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (!scrollerRef.current) return;
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });
    setStart(true);
  }, []);

  const speedMap = { fast: '20s', normal: '40s', slow: '80s' };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className,
      )}
      style={{
        '--animation-duration': speedMap[speed],
        '--animation-direction': direction === 'left' ? 'forwards' : 'reverse',
      } as React.CSSProperties}
      {...props}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[280px] sm:w-[350px] max-w-full shrink-0 rounded-xl border border-border bg-card px-6 py-5 sm:px-8 sm:py-6"
          >
            <blockquote className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{item.name}</span>
                <span className="text-xs text-muted-foreground">{item.title}</span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}

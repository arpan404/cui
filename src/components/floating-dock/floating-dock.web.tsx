'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface FloatingDockProps extends React.HTMLAttributes<HTMLDivElement> {
  items: DockItem[];
  /** Position on screen */
  position?: 'bottom' | 'top';
  /** Magnification intensity (1.0 = no magnification, 2.0 = double size) */
  magnification?: number;
  /** Distance in px that magnification affects neighboring items */
  distance?: number;
  /** Icon container size in px */
  iconSize?: number;
  /** Animation duration in ms for scale transitions */
  animationDuration?: number;
}

export function FloatingDock({
  items,
  position = 'bottom',
  magnification = 1.6,
  distance = 120,
  iconSize = 40,
  animationDuration = 200,
  className,
  ...props
}: FloatingDockProps) {
  const [mouseX, setMouseX] = React.useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setMouseX(null);
    setHoveredIndex(null);
  }, []);

  // Calculate scale for each item based on distance from mouse
  const getScale = React.useCallback(
    (idx: number): number => {
      if (mouseX === null) return 1;
      const el = itemRefs.current[idx];
      if (!el || !containerRef.current) return 1;

      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const elCenter = elRect.left + elRect.width / 2 - containerRect.left;
      const dist = Math.abs(mouseX - elCenter);

      if (dist > distance) return 1;
      // Gaussian-like falloff
      const scale = 1 + (magnification - 1) * Math.cos((dist / distance) * (Math.PI / 2));
      return Math.max(1, scale);
    },
    [mouseX, magnification, distance],
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex items-end gap-1.5 rounded-2xl border border-border bg-card/95 backdrop-blur-md px-3 py-2 shadow-lg',
        position === 'bottom' && 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50',
        position === 'top' && 'fixed top-6 left-1/2 -translate-x-1/2 z-50',
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {items.map((item, idx) => {
        const scale = getScale(idx);
        const translateY = -(scale - 1) * 20;

        const content = (
          <div className="relative flex flex-col items-center">
            {hoveredIndex === idx && (
              <div
                className="absolute whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background shadow-md"
                style={{
                  bottom: `${scale * iconSize + 12}px`,
                  opacity: 1,
                  transition: 'opacity 150ms ease-out',
                }}
              >
                {item.title}
              </div>
            )}
            <div
              ref={(el) => { itemRefs.current[idx] = el; }}
              className="flex items-center justify-center rounded-xl bg-secondary/80 text-foreground hover:bg-secondary will-change-transform"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transition: `transform ${animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              }}
            >
              {item.icon}
            </div>
          </div>
        );

        return item.href ? (
          <a
            key={idx}
            href={item.href}
            className="outline-none"
            onMouseEnter={() => setHoveredIndex(idx)}
          >
            {content}
          </a>
        ) : (
          <button
            key={idx}
            type="button"
            className="outline-none"
            onClick={item.onClick}
            onMouseEnter={() => setHoveredIndex(idx)}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}

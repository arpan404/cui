'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface LinkPreviewProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** URL to preview */
  url: string;
  /** Preview image URL */
  imageSrc?: string;
  /** Preview width */
  width?: number;
  /** Preview height */
  height?: number;
}

export function LinkPreview({
  url,
  imageSrc,
  width = 200,
  height = 125,
  className,
  children,
  ...props
}: LinkPreviewProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [position, setPosition] = React.useState<'above' | 'below'>('above');
  const triggerRef = React.useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = React.useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition(rect.top > height + 40 ? 'above' : 'below');
    }
    setIsHovered(true);
  }, [height]);

  return (
    <span className="relative inline-block">
      <a
        ref={triggerRef}
        href={url}
        className={cn(
          'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors',
          className,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </a>
      {isHovered && imageSrc && (
        <div
          className={cn(
            'absolute left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-200',
            position === 'above' ? 'bottom-full mb-2' : 'top-full mt-2',
          )}
        >
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
            <img
              src={imageSrc}
              alt="Link preview"
              width={width}
              height={height}
              className="object-cover"
              style={{ width, height }}
            />
          </div>
        </div>
      )}
    </span>
  );
}

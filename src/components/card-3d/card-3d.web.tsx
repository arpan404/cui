'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface Card3DContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Container class */
  containerClassName?: string;
}

export function Card3DContainer({
  className,
  containerClassName,
  children,
  ...props
}: Card3DContainerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = React.useState('');

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setTransform(`rotateY(${x}deg) rotateX(${-y}deg)`);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setTransform('rotateY(0deg) rotateX(0deg)');
  }, []);

  return (
    <div className={cn('[perspective:1000px]', containerClassName)}>
      <div
        ref={containerRef}
        className={cn(
          'relative [transform-style:preserve-3d]',
          className,
        )}
        style={{
          transform,
          transition: 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export interface Card3DBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card3DBody({ className, children, ...props }: Card3DBodyProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card p-6 [transform-style:preserve-3d]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface Card3DItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** How far to translate on Z axis */
  translateZ?: number;
}

export function Card3DItem({
  className,
  translateZ = 20,
  children,
  ...props
}: Card3DItemProps) {
  return (
    <div
      className={cn('', className)}
      style={{
        transform: `translateZ(${translateZ}px)`,
        transition: 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
      }}
      {...props}
    >
      {children}
    </div>
  );
}

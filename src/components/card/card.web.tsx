import * as React from 'react';

import { Div, P } from '../../primitives/index.web';
import { cn } from '../../utils/cn';

const cardSizes = {
  sm: { content: 'p-3 sm:p-4', header: 'p-3 sm:p-4', footer: 'p-3 sm:p-4' },
  default: { content: 'px-5 pb-5 sm:px-6 sm:pb-6', header: 'p-5 sm:p-6', footer: 'px-5 pb-5 sm:px-6 sm:pb-6' },
  lg: { content: 'px-6 pb-6 sm:px-8 sm:pb-8', header: 'p-6 sm:p-8', footer: 'px-6 pb-6 sm:px-8 sm:pb-8' },
} as const;

type CardSize = keyof typeof cardSizes;

const CardSizeContext = React.createContext<CardSize>('default');

function useCardSize() {
  return React.useContext(CardSizeContext);
}

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { size?: CardSize }>(
  function Card({ className, size = 'default', children, ...props }, ref) {
    return (
      <CardSizeContext.Provider value={size}>
        <Div
          ref={ref}
          className={cn(
            'rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all duration-300 dark:shadow-none',
            className,
          )}
          {...props}
        >
          {children}
        </Div>
      </CardSizeContext.Provider>
    );
  },
);

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const size = useCardSize();
  return <Div className={cn('flex flex-col gap-1.5', cardSizes[size].header, className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-lg font-semibold leading-tight tracking-tight', className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <P className={cn('text-sm text-muted-foreground leading-relaxed', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const size = useCardSize();
  return <Div className={cn(cardSizes[size].content, className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const size = useCardSize();
  return <Div className={cn('flex items-center gap-2', cardSizes[size].footer, className)} {...props} />;
}

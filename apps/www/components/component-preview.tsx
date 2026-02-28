import { Div } from 'cui/primitives';
import { cn } from 'cui/utils';

export function ComponentPreview({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Div
      className={cn(
        'rounded-xl bg-muted/30 p-8 sm:p-10 flex items-center justify-center min-h-[200px]',
        className,
      )}
    >
      <Div className="w-full flex items-center justify-center">
        {children}
      </Div>
    </Div>
  );
}

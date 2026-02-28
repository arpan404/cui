'use client';
import { Spinner } from 'cui/components';

export function SpinnerDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-end">
      <div className="text-center">
        <Spinner size="sm" />
        <p className="text-xs text-muted-foreground mt-2">sm</p>
      </div>
      <div className="text-center">
        <Spinner />
        <p className="text-xs text-muted-foreground mt-2">default</p>
      </div>
      <div className="text-center">
        <Spinner size="lg" />
        <p className="text-xs text-muted-foreground mt-2">lg</p>
      </div>
      <div className="text-center">
        <Spinner size="xl" />
        <p className="text-xs text-muted-foreground mt-2">xl</p>
      </div>
    </div>
  );
}

export const spinnerSource = `import { Spinner } from 'cui/components';

<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner size="xl" />`;

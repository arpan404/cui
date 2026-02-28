'use client';
import { Skeleton } from 'cui/components';

export function SkeletonDemo() {
  return (
    <div className="space-y-6 w-full max-w-sm">
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export const skeletonSource = `import { Skeleton } from 'cui/components';

<Skeleton className="h-12 w-12 rounded-full" />
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-4 w-full" />`;

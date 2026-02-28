'use client';
import { Spotlight } from 'cui/components';

export function SpotlightDemo() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-(--border) bg-(--card) h-[300px] flex items-center justify-center">
      <Spotlight size={400} />
      <div className="text-center relative z-10">
        <h3 className="text-xl font-bold">Spotlight</h3>
        <p className="text-sm text-(--muted-foreground) mt-2">Mouse-following spotlight effect</p>
      </div>
    </div>
  );
}

export const spotlightSource = `import { Spotlight } from 'cui/components';

<div className="relative overflow-hidden">
  <Spotlight size={400} />
  Content here
</div>`;

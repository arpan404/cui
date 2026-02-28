'use client';
import { Meteors } from 'cui/components';

export function MeteorsDemo() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 h-[240px] flex items-center justify-center">
      <div className="relative z-10 text-center">
        <h3 className="text-xl font-bold mb-2">Meteors</h3>
        <p className="text-sm text-muted-foreground">Animated meteor shower effect</p>
      </div>
      <Meteors count={15} />
    </div>
  );
}

export const meteorsSource = `import { Meteors } from 'cui/components';

<div className="relative overflow-hidden">
  <Meteors count={15} />
</div>`;

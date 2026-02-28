'use client';
import { LampEffect } from 'cui/components';

export function LampEffectDemo() {
  return (
    <div className="h-[400px] overflow-hidden rounded-xl border border-(--border)">
      <LampEffect>
        <h2 className="text-2xl font-bold text-center">Lamp Effect</h2>
        <p className="text-sm text-(--muted-foreground) text-center mt-2">A dramatic lighting effect</p>
      </LampEffect>
    </div>
  );
}

export const lampEffectSource = `import { LampEffect } from 'cui/components';

<LampEffect>
  <h2>Lamp Effect</h2>
  <p>Content illuminated by the lamp</p>
</LampEffect>`;

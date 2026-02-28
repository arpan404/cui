'use client';
import { GlowingEffect } from 'cui/components';

export function GlowingEffectDemo() {
  return (
    <div className="relative max-w-sm rounded-xl border border-(--border) bg-(--card) p-6">
      <GlowingEffect color="var(--primary)" blur={40} spread={2} />
      <h3 className="text-lg font-bold relative z-10">Glowing Effect</h3>
      <p className="text-sm text-(--muted-foreground) mt-2 relative z-10">
        Hover to see the glowing border effect.
      </p>
    </div>
  );
}

export const glowingEffectSource = `import { GlowingEffect } from 'cui/components';

<div className="relative rounded-xl border p-6">
  <GlowingEffect color="var(--primary)" blur={40} />
  Content here
</div>`;

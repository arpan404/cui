'use client';
import { Sparkles } from 'cui/components';

export function SparklesDemo() {
  return (
    <div className="w-full py-8">
      <Sparkles count={30} color="var(--primary)">
        <h2 className="text-2xl font-bold text-center">Sparkle Effect</h2>
      </Sparkles>
    </div>
  );
}

export const sparklesSource = `import { Sparkles } from 'cui/components';

<Sparkles count={30} color="var(--primary)">
  <h2>Sparkle Effect</h2>
</Sparkles>`;

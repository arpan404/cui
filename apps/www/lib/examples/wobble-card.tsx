'use client';
import { WobbleCard } from 'cui/components';

export function WobbleCardDemo() {
  return (
    <div className="max-w-sm">
      <WobbleCard>
        <h3 className="text-lg font-bold">Wobble Card</h3>
        <p className="text-sm text-(--muted-foreground) mt-2">
          Move your mouse over this card to see the 3D wobble effect.
        </p>
      </WobbleCard>
    </div>
  );
}

export const wobbleCardSource = `import { WobbleCard } from 'cui/components';

<WobbleCard wobbleIntensity={10} scale={1.02}>
  <h3>Wobble Card</h3>
  <p>Interactive 3D tilt effect</p>
</WobbleCard>`;

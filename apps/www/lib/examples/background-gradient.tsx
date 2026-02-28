'use client';
import { BackgroundGradient } from 'cui/components';

export function BackgroundGradientDemo() {
  return (
    <div className="max-w-sm">
      <BackgroundGradient>
        <div className="bg-(--card) rounded-xl p-6">
          <h3 className="text-lg font-bold">Gradient Border</h3>
          <p className="text-sm text-(--muted-foreground) mt-2">
            Animated gradient border around the card.
          </p>
        </div>
      </BackgroundGradient>
    </div>
  );
}

export const backgroundGradientSource = `import { BackgroundGradient } from 'cui/components';

<BackgroundGradient animate>
  <div className="bg-card rounded-xl p-6">
    Content here
  </div>
</BackgroundGradient>`;

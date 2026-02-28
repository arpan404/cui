'use client';
import { CardSpotlight } from 'cui/components';

export function CardSpotlightDemo() {
  return (
    <div className="max-w-sm">
      <CardSpotlight>
        <h3 className="text-lg font-bold relative z-20">Card Spotlight</h3>
        <p className="text-sm text-(--muted-foreground) mt-2 relative z-20">
          Hover over this card to see the spotlight effect follow your cursor.
        </p>
      </CardSpotlight>
    </div>
  );
}

export const cardSpotlightSource = `import { CardSpotlight } from 'cui/components';

<CardSpotlight radius={350}>
  <h3>Card Title</h3>
  <p>Card content</p>
</CardSpotlight>`;

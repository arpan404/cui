'use client';
import { HeroHighlight, Highlight } from 'cui/components';

export function HeroHighlightDemo() {
  return (
    <div className="h-[300px] overflow-hidden rounded-xl border border-border">
      <HeroHighlight>
        <h2 className="text-2xl font-bold text-center max-w-xl mx-auto">
          Experience the power of{' '}
          <Highlight>interactive highlights</Highlight>{' '}
          that follow your cursor.
        </h2>
      </HeroHighlight>
    </div>
  );
}

export const heroHighlightSource = `import { HeroHighlight, Highlight } from 'cui/components';

<HeroHighlight>
  <h2>Experience the power of <Highlight>interactive highlights</Highlight></h2>
</HeroHighlight>`;

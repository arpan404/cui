'use client';
import { GridBackground, DotBackground } from 'cui/components';

export function GridBackgroundDemo() {
  return (
    <div className="space-y-4">
      <div className="h-[200px] overflow-hidden rounded-xl border border-border">
        <GridBackground className="flex items-center justify-center h-full">
          <p className="text-lg font-medium relative z-10">Grid Background</p>
        </GridBackground>
      </div>
      <div className="h-[200px] overflow-hidden rounded-xl border border-border">
        <DotBackground className="flex items-center justify-center h-full">
          <p className="text-lg font-medium relative z-10">Dot Background</p>
        </DotBackground>
      </div>
    </div>
  );
}

export const gridBackgroundSource = `import { GridBackground, DotBackground } from 'cui/components';

<GridBackground>Content on grid</GridBackground>
<DotBackground>Content on dots</DotBackground>`;

'use client';
import { WavyBackground } from 'cui/components';

export function WavyBackgroundDemo() {
  return (
    <div className="h-[400px] overflow-hidden rounded-xl border border-border">
      <WavyBackground speed="normal" waveOpacity={0.3}>
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-bold">Wavy Background</h2>
          <p className="text-sm text-muted-foreground mt-2">Canvas-based animated waves</p>
        </div>
      </WavyBackground>
    </div>
  );
}

export const wavyBackgroundSource = `import { WavyBackground } from 'cui/components';

<WavyBackground speed="normal" waveOpacity={0.3}>
  <h2>Content over waves</h2>
</WavyBackground>`;

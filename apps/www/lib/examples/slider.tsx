'use client';
import { Slider } from 'cui/components';

export function SliderDemo() {
  return (
    <div className="space-y-8 w-full max-w-sm">
      <div>
        <p className="text-sm text-(--muted-foreground) mb-3">Sizes</p>
        <div className="space-y-6">
          <Slider size="sm" defaultValue={[30]} max={100} />
          <Slider defaultValue={[50]} max={100} />
          <Slider size="lg" defaultValue={[70]} max={100} />
        </div>
      </div>
      <div>
        <p className="text-sm text-(--muted-foreground) mb-3">Range</p>
        <Slider defaultValue={[25, 75]} max={100} />
      </div>
    </div>
  );
}

export const sliderSource = `import { Slider } from 'cui/components';

<Slider size="sm" defaultValue={[30]} max={100} />
<Slider defaultValue={[50]} max={100} />
<Slider size="lg" defaultValue={[70]} max={100} />
<Slider defaultValue={[25, 75]} max={100} />`;

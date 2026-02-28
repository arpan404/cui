'use client';
import { Toggle } from 'cui/components';

export function ToggleDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-(--muted-foreground) mb-3">Variants</p>
        <div className="flex gap-3">
          <Toggle>Default</Toggle>
          <Toggle variant="outline">Outline</Toggle>
        </div>
      </div>
      <div>
        <p className="text-sm text-(--muted-foreground) mb-3">Sizes</p>
        <div className="flex gap-3 items-center">
          <Toggle size="sm">Small</Toggle>
          <Toggle>Default</Toggle>
          <Toggle size="lg">Large</Toggle>
        </div>
      </div>
    </div>
  );
}

export const toggleSource = `import { Toggle } from 'cui/components';

<Toggle>Default</Toggle>
<Toggle variant="outline">Outline</Toggle>
<Toggle size="sm">Small</Toggle>
<Toggle size="lg">Large</Toggle>`;

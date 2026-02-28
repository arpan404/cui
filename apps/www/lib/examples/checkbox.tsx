'use client';
import { Checkbox, Label } from 'cui/components';

export function CheckboxDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-(--muted-foreground) mb-3">Sizes</p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Checkbox size="sm" id="c1" />
            <Label htmlFor="c1">Small</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="c2" />
            <Label htmlFor="c2">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox size="lg" id="c3" />
            <Label htmlFor="c3">Large</Label>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-(--muted-foreground) mb-3">Disabled</p>
        <div className="flex items-center gap-3">
          <Checkbox disabled id="c4" />
          <Label htmlFor="c4">Disabled</Label>
        </div>
      </div>
    </div>
  );
}

export const checkboxSource = `import { Checkbox } from 'cui/components';

<Checkbox size="sm" />
<Checkbox />
<Checkbox size="lg" />
<Checkbox disabled />`;

'use client';
import { Switch, Label } from 'cui/components';

export function SwitchDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Sizes</p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Switch size="sm" id="s1" />
            <Label htmlFor="s1">Small</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="s2" />
            <Label htmlFor="s2">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch size="lg" id="s3" />
            <Label htmlFor="s3">Large</Label>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Disabled</p>
        <div className="flex items-center gap-3">
          <Switch disabled id="s4" />
          <Label htmlFor="s4">Disabled</Label>
        </div>
      </div>
    </div>
  );
}

export const switchSource = `import { Switch } from 'cui/components';

<Switch size="sm" />
<Switch />
<Switch size="lg" />
<Switch disabled />`;

'use client';
import { Button } from 'cui/components';

export function ButtonDemo() {
  return (
    <div className="space-y-8 w-full">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Variants</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Sizes</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">States</p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  );
}

export const buttonSource = `import { Button } from 'cui/components';

<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button loading>Loading</Button>`;

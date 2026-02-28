'use client';
import { Label, Input } from 'cui/components';

export function LabelDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  );
}

export const labelSource = `import { Label, Input } from 'cui/components';

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="Enter your email" />`;

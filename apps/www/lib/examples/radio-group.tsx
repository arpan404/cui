'use client';
import { RadioGroup, RadioGroupItem, Label } from 'cui/components';

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

export const radioGroupSource = `import { RadioGroup, RadioGroupItem, Label } from 'cui/components';

<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
</RadioGroup>`;

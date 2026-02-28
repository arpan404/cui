'use client';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'cui/components';

export function SelectDemo() {
  return (
    <div className="space-y-6 w-full max-w-xs">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Default</p>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Sizes</p>
        <div className="space-y-3">
          <Select>
            <SelectTrigger size="sm"><SelectValue placeholder="Small" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="lg"><SelectValue placeholder="Large" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export const selectSource = `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'cui/components';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`;

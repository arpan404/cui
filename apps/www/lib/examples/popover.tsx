'use client';
import { Popover, PopoverTrigger, PopoverContent, Button, Input, Label } from 'cui/components';

export function PopoverDemo() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Settings</h4>
            <div className="space-y-1.5">
              <Label>Width</Label>
              <Input defaultValue="100%" />
            </div>
            <div className="space-y-1.5">
              <Label>Height</Label>
              <Input defaultValue="auto" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export const popoverSource = `import { Popover, PopoverTrigger, PopoverContent } from 'cui/components';

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent size="default">
    Content here
  </PopoverContent>
</Popover>`;

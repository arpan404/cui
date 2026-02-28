'use client';
import { ScrollArea, Separator } from 'cui/components';

const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

export function ScrollAreaDemo() {
  return (
    <div className="w-full max-w-xs">
      <ScrollArea className="h-72 w-full rounded-md border border-border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium">Items</h4>
          {items.map((item) => (
            <div key={item}>
              <div className="text-sm py-2">{item}</div>
              <Separator />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export const scrollAreaSource = `import { ScrollArea } from 'cui/components';

<ScrollArea className="h-72 w-full rounded-md border">
  <div className="p-4">
    {items.map(item => (
      <div key={item} className="text-sm py-2">{item}</div>
    ))}
  </div>
</ScrollArea>`;

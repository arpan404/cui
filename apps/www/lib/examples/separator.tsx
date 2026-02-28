'use client';
import { Separator } from 'cui/components';

export function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div>
        <h4 className="text-sm font-medium">Section Title</h4>
        <Separator className="my-4" />
        <p className="text-sm text-muted-foreground">Content below the separator.</p>
      </div>
      <div className="flex items-center gap-4 h-5">
        <span className="text-sm">Blog</span>
        <Separator orientation="vertical" />
        <span className="text-sm">Docs</span>
        <Separator orientation="vertical" />
        <span className="text-sm">Source</span>
      </div>
    </div>
  );
}

export const separatorSource = `import { Separator } from 'cui/components';

<Separator />
<Separator orientation="vertical" />`;

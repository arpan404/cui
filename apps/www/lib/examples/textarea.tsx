'use client';
import { Textarea } from 'cui/components';

export function TextareaDemo() {
  return (
    <div className="space-y-6 w-full max-w-sm">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Sizes</p>
        <div className="space-y-3">
          <Textarea size="sm" placeholder="Small textarea" />
          <Textarea placeholder="Default textarea" />
          <Textarea size="lg" placeholder="Large textarea" />
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Resize options</p>
        <div className="space-y-3">
          <Textarea resize="none" placeholder="No resize" />
          <Textarea resize="both" placeholder="Resize both" />
        </div>
      </div>
    </div>
  );
}

export const textareaSource = `import { Textarea } from 'cui/components';

<Textarea size="sm" placeholder="Small" />
<Textarea placeholder="Default" />
<Textarea size="lg" placeholder="Large" />
<Textarea resize="none" placeholder="No resize" />`;

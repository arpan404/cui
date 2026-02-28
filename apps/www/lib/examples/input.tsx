'use client';
import { Input } from 'cui/components';

export function InputDemo() {
  return (
    <div className="space-y-6 w-full max-w-sm">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Sizes</p>
        <div className="space-y-3">
          <Input size="sm" placeholder="Small input" />
          <Input placeholder="Default input" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Disabled</p>
        <Input disabled placeholder="Disabled input" />
      </div>
    </div>
  );
}

export const inputSource = `import { Input } from 'cui/components';

<Input size="sm" placeholder="Small" />
<Input placeholder="Default" />
<Input size="lg" placeholder="Large" />
<Input disabled placeholder="Disabled" />`;

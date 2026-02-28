'use client';
import { MovingBorder } from 'cui/components';

export function MovingBorderDemo() {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center py-8">
      <MovingBorder as="button" borderColor="var(--primary)" duration={3}>
        <span className="px-6 py-2 text-sm font-medium">Button</span>
      </MovingBorder>
      <MovingBorder borderColor="var(--primary)" borderWidth={1} duration={5}>
        <div className="p-4">
          <h4 className="font-medium text-sm">Card with moving border</h4>
          <p className="text-xs text-(--muted-foreground) mt-1">Animated spinning border effect</p>
        </div>
      </MovingBorder>
    </div>
  );
}

export const movingBorderSource = `import { MovingBorder } from 'cui/components';

<MovingBorder as="button" borderColor="var(--primary)" duration={3}>
  <span>Click me</span>
</MovingBorder>`;

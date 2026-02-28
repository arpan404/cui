'use client';
import { ColourfulText } from 'cui/components';

export function ColourfulTextDemo() {
  return (
    <div className="py-8 text-center">
      <h2 className="text-4xl font-bold">
        <ColourfulText text="Colourful Text" />
      </h2>
    </div>
  );
}

export const colourfulTextSource = `import { ColourfulText } from 'cui/components';

<h2 className="text-4xl font-bold">
  <ColourfulText text="Colourful Text" interval={2000} />
</h2>`;

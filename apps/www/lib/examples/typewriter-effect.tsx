'use client';
import { TypewriterEffect } from 'cui/components';

export function TypewriterEffectDemo() {
  return (
    <div className="py-8 text-center">
      <TypewriterEffect
        words={[
          { text: 'Building' },
          { text: 'the' },
          { text: 'future' },
          { text: 'with' },
          { text: 'code.' },
        ]}
        speed={100}
      />
    </div>
  );
}

export const typewriterEffectSource = `import { TypewriterEffect } from 'cui/components';

<TypewriterEffect
  words={[
    { text: 'Building' },
    { text: 'the' },
    { text: 'future' },
    { text: 'with' },
    { text: 'code.' },
  ]}
  speed={100}
/>`;

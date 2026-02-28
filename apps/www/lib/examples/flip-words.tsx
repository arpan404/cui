'use client';
import { FlipWords } from 'cui/components';

export function FlipWordsDemo() {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold">
        Build <FlipWords words={['innovative', 'powerful', 'beautiful', 'modern']} duration={2500} /> apps
      </h2>
    </div>
  );
}

export const flipWordsSource = `import { FlipWords } from 'cui/components';

<h2>Build <FlipWords words={['innovative', 'powerful', 'beautiful']} duration={2500} /> apps</h2>`;

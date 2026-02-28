'use client';
import { TextGenerateEffect } from 'cui/components';

export function TextGenerateEffectDemo() {
  return (
    <div className="max-w-lg py-8">
      <TextGenerateEffect words="The quick brown fox jumps over the lazy dog. Technology advances at an exponential rate, transforming how we build and interact." />
    </div>
  );
}

export const textGenerateEffectSource = `import { TextGenerateEffect } from 'cui/components';

<TextGenerateEffect words="Your text content here..." duration={50} />`;

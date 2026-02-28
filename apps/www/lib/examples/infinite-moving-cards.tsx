'use client';
import { InfiniteMovingCards } from 'cui/components';

const items = [
  { quote: 'This library is amazing for cross-platform development.', name: 'Alice', title: 'Developer' },
  { quote: 'The component quality is top-notch and well documented.', name: 'Bob', title: 'Designer' },
  { quote: 'Dark mode support out of the box is a game changer.', name: 'Carol', title: 'Engineer' },
  { quote: 'CVA variants make customization incredibly easy.', name: 'Dave', title: 'Lead Dev' },
  { quote: 'Works seamlessly with Tailwind CSS v4.', name: 'Eve', title: 'Frontend Dev' },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="w-full overflow-hidden py-4">
      <InfiniteMovingCards items={items} speed="normal" />
    </div>
  );
}

export const infiniteMovingCardsSource = `import { InfiniteMovingCards } from 'cui/components';

const items = [
  { quote: 'Great library!', name: 'Alice', title: 'Developer' },
  { quote: 'Love the DX.', name: 'Bob', title: 'Designer' },
];

<InfiniteMovingCards items={items} speed="normal" direction="left" />`;

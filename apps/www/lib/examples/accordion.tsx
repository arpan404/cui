'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'cui/components';

export function AccordionDemo() {
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is CUI?</AccordionTrigger>
          <AccordionContent>CUI is a cross-platform React UI component library for web and React Native.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I install it?</AccordionTrigger>
          <AccordionContent>Install via npm or bun: bun add cui</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
          <AccordionContent>Yes, all components support dark mode via CSS custom properties and OKLCH colors.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export const accordionSource = `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'cui/components';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question</AccordionTrigger>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>`;

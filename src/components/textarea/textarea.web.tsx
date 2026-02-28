import * as React from 'react';

import { cn } from '../../utils/cn';
import { textareaVariants, type TextareaSize, type TextareaResize } from './textarea.shared';

export { textareaVariants, type TextareaSize, type TextareaResize } from './textarea.shared';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextareaSize;
  resize?: TextareaResize;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, size, resize, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ size, resize }), className)}
        {...props}
      />
    );
  },
);

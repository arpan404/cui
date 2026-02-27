import * as React from 'react';
import { A } from '../../primitives/index.native';
import { cn } from '../../utils/cn';

export interface LinkPreviewProps { className?: string; children?: React.ReactNode; url: string; imageSrc?: string; width?: number; height?: number; }
export function LinkPreview({ url, className, children }: LinkPreviewProps) {
  return <A href={url} className={cn('text-primary underline', className)}>{children}</A>;
}

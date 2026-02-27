import * as React from 'react';

import type { CommonPrimitiveProps, PrimitivePressProps } from './shared';

export type DivProps = React.HTMLAttributes<HTMLDivElement> & CommonPrimitiveProps;
export type SpanProps = React.HTMLAttributes<HTMLSpanElement> & CommonPrimitiveProps;
export type PProps = React.HTMLAttributes<HTMLParagraphElement> & CommonPrimitiveProps;
export type AProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & CommonPrimitiveProps;
export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & CommonPrimitiveProps;
export type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonPrimitiveProps &
  PrimitivePressProps;

export const Div = React.forwardRef<HTMLDivElement, DivProps>(function Div(
  { className, testID, ...props },
  ref,
) {
  return <div ref={ref} className={className} data-testid={testID} {...props} />;
});

export const Span = React.forwardRef<HTMLSpanElement, SpanProps>(function Span(
  { className, testID, ...props },
  ref,
) {
  return <span ref={ref} className={className} data-testid={testID} {...props} />;
});

export const P = React.forwardRef<HTMLParagraphElement, PProps>(function P(
  { className, testID, ...props },
  ref,
) {
  return <p ref={ref} className={className} data-testid={testID} {...props} />;
});

export const A = React.forwardRef<HTMLAnchorElement, AProps>(function A(
  { className, testID, ...props },
  ref,
) {
  return <a ref={ref} className={className} data-testid={testID} {...props} />;
});

export const Img = React.forwardRef<HTMLImageElement, ImgProps>(function Img(
  { className, testID, ...props },
  ref,
) {
  return <img ref={ref} className={className} data-testid={testID} {...props} />;
});

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  function ButtonBase({ className, testID, onPress, onClick, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={className}
        data-testid={testID}
        onClick={event => {
          onClick?.(event);
          onPress?.();
        }}
        {...props}
      />
    );
  },
);

export const Box = Div;
export const Inline = Span;
export const TextBlock = P;
export const LinkText = A;
export const Image = Img;
export const PressableBase = ButtonBase;

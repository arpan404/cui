import * as React from 'react';
import {
  Image as RNImage,
  Linking,
  Pressable,
  Text,
  View,
  type ImageProps as RNImageProps,
  type PressableProps,
  type StyleProp,
  type TextProps,
  type TextStyle,
  type ViewProps,
  type ViewStyle,
} from 'react-native';

import type { PrimitivePressProps } from './shared';

type NativeCommonProps<TStyle> = {
  className?: string;
  style?: StyleProp<TStyle>;
  children?: React.ReactNode;
  testID?: string;
};

export type DivProps = ViewProps & NativeCommonProps<ViewStyle>;
export type SpanProps = TextProps & NativeCommonProps<TextStyle>;
export type PProps = TextProps & NativeCommonProps<TextStyle>;
export type AProps = TextProps &
  NativeCommonProps<TextStyle> & {
    href?: string;
    onPress?: () => void;
  };
export type ImgProps = RNImageProps & NativeCommonProps<ViewStyle>;
export type ButtonBaseProps = PressableProps &
  NativeCommonProps<ViewStyle> &
  PrimitivePressProps;

const isViewLike = (value: React.ReactNode): boolean => {
  if (!React.isValidElement(value)) {
    return false;
  }

  const typeName =
    typeof value.type === 'string'
      ? value.type
      : (value.type as { displayName?: string; name?: string }).displayName ||
        (value.type as { name?: string }).name ||
        '';

  return /View|Pressable|Image|ScrollView|FlatList|SectionList/.test(typeName);
};

const warnInvalidTextChildren = (
  componentName: string,
  children: React.ReactNode,
): void => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  const list = React.Children.toArray(children);
  if (list.some(isViewLike)) {
    console.warn(
      `[${componentName}] RN Text components cannot contain View-like children. ` +
        'Wrap non-text content in Div/Box sibling containers.',
    );
  }
};

export const Div = React.forwardRef<any, DivProps>(function Div(
  { className, style, ...props },
  ref,
) {
  return <View ref={ref} className={className} style={style} {...props} />;
});

export const Span = React.forwardRef<Text, SpanProps>(function Span(
  { className, style, children, ...props },
  ref,
) {
  warnInvalidTextChildren('Span', children);
  return (
    <Text ref={ref} className={className} style={style} {...props}>
      {children}
    </Text>
  );
});

export const P = React.forwardRef<Text, PProps>(function P(
  { className, style, children, ...props },
  ref,
) {
  warnInvalidTextChildren('P', children);
  return (
    <Text ref={ref} className={className} style={style} {...props}>
      {children}
    </Text>
  );
});

export const A = React.forwardRef<Text, AProps>(function A(
  { className, style, href, onPress, children, ...props },
  ref,
) {
  warnInvalidTextChildren('A', children);

  return (
    <Text
      ref={ref}
      className={className}
      style={style}
      onPress={async () => {
        onPress?.();
        if (href) {
          await Linking.openURL(href);
        }
      }}
      {...props}
    >
      {children}
    </Text>
  );
});

export const Img = React.forwardRef<any, ImgProps>(function Img(
  { className, style, ...props },
  ref,
) {
  return <RNImage ref={ref} className={className} style={style} {...props} />;
});

export const ButtonBase = React.forwardRef<any, ButtonBaseProps>(
  function ButtonBase({ className, style, onPress, children, ...props }, ref) {
    return (
      <Pressable
        ref={ref}
        className={className}
        style={style}
        onPress={() => onPress?.()}
        {...props}
      >
        {children}
      </Pressable>
    );
  },
);

export const Box = Div;
export const Inline = Span;
export const TextBlock = P;
export const LinkText = A;
export const Image = Img;
export const PressableBase = ButtonBase;

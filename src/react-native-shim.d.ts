declare module 'react-native' {
  import type * as React from 'react';

  export type StyleProp<T> = T | T[] | null | undefined;
  export type ViewStyle = Record<string, unknown>;
  export type TextStyle = Record<string, unknown>;

  export type ViewProps = {
    children?: React.ReactNode;
    className?: string;
    style?: StyleProp<ViewStyle>;
    testID?: string;
    [key: string]: any;
  };

  export type TextProps = {
    children?: React.ReactNode;
    className?: string;
    style?: StyleProp<TextStyle>;
    onPress?: () => void;
    [key: string]: any;
  };

  export type PressableProps = ViewProps & {
    onPress?: () => void;
    onPressOut?: () => void;
    disabled?: boolean;
  };

  export type TextInputProps = {
    className?: string;
    value?: string;
    placeholder?: string;
    multiline?: boolean;
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
    onChangeText?: (value: string) => void;
    [key: string]: any;
  };

  export type ImageProps = ViewProps & {
    source?: unknown;
  };

  export const View: React.ComponentType<ViewProps>;
  export const Text: React.ComponentType<TextProps>;
  export const Pressable: React.ComponentType<PressableProps>;
  export const Image: React.ComponentType<ImageProps>;
  export const Modal: React.ComponentType<{
    visible?: boolean;
    transparent?: boolean;
    animationType?: 'none' | 'slide' | 'fade';
    onRequestClose?: () => void;
    children?: React.ReactNode;
  }>;
  export const Switch: React.ComponentType<{
    value?: boolean;
    disabled?: boolean;
    onValueChange?: (value: boolean) => void;
    [key: string]: any;
  }>;
  export const TextInput: React.ComponentType<TextInputProps>;
  export type ScrollViewProps = ViewProps & {
    horizontal?: boolean;
    showsHorizontalScrollIndicator?: boolean;
    showsVerticalScrollIndicator?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
    [key: string]: any;
  };

  export type FlatListProps<T = any> = ViewProps & {
    data: T[];
    renderItem: (info: { item: T; index: number }) => React.ReactElement | null;
    keyExtractor?: (item: T, index: number) => string;
    [key: string]: any;
  };

  export const ScrollView: React.ComponentType<ScrollViewProps>;
  export const FlatList: React.ComponentType<FlatListProps>;
  export const ActivityIndicator: React.ComponentType<{ size?: 'small' | 'large' | number; color?: string }>;
  export const Linking: {
    openURL: (url: string) => Promise<void>;
  };

  export type ScaledSize = {
    width: number;
    height: number;
    scale: number;
    fontScale: number;
  };

  export type DimensionsChangeEvent = {
    window: ScaledSize;
    screen: ScaledSize;
  };

  export type DimensionEventSubscription = {
    remove: () => void;
  };

  export const Dimensions: {
    get: (dim: 'window' | 'screen') => ScaledSize;
    addEventListener: (
      type: 'change',
      handler: (event: DimensionsChangeEvent) => void,
    ) => DimensionEventSubscription;
  };

  export const I18nManager: {
    isRTL: boolean;
    allowRTL: (allow: boolean) => void;
    forceRTL: (force: boolean) => void;
  };

  export type NativeScrollEvent = {
    contentInset: { bottom: number; left: number; right: number; top: number };
    contentOffset: { x: number; y: number };
    contentSize: { height: number; width: number };
    layoutMeasurement: { height: number; width: number };
    zoomScale: number;
  };

  export type NativeSyntheticEvent<T> = {
    nativeEvent: T;
    currentTarget: number;
    target: number;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault: () => void;
    stopPropagation: () => void;
    timeStamp: number;
    type: string;
  };

  export namespace Animated {
    export class Value {
      constructor(value: number);
      setValue(value: number): void;
      interpolate(config: { inputRange: number[]; outputRange: number[] | string[] }): Value;
    }

    export function timing(
      value: Value,
      config: { toValue: number; duration?: number; useNativeDriver?: boolean },
    ): { start: (callback?: (result: { finished: boolean }) => void) => void };

    export const View: React.ComponentType<ViewProps & { style?: any }>;
    export const Text: React.ComponentType<TextProps & { style?: any }>;
  }
}

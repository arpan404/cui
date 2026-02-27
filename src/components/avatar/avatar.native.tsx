import * as React from 'react';
import { View, Text, Image } from 'react-native';

import { cn } from '../../utils/cn';

type AvatarContextValue = {
  imageLoaded: boolean;
  setImageLoaded: (loaded: boolean) => void;
};

const AvatarContext = React.createContext<AvatarContextValue>({
  imageLoaded: false,
  setImageLoaded: () => {},
});

function Avatar({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <AvatarContext.Provider value={{ imageLoaded, setImageLoaded }}>
      <View
        className={cn(
          'relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full',
          className,
        )}
        {...props}
      >
        {children}
      </View>
    </AvatarContext.Provider>
  );
}

function AvatarImage({
  className,
  src,
  alt,
  onLoadEnd,
  onError,
  ...props
}: {
  className?: string;
  src?: string | { uri: string };
  alt?: string;
  onLoadEnd?: () => void;
  onError?: () => void;
}) {
  const { setImageLoaded } = React.useContext(AvatarContext);

  const source = React.useMemo(() => {
    if (!src) return undefined;
    if (typeof src === 'string') {
      if (src.trim().length === 0) return undefined;
      return { uri: src };
    }
    return src;
  }, [src]);

  if (!source) return null;

  return (
    <Image
      className={cn('aspect-square size-full', className)}
      source={source}
      accessibilityLabel={alt}
      onLoadEnd={() => {
        setImageLoaded(true);
        onLoadEnd?.();
      }}
      onError={() => {
        setImageLoaded(false);
        onError?.();
      }}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { imageLoaded } = React.useContext(AvatarContext);

  if (imageLoaded) return null;

  return (
    <View
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full absolute inset-0',
        className,
      )}
    >
      {typeof children === 'string' ? (
        <Text className='text-sm font-medium text-muted-foreground'>
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}

export { Avatar, AvatarImage, AvatarFallback };

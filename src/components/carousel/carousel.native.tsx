import * as React from 'react';
import { View, ScrollView, Pressable, Text, Dimensions, type NativeScrollEvent, type NativeSyntheticEvent } from 'react-native';

import { cn } from '../../utils/cn';

type CarouselApi = {
  scrollPrev: () => void;
  scrollNext: () => void;
  currentIndex: number;
  totalSlides: number;
};

type CarouselContextType = {
  orientation: 'horizontal' | 'vertical';
  scrollRef: React.RefObject<any>;
  currentIndex: number;
  totalSlides: number;
  setTotalSlides: (n: number) => void;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  itemWidth: number;
};

const CarouselContext = React.createContext<CarouselContextType | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error('useCarousel must be used within <Carousel>');
  return context;
}

function Carousel({
  orientation = 'horizontal',
  className,
  children,
  setApi,
}: {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  children?: React.ReactNode;
  setApi?: (api: CarouselApi) => void;
  opts?: Record<string, unknown>;
  plugins?: unknown[];
}) {
  const scrollRef = React.useRef<any>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [totalSlides, setTotalSlides] = React.useState(0);
  const itemWidth = Dimensions.get('window').width;

  const scrollPrev = React.useCallback(() => {
    if (currentIndex > 0) {
      scrollRef.current?.scrollTo({
        x: (currentIndex - 1) * itemWidth,
        animated: true,
      });
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex, itemWidth]);

  const scrollNext = React.useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      scrollRef.current?.scrollTo({
        x: (currentIndex + 1) * itemWidth,
        animated: true,
      });
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, totalSlides, itemWidth]);

  React.useEffect(() => {
    if (setApi) {
      setApi({ scrollPrev, scrollNext, currentIndex, totalSlides });
    }
  }, [setApi, scrollPrev, scrollNext, currentIndex, totalSlides]);

  return (
    <CarouselContext.Provider
      value={{
        orientation,
        scrollRef,
        currentIndex,
        totalSlides,
        setTotalSlides,
        scrollPrev,
        scrollNext,
        canScrollPrev: currentIndex > 0,
        canScrollNext: currentIndex < totalSlides - 1,
        itemWidth,
      }}
    >
      <View className={cn('relative', className)} accessibilityRole="adjustable">
        {children}
      </View>
    </CarouselContext.Provider>
  );
}

function CarouselContent({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { scrollRef, orientation, itemWidth } = useCarousel();
  const { setTotalSlides } = useCarousel();
  const childCount = React.Children.count(children);

  React.useEffect(() => {
    setTotalSlides(childCount);
  }, [childCount, setTotalSlides]);

  const handleMomentumEnd = React.useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offset = e.nativeEvent.contentOffset.x;
      const index = Math.round(offset / itemWidth);
    },
    [itemWidth],
  );

  return (
    <ScrollView
      ref={scrollRef}
      horizontal={orientation === 'horizontal'}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={handleMomentumEnd}
      className={cn('flex-row', className)}
    >
      {children}
    </ScrollView>
  );
}

function CarouselItem({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { itemWidth } = useCarousel();
  return (
    <View className={cn('', className)} style={{ width: itemWidth }}>
      {children}
    </View>
  );
}

function CarouselPrevious({
  className,
}: {
  className?: string;
  variant?: string;
  size?: string;
}) {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Pressable
      onPress={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(
        'absolute left-2 top-1/2 -translate-y-1/2 size-8 items-center justify-center rounded-full border border-input bg-background',
        !canScrollPrev && 'opacity-50',
        className,
      )}
      accessibilityRole="button"
      accessibilityLabel="Previous slide"
    >
      <Text className="text-foreground text-sm">&#8249;</Text>
    </Pressable>
  );
}

function CarouselNext({
  className,
}: {
  className?: string;
  variant?: string;
  size?: string;
}) {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Pressable
      onPress={scrollNext}
      disabled={!canScrollNext}
      className={cn(
        'absolute right-2 top-1/2 -translate-y-1/2 size-8 items-center justify-center rounded-full border border-input bg-background',
        !canScrollNext && 'opacity-50',
        className,
      )}
      accessibilityRole="button"
      accessibilityLabel="Next slide"
    >
      <Text className="text-foreground text-sm">&#8250;</Text>
    </Pressable>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
export type { CarouselApi };

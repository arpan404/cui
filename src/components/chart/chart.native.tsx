import * as React from 'react';
import { View, Text } from 'react-native';

import { cn } from '../../utils/cn';
import type { ChartConfig } from './chart.shared';

export type { ChartConfig };

// Native chart implementation provides a simplified container and legend.
// Actual charting on native requires a separate library (e.g., victory-native)
// which the consumer should use directly inside ChartContainer.

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }
  return context;
}

function ChartContainer({
  className,
  children,
  config,
}: {
  className?: string;
  children?: React.ReactNode;
  config: ChartConfig;
}) {
  return (
    <ChartContext.Provider value={{ config }}>
      <View className={cn('aspect-video justify-center', className)}>
        {children}
      </View>
    </ChartContext.Provider>
  );
}

function ChartLegendContent({
  className,
  hideIcon = false,
  items,
}: {
  className?: string;
  hideIcon?: boolean;
  items?: Array<{ key: string; color: string }>;
}) {
  const { config } = useChart();

  const legendItems = items || Object.entries(config).map(([key, cfg]) => ({
    key,
    color: cfg.color || '#888',
  }));

  if (!legendItems.length) {
    return null;
  }

  return (
    <View className={cn('flex-row items-center justify-center gap-4 pt-3', className)}>
      {legendItems.map(item => {
        const itemConfig = config[item.key];
        return (
          <View key={item.key} className='flex-row items-center gap-1.5'>
            {!hideIcon && (
              <View
                className='h-2 w-2 rounded-sm'
                style={{ backgroundColor: item.color }}
              />
            )}
            <Text className='text-xs text-muted-foreground'>
              {(itemConfig?.label as string) || item.key}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

// No-op components for API compatibility
// Actual tooltip rendering on native should be handled by
// the charting library (e.g., victory-native)
function ChartTooltip({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

function ChartTooltipContent() {
  return null;
}

function ChartLegend({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

function ChartStyle() {
  return null;
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  useChart,
};

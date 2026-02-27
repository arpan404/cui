import * as React from 'react';
import { Dimensions } from 'react-native';

export function useMediaQuery(_query: string): boolean {
  // On native, we approximate common breakpoints using screen width
  const [width, setWidth] = React.useState(() => Dimensions.get('window').width);

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWidth(window.width);
    });
    return () => subscription.remove();
  }, []);

  // Parse min-width from query string if possible
  const minWidthMatch = _query.match(/min-width:\s*(\d+)px/);
  if (minWidthMatch?.[1]) {
    return width >= parseInt(minWidthMatch[1], 10);
  }

  // Parse max-width from query string if possible
  const maxWidthMatch = _query.match(/max-width:\s*(\d+)px/);
  if (maxWidthMatch?.[1]) {
    return width <= parseInt(maxWidthMatch[1], 10);
  }

  // Default: can't parse, return false
  return false;
}

export function useIsMobile(): boolean {
  // On native, always considered mobile
  return true;
}

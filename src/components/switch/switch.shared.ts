export const switchSizes = {
  sm: { root: 'h-4 w-7', thumb: 'size-3 data-[state=checked]:translate-x-3' },
  default: { root: 'h-5 w-9', thumb: 'size-4 data-[state=checked]:translate-x-4' },
  lg: { root: 'h-6 w-11', thumb: 'size-5 data-[state=checked]:translate-x-5' },
} as const;

export type SwitchSize = keyof typeof switchSizes;

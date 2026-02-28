export const checkboxSizes = {
  sm: { root: 'size-3.5 rounded-[3px]', icon: 'size-3' },
  default: { root: 'size-4 rounded-[4px]', icon: 'size-3.5' },
  lg: { root: 'size-5 rounded-[5px]', icon: 'size-4' },
} as const;

export type CheckboxSize = keyof typeof checkboxSizes;

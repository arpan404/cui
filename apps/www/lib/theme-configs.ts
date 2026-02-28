export const THEME_CONFIG_STORAGE_KEY = 'cui-theme-config';

export const themeConfigs = [
  { key: 'default', label: 'Default' },
  { key: 'violet', label: 'Violet' },
  { key: 'emerald', label: 'Emerald' },
  { key: 'amber', label: 'Amber' },
] as const;

export type ThemeConfigKey = (typeof themeConfigs)[number]['key'];

export function isThemeConfigKey(value: string): value is ThemeConfigKey {
  return themeConfigs.some((config) => config.key === value);
}

'use client';

import { useEffect, useState } from 'react';
import {
  isThemeConfigKey,
  THEME_CONFIG_STORAGE_KEY,
  themeConfigs,
  type ThemeConfigKey,
} from '@/lib/theme-configs';

function applyThemeConfig(config: ThemeConfigKey) {
  const root = document.documentElement;

  if (config === 'default') {
    root.removeAttribute('data-theme-config');
    return;
  }

  root.setAttribute('data-theme-config', config);
}

export function ThemeConfigSelector() {
  const [mounted, setMounted] = useState(false);
  const [config, setConfig] = useState<ThemeConfigKey>('default');

  useEffect(() => {
    const stored = localStorage.getItem(THEME_CONFIG_STORAGE_KEY);
    const initialConfig = stored && isThemeConfigKey(stored) ? stored : 'default';

    setConfig(initialConfig);
    applyThemeConfig(initialConfig);
    setMounted(true);
  }, []);

  const onConfigChange = (nextConfig: ThemeConfigKey) => {
    setConfig(nextConfig);
    applyThemeConfig(nextConfig);
    localStorage.setItem(THEME_CONFIG_STORAGE_KEY, nextConfig);
  };

  if (!mounted) {
    return <div className="h-9 w-28 rounded-md border border-border" aria-hidden="true" />;
  }

  return (
    <label className="relative">
      <span className="sr-only">Select theme config</span>
      <select
        value={config}
        onChange={(event) => onConfigChange(event.target.value as ThemeConfigKey)}
        className="h-9 min-w-28 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Theme config"
      >
        {themeConfigs.map((item) => (
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}

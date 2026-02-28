'use client';

import { ThemeToggle } from './theme-toggle';
import { ThemeConfigSelector } from './theme-config-selector';
import { SearchDialog } from './search-dialog';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { categories, getComponentsByCategory } from '@/lib/components-meta';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/80 backdrop-blur-sm">
        <div className="flex items-center justify-between h-14 px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 -ml-2 rounded-md hover:bg-(--accent) transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/" className="font-bold lg:hidden">CUI</Link>
          </div>
          <div className="flex items-center gap-2">
            <SearchDialog />
            <ThemeConfigSelector />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="fixed inset-y-0 left-0 w-72 bg-(--background) border-r border-(--border) overflow-y-auto">
            <div className="p-4 border-b border-(--border) flex items-center justify-between">
              <Link href="/" className="font-bold text-lg" onClick={() => setMobileOpen(false)}>CUI</Link>
              <button
                className="p-1.5 rounded-md hover:bg-(--accent) transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-3 space-y-1">
              <Link
                href="/docs"
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/docs'
                    ? 'bg-(--accent) text-(--accent-foreground)'
                    : 'text-(--muted-foreground) hover:bg-(--accent)'
                }`}
              >
                Overview
              </Link>
              {categories
                .filter((cat) => cat.key !== 'getting-started')
                .map((cat) => {
                  const components = getComponentsByCategory(cat.key);
                  if (components.length === 0) return null;
                  return (
                    <div key={cat.key}>
                      <div className="px-3 py-2 text-sm font-medium text-(--foreground)">
                        {cat.label}
                      </div>
                      <div className="ml-2 space-y-0.5">
                        {components.map((comp) => {
                          const href = `/docs/components/${comp.slug}`;
                          return (
                            <Link
                              key={comp.slug}
                              href={href}
                              onClick={() => setMobileOpen(false)}
                              className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                                pathname === href
                                  ? 'bg-(--accent) text-(--accent-foreground) font-medium'
                                  : 'text-(--muted-foreground) hover:bg-(--accent)'
                              }`}
                            >
                              {comp.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

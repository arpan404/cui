'use client';

import { ThemeToggle } from './theme-toggle';
import { ThemeConfigSelector } from './theme-config-selector';
import { SearchDialog } from './search-dialog';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Div, Span, Button, ScrollArea, Separator } from 'cui';
import { categories, getComponentsByCategory } from '@/lib/components-meta';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <Div className="flex items-center justify-between h-14 px-4 lg:px-6">
          <Div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon-sm"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            <Link href="/" className="text-base font-bold tracking-tight lg:hidden">CUI</Link>
          </Div>
          <Div className="flex items-center gap-1.5">
            <SearchDialog />
            <ThemeConfigSelector />
            <ThemeToggle />
          </Div>
        </Div>
        <Separator />
      </header>

      {mobileOpen && (
        <Div className="fixed inset-0 z-50 lg:hidden">
          <Div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="fixed inset-y-0 left-0 w-72 bg-background overflow-y-auto">
            <Div className="px-5 h-14 flex items-center justify-between">
              <Link href="/" className="text-base font-bold tracking-tight" onClick={() => setMobileOpen(false)}>CUI</Link>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </Div>
            <Separator />
            <nav className="px-3 py-3 space-y-px">
              <Link
                href="/docs"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                  pathname === '/docs'
                    ? 'bg-accent text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent/60'
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
                    <Div key={cat.key} className="pt-4">
                      <Div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {cat.label}
                      </Div>
                      <Div className="mt-1 space-y-px">
                        {components.map((comp) => {
                          const href = `/docs/components/${comp.slug}`;
                          return (
                            <Link
                              key={comp.slug}
                              href={href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                                pathname === href
                                  ? 'bg-accent text-foreground font-medium'
                                  : 'text-muted-foreground hover:bg-accent/60'
                              }`}
                            >
                              {comp.name}
                            </Link>
                          );
                        })}
                      </Div>
                    </Div>
                  );
                })}
            </nav>
          </aside>
        </Div>
      )}
    </>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Div, Span, ButtonBase, ScrollArea, Separator } from 'cui';
import { categories, getComponentsByCategory } from '@/lib/components-meta';

const gettingStartedLinks = [
  { name: 'Installation', href: '/docs/installation' },
  { name: 'Theming', href: '/docs/theming' },
];

export function SidebarNav() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="hidden lg:flex w-[256px] shrink-0 flex-col border-r border-border h-screen sticky top-0 bg-background">
      <Div className="px-5 h-14 flex items-center">
        <Link href="/" className="text-base font-bold tracking-tight text-foreground">
          CUI
        </Link>
      </Div>

      <Separator />

      <ScrollArea className="flex-1">
        <nav className="px-3 py-3 space-y-px">
          <Link
            href="/docs"
            className={`flex items-center rounded-md px-3 py-1.5 text-[13px] transition-colors ${
              pathname === '/docs'
                ? 'bg-accent text-foreground font-medium'
                : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
            }`}
          >
            Overview
          </Link>

          {/* Getting Started */}
          <Div className="pt-4">
            <ButtonBase
              onClick={() => toggle('getting-started')}
              className="flex items-center justify-between w-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              <Span>Getting Started</Span>
              <svg
                className={`size-3 transition-transform duration-150 ${collapsed['getting-started'] ? '' : 'rotate-90'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </ButtonBase>
            {!collapsed['getting-started'] && (
              <Div className="mt-1 space-y-px">
                {gettingStartedLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                        isActive
                          ? 'bg-accent text-foreground font-medium'
                          : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </Div>
            )}
          </Div>

          {categories
            .filter((cat) => cat.key !== 'getting-started')
            .map((cat) => {
              const components = getComponentsByCategory(cat.key);
              if (components.length === 0) return null;
              const isCollapsed = collapsed[cat.key];

              return (
                <Div key={cat.key} className="pt-4">
                  <ButtonBase
                    onClick={() => toggle(cat.key)}
                    className="flex items-center justify-between w-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Span>{cat.label}</Span>
                    <svg
                      className={`size-3 transition-transform duration-150 ${isCollapsed ? '' : 'rotate-90'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </ButtonBase>
                  {!isCollapsed && (
                    <Div className="mt-1 space-y-px">
                      {components.map((comp) => {
                        const href = `/docs/components/${comp.slug}`;
                        const isActive = pathname === href;
                        return (
                          <Link
                            key={comp.slug}
                            href={href}
                            className={`flex items-center rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                              isActive
                                ? 'bg-accent text-foreground font-medium'
                                : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                            }`}
                          >
                            {comp.name}
                          </Link>
                        );
                      })}
                    </Div>
                  )}
                </Div>
              );
            })}
        </nav>
      </ScrollArea>
    </aside>
  );
}

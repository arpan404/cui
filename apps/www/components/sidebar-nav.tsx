'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-(--border) bg-(--sidebar-bg,var(--background)) h-screen sticky top-0 overflow-y-auto">
      <div className="p-4 border-b border-(--border)">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          CUI
        </Link>
        <p className="text-xs text-(--muted-foreground) mt-1">Component Library</p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        <Link
          href="/docs"
          className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            pathname === '/docs'
              ? 'bg-(--accent) text-(--accent-foreground)'
              : 'text-(--muted-foreground) hover:bg-(--accent) hover:text-(--accent-foreground)'
          }`}
        >
          Overview
        </Link>

        {/* Getting Started */}
        <div>
          <button
            onClick={() => toggle('getting-started')}
            className="flex items-center justify-between w-full rounded-md px-3 py-2 text-sm font-medium text-(--foreground) hover:bg-(--accent) transition-colors"
          >
            <span>Getting Started</span>
            <svg
              className={`size-4 text-(--muted-foreground) transition-transform ${collapsed['getting-started'] ? '' : 'rotate-90'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {!collapsed['getting-started'] && (
            <div className="ml-2 mt-0.5 space-y-0.5">
              {gettingStartedLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-(--accent) text-(--accent-foreground) font-medium'
                        : 'text-(--muted-foreground) hover:bg-(--accent) hover:text-(--accent-foreground)'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {categories
          .filter((cat) => cat.key !== 'getting-started')
          .map((cat) => {
            const components = getComponentsByCategory(cat.key);
            if (components.length === 0) return null;
            const isCollapsed = collapsed[cat.key];

            return (
              <div key={cat.key}>
                <button
                  onClick={() => toggle(cat.key)}
                  className="flex items-center justify-between w-full rounded-md px-3 py-2 text-sm font-medium text-(--foreground) hover:bg-(--accent) transition-colors"
                >
                  <span>{cat.label}</span>
                  <svg
                    className={`size-4 text-(--muted-foreground) transition-transform ${isCollapsed ? '' : 'rotate-90'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {!isCollapsed && (
                  <div className="ml-2 mt-0.5 space-y-0.5">
                    {components.map((comp) => {
                      const href = `/docs/components/${comp.slug}`;
                      const isActive = pathname === href;
                      return (
                        <Link
                          key={comp.slug}
                          href={href}
                          className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                            isActive
                              ? 'bg-(--accent) text-(--accent-foreground) font-medium'
                              : 'text-(--muted-foreground) hover:bg-(--accent) hover:text-(--accent-foreground)'
                          }`}
                        >
                          {comp.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
      </nav>
    </aside>
  );
}

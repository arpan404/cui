'use client';

import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { componentsMeta, categories } from '@/lib/components-meta';

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Open/close with Cmd+K / Ctrl+K
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Focus input when dialog opens, clear query when closing
  useEffect(() => {
    if (open) {
      // Small delay to ensure the dialog is rendered before focusing
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    } else {
      setQuery('');
    }
  }, [open]);

  // Filter components based on query
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return componentsMeta;
    return componentsMeta.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [query]);

  // Group filtered results by category
  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const comp of filtered) {
      const existing = map.get(comp.category);
      if (existing) {
        existing.push(comp);
      } else {
        map.set(comp.category, [comp]);
      }
    }
    // Return in the order defined by categories
    return categories
      .filter((cat) => map.has(cat.key))
      .map((cat) => ({
        key: cat.key,
        label: cat.label,
        components: map.get(cat.key)!,
      }));
  }, [filtered]);

  const navigate = useCallback(
    (slug: string) => {
      setOpen(false);
      router.push(`/docs/components/${slug}`);
    },
    [router]
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Dialog */}
      <div className="fixed left-1/2 top-[min(20%,8rem)] w-full max-w-lg -translate-x-1/2 px-4">
        <div className="overflow-hidden rounded-xl border border-(--border) bg-(--background) shadow-2xl">
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-(--border) px-4">
            <svg
              className="size-4 shrink-0 text-(--muted-foreground)"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search components..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 w-full bg-transparent text-sm text-(--foreground) placeholder:text-(--muted-foreground) outline-none"
            />
            <kbd className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded border border-(--border) bg-(--muted) px-1.5 py-0.5 text-[10px] font-medium text-(--muted-foreground)">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div
            ref={listRef}
            className="max-h-[min(60vh,24rem)] overflow-y-auto overscroll-contain p-2"
          >
            {grouped.length === 0 ? (
              <div className="py-8 text-center text-sm text-(--muted-foreground)">
                No components found.
              </div>
            ) : (
              grouped.map((group) => (
                <div key={group.key} className="mb-1">
                  <div className="px-2 py-1.5 text-xs font-medium text-(--muted-foreground)">
                    {group.label}
                  </div>
                  {group.components.map((comp) => (
                    <button
                      key={comp.slug}
                      onClick={() => navigate(comp.slug)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-(--accent) focus:bg-(--accent) focus:outline-none"
                    >
                      <svg
                        className="size-4 shrink-0 text-(--muted-foreground)"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-(--foreground)">
                          {comp.name}
                        </div>
                        <div className="truncate text-xs text-(--muted-foreground)">
                          {comp.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

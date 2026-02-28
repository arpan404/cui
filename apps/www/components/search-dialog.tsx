'use client';

import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Div, Span, Button, Kbd, ScrollArea } from 'cui';
import { componentsMeta, categories } from '@/lib/components-meta';

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    } else {
      setQuery('');
    }
  }, [open]);

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

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2 text-muted-foreground"
      >
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <Span className="hidden sm:inline text-[13px]">Search</Span>
        <Kbd className="hidden sm:inline-flex ml-2">
          <Span className="text-[10px]">&#8984;</Span>K
        </Kbd>
      </Button>

      {open && (
        <Div className="fixed inset-0 z-[100]">
          <Div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <Div className="fixed left-1/2 top-[min(20%,8rem)] w-full max-w-lg -translate-x-1/2 px-4">
            <Div className="overflow-hidden rounded-2xl bg-background shadow-2xl border border-border">
              <Div className="flex items-center gap-3 px-4">
                <svg
                  className="size-4 shrink-0 text-muted-foreground"
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
                  className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
                <Kbd className="hidden sm:inline-flex shrink-0">ESC</Kbd>
              </Div>

              <Div className="max-h-[min(60vh,24rem)] overflow-y-auto overscroll-contain p-2">
                {grouped.length === 0 ? (
                  <Div className="py-12 text-center text-sm text-muted-foreground">
                    No components found.
                  </Div>
                ) : (
                  grouped.map((group) => (
                    <Div key={group.key} className="mb-1">
                      <Div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {group.label}
                      </Div>
                      {group.components.map((comp) => (
                        <button
                          key={comp.slug}
                          onClick={() => navigate(comp.slug)}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors hover:bg-accent focus:bg-accent focus:outline-none"
                        >
                          <svg
                            className="size-3.5 shrink-0 text-muted-foreground"
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
                          <Div className="min-w-0 flex-1">
                            <Div className="font-medium text-foreground">
                              {comp.name}
                            </Div>
                            <Div className="truncate text-[11px] text-muted-foreground mt-0.5">
                              {comp.description}
                            </Div>
                          </Div>
                        </button>
                      ))}
                    </Div>
                  ))
                )}
              </Div>
            </Div>
          </Div>
        </Div>
      )}
    </>
  );
}

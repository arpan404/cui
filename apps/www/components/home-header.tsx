'use client';

import Link from 'next/link';
import { Div, Button } from 'cui';
import { ThemeToggle } from './theme-toggle';

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <Div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          CUI
        </Link>
        <nav className="flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs">Docs</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/components/button">Components</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </Div>
    </header>
  );
}

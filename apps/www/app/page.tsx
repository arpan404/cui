'use client';

import Link from 'next/link';
import { Div, Span, P } from 'cui/primitives';
import { Button } from 'cui/button';
import { Card } from 'cui/card';
import { Badge } from 'cui/badge';
import { Separator } from 'cui/separator';
import { InlineCode } from 'cui/typography';
import { categories, getComponentsByCategory } from '@/lib/components-meta';
import { HomeHeader } from '@/components/home-header';

const stats = [
  { value: '120+', label: 'Components' },
  { value: '2', label: 'Platforms' },
  { value: '100%', label: 'TypeScript' },
  { value: 'v4', label: 'Tailwind CSS' },
];

const features = [
  {
    title: 'Cross-Platform',
    description: 'One API for React DOM and React Native. Write once, render everywhere.',
  },
  {
    title: 'Radix Primitives',
    description: 'Built on accessible, unstyled Radix components. WAI-ARIA compliant out of the box.',
  },
  {
    title: 'OKLCH Colors',
    description: 'Wide-gamut, perceptually uniform colors via CSS custom properties. Zero runtime cost.',
  },
  {
    title: 'Dark Mode',
    description: 'First-class dark mode with automatic system detection. Every component, every state.',
  },
  {
    title: 'TypeScript First',
    description: 'Strict TypeScript from the ground up. Full IntelliSense, zero guesswork.',
  },
  {
    title: 'Tailwind CSS v4',
    description: 'Modern utility-first styling with the latest Tailwind. Variant-driven component APIs.',
  },
];

const categoryIcons: Record<string, string> = {
  form: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  'data-display': 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  feedback: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  overlay: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z',
  navigation: 'M4 6h16M4 12h16M4 18h7',
  animated: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  utilities: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  primitives: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  layout: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm10-2a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5z',
};

export default function HomePage() {
  return (
    <Div className="min-h-screen bg-background">
      <HomeHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-transparent" />
        <Div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[0.95]">
            Build better
            <br />
            interfaces.
          </h1>
          <P className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            A cross-platform React component library. One vocabulary for web and React Native, 120+ production-ready components.
          </P>
          <Div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/docs/components/button">Browse Components</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs/installation">Get Started</Link>
            </Button>
          </Div>
        </Div>
      </section>

      {/* Stats bar */}
      <section>
        <Div className="mx-auto max-w-6xl px-6">
          <Div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat) => (
              <Div key={stat.label} className="py-7 sm:py-8 text-center">
                <Div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{stat.value}</Div>
                <Div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</Div>
              </Div>
            ))}
          </Div>
        </Div>
      </section>

      <Separator />

      {/* Component Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Components</h2>
          <P className="mt-2 text-muted-foreground text-base max-w-2xl">
            Organized by purpose. Every component is accessible, themeable, and works across platforms.
          </P>
        </Div>
        <Div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {categories
            .filter((cat) => cat.key !== 'getting-started')
            .map((cat) => {
              const components = getComponentsByCategory(cat.key);
              if (components.length === 0) return null;
              const firstComponent = components[0];
              return (
                <Link key={cat.key} href={`/docs/components/${firstComponent.slug}`} className="group">
                  <Card className="p-5 transition-all duration-150 hover:shadow-md hover:bg-accent/30">
                    <Div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                      <svg
                        className="size-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={categoryIcons[cat.key] || 'M4 6h16M4 12h16M4 18h16'} />
                      </svg>
                    </Div>
                    <h3 className="text-sm font-semibold text-foreground">{cat.label}</h3>
                    <P className="mt-0.5 text-xs text-muted-foreground">{components.length} components</P>
                    <Div className="mt-3 flex flex-wrap gap-1">
                      {components.slice(0, 3).map((comp) => (
                        <Badge key={comp.slug} variant="secondary" className="text-[10px] px-1.5 py-0 h-5 rounded-md">
                          {comp.name}
                        </Badge>
                      ))}
                      {components.length > 3 && (
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5 rounded-md">
                          +{components.length - 3}
                        </Badge>
                      )}
                    </Div>
                  </Card>
                </Link>
              );
            })}
        </Div>
      </section>

      <Separator />

      {/* Features */}
      <section>
        <Div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Built right</h2>
            <P className="mt-2 text-muted-foreground text-base max-w-2xl">
              Engineering decisions that compound. Every component built on proven foundations.
            </P>
          </Div>
          <Div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {features.map((feature) => (
              <Div key={feature.title}>
                <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                <P className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{feature.description}</P>
              </Div>
            ))}
          </Div>
        </Div>
      </section>

      <Separator />

      {/* CTA */}
      <section>
        <Div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Start building</h2>
          <P className="mt-3 text-muted-foreground text-base max-w-md mx-auto">
            Install CUI in under a minute. One import, every component.
          </P>
          <Div className="mt-6 inline-flex rounded-lg bg-code-bg px-5 py-2.5">
            <InlineCode className="text-sm bg-transparent">npm install cui</InlineCode>
          </Div>
          <Div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <Link href="/docs/installation">Installation Guide</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/components/button">View Components</Link>
            </Button>
          </Div>
        </Div>
      </section>

      {/* Footer */}
      <Separator />
      <footer>
        <Div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <Div className="text-xs text-muted-foreground">
            <Span className="font-semibold text-foreground">CUI</Span>
            <Span className="mx-1.5 text-border">|</Span>
            Cross-Platform UI Components
          </Div>
          <Div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/docs/installation">Docs</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/docs/components/button">Components</Link>
            </Button>
          </Div>
        </Div>
      </footer>
    </Div>
  );
}

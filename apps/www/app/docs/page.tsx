'use client';

import Link from 'next/link';
import { Div, P } from 'cui/primitives';
import { Card } from 'cui/card';
import { Badge } from 'cui/badge';
import { categories, getComponentsByCategory } from '@/lib/components-meta';

export default function DocsPage() {
  return (
    <Div className="px-6 py-10 lg:px-10 max-w-4xl">
      <Div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <P className="mt-2 text-muted-foreground text-[15px] leading-relaxed">
          Browse all CUI components organized by category.
        </P>
      </Div>

      <Div className="space-y-12">
        {categories
          .filter((cat) => cat.key !== 'getting-started')
          .map((cat) => {
            const components = getComponentsByCategory(cat.key);
            if (components.length === 0) return null;
            return (
              <Div key={cat.key}>
                <Div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-lg font-semibold">{cat.label}</h2>
                  <Badge variant="secondary" className="text-[11px]">{components.length} components</Badge>
                </Div>
                <Div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {components.map((comp) => (
                    <Link
                      key={comp.slug}
                      href={`/docs/components/${comp.slug}`}
                      className="group"
                    >
                      <Card className="p-4 transition-all duration-150 hover:shadow-md hover:bg-accent/30">
                        <h3 className="font-medium text-sm">{comp.name}</h3>
                        <P className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{comp.description}</P>
                      </Card>
                    </Link>
                  ))}
                </Div>
              </Div>
            );
          })}
      </Div>
    </Div>
  );
}

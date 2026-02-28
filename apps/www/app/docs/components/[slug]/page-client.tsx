'use client';

import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
import { componentsMeta, categories } from '@/lib/components-meta';
import { demos } from '@/lib/demo-registry';
import Link from 'next/link';
import { Div, Span, P, Card, Badge, Separator } from 'cui';

export function ComponentPageClient({ slug }: { slug: string }) {
  const meta = componentsMeta.find((c) => c.slug === slug);
  if (!meta) return null;

  const category = categories.find((c) => c.key === meta.category);
  const demo = demos[slug];

  const categoryComponents = componentsMeta.filter((c) => c.category === meta.category);
  const currentIndex = categoryComponents.findIndex((c) => c.slug === slug);
  const prev = currentIndex > 0 ? categoryComponents[currentIndex - 1] : null;
  const next = currentIndex < categoryComponents.length - 1 ? categoryComponents[currentIndex + 1] : null;

  return (
    <Div className="px-6 py-10 lg:px-10 max-w-4xl">
      <Div className="mb-10">
        {category && (
          <Badge variant="secondary" className="mb-3 text-[11px] uppercase tracking-wider">
            {category.label}
          </Badge>
        )}
        <h1 className="text-3xl font-bold tracking-tight">{meta.name}</h1>
        <P className="mt-2 text-muted-foreground text-[15px] leading-relaxed">{meta.description}</P>
      </Div>

      {demo ? (
        <Div className="space-y-10">
          <Div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Preview</h2>
            <ComponentPreview>
              <demo.component />
            </ComponentPreview>
          </Div>

          <Div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Code</h2>
            <CodeBlock code={demo.source} />
          </Div>
        </Div>
      ) : (
        <Div className="rounded-xl border border-dashed border-border p-16 text-center">
          <P className="text-sm text-muted-foreground">
            Demo coming soon for {meta.name}.
          </P>
        </Div>
      )}

      {(prev || next) && (
        <>
          <Separator className="mt-16" />
          <Div className="pt-8 grid grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/docs/components/${prev.slug}`} className="group">
                <Card className="p-4 transition-colors hover:bg-accent/30">
                  <Span className="text-[11px] uppercase tracking-wider text-muted-foreground">Previous</Span>
                  <Span className="mt-1 block text-sm font-semibold group-hover:text-primary transition-colors">{prev.name}</Span>
                </Card>
              </Link>
            ) : <Div />}
            {next ? (
              <Link href={`/docs/components/${next.slug}`} className="group">
                <Card className="p-4 text-right transition-colors hover:bg-accent/30">
                  <Span className="text-[11px] uppercase tracking-wider text-muted-foreground">Next</Span>
                  <Span className="mt-1 block text-sm font-semibold group-hover:text-primary transition-colors">{next.name}</Span>
                </Card>
              </Link>
            ) : <Div />}
          </Div>
        </>
      )}
    </Div>
  );
}

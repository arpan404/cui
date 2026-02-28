'use client';

import { ComponentPreview } from '@/components/component-preview';
import { CodeBlock } from '@/components/code-block';
import { componentsMeta, categories } from '@/lib/components-meta';
import { demos } from '@/lib/demo-registry';

export function ComponentPageClient({ slug }: { slug: string }) {
  const meta = componentsMeta.find((c) => c.slug === slug);
  if (!meta) return null;

  const category = categories.find((c) => c.key === meta.category);
  const demo = demos[slug];

  return (
    <div className="px-6 py-12 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-8">
        {category && (
          <span className="text-xs font-medium text-(--primary) mb-2 block">
            {category.label}
          </span>
        )}
        <h1 className="text-3xl font-bold tracking-tight mb-2">{meta.name}</h1>
        <p className="text-(--muted-foreground)">{meta.description}</p>
      </div>

      {demo ? (
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
            <ComponentPreview>
              <demo.component />
            </ComponentPreview>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Usage</h2>
            <CodeBlock code={demo.source} />
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-(--border) bg-(--muted) p-12 text-center">
          <p className="text-(--muted-foreground)">
            Demo coming soon for {meta.name}.
          </p>
        </div>
      )}
    </div>
  );
}

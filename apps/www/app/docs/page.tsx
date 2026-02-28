import Link from 'next/link';
import { categories, getComponentsByCategory } from '@/lib/components-meta';

export default function DocsPage() {
  return (
    <div className="px-6 py-12 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Documentation</h1>
      <p className="text-(--muted-foreground) mb-10">
        Browse all CUI components organized by category.
      </p>

      <div className="space-y-10">
        {categories
          .filter((cat) => cat.key !== 'getting-started')
          .map((cat) => {
            const components = getComponentsByCategory(cat.key);
            if (components.length === 0) return null;
            return (
              <div key={cat.key}>
                <h2 className="text-xl font-semibold mb-4">{cat.label}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {components.map((comp) => (
                    <Link
                      key={comp.slug}
                      href={`/docs/components/${comp.slug}`}
                      className="rounded-lg border border-(--border) bg-(--card) p-4 hover:bg-(--accent) transition-colors"
                    >
                      <h3 className="font-medium text-sm mb-1">{comp.name}</h3>
                      <p className="text-xs text-(--muted-foreground) line-clamp-2">{comp.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

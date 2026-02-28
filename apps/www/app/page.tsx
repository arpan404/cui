import Link from 'next/link';

const features = [
  { title: '90+ Components', description: 'Comprehensive set of UI components for every use case' },
  { title: 'Cross-Platform', description: 'Works on both web (React DOM) and native (React Native)' },
  { title: 'Tailwind CSS v4', description: 'Built with the latest Tailwind CSS for modern styling' },
  { title: 'Radix Primitives', description: 'Accessible, unstyled primitives as the foundation' },
  { title: 'Dark Mode', description: 'Full dark mode support with OKLCH color system' },
  { title: 'TypeScript', description: 'Fully typed with strict TypeScript for better DX' },
];

const categories = [
  { name: 'Form', href: '/docs/components/button', count: 18 },
  { name: 'Data Display', href: '/docs/components/card', count: 12 },
  { name: 'Feedback', href: '/docs/components/alert', count: 7 },
  { name: 'Overlay', href: '/docs/components/dialog', count: 12 },
  { name: 'Navigation', href: '/docs/components/tabs', count: 9 },
  { name: 'Animated', href: '/docs/components/sparkles', count: 18 },
];

export default function HomePage() {
  return (
    <div className="px-6 py-12 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          CUI
        </h1>
        <p className="text-xl text-(--muted-foreground) max-w-2xl mb-8">
          A cross-platform React UI component library. One component vocabulary for web and React Native.
        </p>
        <div className="flex gap-3">
          <Link
            href="/docs/components/button"
            className="inline-flex items-center justify-center rounded-md bg-(--primary) px-6 py-2.5 text-sm font-medium text-(--primary-foreground) shadow-sm hover:opacity-90 transition-opacity"
          >
            Browse Components
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md border border-(--border) bg-(--background) px-6 py-2.5 text-sm font-medium shadow-sm hover:bg-(--accent) transition-colors"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-(--border) bg-(--card) p-5"
            >
              <h3 className="font-medium mb-1">{feature.title}</h3>
              <p className="text-sm text-(--muted-foreground)">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Component Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="flex items-center justify-between rounded-lg border border-(--border) bg-(--card) p-4 hover:bg-(--accent) transition-colors"
            >
              <span className="font-medium">{cat.name}</span>
              <span className="text-sm text-(--muted-foreground)">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

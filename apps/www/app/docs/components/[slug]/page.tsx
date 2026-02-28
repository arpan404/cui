import { notFound } from 'next/navigation';
import { componentsMeta } from '@/lib/components-meta';
import { ComponentPageClient } from './page-client';

export function generateStaticParams() {
  return componentsMeta.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // This is a sync workaround - we'll use a simple lookup
  return {
    title: 'CUI Component',
  };
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = componentsMeta.find((c) => c.slug === slug);
  if (!meta) notFound();

  return <ComponentPageClient slug={slug} />;
}

'use client';

import { useState } from 'react';

export function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border border-(--border) bg-(--code-bg,var(--muted)) overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-(--border)">
        <span className="text-xs text-(--muted-foreground) font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-(--muted-foreground) hover:text-(--foreground) transition-colors px-2 py-1 rounded"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono text-(--foreground)">{code}</code>
      </pre>
    </div>
  );
}

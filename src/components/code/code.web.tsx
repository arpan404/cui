'use client';

import * as React from 'react';
import { codeToHtml, type BundledLanguage } from 'shiki';

import { cn } from '../../utils/cn';

/* ── Types ── */

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: BundledLanguage | (string & {});
  filename?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
}

/* ── Copy button (internal) ── */

function CopyButton({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy code'}
      className={cn(
        'inline-flex items-center justify-center rounded-md p-1.5',
        'text-code-foreground/50 transition-colors',
        'hover:text-code-foreground hover:bg-code-foreground/10',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
    >
      {copied ? (
        <svg
          className="size-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg
          className="size-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
    </button>
  );
}

/* ── Highlighter cache ── */

const highlightCache = new Map<string, string>();

function getCacheKey(code: string, lang: string, theme: string) {
  return `${theme}:${lang}:${code}`;
}

/* ── CodeBlock component ── */

function CodeBlock({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = false,
  copyable = true,
  className,
  ...props
}: CodeBlockProps) {
  const [html, setHtml] = React.useState<string | null>(null);
  const [resolvedTheme, setResolvedTheme] = React.useState<'light' | 'dark'>('light');

  // Observe dark mode
  React.useEffect(() => {
    const root = document.documentElement;
    const update = () => setResolvedTheme(root.classList.contains('dark') ? 'dark' : 'light');
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Highlight code
  React.useEffect(() => {
    let cancelled = false;
    const theme = resolvedTheme === 'dark' ? 'github-dark-dimmed' : 'github-light';
    const key = getCacheKey(code, language, theme);

    const cached = highlightCache.get(key);
    if (cached) {
      setHtml(cached);
      return;
    }

    codeToHtml(code, {
      lang: language as BundledLanguage,
      theme,
    })
      .then((result) => {
        if (cancelled) return;
        highlightCache.set(key, result);
        setHtml(result);
      })
      .catch(() => {
        if (!cancelled) setHtml('');
      });

    return () => {
      cancelled = true;
    };
  }, [code, language, resolvedTheme]);

  const label = filename || language;

  return (
    <div
      data-slot="code-block"
      className={cn(
        'group relative rounded-xl bg-code-bg overflow-hidden',
        'border border-border/40',
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/30">
        <span className="text-[11px] font-medium uppercase tracking-wider text-code-foreground/40 select-none">
          {label}
        </span>
        {copyable && <CopyButton code={code} />}
      </div>

      {/* Code area */}
      {html ? (
        <div
          className={cn(
            'overflow-x-auto p-4 text-[13px] leading-[1.7]',
            '[&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0',
            '[&_code]:!bg-transparent [&_code]:font-mono [&_code]:text-[13px]',
            showLineNumbers && '[&_.line]:before:mr-6 [&_.line]:before:inline-block [&_.line]:before:w-4 [&_.line]:before:text-right [&_.line]:before:text-code-foreground/20 [&_.line]:before:content-[counter(line)] [&_.line]:counter-increment-[line] [&_code]:counter-reset-[line]',
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="overflow-x-auto p-4 text-[13px] leading-[1.7]">
          <code className="font-mono text-code-foreground">{code}</code>
        </pre>
      )}
    </div>
  );
}

export { CodeBlock, CopyButton };

'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { cn } from '../../utils/cn';
import { CodeBlock } from '../code/code.web';

/* ── Types ── */

export interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  copyableCodeBlocks?: boolean;
}

/* ── Markdown component ── */

function Markdown({ children, copyableCodeBlocks = true, className, ...props }: MarkdownProps) {
  return (
    <div
      data-slot="markdown"
      className={cn('prose-cui', className)}
      {...props}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ children, ...rest }) => (
            <h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6"
              {...rest}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...rest }) => (
            <h2
              className="scroll-m-20 text-3xl font-semibold tracking-tight mt-10 mb-4 first:mt-0"
              {...rest}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...rest }) => (
            <h3
              className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-3"
              {...rest}
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...rest }) => (
            <h4
              className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2"
              {...rest}
            >
              {children}
            </h4>
          ),

          // Paragraph
          p: ({ children, ...rest }) => (
            <p className="leading-7 [&:not(:first-child)]:mt-4" {...rest}>
              {children}
            </p>
          ),

          // Links
          a: ({ children, href, ...rest }) => (
            <a
              href={href}
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...rest}
            >
              {children}
            </a>
          ),

          // Bold / italic
          strong: ({ children, ...rest }) => (
            <strong className="font-semibold" {...rest}>{children}</strong>
          ),
          em: ({ children, ...rest }) => (
            <em className="italic" {...rest}>{children}</em>
          ),

          // Lists
          ul: ({ children, ...rest }) => (
            <ul className="my-4 ml-6 list-disc [&>li]:mt-2" {...rest}>
              {children}
            </ul>
          ),
          ol: ({ children, ...rest }) => (
            <ol className="my-4 ml-6 list-decimal [&>li]:mt-2" {...rest}>
              {children}
            </ol>
          ),
          li: ({ children, ...rest }) => (
            <li className="leading-7" {...rest}>{children}</li>
          ),

          // Blockquote
          blockquote: ({ children, ...rest }) => (
            <blockquote
              className="mt-4 border-l-2 border-border pl-6 italic text-muted-foreground"
              {...rest}
            >
              {children}
            </blockquote>
          ),

          // Horizontal rule
          hr: ({ ...rest }) => (
            <hr className="my-6 border-border" {...rest} />
          ),

          // Code (inline and block)
          code: ({ children, className: codeClassName, ...rest }) => {
            const match = /language-(\w+)/.exec(codeClassName || '');

            // Block code (inside <pre>)
            if (match) {
              const codeString = String(children).replace(/\n$/, '');
              return (
                <CodeBlock
                  code={codeString}
                  language={match[1]}
                  copyable={copyableCodeBlocks}
                />
              );
            }

            // Inline code
            return (
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
                {...rest}
              >
                {children}
              </code>
            );
          },

          // Pre wrapper - just pass through since CodeBlock handles it
          pre: ({ children }) => <>{children}</>,

          // Table
          table: ({ children, ...rest }) => (
            <div className="my-4 w-full overflow-x-auto">
              <table className="w-full border-collapse text-sm" {...rest}>
                {children}
              </table>
            </div>
          ),
          thead: ({ children, ...rest }) => (
            <thead className="border-b border-border" {...rest}>
              {children}
            </thead>
          ),
          tbody: ({ children, ...rest }) => (
            <tbody {...rest}>{children}</tbody>
          ),
          tr: ({ children, ...rest }) => (
            <tr className="border-b border-border last:border-0" {...rest}>
              {children}
            </tr>
          ),
          th: ({ children, ...rest }) => (
            <th className="px-4 py-2.5 text-left font-medium" {...rest}>
              {children}
            </th>
          ),
          td: ({ children, ...rest }) => (
            <td className="px-4 py-2.5" {...rest}>
              {children}
            </td>
          ),

          // Images
          img: ({ src, alt, ...rest }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt || ''}
              className="rounded-lg max-w-full h-auto my-4"
              loading="lazy"
              {...rest}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

export { Markdown };

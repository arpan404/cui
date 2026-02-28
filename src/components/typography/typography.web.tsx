import * as React from 'react';

import { cn } from '../../utils/cn';

function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      data-slot="h1"
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      {...props}
    />
  );
}

function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="h2"
      className={cn('scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    />
  );
}

function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="h3"
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

function H4({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      data-slot="h4"
      className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

function TypographyP({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="typography-p"
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  );
}

function Lead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="lead"
      className={cn('text-xl text-muted-foreground', className)}
      {...props}
    />
  );
}

function Large({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="large"
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  );
}

function Small({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <small
      data-slot="small"
      className={cn('text-sm font-medium leading-none', className)}
      {...props}
    />
  );
}

function Muted({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="muted"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

function Blockquote({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      data-slot="blockquote"
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  );
}

function InlineCode({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      data-slot="inline-code"
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      {...props}
    />
  );
}

function List({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      data-slot="list"
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    />
  );
}

export { H1, H2, H3, H4, TypographyP, Lead, Large, Small, Muted, Blockquote, InlineCode, List };

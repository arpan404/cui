import { Div, Span, P, A } from 'cui/primitives';
import { InlineCode } from 'cui/typography';
import { CodeBlock } from 'cui/code';

export default function InstallationPage() {
  return (
    <Div className="px-6 py-10 lg:px-10 max-w-4xl">
      <Div className="mb-10">
        <Span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
          Getting Started
        </Span>
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <P className="mt-2 text-muted-foreground text-[15px] leading-relaxed">
          Get started with CUI in your React project.
        </P>
      </Div>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">1. Install the package</h2>
        <P className="text-sm text-muted-foreground mb-4">
          Install CUI using your preferred package manager:
        </P>
        <Div className="space-y-3">
          {[
            { label: 'npm', code: 'npm install cui' },
            { label: 'pnpm', code: 'pnpm add cui' },
            { label: 'bun', code: 'bun add cui' },
          ].map(({ label, code }) => (
            <CodeBlock key={label} code={code} language="bash" filename={label} />
          ))}
        </Div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">2. Set up Tailwind CSS v4</h2>
        <P className="text-sm text-muted-foreground mb-4">
          CUI is built on Tailwind CSS v4. Install Tailwind CSS and its dependencies:
        </P>
        <CodeBlock
          code="npm install tailwindcss @tailwindcss/postcss postcss"
          language="bash"
        />
        <P className="text-sm text-muted-foreground my-4">
          Then add the Tailwind PostCSS plugin to your <InlineCode>postcss.config.mjs</InlineCode>:
        </P>
        <CodeBlock
          code={`/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`}
          language="javascript"
          filename="postcss.config.mjs"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">3. Import CUI styles</h2>
        <P className="text-sm text-muted-foreground mb-4">
          In your main CSS file (e.g. <InlineCode>globals.css</InlineCode>), import Tailwind and CUI styles:
        </P>
        <CodeBlock
          code={`@import "tailwindcss";
@import "cui/styles.css";`}
          language="css"
          filename="globals.css"
        />
        <P className="mt-3 text-xs text-muted-foreground">
          This single import brings in all CUI component styles and the default theme tokens built on OKLCH colors.
        </P>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">4. Start using components</h2>
        <P className="text-sm text-muted-foreground mb-4">
          Import and use any CUI component in your React code:
        </P>
        <CodeBlock
          code={`import { Button } from "cui/button";
import { Card, CardHeader, CardTitle, CardContent } from "cui/card";

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to CUI</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Start building your UI with CUI components.</p>
        <Button className="mt-4">Get Started</Button>
      </CardContent>
    </Card>
  );
}`}
          language="tsx"
          filename="App.tsx"
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Next steps</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <Span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
            Learn how to <A href="/docs/theming" className="text-primary hover:underline underline-offset-4">customize the theme</A> with CSS custom properties.
          </li>
          <li className="flex items-start gap-2">
            <Span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
            Browse the <A href="/docs" className="text-primary hover:underline underline-offset-4">component documentation</A> for usage details and examples.
          </li>
        </ul>
      </section>
    </Div>
  );
}

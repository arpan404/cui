export default function InstallationPage() {
  return (
    <div className="px-6 py-12 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Installation</h1>
      <p className="text-(--muted-foreground) mb-10">
        Get started with CUI in your React project.
      </p>

      {/* Install the package */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">1. Install the package</h2>
        <p className="text-(--muted-foreground) mb-4">
          Install CUI using your preferred package manager:
        </p>

        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium mb-1.5">npm</p>
            <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
              <code>npm install cui</code>
            </pre>
          </div>
          <div>
            <p className="text-sm font-medium mb-1.5">pnpm</p>
            <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
              <code>pnpm add cui</code>
            </pre>
          </div>
          <div>
            <p className="text-sm font-medium mb-1.5">bun</p>
            <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
              <code>bun add cui</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Set up Tailwind CSS v4 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">2. Set up Tailwind CSS v4</h2>
        <p className="text-(--muted-foreground) mb-4">
          CUI is built on Tailwind CSS v4. If you haven&apos;t already, install Tailwind CSS and its
          dependencies:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto mb-4">
          <code>npm install tailwindcss @tailwindcss/postcss postcss</code>
        </pre>
        <p className="text-(--muted-foreground) mb-4">
          Then add the Tailwind PostCSS plugin to your <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">postcss.config.mjs</code>:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
          <code>{`/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`}</code>
        </pre>
      </section>

      {/* Import CUI styles */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">3. Import CUI styles</h2>
        <p className="text-(--muted-foreground) mb-4">
          In your main CSS file (e.g. <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">globals.css</code>),
          import Tailwind and CUI styles:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
          <code>{`@import "tailwindcss";
@import "cui/styles.css";`}</code>
        </pre>
        <p className="text-sm text-(--muted-foreground) mt-3">
          This single import brings in all CUI component styles and the default theme tokens built
          on OKLCH colors.
        </p>
      </section>

      {/* Basic usage */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">4. Start using components</h2>
        <p className="text-(--muted-foreground) mb-4">
          Import and use any CUI component in your React code:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
          <code>{`import { Button } from "cui/button";
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
}`}</code>
        </pre>
      </section>

      {/* Next steps */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Next steps</h2>
        <ul className="list-disc list-inside space-y-2 text-(--muted-foreground)">
          <li>
            Learn how to <a href="/docs/theming" className="text-(--primary) underline underline-offset-4 hover:opacity-80">customize the theme</a> with CSS custom properties.
          </li>
          <li>
            Browse the <a href="/docs" className="text-(--primary) underline underline-offset-4 hover:opacity-80">component documentation</a> for usage details and examples.
          </li>
        </ul>
      </section>
    </div>
  );
}

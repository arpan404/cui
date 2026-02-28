export default function ThemingPage() {
  return (
    <div className="px-6 py-12 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Theming</h1>
      <p className="text-(--muted-foreground) mb-10">
        Customize the look and feel of CUI using CSS custom properties.
      </p>

      {/* How theming works */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">How theming works</h2>
        <p className="text-(--muted-foreground) mb-4">
          CUI uses CSS custom properties (CSS variables) for all of its colors. These variables are
          defined on the <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">:root</code> selector
          and can be overridden to match your brand. All color values use the
          OKLCH color space for perceptually uniform and wide-gamut colors.
        </p>
        <p className="text-(--muted-foreground)">
          Because CUI relies on standard CSS custom properties rather than a JavaScript theme
          provider, theming is fast, has zero runtime cost, and works with server-side rendering
          out of the box.
        </p>
      </section>

      {/* Theme tokens */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Theme tokens</h2>
        <p className="text-(--muted-foreground) mb-6">
          Below is the complete list of CSS custom properties used by CUI components. Each token
          controls a specific aspect of the UI.
        </p>

        <div className="overflow-x-auto rounded-lg border border-(--border)">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-(--border) bg-(--muted)">
                <th className="text-left px-4 py-3 font-medium">Token</th>
                <th className="text-left px-4 py-3 font-medium">Purpose</th>
                <th className="text-left px-4 py-3 font-medium">Default (Light)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--border)">
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--background</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Page background</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(1 0 0)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--foreground</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Default text color</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.145 0 0)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--primary</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Primary brand color (buttons, links)</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.58 0.233 255)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--primary-foreground</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Text on primary backgrounds</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(1 0 0)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--secondary</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Secondary accent color</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.967 0.001 286.375)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--secondary-foreground</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Text on secondary backgrounds</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.21 0.006 285.885)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--muted</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Muted / subtle background</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.967 0.001 286.375)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--muted-foreground</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Dimmed / secondary text</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.552 0.016 285.938)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--accent</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Hover / active state background</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.967 0.001 286.375)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--accent-foreground</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Text on accent backgrounds</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.21 0.006 285.885)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--destructive</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Destructive / error actions</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.577 0.245 27.325)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--border</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Default border color</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.922 0 0)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--ring</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Focus ring color</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.58 0.233 255)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--code-bg</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Code block background</td>
                <td className="px-4 py-3 font-mono text-xs">oklch(0.97 0 0)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">--radius</td>
                <td className="px-4 py-3 text-(--muted-foreground)">Default border-radius</td>
                <td className="px-4 py-3 font-mono text-xs">0.5rem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Customizing colors */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Customizing colors with OKLCH</h2>
        <p className="text-(--muted-foreground) mb-4">
          All CUI colors are defined using the OKLCH color space. OKLCH provides perceptually
          uniform lightness, meaning two colors with the same L (lightness) value will appear
          equally bright to the human eye. The format is:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto mb-4">
          <code>{`oklch(L C H)

L = Lightness  (0 to 1, where 0 is black and 1 is white)
C = Chroma     (0 to ~0.4, color intensity / saturation)
H = Hue        (0 to 360, color wheel angle)`}</code>
        </pre>
        <p className="text-(--muted-foreground) mb-4">
          To customize the theme, override the CSS custom properties in your own stylesheet. Place
          your overrides after the CUI import:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
          <code>{`@import "tailwindcss";
@import "cui/styles.css";

:root {
  /* Change primary to a teal */
  --primary: oklch(0.55 0.2 180);
  --primary-foreground: oklch(1 0 0);
  --ring: oklch(0.55 0.2 180);

  /* Warmer border color */
  --border: oklch(0.92 0.01 80);

  /* Larger border radius */
  --radius: 0.75rem;
}`}</code>
        </pre>
        <p className="text-sm text-(--muted-foreground) mt-3">
          Because OKLCH supports wide-gamut colors, you get access to more vivid colors on displays
          that support the P3 color space (most modern screens).
        </p>
      </section>

      {/* Dark mode */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Dark mode</h2>
        <p className="text-(--muted-foreground) mb-4">
          CUI supports dark mode through the <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">.dark</code> class
          applied to the <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">&lt;html&gt;</code> element.
          When the class is present, the dark mode token values take effect automatically.
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto mb-4">
          <code>{`<!-- Light mode (default) -->
<html lang="en">

<!-- Dark mode -->
<html lang="en" class="dark">`}</code>
        </pre>
        <p className="text-(--muted-foreground) mb-4">
          Override the dark mode tokens under the <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">.dark</code> selector
          to customize the dark theme:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
          <code>{`.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.65 0.233 255);
  --primary-foreground: oklch(0.145 0 0);
  --border: oklch(0.3 0 0);
  /* ... override any token for dark mode */
}`}</code>
        </pre>
      </section>

      {/* Using with next-themes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Using with next-themes</h2>
        <p className="text-(--muted-foreground) mb-4">
          For Next.js projects, use <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">next-themes</code> to
          handle dark mode toggling and system preference detection:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto mb-4">
          <code>{`npm install next-themes`}</code>
        </pre>
        <p className="text-(--muted-foreground) mb-4">
          Wrap your application with the <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">ThemeProvider</code>:
        </p>
        <pre className="bg-(--code-bg) rounded-lg p-4 text-sm overflow-x-auto">
          <code>{`import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}</code>
        </pre>
        <p className="text-sm text-(--muted-foreground) mt-3">
          The <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">attribute=&quot;class&quot;</code> setting
          ensures <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">next-themes</code> toggles
          the <code className="bg-(--code-bg) rounded px-1.5 py-0.5 text-sm">.dark</code> class on the HTML element,
          which is exactly what CUI expects.
        </p>
      </section>
    </div>
  );
}

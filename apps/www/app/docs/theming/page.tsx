import { Div, Span, P } from 'cui/primitives';
import { InlineCode } from 'cui/typography';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from 'cui/table';
import { CodeBlock } from 'cui/code';

export default function ThemingPage() {
  return (
    <Div className="px-6 py-10 lg:px-10 max-w-4xl">
      <Div className="mb-10">
        <Span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary mb-3">
          Getting Started
        </Span>
        <h1 className="text-3xl font-bold tracking-tight">Theming</h1>
        <P className="mt-2 text-muted-foreground text-[15px] leading-relaxed">
          Customize the look and feel of CUI using CSS custom properties.
        </P>
      </Div>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">How theming works</h2>
        <P className="text-sm text-muted-foreground mb-4 leading-relaxed">
          CUI uses CSS custom properties (CSS variables) for all of its colors. These variables are
          defined on the <InlineCode>:root</InlineCode> selector
          and can be overridden to match your brand. All color values use the OKLCH color space for perceptually uniform and wide-gamut colors.
        </P>
        <P className="text-sm text-muted-foreground leading-relaxed">
          Because CUI relies on standard CSS custom properties rather than a JavaScript theme
          provider, theming is fast, has zero runtime cost, and works with server-side rendering out of the box.
        </P>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Theme tokens</h2>
        <P className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Below is the complete list of CSS custom properties used by CUI components.
        </P>

        <Div className="overflow-x-auto rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-[11px] uppercase tracking-wider">Token</TableHead>
                <TableHead className="text-[11px] uppercase tracking-wider">Purpose</TableHead>
                <TableHead className="text-[11px] uppercase tracking-wider">Default (Light)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ['--background', 'Page background', 'oklch(0.995 0 0)'],
                ['--foreground', 'Default text color', 'oklch(0.13 0.02 261)'],
                ['--primary', 'Primary brand color', 'oklch(0.37 0.08 261)'],
                ['--primary-foreground', 'Text on primary backgrounds', 'oklch(0.985 0 0)'],
                ['--secondary', 'Secondary accent color', 'oklch(0.945 0.01 264)'],
                ['--secondary-foreground', 'Text on secondary backgrounds', 'oklch(0.2 0.02 261)'],
                ['--muted', 'Muted / subtle background', 'oklch(0.945 0.01 264)'],
                ['--muted-foreground', 'Dimmed / secondary text', 'oklch(0.42 0.02 264)'],
                ['--accent', 'Hover / active state background', 'oklch(0.93 0.012 264)'],
                ['--accent-foreground', 'Text on accent backgrounds', 'oklch(0.2 0.02 261)'],
                ['--destructive', 'Destructive / error actions', 'oklch(0.55 0.22 27)'],
                ['--destructive-foreground', 'Text on destructive backgrounds', 'oklch(0.985 0 0)'],
                ['--success', 'Success state color', 'oklch(0.52 0.17 152)'],
                ['--warning', 'Warning state color', 'oklch(0.68 0.16 75)'],
                ['--info', 'Informational state color', 'oklch(0.52 0.18 250)'],
                ['--border', 'Default border color', 'oklch(0.88 0.005 264)'],
                ['--input', 'Input border color', 'oklch(0.87 0.008 264)'],
                ['--ring', 'Focus ring color', 'oklch(0.37 0.08 261)'],
                ['--radius', 'Default border-radius', '0.625rem'],
              ].map(([token, purpose, defaultVal]) => (
                <TableRow key={token}>
                  <TableCell className="font-mono text-xs text-primary">{token}</TableCell>
                  <TableCell className="text-muted-foreground">{purpose}</TableCell>
                  <TableCell className="font-mono text-xs">{defaultVal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Customizing colors with OKLCH</h2>
        <P className="text-sm text-muted-foreground mb-4 leading-relaxed">
          All CUI colors are defined using the OKLCH color space. OKLCH provides perceptually
          uniform lightness, meaning two colors with the same L (lightness) value will appear
          equally bright to the human eye.
        </P>
        <CodeBlock
          code={`oklch(L C H)

L = Lightness  (0 to 1, where 0 is black and 1 is white)
C = Chroma     (0 to ~0.4, color intensity / saturation)
H = Hue        (0 to 360, color wheel angle)`}
          language="text"
          copyable={false}
        />
        <P className="text-sm text-muted-foreground my-4 leading-relaxed">
          Override the CSS custom properties after the CUI import:
        </P>
        <CodeBlock
          code={`@import "tailwindcss";
@import "cui/styles.css";

:root {
  --primary: oklch(0.55 0.2 180);
  --primary-foreground: oklch(0.985 0 0);
  --ring: oklch(0.55 0.2 180);
  --border: oklch(0.88 0.01 180);
  --radius: 0.75rem;
}`}
          language="css"
          filename="globals.css"
        />
        <P className="mt-3 text-xs text-muted-foreground">
          OKLCH supports wide-gamut colors, giving you access to more vivid colors on P3 displays.
        </P>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Dark mode</h2>
        <P className="text-sm text-muted-foreground mb-4 leading-relaxed">
          CUI supports dark mode through the <InlineCode>.dark</InlineCode> class
          applied to the <InlineCode>&lt;html&gt;</InlineCode> element.
        </P>
        <CodeBlock
          code={`<!-- Light mode (default) -->
<html lang="en">

<!-- Dark mode -->
<html lang="en" class="dark">`}
          language="html"
        />
        <P className="text-sm text-muted-foreground my-4 leading-relaxed">
          Override the dark mode tokens under the <InlineCode>.dark</InlineCode> selector:
        </P>
        <CodeBlock
          code={`.dark {
  --background: oklch(0.13 0.015 264);
  --foreground: oklch(0.94 0 0);
  --primary: oklch(0.7 0.18 255);
  --primary-foreground: oklch(0.13 0.015 264);
  --border: oklch(0.26 0.01 264);
}`}
          language="css"
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Using with next-themes</h2>
        <P className="text-sm text-muted-foreground mb-4 leading-relaxed">
          For Next.js projects, use <InlineCode>next-themes</InlineCode> to
          handle dark mode toggling and system preference detection:
        </P>
        <CodeBlock code="npm install next-themes" language="bash" />
        <P className="text-sm text-muted-foreground my-4 leading-relaxed">
          Wrap your application with the <InlineCode>ThemeProvider</InlineCode>:
        </P>
        <CodeBlock
          code={`import { ThemeProvider } from "next-themes";

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
}`}
          language="tsx"
          filename="layout.tsx"
        />
        <P className="mt-3 text-xs text-muted-foreground">
          The <InlineCode>attribute=&quot;class&quot;</InlineCode> setting
          ensures <InlineCode>next-themes</InlineCode> toggles
          the <InlineCode>.dark</InlineCode> class on the HTML element,
          which is exactly what CUI expects.
        </P>
      </section>
    </Div>
  );
}

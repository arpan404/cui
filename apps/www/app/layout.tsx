import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CUI - Cross-Platform UI Components',
  description: 'A cross-platform React UI component library for web and React Native. 120+ components, TypeScript-first, dark mode, Tailwind CSS v4.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

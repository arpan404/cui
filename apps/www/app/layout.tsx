import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { SidebarNav } from '@/components/sidebar-nav';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'CUI - Cross-Platform UI Components',
  description: 'A cross-platform React UI component library for web and React Native',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-(--background) text-(--foreground) antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <SidebarNav />
            <div className="flex-1 flex flex-col min-w-0">
              <SiteHeader />
              <main className="flex-1 overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

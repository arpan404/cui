import { Div } from 'cui/primitives';
import { SidebarNav } from '@/components/sidebar-nav';
import { SiteHeader } from '@/components/site-header';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Div className="flex min-h-screen">
      <SidebarNav />
      <Div className="flex-1 flex flex-col min-w-0">
        <SiteHeader />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </Div>
    </Div>
  );
}

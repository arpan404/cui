'use client';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'cui/components';

export function TabsDemo() {
  return (
    <div className="space-y-8 w-full max-w-md">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="text-sm text-(--muted-foreground) p-4">Manage your account settings.</p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm text-(--muted-foreground) p-4">Change your password here.</p>
        </TabsContent>
        <TabsContent value="settings">
          <p className="text-sm text-(--muted-foreground) p-4">Configure your preferences.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const tabsSource = `import { Tabs, TabsList, TabsTrigger, TabsContent } from 'cui/components';

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
</Tabs>`;

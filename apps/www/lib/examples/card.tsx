'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from 'cui/components';

export function CardDemo() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Card content with any elements you need.</p>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Sizes</p>
        <div className="space-y-3">
          <Card size="sm">
            <CardHeader><CardTitle>Small Card</CardTitle></CardHeader>
            <CardContent><p className="text-sm">Compact padding.</p></CardContent>
          </Card>
          <Card size="lg">
            <CardHeader><CardTitle>Large Card</CardTitle></CardHeader>
            <CardContent><p className="text-sm">Spacious padding.</p></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export const cardSource = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'cui/components';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>

<Card size="sm">...</Card>
<Card size="lg">...</Card>`;

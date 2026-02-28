'use client';
import { Alert, AlertTitle, AlertDescription } from 'cui/components';

export function AlertDemo() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review before continuing.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved.</AlertDescription>
      </Alert>
    </div>
  );
}

export const alertSource = `import { Alert, AlertTitle, AlertDescription } from 'cui/components';

<Alert variant="default">
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
</Alert>
<Alert variant="destructive">...</Alert>
<Alert variant="warning">...</Alert>
<Alert variant="success">...</Alert>`;

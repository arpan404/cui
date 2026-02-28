'use client';
import { Progress } from 'cui/components';

export function ProgressDemo() {
  return (
    <div className="space-y-8 w-full max-w-sm">
      <div>
        <p className="text-sm text-muted-foreground mb-3">Sizes</p>
        <div className="space-y-4">
          <Progress size="sm" value={40} />
          <Progress value={60} />
          <Progress size="lg" value={80} />
          <Progress size="xl" value={90} />
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Variants</p>
        <div className="space-y-4">
          <Progress value={70} />
          <Progress variant="success" value={100} />
          <Progress variant="warning" value={50} />
          <Progress variant="destructive" value={30} />
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-3">Indeterminate</p>
        <Progress />
      </div>
    </div>
  );
}

export const progressSource = `import { Progress } from 'cui/components';

<Progress size="sm" value={40} />
<Progress value={60} />
<Progress variant="success" value={100} />
<Progress variant="warning" value={50} />
<Progress /> {/* Indeterminate */}`;

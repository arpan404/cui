'use client';
import { Avatar, AvatarFallback } from 'cui/components';

export function AvatarDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-end">
      <div className="text-center">
        <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
        <p className="text-xs text-(--muted-foreground) mt-1">xs</p>
      </div>
      <div className="text-center">
        <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
        <p className="text-xs text-(--muted-foreground) mt-1">sm</p>
      </div>
      <div className="text-center">
        <Avatar><AvatarFallback>DF</AvatarFallback></Avatar>
        <p className="text-xs text-(--muted-foreground) mt-1">default</p>
      </div>
      <div className="text-center">
        <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
        <p className="text-xs text-(--muted-foreground) mt-1">lg</p>
      </div>
      <div className="text-center">
        <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
        <p className="text-xs text-(--muted-foreground) mt-1">xl</p>
      </div>
    </div>
  );
}

export const avatarSource = `import { Avatar, AvatarImage, AvatarFallback } from 'cui/components';

<Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
<Avatar><AvatarFallback>DF</AvatarFallback></Avatar>
<Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>`;

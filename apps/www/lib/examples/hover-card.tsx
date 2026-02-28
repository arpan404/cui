'use client';
import { HoverCard, HoverCardTrigger, HoverCardContent, Button, Avatar, AvatarFallback } from 'cui/components';

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@username</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar><AvatarFallback>UN</AvatarFallback></Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@username</h4>
            <p className="text-sm text-(--muted-foreground)">Software developer building cool things.</p>
            <p className="text-xs text-(--muted-foreground)">Joined December 2021</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export const hoverCardSource = `import { HoverCard, HoverCardTrigger, HoverCardContent } from 'cui/components';

<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    Profile content here
  </HoverCardContent>
</HoverCard>`;

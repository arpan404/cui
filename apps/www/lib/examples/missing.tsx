'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import type { ColumnDef } from '@tanstack/react-table';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogRadix,
  AlertDialogRadixContent,
  AlertDialogTitle,
  AlertDialogTrigger,
  AnimatedTooltip,
  AspectRatio,
  Button,
  ButtonGroup,
  Calendar,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card3DBody,
  Card3DContainer,
  Card3DItem,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Combobox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  DataTable,
  DatePicker,
  DateTimePicker,
  DirectionProvider,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Empty,
  EmptyAction,
  EmptyDescription,
  EmptyIcon,
  EmptyTitle,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FocusCards,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  H2,
  InlineCode,
  Input,
  InputAddon,
  InputGroup,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Kbd,
  Large,
  Lead,
  LinkPreview,
  List,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  Modal,
  MultiSelectCombobox,
  Muted,
  NativeSelect,
  NativeSelectOption,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  Small,
  TimePicker,
  Toaster,
  ToggleGroup,
  ToggleGroupItem,
  TypographyP,
  toast,
} from 'cui/components';

const languageOptions = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' },
];

const teamOptions = [
  { value: 'design', label: 'Design' },
  { value: 'product', label: 'Product' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'marketing', label: 'Marketing' },
];

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="day" className="w-full max-w-sm">
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
    </ToggleGroup>
  );
}

export const toggleGroupSource = `import { ToggleGroup, ToggleGroupItem } from 'cui/components';

<ToggleGroup type="single" defaultValue="day">
  <ToggleGroupItem value="day">Day</ToggleGroupItem>
  <ToggleGroupItem value="week">Week</ToggleGroupItem>
  <ToggleGroupItem value="month">Month</ToggleGroupItem>
</ToggleGroup>`;

export function NativeSelectDemo() {
  return (
    <div className="w-full max-w-sm">
      <NativeSelect defaultValue="starter">
        <NativeSelectOption value="starter">Starter</NativeSelectOption>
        <NativeSelectOption value="pro">Pro</NativeSelectOption>
        <NativeSelectOption value="enterprise">Enterprise</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}

export const nativeSelectSource = `import { NativeSelect, NativeSelectOption } from 'cui/components';

<NativeSelect defaultValue="starter">
  <NativeSelectOption value="starter">Starter</NativeSelectOption>
  <NativeSelectOption value="pro">Pro</NativeSelectOption>
</NativeSelect>`;

export function InputOtpDemo() {
  const [value, setValue] = React.useState('');

  return (
    <div className="w-full max-w-sm space-y-3">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">Value: {value || '—'}</p>
    </div>
  );
}

export const inputOtpSource = `import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from 'cui/components';

<InputOTP maxLength={6} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`;

export function InputGroupDemo() {
  return (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputAddon>https://</InputAddon>
        <Input placeholder="your-site.com" />
        <InputAddon>.app</InputAddon>
      </InputGroup>
    </div>
  );
}

export const inputGroupSource = `import { InputGroup, InputAddon, Input } from 'cui/components';

<InputGroup>
  <InputAddon>https://</InputAddon>
  <Input placeholder="your-site.com" />
  <InputAddon>.app</InputAddon>
</InputGroup>`;

export function DatePickerDemo() {
  const [value, setValue] = React.useState<string | undefined>();

  return (
    <div className="w-full max-w-sm">
      <DatePicker
        value={value}
        onChange={(date) => setValue(date ? date.toISOString() : undefined)}
      />
    </div>
  );
}

export const datePickerSource = `import { DatePicker } from 'cui/components';

<DatePicker value={value} onChange={(date) => setValue(date?.toISOString())} />`;

export function TimePickerDemo() {
  const [value, setValue] = React.useState('09:30');

  return (
    <div className="w-full max-w-sm">
      <TimePicker value={value} onChange={setValue} />
    </div>
  );
}

export const timePickerSource = `import { TimePicker } from 'cui/components';

<TimePicker value={value} onChange={setValue} />`;

export function DateTimePickerDemo() {
  const [value, setValue] = React.useState<string | undefined>();

  return (
    <div className="w-full max-w-md">
      <DateTimePicker value={value} onChange={setValue} />
    </div>
  );
}

export const dateTimePickerSource = `import { DateTimePicker } from 'cui/components';

<DateTimePicker value={value} onChange={setValue} />`;

export function ComboboxDemo() {
  const [value, setValue] = React.useState('ts');

  return (
    <div className="w-full max-w-sm">
      <Combobox options={languageOptions} value={value} onValueChange={setValue} />
    </div>
  );
}

export const comboboxSource = `import { Combobox } from 'cui/components';

<Combobox options={options} value={value} onValueChange={setValue} />`;

export function MultiSelectComboboxDemo() {
  const [selected, setSelected] = React.useState<string[]>(['engineering']);

  return (
    <div className="w-full max-w-sm">
      <MultiSelectCombobox options={teamOptions} selected={selected} onChange={setSelected} />
    </div>
  );
}

export const multiSelectComboboxSource = `import { MultiSelectCombobox } from 'cui/components';

<MultiSelectCombobox options={options} selected={selected} onChange={setSelected} />`;

export function FormDemo() {
  const form = useForm<{ email: string }>({ defaultValues: { email: '' } }) as any;

  return (
    <div className="w-full max-w-sm">
      <Form {...(form as any)}>
        <form className="space-y-3" onSubmit={form.handleSubmit(() => {})}>
          <FormField
            control={form.control as any}
            name="email"
            rules={{ required: 'Email is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormDescription>We only use this for notifications.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export const formSource = `import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from 'cui/components';`;

export function FieldDemo() {
  return (
    <div className="w-full max-w-sm">
      <Field error="Username is required">
        <FieldLabel>Username</FieldLabel>
        <Input placeholder="john" />
        <FieldDescription>Must be unique in your workspace.</FieldDescription>
        <FieldError />
      </Field>
    </div>
  );
}

export const fieldSource = `import { Field, FieldLabel, FieldDescription, FieldError, Input } from 'cui/components';`;

export function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Back</Button>
      <Button>Continue</Button>
      <Button variant="secondary">Save Draft</Button>
    </ButtonGroup>
  );
}

export const buttonGroupSource = `import { ButtonGroup, Button } from 'cui/components';`;

type InvoiceRow = { id: string; customer: string; amount: string };

const invoiceColumns: ColumnDef<InvoiceRow>[] = [
  { accessorKey: 'id', header: 'Invoice' },
  { accessorKey: 'customer', header: 'Customer' },
  { accessorKey: 'amount', header: 'Amount' },
];

const invoiceData: InvoiceRow[] = [
  { id: '#1001', customer: 'Acme Inc', amount: '$420.00' },
  { id: '#1002', customer: 'Globex', amount: '$180.00' },
  { id: '#1003', customer: 'Initech', amount: '$275.00' },
];

export function DataTableDemo() {
  return <DataTable columns={invoiceColumns} data={invoiceData} className="w-full" />;
}

export const dataTableSource = `import { DataTable } from 'cui/components';`;

export function CalendarDemo() {
  return <Calendar mode="single" className="rounded-md border" />;
}

export const calendarSource = `import { Calendar } from 'cui/components';`;

const chartData = [
  { month: 'Jan', value: 120 },
  { month: 'Feb', value: 180 },
  { month: 'Mar', value: 140 },
  { month: 'Apr', value: 220 },
];

const chartConfig = {
  value: {
    label: 'Revenue',
    color: 'var(--color-primary)',
  },
};

export function ChartDemo() {
  return (
    <ChartContainer className="h-56 w-full" config={chartConfig}>
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={6} />
      </BarChart>
    </ChartContainer>
  );
}

export const chartSource = `import { ChartContainer } from 'cui/components';`;

export function KbdDemo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Press</span>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <span className="text-sm">to open search</span>
    </div>
  );
}

export const kbdSource = `import { Kbd } from 'cui/components';`;

export function TypographyDemo() {
  return (
    <div className="w-full max-w-2xl">
      <H2>Typography</H2>
      <Lead>Readable defaults for docs and product UI.</Lead>
      <TypographyP>
        Compose content with semantic components and consistent spacing.
      </TypographyP>
      <List>
        <li>Headings and paragraphs</li>
        <li>Helper text with <InlineCode>InlineCode</InlineCode></li>
        <li>Utility text with <Small>Small</Small> and <Muted>Muted</Muted></li>
      </List>
      <Large>Large text emphasis</Large>
    </div>
  );
}

export const typographySource = `import { H2, Lead, TypographyP, List, InlineCode } from 'cui/components';`;

export function AspectRatioDemo() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop"
          alt="Demo"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
}

export const aspectRatioSource = `import { AspectRatio } from 'cui/components';`;

export function ToastDemo() {
  return (
    <div className="w-full">
      <Button
        onClick={() =>
          toast({
            title: 'Saved',
            description: 'Your changes were stored successfully.',
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
}

export const toastSource = `import { toast, Toaster, Button } from 'cui/components';`;

export function EmptyDemo() {
  return (
    <Empty className="min-h-55 rounded-lg border">
      <EmptyIcon>
        <span className="text-2xl">📦</span>
      </EmptyIcon>
      <EmptyTitle>No orders yet</EmptyTitle>
      <EmptyDescription>Create your first order to start tracking revenue.</EmptyDescription>
      <EmptyAction>
        <Button size="sm">Create Order</Button>
      </EmptyAction>
    </Empty>
  );
}

export const emptySource = `import { Empty, EmptyIcon, EmptyTitle, EmptyDescription, EmptyAction, Button } from 'cui/components';`;

export function AlertDialogRadixDemo() {
  return (
    <AlertDialogRadix>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Project</Button>
      </AlertDialogTrigger>
      <AlertDialogRadixContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogRadixContent>
    </AlertDialogRadix>
  );
}

export const alertDialogSource = `import { AlertDialogRadix, AlertDialogTrigger, AlertDialogRadixContent } from 'cui/components';`;

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>Review recent workspace activity.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-2 text-sm text-muted-foreground">3 unread updates</div>
        <DrawerFooter>
          <Button>Mark all read</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export const drawerSource = `import { Drawer, DrawerTrigger, DrawerContent } from 'cui/components';`;

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="w-full rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem>Archive</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export const contextMenuSource = `import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from 'cui/components';`;

export function CommandDemo() {
  return (
    <div className="w-full max-w-md rounded-md border">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem>New File</CommandItem>
            <CommandItem>New Folder</CommandItem>
            <CommandItem>Open Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export const commandSource = `import { Command, CommandInput, CommandList, CommandItem } from 'cui/components';`;

export function ResponsiveDialogDemo() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline">Open Responsive Dialog</Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent>
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>Invite collaborator</ResponsiveDialogTitle>
          <ResponsiveDialogDescription>
            Share workspace access with your team.
          </ResponsiveDialogDescription>
        </ResponsiveDialogHeader>
        <div className="px-4">
          <Input placeholder="name@example.com" />
        </div>
        <ResponsiveDialogFooter>
          <Button>Send Invite</Button>
        </ResponsiveDialogFooter>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}

export const responsiveDialogSource = `import { ResponsiveDialog, ResponsiveDialogTrigger, ResponsiveDialogContent } from 'cui/components';`;

export function ModalDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button variant="outline" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Create workspace"
        description="Choose a name and continue."
        footer={<Button onClick={() => setOpen(false)}>Done</Button>}
      >
        <Input placeholder="Workspace name" />
      </Modal>
    </div>
  );
}

export const modalSource = `import { Modal, Button, Input } from 'cui/components';`;

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="p-3">
            <NavigationMenuLink className="block w-56 rounded-md p-2 text-sm hover:bg-accent">
              Analytics Suite
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="px-4 py-2 text-sm">Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export const navigationMenuSource = `import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from 'cui/components';`;

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>Open...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Close</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export const menubarSource = `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from 'cui/components';`;

export function SidebarDemo() {
  return (
    <div className="w-full rounded-lg border">
      <SidebarProvider>
        <div className="flex h-80 w-full overflow-hidden">
          <Sidebar collapsible="none" className="w-56 border-r">
            <SidebarHeader className="p-2">
              <SidebarTrigger />
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Dashboard</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Settings</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="p-4 text-sm text-muted-foreground">
            Main content area
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}

export const sidebarSource = `import { SidebarProvider, Sidebar, SidebarContent, SidebarInset } from 'cui/components';`;

export function CarouselDemo() {
  return (
    <div className="w-full max-w-xl px-10">
      <Carousel>
        <CarouselContent>
          {[1, 2, 3].map((item) => (
            <CarouselItem key={item}>
              <div className="rounded-lg border p-8 text-center text-lg font-medium">Slide {item}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export const carouselSource = `import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from 'cui/components';`;

export function Card3DDemo() {
  return (
    <Card3DContainer containerClassName="w-full max-w-sm">
      <Card3DBody>
        <Card3DItem translateZ={30} className="text-lg font-semibold">3D Product Card</Card3DItem>
        <Card3DItem translateZ={20} className="mt-2 text-sm text-muted-foreground">
          Hover to see perspective depth.
        </Card3DItem>
      </Card3DBody>
    </Card3DContainer>
  );
}

export const card3dSource = `import { Card3DContainer, Card3DBody, Card3DItem } from 'cui/components';`;

const focusCardsData = [
  { title: 'Mountains', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop' },
  { title: 'Ocean', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop' },
  { title: 'Forest', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop' },
];

export function FocusCardsDemo() {
  return <FocusCards cards={focusCardsData} className="w-full max-w-4xl" />;
}

export const focusCardsSource = `import { FocusCards } from 'cui/components';`;

const tooltipItems = [
  { id: 1, name: 'Mia', designation: 'Designer', image: 'https://i.pravatar.cc/80?img=11' },
  { id: 2, name: 'Noah', designation: 'Engineer', image: 'https://i.pravatar.cc/80?img=12' },
  { id: 3, name: 'Ava', designation: 'PM', image: 'https://i.pravatar.cc/80?img=13' },
];

export function AnimatedTooltipDemo() {
  return <AnimatedTooltip items={tooltipItems} />;
}

export const animatedTooltipSource = `import { AnimatedTooltip } from 'cui/components';`;

export function LinkPreviewDemo() {
  return (
    <div className="text-sm">
      Read the{' '}
      <LinkPreview
        url="https://nextjs.org/docs"
        imageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop"
      >
        Next.js docs
      </LinkPreview>
      {' '}for deeper integration tips.
    </div>
  );
}

export const linkPreviewSource = `import { LinkPreview } from 'cui/components';`;

export function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-md rounded-md border p-3" defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">Project Details</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-3 text-sm text-muted-foreground">
        This section expands and collapses while keeping layout stable.
      </CollapsibleContent>
    </Collapsible>
  );
}

export const collapsibleSource = `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'cui/components';`;

export function ResizableDemo() {
  return (
    <div className="w-full max-w-3xl rounded-md border">
      <ResizablePanelGroup orientation="horizontal" className="min-h-55">
        <ResizablePanel defaultSize={35}>
          <div className="flex h-full items-center justify-center text-sm">Navigation</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65}>
          <div className="flex h-full items-center justify-center text-sm">Editor</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export const resizableSource = `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from 'cui/components';`;

export function DirectionDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-sm rounded-md border p-3">
        <p className="mb-2 text-sm text-muted-foreground">RTL direction enabled</p>
        <ButtonGroup>
          <Button variant="outline">السابق</Button>
          <Button>التالي</Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  );
}

export const directionSource = `import { DirectionProvider } from 'cui/components';`;

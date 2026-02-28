import { tokens } from '../theme';

// Button
export { Button, IconButton, buttonVariants } from './button/button.web';
export type { ButtonProps, ButtonVariant, ButtonSize } from './button/button.web';

// Input
export { Input, inputVariants } from './input/input.web';
export type { InputSize } from './input/input.shared';

// Textarea
export { Textarea, textareaVariants } from './textarea/textarea.web';
export type { TextareaSize, TextareaResize } from './textarea/textarea.shared';

// Badge
export { Badge, badgeVariants } from './badge/badge.web';
export type { BadgeVariant } from './badge/badge.web';

// Card
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card/card.web';

// Modal, AlertDialog, DeleteConfirmDialog
export { Modal, AlertDialog, DeleteConfirmDialog } from './modal/modal.web';
export type { ModalProps, AlertDialogProps, DeleteConfirmDialogProps } from './modal/modal.web';

// States
export { LoadingState, ErrorState, EmptyState } from './_shared/states.web';

// Separator
export { Separator } from './separator/separator.web';

// Skeleton
export { Skeleton } from './skeleton/skeleton.web';

// Switch
export { Switch } from './switch/switch.web';
export type { SwitchSize } from './switch/switch.shared';

// Checkbox
export { Checkbox } from './checkbox/checkbox.web';
export type { CheckboxSize } from './checkbox/checkbox.shared';

// Avatar
export { Avatar, AvatarImage, AvatarFallback } from './avatar/avatar.web';

// Tabs
export { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs/tabs.web';

// Select
export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton } from './select/select.web';

// Popover
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from './popover/popover.web';

// Tooltip
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip/tooltip.web';

// Label
export { Label } from './label/label.web';

// Alert
export { Alert, AlertTitle, AlertDescription, alertVariants } from './alert/alert.web';
export type { AlertVariant } from './alert/alert.web';

// Progress
export { Progress, progressVariants, progressIndicatorVariants } from './progress/progress.web';
export type { ProgressSize, ProgressVariant } from './progress/progress.shared';

// Table
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './table/table.web';

// RadioGroup
export { RadioGroup, RadioGroupItem } from './radio-group/radio-group.web';

// Slider
export { Slider } from './slider/slider.web';

// Dialog
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from './dialog/dialog.web';

// AlertDialog (Radix compound)
export { AlertDialog as AlertDialogRadix, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent as AlertDialogRadixContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from './alert-dialog/alert-dialog.web';

// Sheet
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from './sheet/sheet.web';

// Drawer
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription } from './drawer/drawer.web';

// DropdownMenu
export { DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from './dropdown-menu/dropdown-menu.web';

// ScrollArea
export { ScrollArea, ScrollBar } from './scroll-area/scroll-area.web';

// Collapsible
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible/collapsible.web';

// Accordion
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion/accordion.web';

// Form
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from './form/form.web';

// Command
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from './command/command.web';

// InputOTP
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from './input-otp/input-otp.web';

// Breadcrumb
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from './breadcrumb/breadcrumb.web';

// Calendar
export { Calendar, CalendarDayButton } from './calendar/calendar.web';

// DatePicker
export { DatePicker } from './date-picker/date-picker.web';
export type { DatePickerProps } from './date-picker/date-picker.web';

// DateTimePicker
export { DateTimePicker } from './date-time-picker/date-time-picker.web';
export type { DateTimePickerProps } from './date-time-picker/date-time-picker.web';

// TimePicker
export { TimePicker } from './time-picker/time-picker.web';
export type { TimePickerProps } from './time-picker/time-picker.web';

// Combobox
export { Combobox } from './combobox/combobox.web';
export type { ComboboxOption, ComboboxProps } from './combobox/combobox.web';

// MultiSelectCombobox
export { MultiSelectCombobox } from './multi-select-combobox/multi-select-combobox.web';
export type { MultiSelectOption, MultiSelectComboboxProps } from './multi-select-combobox/multi-select-combobox.web';

// ResponsiveDialog
export { ResponsiveDialog, ResponsiveDialogTrigger, ResponsiveDialogContent, ResponsiveDialogHeader, ResponsiveDialogTitle, ResponsiveDialogDescription, ResponsiveDialogFooter } from './responsive-dialog/responsive-dialog.web';

// Chart
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle, useChart } from './chart/chart.web';
export type { ChartConfig } from './chart/chart.web';

// Sidebar
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar } from './sidebar/sidebar.web';

// Spinner
export { Spinner, spinnerVariants } from './spinner/spinner.web';
export type { SpinnerSize } from './spinner/spinner.shared';

// Kbd
export { Kbd } from './kbd/kbd.web';

// Typography
export { H1, H2, H3, H4, TypographyP, Lead, Large, Small, Muted, Blockquote, InlineCode, List } from './typography/typography.web';

// Empty
export { Empty, EmptyIcon, EmptyTitle, EmptyDescription, EmptyAction } from './empty/empty.web';

// AspectRatio
export { AspectRatio } from './aspect-ratio/aspect-ratio.web';

// ButtonGroup
export { ButtonGroup, buttonGroupVariants } from './button-group/button-group.web';

// InputGroup
export { InputGroup, InputAddon } from './input-group/input-group.web';

// Field
export { Field, FieldLabel, FieldDescription, FieldError, useField } from './field/field.web';

// Item
export { Item, ItemIcon, ItemContent, ItemLabel, ItemDescription, ItemTrailing } from './item/item.web';

// Direction
export { DirectionProvider, useDirection } from './direction/direction.web';

// Pagination
export { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from './pagination/pagination.web';

// Toggle
export { Toggle, toggleVariants } from './toggle/toggle.web';
export type { ToggleVariant, ToggleSize } from './toggle/toggle.shared';

// ToggleGroup
export { ToggleGroup, ToggleGroupItem } from './toggle-group/toggle-group.web';

// HoverCard
export { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card/hover-card.web';

// ContextMenu
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubTrigger, ContextMenuSubContent } from './context-menu/context-menu.web';

// Menubar
export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarLabel, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubTrigger, MenubarSubContent } from './menubar/menubar.web';

// NavigationMenu
export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport, navigationMenuLinkStyle } from './navigation-menu/navigation-menu.web';

// NativeSelect
export { NativeSelect, NativeSelectOption } from './native-select/native-select.web';

// Toast
export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, Toaster, useToast, toast } from './toast/toast.web';
export type { ToastVariant } from './toast/toast.shared';

// Sonner
export { SonnerToaster, sonnerToast } from './sonner/sonner.web';

// Carousel
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel/carousel.web';
export type { CarouselApi } from './carousel/carousel.web';

// Resizable
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable/resizable.web';

// DataTable
export { DataTable } from './data-table/data-table.web';
export type { DataTableProps } from './data-table/data-table.web';

// --- Aceternity-style animated components ---

// GridBackground & DotBackground
export { GridBackground, DotBackground } from './grid-background/grid-background.web';
export type { GridBackgroundProps, DotBackgroundProps } from './grid-background/grid-background.web';

// Sparkles
export { Sparkles } from './sparkles/sparkles.web';
export type { SparklesProps } from './sparkles/sparkles.web';

// Meteors
export { Meteors } from './meteors/meteors.web';
export type { MeteorsProps } from './meteors/meteors.web';

// BackgroundGradient
export { BackgroundGradient } from './background-gradient/background-gradient.web';
export type { BackgroundGradientProps } from './background-gradient/background-gradient.web';

// Spotlight
export { Spotlight } from './spotlight/spotlight.web';
export type { SpotlightProps } from './spotlight/spotlight.web';

// TextGenerateEffect
export { TextGenerateEffect } from './text-generate-effect/text-generate-effect.web';
export type { TextGenerateEffectProps } from './text-generate-effect/text-generate-effect.web';

// FlipWords
export { FlipWords } from './flip-words/flip-words.web';
export type { FlipWordsProps } from './flip-words/flip-words.web';

// TypewriterEffect
export { TypewriterEffect } from './typewriter-effect/typewriter-effect.web';
export type { TypewriterEffectProps } from './typewriter-effect/typewriter-effect.web';

// HeroHighlight
export { HeroHighlight, Highlight } from './hero-highlight/hero-highlight.web';
export type { HeroHighlightProps, HighlightProps } from './hero-highlight/hero-highlight.web';

// ColourfulText
export { ColourfulText } from './colourful-text/colourful-text.web';
export type { ColourfulTextProps } from './colourful-text/colourful-text.web';

// CardSpotlight
export { CardSpotlight } from './card-spotlight/card-spotlight.web';
export type { CardSpotlightProps } from './card-spotlight/card-spotlight.web';

// Card3D
export { Card3DContainer, Card3DBody, Card3DItem } from './card-3d/card-3d.web';
export type { Card3DContainerProps, Card3DBodyProps, Card3DItemProps } from './card-3d/card-3d.web';

// InfiniteMovingCards
export { InfiniteMovingCards } from './infinite-moving-cards/infinite-moving-cards.web';
export type { InfiniteMovingCardsProps } from './infinite-moving-cards/infinite-moving-cards.web';

// GlowingEffect
export { GlowingEffect } from './glowing-effect/glowing-effect.web';
export type { GlowingEffectProps } from './glowing-effect/glowing-effect.web';

// FocusCards
export { FocusCards } from './focus-cards/focus-cards.web';
export type { FocusCardsProps, FocusCardItem } from './focus-cards/focus-cards.web';

// WobbleCard
export { WobbleCard } from './wobble-card/wobble-card.web';
export type { WobbleCardProps } from './wobble-card/wobble-card.web';

// FloatingDock
export { FloatingDock } from './floating-dock/floating-dock.web';
export type { FloatingDockProps, DockItem } from './floating-dock/floating-dock.web';

// MovingBorder
export { MovingBorder } from './moving-border/moving-border.web';
export type { MovingBorderProps } from './moving-border/moving-border.web';

// AnimatedTooltip
export { AnimatedTooltip } from './animated-tooltip/animated-tooltip.web';
export type { AnimatedTooltipProps, AnimatedTooltipItem } from './animated-tooltip/animated-tooltip.web';

// LampEffect
export { LampEffect } from './lamp-effect/lamp-effect.web';
export type { LampEffectProps } from './lamp-effect/lamp-effect.web';

// LinkPreview
export { LinkPreview } from './link-preview/link-preview.web';
export type { LinkPreviewProps } from './link-preview/link-preview.web';

// WavyBackground
export { WavyBackground } from './wavy-background/wavy-background.web';
export type { WavyBackgroundProps } from './wavy-background/wavy-background.web';

// Tokens
export const UI_TOKENS = tokens;

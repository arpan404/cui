import { ButtonDemo, buttonSource } from './examples/button';
import { InputDemo, inputSource } from './examples/input';
import { TextareaDemo, textareaSource } from './examples/textarea';
import { BadgeDemo, badgeSource } from './examples/badge';
import { CardDemo, cardSource } from './examples/card';
import { SwitchDemo, switchSource } from './examples/switch';
import { CheckboxDemo, checkboxSource } from './examples/checkbox';
import { SelectDemo, selectSource } from './examples/select';
import { TabsDemo, tabsSource } from './examples/tabs';
import { SliderDemo, sliderSource } from './examples/slider';
import { ProgressDemo, progressSource } from './examples/progress';
import { DialogDemo, dialogSource } from './examples/dialog';
import { AlertDemo, alertSource } from './examples/alert';
import { AvatarDemo, avatarSource } from './examples/avatar';
import { TooltipDemo, tooltipSource } from './examples/tooltip';
import { SeparatorDemo, separatorSource } from './examples/separator';
import { SkeletonDemo, skeletonSource } from './examples/skeleton';
import { SpinnerDemo, spinnerSource } from './examples/spinner';
import { PopoverDemo, popoverSource } from './examples/popover';
import { DropdownMenuDemo, dropdownMenuSource } from './examples/dropdown-menu';
import { AccordionDemo, accordionSource } from './examples/accordion';
import { SheetDemo, sheetSource } from './examples/sheet';
import { ScrollAreaDemo, scrollAreaSource } from './examples/scroll-area';
import { ToggleDemo, toggleSource } from './examples/toggle';
import { BreadcrumbDemo, breadcrumbSource } from './examples/breadcrumb';
import { PaginationDemo, paginationSource } from './examples/pagination';
import { LabelDemo, labelSource } from './examples/label';
import { RadioGroupDemo, radioGroupSource } from './examples/radio-group';
import { TableDemo, tableSource } from './examples/table';
import { HoverCardDemo, hoverCardSource } from './examples/hover-card';
import { SparklesDemo, sparklesSource } from './examples/sparkles';
import { MeteorsDemo, meteorsSource } from './examples/meteors';
import { FlipWordsDemo, flipWordsSource } from './examples/flip-words';
import { TypewriterEffectDemo, typewriterEffectSource } from './examples/typewriter-effect';
import { TextGenerateEffectDemo, textGenerateEffectSource } from './examples/text-generate-effect';
import { ColourfulTextDemo, colourfulTextSource } from './examples/colourful-text';
import { HeroHighlightDemo, heroHighlightSource } from './examples/hero-highlight';
import { LampEffectDemo, lampEffectSource } from './examples/lamp-effect';
import { GridBackgroundDemo, gridBackgroundSource } from './examples/grid-background';
import { MovingBorderDemo, movingBorderSource } from './examples/moving-border';
import { CardSpotlightDemo, cardSpotlightSource } from './examples/card-spotlight';
import { WobbleCardDemo, wobbleCardSource } from './examples/wobble-card';
import { GlowingEffectDemo, glowingEffectSource } from './examples/glowing-effect';
import { SpotlightDemo, spotlightSource } from './examples/spotlight';
import { BackgroundGradientDemo, backgroundGradientSource } from './examples/background-gradient';
import { InfiniteMovingCardsDemo, infiniteMovingCardsSource } from './examples/infinite-moving-cards';
import { FloatingDockDemo, floatingDockSource } from './examples/floating-dock';
import { WavyBackgroundDemo, wavyBackgroundSource } from './examples/wavy-background';
import {
  AlertDialogRadixDemo,
  alertDialogSource,
  AnimatedTooltipDemo,
  animatedTooltipSource,
  AspectRatioDemo,
  aspectRatioSource,
  ButtonGroupDemo,
  buttonGroupSource,
  CalendarDemo,
  calendarSource,
  Card3DDemo,
  card3dSource,
  CarouselDemo,
  carouselSource,
  ChartDemo,
  chartSource,
  CollapsibleDemo,
  collapsibleSource,
  ComboboxDemo,
  comboboxSource,
  CommandDemo,
  commandSource,
  ContextMenuDemo,
  contextMenuSource,
  DataTableDemo,
  dataTableSource,
  DatePickerDemo,
  datePickerSource,
  DateTimePickerDemo,
  dateTimePickerSource,
  DirectionDemo,
  directionSource,
  DrawerDemo,
  drawerSource,
  EmptyDemo,
  emptySource,
  FieldDemo,
  fieldSource,
  FocusCardsDemo,
  focusCardsSource,
  FormDemo,
  formSource,
  InputGroupDemo,
  inputGroupSource,
  InputOtpDemo,
  inputOtpSource,
  KbdDemo,
  kbdSource,
  LinkPreviewDemo,
  linkPreviewSource,
  MenubarDemo,
  menubarSource,
  ModalDemo,
  modalSource,
  MultiSelectComboboxDemo,
  multiSelectComboboxSource,
  NativeSelectDemo,
  nativeSelectSource,
  NavigationMenuDemo,
  navigationMenuSource,
  ResizableDemo,
  resizableSource,
  ResponsiveDialogDemo,
  responsiveDialogSource,
  SidebarDemo,
  sidebarSource,
  TimePickerDemo,
  timePickerSource,
  ToastDemo,
  toastSource,
  ToggleGroupDemo,
  toggleGroupSource,
  TypographyDemo,
  typographySource,
} from './examples/missing';

export interface DemoEntry {
  component: React.ComponentType;
  source: string;
}

export const demos: Record<string, DemoEntry> = {
  button: { component: ButtonDemo, source: buttonSource },
  input: { component: InputDemo, source: inputSource },
  textarea: { component: TextareaDemo, source: textareaSource },
  badge: { component: BadgeDemo, source: badgeSource },
  card: { component: CardDemo, source: cardSource },
  switch: { component: SwitchDemo, source: switchSource },
  checkbox: { component: CheckboxDemo, source: checkboxSource },
  select: { component: SelectDemo, source: selectSource },
  tabs: { component: TabsDemo, source: tabsSource },
  slider: { component: SliderDemo, source: sliderSource },
  progress: { component: ProgressDemo, source: progressSource },
  dialog: { component: DialogDemo, source: dialogSource },
  alert: { component: AlertDemo, source: alertSource },
  avatar: { component: AvatarDemo, source: avatarSource },
  tooltip: { component: TooltipDemo, source: tooltipSource },
  separator: { component: SeparatorDemo, source: separatorSource },
  skeleton: { component: SkeletonDemo, source: skeletonSource },
  spinner: { component: SpinnerDemo, source: spinnerSource },
  popover: { component: PopoverDemo, source: popoverSource },
  'dropdown-menu': { component: DropdownMenuDemo, source: dropdownMenuSource },
  accordion: { component: AccordionDemo, source: accordionSource },
  sheet: { component: SheetDemo, source: sheetSource },
  'scroll-area': { component: ScrollAreaDemo, source: scrollAreaSource },
  toggle: { component: ToggleDemo, source: toggleSource },
  breadcrumb: { component: BreadcrumbDemo, source: breadcrumbSource },
  pagination: { component: PaginationDemo, source: paginationSource },
  label: { component: LabelDemo, source: labelSource },
  'radio-group': { component: RadioGroupDemo, source: radioGroupSource },
  table: { component: TableDemo, source: tableSource },
  'hover-card': { component: HoverCardDemo, source: hoverCardSource },
  sparkles: { component: SparklesDemo, source: sparklesSource },
  meteors: { component: MeteorsDemo, source: meteorsSource },
  'flip-words': { component: FlipWordsDemo, source: flipWordsSource },
  'typewriter-effect': { component: TypewriterEffectDemo, source: typewriterEffectSource },
  'text-generate-effect': { component: TextGenerateEffectDemo, source: textGenerateEffectSource },
  'colourful-text': { component: ColourfulTextDemo, source: colourfulTextSource },
  'hero-highlight': { component: HeroHighlightDemo, source: heroHighlightSource },
  'lamp-effect': { component: LampEffectDemo, source: lampEffectSource },
  'grid-background': { component: GridBackgroundDemo, source: gridBackgroundSource },
  'moving-border': { component: MovingBorderDemo, source: movingBorderSource },
  'card-spotlight': { component: CardSpotlightDemo, source: cardSpotlightSource },
  'wobble-card': { component: WobbleCardDemo, source: wobbleCardSource },
  'glowing-effect': { component: GlowingEffectDemo, source: glowingEffectSource },
  spotlight: { component: SpotlightDemo, source: spotlightSource },
  'background-gradient': { component: BackgroundGradientDemo, source: backgroundGradientSource },
  'infinite-moving-cards': { component: InfiniteMovingCardsDemo, source: infiniteMovingCardsSource },
  'floating-dock': { component: FloatingDockDemo, source: floatingDockSource },
  'wavy-background': { component: WavyBackgroundDemo, source: wavyBackgroundSource },
  'toggle-group': { component: ToggleGroupDemo, source: toggleGroupSource },
  'native-select': { component: NativeSelectDemo, source: nativeSelectSource },
  'input-otp': { component: InputOtpDemo, source: inputOtpSource },
  'input-group': { component: InputGroupDemo, source: inputGroupSource },
  'date-picker': { component: DatePickerDemo, source: datePickerSource },
  'time-picker': { component: TimePickerDemo, source: timePickerSource },
  'date-time-picker': { component: DateTimePickerDemo, source: dateTimePickerSource },
  combobox: { component: ComboboxDemo, source: comboboxSource },
  'multi-select-combobox': { component: MultiSelectComboboxDemo, source: multiSelectComboboxSource },
  form: { component: FormDemo, source: formSource },
  field: { component: FieldDemo, source: fieldSource },
  'button-group': { component: ButtonGroupDemo, source: buttonGroupSource },
  'data-table': { component: DataTableDemo, source: dataTableSource },
  calendar: { component: CalendarDemo, source: calendarSource },
  chart: { component: ChartDemo, source: chartSource },
  kbd: { component: KbdDemo, source: kbdSource },
  typography: { component: TypographyDemo, source: typographySource },
  'aspect-ratio': { component: AspectRatioDemo, source: aspectRatioSource },
  toast: { component: ToastDemo, source: toastSource },
  empty: { component: EmptyDemo, source: emptySource },
  'alert-dialog': { component: AlertDialogRadixDemo, source: alertDialogSource },
  drawer: { component: DrawerDemo, source: drawerSource },
  'context-menu': { component: ContextMenuDemo, source: contextMenuSource },
  command: { component: CommandDemo, source: commandSource },
  'responsive-dialog': { component: ResponsiveDialogDemo, source: responsiveDialogSource },
  modal: { component: ModalDemo, source: modalSource },
  'navigation-menu': { component: NavigationMenuDemo, source: navigationMenuSource },
  menubar: { component: MenubarDemo, source: menubarSource },
  sidebar: { component: SidebarDemo, source: sidebarSource },
  carousel: { component: CarouselDemo, source: carouselSource },
  'card-3d': { component: Card3DDemo, source: card3dSource },
  'focus-cards': { component: FocusCardsDemo, source: focusCardsSource },
  'animated-tooltip': { component: AnimatedTooltipDemo, source: animatedTooltipSource },
  'link-preview': { component: LinkPreviewDemo, source: linkPreviewSource },
  collapsible: { component: CollapsibleDemo, source: collapsibleSource },
  resizable: { component: ResizableDemo, source: resizableSource },
  direction: { component: DirectionDemo, source: directionSource },
};

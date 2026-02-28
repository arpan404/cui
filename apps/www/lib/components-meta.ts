export interface ComponentMeta {
  name: string;
  slug: string;
  description: string;
  category: string;
}

export const categories = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'primitives', label: 'Primitives' },
  { key: 'layout', label: 'Layout' },
  { key: 'form', label: 'Form' },
  { key: 'data-display', label: 'Data Display' },
  { key: 'feedback', label: 'Feedback' },
  { key: 'overlay', label: 'Overlay' },
  { key: 'navigation', label: 'Navigation' },
  { key: 'animated', label: 'Animated' },
  { key: 'utilities', label: 'Utilities' },
] as const;

export const componentsMeta: ComponentMeta[] = [
  // Form
  { name: 'Button', slug: 'button', description: 'A clickable button with multiple variants and sizes.', category: 'form' },
  { name: 'Input', slug: 'input', description: 'Text input field with size and state variants.', category: 'form' },
  { name: 'Textarea', slug: 'textarea', description: 'Multi-line text input with resize options.', category: 'form' },
  { name: 'Select', slug: 'select', description: 'A dropdown select component with search and groups.', category: 'form' },
  { name: 'Checkbox', slug: 'checkbox', description: 'A checkbox input with size variants.', category: 'form' },
  { name: 'Switch', slug: 'switch', description: 'A toggle switch with size variants.', category: 'form' },
  { name: 'Radio Group', slug: 'radio-group', description: 'A group of radio buttons for single selection.', category: 'form' },
  { name: 'Slider', slug: 'slider', description: 'A range slider with size variants.', category: 'form' },
  { name: 'Label', slug: 'label', description: 'Accessible label for form controls.', category: 'form' },
  { name: 'Toggle', slug: 'toggle', description: 'A two-state toggle button.', category: 'form' },
  { name: 'Toggle Group', slug: 'toggle-group', description: 'A group of toggle buttons.', category: 'form' },
  { name: 'Native Select', slug: 'native-select', description: 'A native HTML select element with styling.', category: 'form' },
  { name: 'Input OTP', slug: 'input-otp', description: 'One-time password input with individual digit fields.', category: 'form' },
  { name: 'Input Group', slug: 'input-group', description: 'Group inputs with addons and buttons.', category: 'form' },
  { name: 'Date Picker', slug: 'date-picker', description: 'A date picker with calendar popup.', category: 'form' },
  { name: 'Time Picker', slug: 'time-picker', description: 'A time picker component.', category: 'form' },
  { name: 'Date Time Picker', slug: 'date-time-picker', description: 'Combined date and time picker.', category: 'form' },
  { name: 'Combobox', slug: 'combobox', description: 'An autocomplete combobox with search.', category: 'form' },
  { name: 'Multi Select Combobox', slug: 'multi-select-combobox', description: 'A combobox that allows multiple selections.', category: 'form' },
  { name: 'Form', slug: 'form', description: 'Form component with react-hook-form integration.', category: 'form' },
  { name: 'Field', slug: 'field', description: 'Simple form field wrapper with label and description.', category: 'form' },
  { name: 'Button Group', slug: 'button-group', description: 'Group buttons together with shared styling.', category: 'form' },

  // Data Display
  { name: 'Card', slug: 'card', description: 'A container card with header, content, and footer.', category: 'data-display' },
  { name: 'Badge', slug: 'badge', description: 'A small badge for status or counts.', category: 'data-display' },
  { name: 'Avatar', slug: 'avatar', description: 'User avatar with image and fallback.', category: 'data-display' },
  { name: 'Table', slug: 'table', description: 'A styled HTML table.', category: 'data-display' },
  { name: 'Data Table', slug: 'data-table', description: 'A data table with sorting, filtering, and pagination.', category: 'data-display' },
  { name: 'Calendar', slug: 'calendar', description: 'A calendar component for date selection.', category: 'data-display' },
  { name: 'Chart', slug: 'chart', description: 'Charts powered by Recharts.', category: 'data-display' },
  { name: 'Kbd', slug: 'kbd', description: 'Keyboard key indicator.', category: 'data-display' },
  { name: 'Typography', slug: 'typography', description: 'Heading and text typography components.', category: 'data-display' },
  { name: 'Separator', slug: 'separator', description: 'A visual separator between content.', category: 'data-display' },
  { name: 'Aspect Ratio', slug: 'aspect-ratio', description: 'Maintain a consistent aspect ratio.', category: 'data-display' },

  // Feedback
  { name: 'Alert', slug: 'alert', description: 'Alert messages with variants.', category: 'feedback' },
  { name: 'Progress', slug: 'progress', description: 'A progress bar with size and color variants.', category: 'feedback' },
  { name: 'Spinner', slug: 'spinner', description: 'A loading spinner with size variants.', category: 'feedback' },
  { name: 'Skeleton', slug: 'skeleton', description: 'A loading placeholder skeleton.', category: 'feedback' },
  { name: 'Toast', slug: 'toast', description: 'Toast notifications via Sonner.', category: 'feedback' },
  { name: 'Empty', slug: 'empty', description: 'Empty state placeholder.', category: 'feedback' },

  // Overlay
  { name: 'Dialog', slug: 'dialog', description: 'A modal dialog with size variants.', category: 'overlay' },
  { name: 'Alert Dialog', slug: 'alert-dialog', description: 'A confirmation dialog for destructive actions.', category: 'overlay' },
  { name: 'Sheet', slug: 'sheet', description: 'A slide-out panel from the edge of the screen.', category: 'overlay' },
  { name: 'Drawer', slug: 'drawer', description: 'A mobile-friendly bottom drawer.', category: 'overlay' },
  { name: 'Popover', slug: 'popover', description: 'A floating popover with configurable width.', category: 'overlay' },
  { name: 'Tooltip', slug: 'tooltip', description: 'A tooltip that appears on hover.', category: 'overlay' },
  { name: 'Hover Card', slug: 'hover-card', description: 'A card that appears on hover with preview content.', category: 'overlay' },
  { name: 'Context Menu', slug: 'context-menu', description: 'A right-click context menu.', category: 'overlay' },
  { name: 'Dropdown Menu', slug: 'dropdown-menu', description: 'A dropdown menu triggered by a button.', category: 'overlay' },
  { name: 'Command', slug: 'command', description: 'A command palette / search dialog.', category: 'overlay' },
  { name: 'Responsive Dialog', slug: 'responsive-dialog', description: 'A dialog that becomes a drawer on mobile.', category: 'overlay' },
  { name: 'Modal', slug: 'modal', description: 'A simple modal component.', category: 'overlay' },

  // Navigation
  { name: 'Tabs', slug: 'tabs', description: 'Tab navigation with size variants.', category: 'navigation' },
  { name: 'Accordion', slug: 'accordion', description: 'Expandable accordion sections.', category: 'navigation' },
  { name: 'Breadcrumb', slug: 'breadcrumb', description: 'Breadcrumb navigation trail.', category: 'navigation' },
  { name: 'Pagination', slug: 'pagination', description: 'Page navigation controls.', category: 'navigation' },
  { name: 'Navigation Menu', slug: 'navigation-menu', description: 'A responsive navigation menu with dropdowns.', category: 'navigation' },
  { name: 'Menubar', slug: 'menubar', description: 'A horizontal menu bar.', category: 'navigation' },
  { name: 'Sidebar', slug: 'sidebar', description: 'A collapsible sidebar navigation.', category: 'navigation' },
  { name: 'Carousel', slug: 'carousel', description: 'A carousel / slider component.', category: 'navigation' },

  // Animated
  { name: 'Sparkles', slug: 'sparkles', description: 'Sparkle particle effects around content.', category: 'animated' },
  { name: 'Meteors', slug: 'meteors', description: 'Animated meteor shower background effect.', category: 'animated' },
  { name: 'Flip Words', slug: 'flip-words', description: 'Animated word flipping / rotating text.', category: 'animated' },
  { name: 'Typewriter Effect', slug: 'typewriter-effect', description: 'Typewriter-style text animation.', category: 'animated' },
  { name: 'Text Generate Effect', slug: 'text-generate-effect', description: 'Text appearing word-by-word with blur.', category: 'animated' },
  { name: 'Hero Highlight', slug: 'hero-highlight', description: 'Mouse-tracking highlight effect for hero sections.', category: 'animated' },
  { name: 'Colourful Text', slug: 'colourful-text', description: 'Per-character color cycling text effect.', category: 'animated' },
  { name: 'Lamp Effect', slug: 'lamp-effect', description: 'Animated lamp glow effect on mount.', category: 'animated' },
  { name: 'Background Gradient', slug: 'background-gradient', description: 'Animated gradient background border.', category: 'animated' },
  { name: 'Spotlight', slug: 'spotlight', description: 'Mouse-following spotlight effect.', category: 'animated' },
  { name: 'Card Spotlight', slug: 'card-spotlight', description: 'Card with mouse-tracking spotlight glow.', category: 'animated' },
  { name: 'Card 3D', slug: 'card-3d', description: '3D perspective tilt card on hover.', category: 'animated' },
  { name: 'Infinite Moving Cards', slug: 'infinite-moving-cards', description: 'Infinite horizontal scrolling card carousel.', category: 'animated' },
  { name: 'Glowing Effect', slug: 'glowing-effect', description: 'Mouse-tracking glowing border effect.', category: 'animated' },
  { name: 'Focus Cards', slug: 'focus-cards', description: 'Cards that focus on hover with blur effect.', category: 'animated' },
  { name: 'Wobble Card', slug: 'wobble-card', description: '3D wobble tilt card on hover.', category: 'animated' },
  { name: 'Floating Dock', slug: 'floating-dock', description: 'macOS-style dock with magnification.', category: 'animated' },
  { name: 'Moving Border', slug: 'moving-border', description: 'Animated spinning border effect.', category: 'animated' },
  { name: 'Animated Tooltip', slug: 'animated-tooltip', description: 'Tooltip with spring animation on hover.', category: 'animated' },
  { name: 'Link Preview', slug: 'link-preview', description: 'Link with animated preview card on hover.', category: 'animated' },
  { name: 'Wavy Background', slug: 'wavy-background', description: 'Canvas-based animated wavy background.', category: 'animated' },
  { name: 'Grid Background', slug: 'grid-background', description: 'CSS grid and dot pattern backgrounds.', category: 'animated' },

  // Utilities
  { name: 'Scroll Area', slug: 'scroll-area', description: 'Custom styled scrollable area.', category: 'utilities' },
  { name: 'Collapsible', slug: 'collapsible', description: 'A collapsible content section.', category: 'utilities' },
  { name: 'Resizable', slug: 'resizable', description: 'Resizable panel layouts.', category: 'utilities' },
  { name: 'Direction', slug: 'direction', description: 'RTL/LTR direction provider.', category: 'utilities' },
];

export function getComponentBySlug(slug: string): ComponentMeta | undefined {
  return componentsMeta.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): ComponentMeta[] {
  return componentsMeta.filter((c) => c.category === category);
}

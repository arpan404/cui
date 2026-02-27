import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Badge,
  Button,
  Checkbox,
  DeleteConfirmDialog,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../components/index.web';

describe('web components', () => {
  it('renders button with variant classes', () => {
    render(
      <Button variant='secondary' data-testid='button'>
        Save
      </Button>,
    );

    const button = screen.getByTestId('button');
    expect(button).toHaveClass('bg-secondary');
  });

  it('renders input and textarea', () => {
    render(
      <>
        <Input data-testid='input' />
        <Textarea data-testid='textarea' />
      </>,
    );

    expect(screen.getByTestId('input').tagName).toBe('INPUT');
    expect(screen.getByTestId('textarea').tagName).toBe('TEXTAREA');
  });

  it('renders badge text', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('shows delete dialog when open', () => {
    render(
      <DeleteConfirmDialog
        open
        onOpenChange={() => undefined}
        onConfirm={() => undefined}
        title='Delete record'
      />,
    );

    expect(screen.getByText('Delete record')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders tabs and shows selected content', () => {
    render(
      <Tabs defaultValue='a'>
        <TabsList>
          <TabsTrigger value='a'>Tab A</TabsTrigger>
          <TabsTrigger value='b'>Tab B</TabsTrigger>
        </TabsList>
        <TabsContent value='a'>Content A</TabsContent>
        <TabsContent value='b'>Content B</TabsContent>
      </Tabs>,
    );

    expect(screen.getByText('Content A')).toBeInTheDocument();
    expect(screen.queryByText('Content B')).not.toBeInTheDocument();
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab A' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('renders switch and checkbox accessibility roles', () => {
    render(
      <>
        <Switch checked />
        <Checkbox checked />
      </>,
    );

    expect(screen.getByRole('switch')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders select with trigger and options', () => {
    render(
      <Select defaultValue='student'>
        <SelectTrigger aria-label='Role'>
          <SelectValue placeholder='Choose role' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='student'>Student</SelectItem>
          <SelectItem value='teacher'>Teacher</SelectItem>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByRole('combobox', { name: /role/i });
    expect(trigger).toBeInTheDocument();
    expect(screen.getByText('Student')).toBeInTheDocument();
  });

  it('renders popover content when open', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover body</PopoverContent>
      </Popover>,
    );

    expect(screen.getByText('Popover body')).toBeInTheDocument();
  });

  it('renders tooltip content when open', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>Trigger</TooltipTrigger>
        <TooltipContent>Tip</TooltipContent>
      </Tooltip>,
    );

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });
});

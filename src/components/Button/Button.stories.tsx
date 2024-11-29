import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'solid',
    color: 'slate',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'outline',
    color: 'slate',
    children: 'Secondary Button',
  },
};

export const White: Story = {
  args: {
    variant: 'solid',
    color: 'white',
    children: 'White Button',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

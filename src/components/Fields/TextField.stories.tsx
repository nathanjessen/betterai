import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './Fields';

const meta = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'email',
    label: 'Email address',
    type: 'email',
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    label: 'Password',
    type: 'password',
  },
};

export const WithClassName: Story = {
  args: {
    id: 'custom',
    label: 'Custom Field',
    className: 'max-w-sm',
  },
};

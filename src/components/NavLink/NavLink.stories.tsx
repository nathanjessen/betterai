import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './NavLink';

const meta = {
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Navigation Link'
  },
};

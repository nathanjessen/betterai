import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta = {
  component: Container,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Container content',
  },
};

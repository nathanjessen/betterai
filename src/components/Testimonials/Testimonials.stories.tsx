import type { Meta, StoryObj } from '@storybook/react';
import { Testimonials } from './Testimonials';

const meta = {
  component: Testimonials,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

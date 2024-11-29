import type { Meta, StoryObj } from '@storybook/react';
import { Faqs } from './Faqs';

const meta = {
  component: Faqs,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Faqs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

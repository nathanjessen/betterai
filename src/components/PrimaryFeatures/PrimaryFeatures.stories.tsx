import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryFeatures } from './PrimaryFeatures';

const meta = {
  component: PrimaryFeatures,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PrimaryFeatures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

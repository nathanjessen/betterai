import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryFeatures } from './SecondaryFeatures';

const meta = {
  component: SecondaryFeatures,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SecondaryFeatures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

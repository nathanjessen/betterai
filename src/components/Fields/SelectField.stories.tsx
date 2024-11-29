import type { Meta, StoryObj } from '@storybook/react';
import { SelectField } from './Fields';

const meta = {
  component: SelectField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'color',
    label: 'Select a color',
    children: (
      <>
        <option value="">Select a color...</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </>
    ),
  },
};

export const WithoutLabel: Story = {
  args: {
    id: 'size',
    children: (
      <>
        <option value="">Select size...</option>
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-select',
    label: 'Disabled Select',
    disabled: true,
    children: (
      <>
        <option value="">Select an option...</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

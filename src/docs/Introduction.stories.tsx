import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Welcome to Storybook

Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as **stories** to revisit during development, testing, or QA.
        `,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
  parameters: {
    docsOnly: true
  }
};

import { Meta } from '@storybook/react';
import { AuthLayout } from './AuthLayout';

export default {
  component: AuthLayout,
} as Meta;

export const Default = {
  args: {
    children: 'AuthLayout',
  },
};

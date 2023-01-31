---
to: <%= path %>/<%= name%>.stories.tsx
---
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { <%= name %> } from './<%= name %>';

type Meta = ComponentMeta<typeof <%= name %>>;
type Story = ComponentStoryObj<typeof <%= name %>>;

export default {
  component: <%= name %>,
  <% if (haveProps) { -%>
  args: {}
  <% } -%>
} as Meta

export const Default: Story = {};

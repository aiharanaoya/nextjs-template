import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BUTTON_TYPE, BUTTON_DESIGN } from './const';

import { Button } from './';

type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStoryObj<typeof Button>;

export default {
  component: Button,
  args: {
    children: 'Action',
    type: BUTTON_TYPE.SUBMIT,
    onClick: () => {}
  }
} as Meta;

export const Secondary: Story = {
  args: {
    design: BUTTON_DESIGN.SECONDARY,
    isDisabled: false
  }
};

export const SecondaryDisabled: Story = {
  args: {
    design: BUTTON_DESIGN.SECONDARY,
    isDisabled: true
  }
};

export const Primary: Story = {
  args: {
    design: BUTTON_DESIGN.PRIMARY,
    isDisabled: false
  }
};

export const PrimaryDisabled: Story = {
  args: {
    design: BUTTON_DESIGN.PRIMARY,
    isDisabled: true
  }
};

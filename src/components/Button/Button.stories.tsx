import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  args: {
    children: "Placeholder",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Destroy: Story = {
  args: {
    variant: "destroy",
  },
};

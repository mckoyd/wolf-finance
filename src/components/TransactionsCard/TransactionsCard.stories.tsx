import type { Meta, StoryObj } from "@storybook/react";
import TransactionsCard from "./index";
import data from "@/data/data.json";

const meta: Meta<typeof TransactionsCard> = {
  title: "Components/TransactionsCard",
  component: TransactionsCard,
  parameters: {
    layout: "padded",
  },
  args: {
    transactions: data.transactions,
  },
};
export default meta;

type Story = StoryObj<typeof TransactionsCard>;

export const Default: Story = {};

export const WithAriaOverride: Story = {
  args: {
    ariaLabelOverride: "Recent transactions card",
  },
};

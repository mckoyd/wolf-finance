import type { Meta, StoryObj } from "@storybook/react";
import StatCard from "./index";

const meta: Meta<typeof StatCard> = {
  title: "Overview/StatCard",
  component: StatCard,
  parameters: {
    controls: {
      disable: true,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: "24px 16px 12px 16px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Balance: Story = {
  name: "Current Balance",
  args: {
    variant: "balance",
    value: 12450,
  },
};

export const Income: Story = {
  args: {
    variant: "income",
    value: 5400,
  },
};

export const Expenses: Story = {
  args: {
    variant: "expenses",
    value: 3250,
  },
};

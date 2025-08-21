import type { Meta, StoryObj } from "@storybook/react";
import PotsCard from "./index";
import getAccount from "@/lib/getData";
import type { Pot } from "@/types";

const { pots } = getAccount() as { pots: Pot[] };

const meta: Meta<typeof PotsCard> = {
  title: "Overview/PotsCard",
  component: PotsCard,
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

type Story = StoryObj<typeof PotsCard>;
export const Default: Story = {
  name: "Default (from data.json",
  args: {
    pots,
  },
};

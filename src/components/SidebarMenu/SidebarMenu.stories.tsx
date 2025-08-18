import type { Meta, StoryObj } from "@storybook/react";
import SidebarMenu from "./index";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const Wrapper = (props: React.PropsWithChildren) => (
  <div
    style={{
      background: "var(--grey-900)",
      padding: "var(--space-150)",
      width: "50rem",
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
  >
    {props.children}
  </div>
);

export const OverviewActive: Story = {
  name: "Overview active",
  render: (args) => (
    <Wrapper>
      <SidebarMenu {...args} />
    </Wrapper>
  ),
  args: {
    activePath: "/",
  },
};

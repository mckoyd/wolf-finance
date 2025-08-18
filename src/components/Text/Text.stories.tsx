import type { Meta, StoryObj } from "@storybook/react";
import type { TextVariant } from "@/types";
import { TEXT_STORY_CONTENT } from "./config";

import Text from "./index";

const { lipsumShort, lipsumLong, numericSample, rtlArabic } =
  TEXT_STORY_CONTENT;

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Preset1_Heading: Story = {
  name: "Preset 1 (Heading)",
  args: {
    as: "h1",
    variant: "preset-1" as TextVariant,
    children: "Preset 1 - Bold 32px / 120%",
  },
};

export const Preset2_Heading: Story = {
  name: "Preset 2 (Heading)",
  args: {
    as: "h2",
    variant: "preset-2" as TextVariant,
    children: "Preset 2 - Heading",
  },
};

export const Preset3_Heading: Story = {
  name: "Preset 3 (Heading)",
  args: {
    as: "h3",
    variant: "preset-3" as TextVariant,
    children: "Preset 3 - Heading",
  },
};

export const Preset4_Body: Story = {
  name: "Preset 4 (Body)",
  args: {
    as: "p",
    variant: "preset-4" as TextVariant,
    children: "Preset 4 - Body",
  },
};

export const Preset5_Caption: Story = {
  name: "Preset 5 (Caption)",
  args: {
    as: "p",
    variant: "preset-5" as TextVariant,
    children: "Preset 5 - Caption",
  },
};

export const Align_Start: Story = {
  name: "Align: start",
  args: {
    as: "p",
    variant: "preset-4" as TextVariant,
    align: "start",
    children: lipsumShort,
  },
};

export const Align_Center: Story = {
  name: "Align: center",
  args: {
    as: "p",
    variant: "preset-4" as TextVariant,
    align: "center",
    children: lipsumShort,
  },
};

export const Align_End: Story = {
  name: "Align: end",
  args: {
    as: "p",
    variant: "preset-4" as TextVariant,
    align: "end",
    children: lipsumShort,
  },
};

export const Align_Justify: Story = {
  name: "Align: justify",
  args: {
    as: "p",
    variant: "preset-4" as TextVariant,
    align: "justify",
    children: lipsumLong,
  },
};

export const Long_Text_Wrap: Story = {
  name: "Body - long text wrapping",
  args: {
    as: "p",
    variant: "preset-4" as TextVariant,
    children: lipsumLong,
  },
};

export const Numbers_Money: Story = {
  name: "Body - numbers & currency",
  args: {
    as: "p",
    variant: "preset-4" as TextVariant,
    children: numericSample,
  },
};

export const RTL_Arabic: Story = {
  name: "Body = RTL (Arabic)",
  render: (args) => (
    <div dir="rtl" style={{ direction: "rtl" }}>
      <Text {...args} />
    </div>
  ),
  args: {
    as: "p",
    variant: "preset-4" as TextVariant,
    children: rtlArabic,
  },
};

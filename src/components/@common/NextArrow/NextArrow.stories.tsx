import { Meta, Story } from "@storybook/react";
import NextArrow, { Props } from ".";

export default {
  title: "Common/NextArrow",
  component: NextArrow,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <NextArrow {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

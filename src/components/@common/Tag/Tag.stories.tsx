import { Meta, Story } from "@storybook/react";
import Tag, { Props } from ".";

export default {
  title: "Common/Tag",
  component: Tag,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <Tag {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  name: "미라클모닝",
};

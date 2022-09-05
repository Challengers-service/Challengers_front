import { Meta, Story } from "@storybook/react";
import HomeWithTabLayout from ".";

export default {
  title: "Layout/HomeWithTabLayout",
  component: HomeWithTabLayout,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <HomeWithTabLayout {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

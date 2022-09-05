import { Meta, Story } from "@storybook/react";
import HomeSearchLayout from ".";

export default {
  title: "Layout/HomeSearchLayout",
  component: HomeSearchLayout,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <HomeSearchLayout {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

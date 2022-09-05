import { Meta, Story } from "@storybook/react";
import SidebarLayout from ".";

export default {
  title: "Layout/SidebarLayout",
  component: SidebarLayout,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <SidebarLayout {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

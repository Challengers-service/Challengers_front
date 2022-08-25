import { Meta, Story } from "@storybook/react";
import SideBar from ".";

export default {
  title: "Common/SideBar",
  component: SideBar,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <SideBar {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

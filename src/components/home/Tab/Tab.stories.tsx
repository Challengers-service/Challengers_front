import { Meta, Story } from "@storybook/react";
import Tab, { Props } from ".";

export default {
  title: "Home/Tab",
  component: Tab,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <Tab {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

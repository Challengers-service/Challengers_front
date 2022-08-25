import { Meta, Story } from "@storybook/react";
import Check from ".";

export default {
  title: "Common/Check",
  component: Check,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <div>
      <Check {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

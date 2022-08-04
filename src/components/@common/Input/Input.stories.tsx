import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from ".";

export default {
  title: "Common/Input",
  component: Input,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<InputProps> = args => (
  <>
    <div>
      <Input {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

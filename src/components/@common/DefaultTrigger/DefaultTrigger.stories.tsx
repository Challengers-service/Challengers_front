import { Meta, Story } from "@storybook/react";
import DefaultTrigger, { Props } from ".";

export default {
  title: "Common/DefaultTrigger",
  component: DefaultTrigger,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <DefaultTrigger {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

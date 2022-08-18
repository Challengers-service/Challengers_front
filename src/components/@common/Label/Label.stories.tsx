import { Meta, Story } from "@storybook/react";
import Label, { Props } from ".";

export default {
  title: "Common/Label",
  component: Label,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <Label {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

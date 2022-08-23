import { Meta, Story } from "@storybook/react";
import ButtonSelect, { Props } from ".";

export default {
  title: "Common/ButtonSelect",
  component: ButtonSelect,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <ButtonSelect {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

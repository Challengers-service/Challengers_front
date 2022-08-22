import { Meta, Story } from "@storybook/react";
import Select, { Props } from ".";

export default {
  title: "Common/Select",
  component: Select,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <Select {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  defaultValue: "2",
  trigger: <div>trigger</div>,
  options: ["1", "2", "3", "4"],
};

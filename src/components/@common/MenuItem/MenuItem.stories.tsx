import { Meta, Story } from "@storybook/react";
import MenuItem, { Props } from ".";

export default {
  title: "Common/MenuItem",
  component: MenuItem,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <MenuItem {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

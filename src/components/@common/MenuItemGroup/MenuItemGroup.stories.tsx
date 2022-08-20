import { Meta, Story } from "@storybook/react";
import MenuItemGroup, { Props } from ".";

export default {
  title: "Common/MenuItemGroup",
  component: MenuItemGroup,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <MenuItemGroup {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

import { Meta, Story } from "@storybook/react";
import SearchHeader, { Props } from ".";

export default {
  title: "Home/SearchHeader",
  component: SearchHeader,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <SearchHeader {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

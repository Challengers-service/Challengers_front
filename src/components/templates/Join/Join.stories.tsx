import { Meta, Story } from "@storybook/react";
import Join, { JoinProps } from ".";

export default {
  title: "Templates/Join",
  component: Join,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<JoinProps> = args => (
  <>
    <div>
      <Join {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

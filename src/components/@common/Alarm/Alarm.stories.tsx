import { Meta, Story } from "@storybook/react";
import Alarm from ".";

export default {
  title: "Common/Alarm",
  component: Alarm,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <div>
      <Alarm {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

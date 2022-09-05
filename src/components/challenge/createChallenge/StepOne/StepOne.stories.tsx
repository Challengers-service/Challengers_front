import { Meta, Story } from "@storybook/react";
import StepOne from ".";

export default {
  title: "CreateChallenge/StepOne",
  component: StepOne,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <>
    <div>
      <StepOne {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

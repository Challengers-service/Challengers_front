import { Meta, Story } from "@storybook/react";
import StepTwo from ".";

export default {
  title: "CreateChallenge/StepTwo",
  component: StepTwo,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <>
    <div>
      <StepTwo {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

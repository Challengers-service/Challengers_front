import { Meta, Story } from "@storybook/react";
import StepFinish from ".";

export default {
  title: "CreateChallenge/StepFinish",
  component: StepFinish,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <>
    <div>
      <StepFinish {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

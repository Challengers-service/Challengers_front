import { Meta, Story } from "@storybook/react";
import StepThree from ".";

export default {
  title: "CreateChallenge/StepThree",
  component: StepThree,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <>
    <div>
      <StepThree {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

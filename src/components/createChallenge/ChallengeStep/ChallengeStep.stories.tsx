import { Meta, Story } from "@storybook/react";
import ChallengeStep from ".";

export default {
  title: "CreateChallenge/ChallengeStep",
  component: ChallengeStep,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <>
    <div>
      <ChallengeStep {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

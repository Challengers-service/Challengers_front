import { Meta, Story } from "@storybook/react";
import { mock_getChallenge } from "__mock__/challenge";
import ChallengeCard, { Props } from ".";

export default {
  title: "Challenge/ChallengeCard",
  component: ChallengeCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <ChallengeCard {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  challenge: mock_getChallenge,
};

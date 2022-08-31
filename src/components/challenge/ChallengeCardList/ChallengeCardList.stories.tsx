import { Meta, Story } from "@storybook/react";
import { mock_getChallenges } from "mock/challenge";
import ChallengeCardList, { Props } from ".";

export default {
  title: "Challenge/ChallengeCardList",
  component: ChallengeCardList,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <ChallengeCardList {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  challenges: mock_getChallenges,
};

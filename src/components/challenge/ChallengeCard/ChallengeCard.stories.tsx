import { Meta, Story } from "@storybook/react";
import ChallengeCard, { Props } from ".";

export default {
  title: "Home/ChallengeCard",
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
Default.args = {};

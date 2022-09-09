import { Meta, Story } from "@storybook/react";
import ChallengeDescription, { Props } from ".";
import { rest } from "msw";
import { mock_detailChallenge } from "__mock__/challenge";
import { baseURL } from "constants/api";
export default {
  title: "DetailChallenge/ChallengeDescription",
  component: ChallengeDescription,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <ChallengeDescription {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(`${baseURL}/api/challenge/1`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ ...mock_detailChallenge, cart: true })
        );
      }),
    ],
  },
};
Default.args = {
  challengeId: 1,
};

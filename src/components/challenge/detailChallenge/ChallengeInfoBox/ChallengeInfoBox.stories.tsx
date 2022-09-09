import { Meta, Story } from "@storybook/react";
import ChallengeInfoBox, { Props } from ".";
import { rest } from "msw";
import { mock_detailChallenge } from "__mock__/challenge";
export default {
  title: "DetailChallenge/ChallengeInfoBox",
  component: ChallengeInfoBox,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <ChallengeInfoBox {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get("/api/challenge/1", (req, res, ctx) => {
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

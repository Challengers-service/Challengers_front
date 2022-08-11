import { Meta, Story } from "@storybook/react";
import Anchor, { AnchorProps } from ".";

export default {
  title: "Common/Anchor",
  component: Anchor,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<AnchorProps> = args => (
  <>
    <div>
      <Anchor {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  text: "good",
  to: "/",
};

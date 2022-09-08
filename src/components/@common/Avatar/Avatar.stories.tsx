import { Meta, Story } from "@storybook/react";
import Avatar, { Props } from ".";
import DefaultAvatar from "assets/png/DefaultAvatar.png";

export default {
  title: "Common/Avatar",
  component: Avatar,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <Avatar {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  url: DefaultAvatar,
  name: "이재훈",
};

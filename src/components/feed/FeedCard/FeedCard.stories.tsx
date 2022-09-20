import { Meta, Story } from "@storybook/react";
import FeedCard, { Props } from ".";
import defaultFeed from "assets/png/defaultFeed.png";

export default {
  title: "Feed/FeedCard",
  component: FeedCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <FeedCard {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  src: defaultFeed,
};

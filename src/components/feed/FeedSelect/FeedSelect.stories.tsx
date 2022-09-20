import { Meta, Story } from "@storybook/react";
import FeedSelect, { Props } from ".";

export default {
  title: "Feed/FeedSelect",
  component: FeedSelect,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <FeedSelect {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

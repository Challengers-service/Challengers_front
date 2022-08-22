import { Meta, Story } from "@storybook/react";
import { CHALLENGE_DESCRIPTION } from "constants/placeholder";
import Textarea, { Props } from ".";

export default {
  title: "Common/Textarea",
  component: Textarea,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <Textarea {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  placeholder: CHALLENGE_DESCRIPTION,
};

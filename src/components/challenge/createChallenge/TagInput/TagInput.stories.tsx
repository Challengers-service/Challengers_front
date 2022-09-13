import { Meta, Story } from "@storybook/react";
import TagInput from ".";

export default {
  title: "CreateChallenge/TagInput",
  component: TagInput,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <>
    <div>
      <TagInput {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

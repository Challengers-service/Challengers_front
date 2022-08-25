import { Meta, Story } from "@storybook/react";
import CreateChallengeLayout from ".";

export default {
  title: "Layout/CreateChallengeLayout",
  component: CreateChallengeLayout,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <CreateChallengeLayout {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

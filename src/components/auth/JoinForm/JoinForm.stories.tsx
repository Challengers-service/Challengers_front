import { Meta, Story } from "@storybook/react";
import JoinForm from ".";

export default {
  title: "Auth/JoinForm",
  component: JoinForm,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <div>
      <JoinForm {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

import { Meta, Story } from "@storybook/react";
import GoogleLogin from ".";

export default {
  title: "Auth/GoogleLogin",
  component: GoogleLogin,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <>
    <div>
      <GoogleLogin {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

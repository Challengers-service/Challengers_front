import { Meta, Story } from "@storybook/react";
import Login, { LoginProps } from ".";

export default {
  title: "Templates/Login",
  component: Login,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<LoginProps> = args => (
  <>
    <div>
      <Login {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

import { Meta, Story } from "@storybook/react";
import LoginForm, { LoginFormProps } from ".";

export default {
  title: "Auth/LoginForm",
  component: LoginForm,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<LoginFormProps> = args => (
  <>
    <div>
      <LoginForm {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

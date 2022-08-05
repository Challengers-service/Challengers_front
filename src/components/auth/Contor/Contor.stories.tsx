import { Meta, Story } from "@storybook/react";
import Contor from ".";

export default {
  title: "Auth/Contor",
  component: Contor,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story = args => (
  <>
    <div>
      <Contor {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

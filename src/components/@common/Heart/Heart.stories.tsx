import { Meta, Story } from "@storybook/react";
import Heart, { Props } from ".";

export default {
  title: "Common/Heart",
  component: Heart,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <Heart {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

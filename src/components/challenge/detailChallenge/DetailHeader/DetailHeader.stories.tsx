import { Meta, Story } from "@storybook/react";
import DetailHeader, { Props } from ".";
export default {
  title: "DetailChallenge/DetailHeader",
  component: DetailHeader,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <DetailHeader {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

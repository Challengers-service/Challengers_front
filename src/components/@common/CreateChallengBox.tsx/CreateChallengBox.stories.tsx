import { Meta, Story } from "@storybook/react";
import CreateChallengBox from ".";

export default {
  title: "Common/CreateChallengBox",
  component: CreateChallengBox,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<any> = args => (
  <>
    <div>
      <CreateChallengBox {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

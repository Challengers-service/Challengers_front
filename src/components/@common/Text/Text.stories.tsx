import { Meta, Story } from "@storybook/react";
import Text, { TextProps } from ".";

export default {
  title: "Common/Text",
  component: Text,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<TextProps> = args => (
  <>
    <div>
      <Text typography="h1">TEST</Text>
      <Text typography="h2">TEST</Text>
      <Text typography="h3">TEST</Text>
      <Text typography="h4">TEST</Text>
      <Text typography="h5">TEST</Text>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

import { Meta, Story } from "@storybook/react";
import LabelInput, { LabelInputProps } from ".";

export default {
  title: "Molecules/LabelInput",
  component: LabelInput,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<LabelInputProps> = args => (
  <>
    <div>
      <LabelInput {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  labelText: "label",
};

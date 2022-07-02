import { Meta, Story } from "@storybook/react";
import Label, { LabelProps } from "./";

export default {
  title: "Atoms/Label",
  component: Label,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<LabelProps> = args => (
  <>
    <div>
      <Label {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  text: "label",
};

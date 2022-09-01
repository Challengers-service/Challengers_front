import { Meta, Story } from "@storybook/react";
import Modal, { Props } from ".";

export default {
  title: "Common/Modal",
  component: Modal,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <Modal {...args}>modal</Modal>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  visible: false,
};

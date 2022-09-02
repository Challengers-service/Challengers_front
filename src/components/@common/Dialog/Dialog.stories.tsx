import { Meta, Story } from "@storybook/react";
import Dialog, { Props } from ".";
import wavePng from "assets/png/wave.png";
export default {
  title: "Common/Dialog",
  component: Dialog,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <Dialog {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  visible: true,
  title: <img src={wavePng} />,
  content: "로그인이 필요한 서비스 입니다.",
  confirmText: "로그인",
  subText: "계정이 없으신가요?",
};

import { Meta, Story } from "@storybook/react";
import CategoryCard, { Props } from ".";
import LifePng from "assets/png/life.png";

export default {
  title: "CreateChallenge/CategoryCard",
  component: CategoryCard,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <CategoryCard {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  imgUrl: LifePng,
  koreaTitle: "라이프",
  englishTitle: "Life",
};

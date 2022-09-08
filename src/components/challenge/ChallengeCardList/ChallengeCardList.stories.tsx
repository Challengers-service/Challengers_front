import { Meta, Story } from "@storybook/react";
import { mock_getChallenges } from "__mock__/challenge";
import ChallengeCardList, { Props } from ".";

export default {
  title: "Challenge/ChallengeCardList",
  component: ChallengeCardList,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<Props> = args => (
  <>
    <div>
      <ChallengeCardList {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  challengeResults: [
    {
      content: mock_getChallenges,
      pageable: {
        sort: {
          empty: true,
          sorted: false,
          unsorted: true,
        },
        offset: 0,
        pageNumber: 0,
        pageSize: 9,
        paged: true,
        unpaged: false,
      },
      last: true,
      totalPages: 1,
      totalElements: 5,
      first: true,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      size: 9,
      number: 0,
      numberOfElements: 5,
      empty: false,
    },
  ],
};

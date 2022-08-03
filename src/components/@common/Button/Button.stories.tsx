import { Meta, Story } from "@storybook/react";
import styled from "styled-components";
import Button, { ButtonProps } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {},
  argTypes: {},
} as Meta;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Template: Story<ButtonProps> = args => (
  <>
    <ButtonGroup>
      <Button size="small" type="button">
        BUTTON
      </Button>
      <Button size="medium" type="button">
        BUTTON
      </Button>
      <Button size="large" type="button">
        BUTTON
      </Button>
      <Button size="large" fullWidth={true} type="button">
        BUTTON
      </Button>
    </ButtonGroup>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};

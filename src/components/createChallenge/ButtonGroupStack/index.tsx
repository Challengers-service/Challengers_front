import Button from "components/@common/Button";
import Stack from "components/@common/Stack";
import { useInternalRouter } from "hooks/useInternalRouter";
import * as Styled from "./ButtonGroupStackStyled";

export interface Props {}

const ButtonGroupStack = (props: Props) => {
  const router = useInternalRouter();
  return (
    <Stack style={{ marginTop: "101px" }}>
      <Styled.ButtonGroup style={{ flex: 1 }}>
        <Button
          onClick={router.goBack}
          type="button"
          className="prev_button"
          size="medium"
        >
          이전
        </Button>
      </Styled.ButtonGroup>
      <Styled.ButtonGroup>
        <Button type="button" className="save_button" size="medium">
          임시 저장
        </Button>
        <Button type="submit" className="next_button" size="medium">
          다음
        </Button>
      </Styled.ButtonGroup>
    </Stack>
  );
};

export default ButtonGroupStack;

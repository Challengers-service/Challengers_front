import Text from "@atoms/Text";
import JoinForm from "@organisms/JoinForm";
import { StyledJoinPage } from "./JoinPageStyled";

export default function JoinPage() {
  return (
    <StyledJoinPage>
      <Text typography="h1">Join</Text>
      <JoinForm />
    </StyledJoinPage>
  );
}

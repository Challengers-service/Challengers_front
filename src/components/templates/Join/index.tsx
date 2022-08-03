import Text from "components/@common/Text";
import JoinForm from "@organisms/JoinForm";
import { StyledJoin } from "./JoinStyled";

export interface JoinProps {}

export default function Join(props: JoinProps) {
  return (
    <StyledJoin>
      <Text typography="h1">Join</Text>
      <JoinForm />
    </StyledJoin>
  );
}

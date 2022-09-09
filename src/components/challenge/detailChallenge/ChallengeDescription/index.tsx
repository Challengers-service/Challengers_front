import Avatar from "components/@common/Avatar";
import Tag from "components/@common/Tag";
import useChallengeDetail from "hooks/queries/challenge/useChallengeDetail";
import { getEnglishDate } from "lib/utils/getEnglishDate";
import * as Styled from "./ChallengeDescriptionStyled";

export interface Props {
  challengeId: number;
}

const ChallengeDescription = ({ challengeId }: Props) => {
  const { data: challenge } = useChallengeDetail(challengeId, {
    staleTime: 1000 * 20,
  });

  if (!challenge) return null;

  const {
    category,
    name,
    tags,
    introduction,
    createdDate,
    hostName,
    hostProfileImageUrl,
  } = challenge;
  return (
    <Styled.Wrapper>
      <Styled.SubText fontWeight={300}>{category}</Styled.SubText>
      <Styled.Title>{name}</Styled.Title>
      <Styled.ButtonGroup>
        {tags.map(tag => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </Styled.ButtonGroup>
      <Styled.Description>{introduction}</Styled.Description>
      <Styled.FlexEnd>
        <Styled.SubText className="description_date" fontWeight={400}>
          {getEnglishDate(createdDate)}
        </Styled.SubText>
        <Avatar url={hostProfileImageUrl} name={hostName} />
      </Styled.FlexEnd>
    </Styled.Wrapper>
  );
};

export default ChallengeDescription;

import Tag from "components/@common/Tag";
import useInput from "hooks/useInput";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { challengeTagsAtom } from "stores/challenge";
import * as Styled from "./TagInputStyled";

const TagInput = () => {
  const { value, setValue, onChange } = useInput();
  const [tags, setTags] = useRecoilState(challengeTagsAtom);

  const insertTag = useCallback(
    (tag: string) => {
      setValue("");
      if (tag === "" || tags.length >= 10 || tags.includes(tag)) return;
      if (tag.charAt(0) === "#") {
        tag = tag.slice(1, tag.length);
      }
      setTags([...tags, tag]);
    },
    [tags]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Backspace" && value.trim() === "") {
      setTags(tags.slice(0, tags.length - 1));
    }
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      insertTag(value.trim());
    }
  };

  const onRemove = (tag: string) => {
    const nextTags = tags.filter(t => t !== tag);
    setTags(nextTags);
  };

  return (
    <Styled.Wrapper>
      {tags.map((tag, index) => (
        <Tag key={index} name={tag} onClick={() => onRemove(tag)} />
      ))}
      <input
        value={value}
        onChange={onChange}
        onKeyUp={onKeyDown}
        className="tag_input"
        type="text"
      />
    </Styled.Wrapper>
  );
};

export default TagInput;

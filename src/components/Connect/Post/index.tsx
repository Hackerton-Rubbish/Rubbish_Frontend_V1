import { FC } from "react";
import * as S from "./styles";

interface Props {
    Rubbish : string,
    Address : string,
    Name : string,
    LeftItem : number
}

const Post: FC<Props> = ({ Rubbish, Address, Name, LeftItem }): JSX.Element => {
  return (
    <S.PostContainer>
      <S.ImgBox>

      </S.ImgBox>
      <S.DescriptionBox>
        <S.RubbishName>{Rubbish}</S.RubbishName>
        <S.Address>{Address}</S.Address>
        <S.Name>{Name}</S.Name>
        <S.LeftItem>
          재고:&nbsp;<span>{LeftItem}개</span>
        </S.LeftItem>
      </S.DescriptionBox>
    </S.PostContainer>
  );
};

export default Post;

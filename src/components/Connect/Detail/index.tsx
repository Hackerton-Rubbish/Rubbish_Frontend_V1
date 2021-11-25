import { FC } from "react";
import { Flag } from "../../../assets";
import * as S from "./styles";

const Detail: FC = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.DetailImage>
        <img src={Flag} />
      </S.DetailImage>
      <S.DescriptionBox>
        <S.Box>
          <S.Material>플라스틱 컵</S.Material>
          <S.LeftItem>
            재고:&nbsp;<span>20개</span>
          </S.LeftItem>
        </S.Box>
        <S.Name>박준홍</S.Name>
        <S.Address>대구광역시 달성군 구지면</S.Address>
        <S.Connect>커넥하기</S.Connect>
      </S.DescriptionBox>
    </S.Wrapper>
  );
};

export default Detail;

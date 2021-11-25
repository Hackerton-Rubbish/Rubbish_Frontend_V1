import { FC } from "react";
import * as S from "./styles";
import Post from "./Post";

const Connect: FC = (): JSX.Element => {
  const testArray = [];
  for (let i = 0; i < 16; i++) {
    testArray.push(i);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleBox>
          <S.Title>커넥 서비스</S.Title>
          <S.Description>
            당신의 <span>쓰레기</span>를 필요한 사람에게 나눔하세요
          </S.Description>
        </S.TitleBox>
        <S.Post>등록하기</S.Post>
      </S.Header>
      <S.ListContainer>
        {testArray.map((value) => {
          return <Post Rubbish={"플라스틱 컵"} Address={"대구광역시 달성군"} Name={"조준서"} LeftItem={20} key={value} />;
        })}
      </S.ListContainer>
    </S.Wrapper>
  );
};

export default Connect;

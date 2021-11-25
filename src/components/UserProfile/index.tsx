import { FC } from "react";
import * as S from './styles';

import UserIcon from '../../assets/image/UserIcon.png';

const UserProfile: FC = (): JSX.Element => {
  return (
    <>
      <S.ProfileImg src={UserIcon} />
      <S.UserName>박준홍</S.UserName>
      <S.TextForm>
        <S.KakaoID>
          카카오톡 ID: <S.Link>jh040209</S.Link>
        </S.KakaoID>
      </S.TextForm>
      <S.TextForm>
        <S.KakaoOpenChat>
          오픈 채팅방: <S.Link>http://www.naver.com</S.Link>
        </S.KakaoOpenChat>
      </S.TextForm>
      <S.TextForm>
        <S.InstagramID>
          인스타 ID: <S.Link>Junhong936</S.Link>
        </S.InstagramID>
      </S.TextForm>
      <S.UserDeleteButton>삭제</S.UserDeleteButton>
      <S.Line></S.Line>
      <S.ImageList>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
        <S.ImageBox></S.ImageBox>
      </S.ImageList>
    </>
  );
};

export default UserProfile;

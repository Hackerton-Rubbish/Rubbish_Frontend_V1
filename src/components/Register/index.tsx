import { FC } from "react";
import * as S from './styles';

const Register: FC = (): JSX.Element => {
  return (
    <S.RegisterForm>
      <S.RegisterTitle>환영합니다</S.RegisterTitle>
      <S.RegisterSubTitle>계속하려면 회원가입을 해주세요</S.RegisterSubTitle>
      <S.RegisterInputForm>
        <S.InputTitle>아이디</S.InputTitle>
        <S.RegisterInput placeholder="아이디를 입력해주세요" />
      </S.RegisterInputForm>
      <S.RegisterInputForm>
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.RegisterInput placeholder="비밀번호를 입력해주세요" />
      </S.RegisterInputForm>
      <S.RegisterInputForm>
        <S.InputTitle>이메일</S.InputTitle>
        <S.RegisterMiddleInput placeholder="이메일를 입력해주세요" />
        <S.RegisterMiddleSubmit>전송</S.RegisterMiddleSubmit>
      </S.RegisterInputForm>
      <S.RegisterInputForm>
        <S.InputTitle>인증코드</S.InputTitle>
        <S.RegisterMiddleInput placeholder="인증코드를 입력해주세요" />
        <S.RegisterMiddleSubmit>인증</S.RegisterMiddleSubmit>
      </S.RegisterInputForm>
      <S.RegisterSmallForm>
        <S.InputTitle>지역</S.InputTitle>
        <S.RegisterSmallInput placeholder="지역을 입력해주세요" />
      </S.RegisterSmallForm>
      <S.RegisterSmallForm>
        <S.InputTitle>사용자 종류</S.InputTitle>
        <S.SelectForm>
          <option>일반 사용자</option>
          <option>정크 아티스트</option>
        </S.SelectForm>
      </S.RegisterSmallForm>
      <S.SubmitButton>회원가입</S.SubmitButton>
    </S.RegisterForm>
  );
};

export default Register;

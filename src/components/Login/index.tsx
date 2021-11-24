import { FC } from "react";
import * as S from "./styles";

const Login: FC = (): JSX.Element => {
  return (
    <S.LoginForm>
      <S.LoginTitle>환영합니다</S.LoginTitle>
      <S.LoginSubTitle>계속하려면 로그인해주세요</S.LoginSubTitle>
      <S.IDTitle>아이디</S.IDTitle>
      <S.IDInput placeholder='아이디를 입력해주세요' />
      <S.PWTitle>비밀번호</S.PWTitle>
      <S.PWInput placeholder='비밀번호를 입력해주세요' type='password' />
      <S.RegisterTitle>계정이 없으신가요?</S.RegisterTitle>
      <S.GoRegisterPage to='/login'>여기서 바로 회원가입!</S.GoRegisterPage>
      <S.LoginButton type='submit'>로그인</S.LoginButton>
    </S.LoginForm>
  );
};

export default Login;

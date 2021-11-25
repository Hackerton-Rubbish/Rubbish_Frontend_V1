import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { ErrorAlert } from "../../lib/SweetAlert";
import { postLogin } from "../../utils/api/Auth/Login";
import * as S from "./styles";

const Login: FC = (): JSX.Element => {
  const [nickName, onChangeNickName] = useInput<string>('');
  const [PW, onChangePW] = useInput<string>('');

  const history = useNavigate();

  const onSubmit = () => {
    const data: object = {
      'nickname': nickName,
      'passwd': PW
    }

    const response = postLogin(data);
    response.then((res) => {
      localStorage.setItem('access_token', res.data.token);
      history('/');
    }).catch((error) => {
      if (error.response.status === 400) {
        ErrorAlert('Error!', '아이디 또는 비밀번호가 입력되지 않았습니다.');
      } else if (error.response.status === 401) {
        ErrorAlert('Error!', '아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    })
  }

  return (
    <S.LoginForm>
      <S.LoginTitle>환영합니다</S.LoginTitle>
      <S.LoginSubTitle>계속하려면 로그인해주세요</S.LoginSubTitle>
      <S.IDTitle>아이디</S.IDTitle>
      <S.IDInput 
        placeholder='아이디를 입력해주세요' 
        type='text'
        onChange={onChangeNickName} 
        name="ID" 
        value={nickName} 
      />
      <S.PWTitle>비밀번호</S.PWTitle>
      <S.PWInput 
        placeholder='비밀번호를 입력해주세요' 
        type='number' 
        onChange={onChangePW} 
        name="Password" 
        value={PW} 
      />
      <S.RegisterTitle>계정이 없으신가요?</S.RegisterTitle>
      <S.GoRegisterPage to='/register'>여기서 바로 회원가입!</S.GoRegisterPage>
      <S.LoginButton type='button' onClick={onSubmit}>로그인</S.LoginButton>
    </S.LoginForm>
  );
};

export default Login;

import { FC } from "react";
import { useNavigate } from "react-router";
import useInput from "../../hooks/useInput";
import { ErrorAlert, SuccessAlert, SuccessToast } from "../../lib/SweetAlert";
import { emailAuthCheck, postEmailAuthRequest, postRegister } from "../../utils/api/Auth/Register";
import * as S from './styles';

const Register: FC = (): JSX.Element => {
  const [nickName, onChangeNickName] = useInput<string>('');
  const [passWord, onChangePassWord] = useInput<string>('');
  const [email, onChangeEmail] = useInput<string>('');
  const [authCode, onChangeAuthCode] = useInput<string>('');
  const [place, onChangePlace] = useInput<string>('');
  const [userType, onChangeUserType] = useInput<string>('');

  const history = useNavigate();

  const postEmail = () => {
    const data: object = {
      'email': email
    }

    const response = postEmailAuthRequest(data);
    response.then((res) => {
      SuccessToast('Success!', '이메일 요청이 성공적으로 되었습니다.');
    }).catch((error) => {
      if (error.response.status === 400) ErrorAlert('Error!', '입력한 이메일을 다시 확인해주세요.');
    })
  }

  const postEmailAuthCode = () => {
    const data: object = {
      'auth': authCode
    }

    const response = emailAuthCheck(email, data);
    response.then((res) => {
      SuccessToast('Success!', '이메일 인증이 완료 되었습니다.');
    }).catch((error) => {
      if (error.response.status === 400) {
        ErrorAlert('Error!', '이메일 요청을 먼저 해주세요.');
      } else if (error.response.status === 401) {
        ErrorAlert('Error!', '인증코드가 틀렸습니다. 다시 확인해주세요.');
      } else if (error.response.status === 410) {
        ErrorAlert('Error!', '인증 시간이 초과되었습니다.');
      }
    })
  }

  const register = (e: any) => {
    e.preventDefault();
    const data: object = {
      'email': email,
      'nickname': nickName,
      'passwd': passWord,
      'region': place,
      'role': userType
    }

    const response = postRegister(data);
    response.then((res) => {
      SuccessAlert('Success!', '회원가입에 성공하였습니다.');
      history('/login');
    }).catch((error) => {
      if (error.response.status === 400) {
        ErrorAlert('Error!', '입력하지 않은 곳이 있습니다. 전부 입력해주세요.');
      } else if (error.response.status === 403) {
        ErrorAlert('Error!', '유효하지 않는 이메일 또는 유효하지 않은 인증코드');
      } else if (error.response.status === 406) {
        if (!error.response.data.validNickName) {
          ErrorAlert('Error!', '동일한 닉네임이 존재합니다.');
        } else if (!error.response.data.validPassword) {
          ErrorAlert('Error!', '비밀번호 형식이 잘못되었습니다.');
        }
      }
    })
  }

  return (
    <S.RegisterForm>
      <S.RegisterTitle>환영합니다</S.RegisterTitle>
      <S.RegisterSubTitle>계속하려면 회원가입을 해주세요</S.RegisterSubTitle>

      <S.RegisterInputForm>
        <S.InputTitle>아이디</S.InputTitle>
        <S.RegisterInput 
          placeholder="아이디를 입력해주세요" 
          type="text"
          onChange={onChangeNickName} 
          name="nickname" 
          value={nickName}
        />
      </S.RegisterInputForm>

      <S.RegisterInputForm>
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.RegisterPWInput 
          placeholder="비밀번호를 입력해주세요 (6자리)" 
          type="number" 
          onChange={onChangePassWord} 
          name="password" 
          value={passWord}
        />
      </S.RegisterInputForm>

      <S.RegisterInputForm>
        <S.InputTitle>이메일</S.InputTitle>
        <S.RegisterMiddleInput 
          placeholder="이메일를 입력해주세요" 
          type="email" 
          onChange={onChangeEmail} 
          name="email" 
          value={email}
        />
        <S.RegisterMiddleSubmit onClick={postEmail}>전송</S.RegisterMiddleSubmit>
      </S.RegisterInputForm>

      <S.RegisterInputForm>
        <S.InputTitle>인증코드</S.InputTitle>
        <S.RegisterMiddleInput 
          placeholder="인증코드를 입력해주세요" 
          type="number" 
          onChange={onChangeAuthCode} 
          name='authCode' 
          value={authCode}
        />
        <S.RegisterMiddleSubmit onClick={postEmailAuthCode}>인증</S.RegisterMiddleSubmit>
      </S.RegisterInputForm>

      <S.RegisterSmallForm>
        <S.InputTitle>지역</S.InputTitle>
        <S.RegisterSmallInput 
          placeholder="지역을 입력해주세요" 
          type="text" 
          onChange={onChangePlace} 
          name="place" 
          value={place}
        />
      </S.RegisterSmallForm>

      <S.RegisterSmallForm>
        <S.InputTitle>사용자 종류</S.InputTitle>
        <S.RegisterSmallInput 
          placeholder="정크 아티스트 또는 일반 사용자" 
          type='text' 
          onChange={onChangeUserType} 
          name="userType" 
          value={userType}
        />
      </S.RegisterSmallForm>

      <S.SubmitButton type='button' onClick={register}>회원가입</S.SubmitButton>
    </S.RegisterForm>
  );
};

export default Register;

import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from '../../style';

export const LoginForm = styled.div`
  position: relative;
  float: left;
  width: 40vw;
  left: 10vw;
  top: 14vh;
`;

export const LoginTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${color.titleBlue};
`;

export const LoginSubTitle = styled.div`
  position: relative;
  font-size: 1rem;
  top: 2vh;
  color: ${color.titleGray};
`;

export const IDTitle = styled.div`
  position: relative;
  top: 12vh;
  font-size: 1.5rem;
  color: ${color.mainBlue};
`;

export const IDInput = styled.input`
  position: relative;
  top: 14vh;
  width: 30vw;
  height: 3.5vh;
  font-size: 1.1rem;
  border: 0px solid ${color.gray000};
  border-bottom: 2px solid ${color.mainGray};

  &::placeholder {
    color: ${color.mainGray};
    font-size: 1.1rem;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${color.mainBlue};
  }
`;

export const PWTitle = styled.div`
  position: relative;
  top: 22vh;
  font-size: 1.5rem;
  color: ${color.mainBlue};
`;

export const PWInput = styled.input`
  position: relative;
  top: 24vh;
  width: 30vw;
  height: 3.5vh;
  font-size: 1.1rem;
  border: 0px solid ${color.gray000};
  border-bottom: 2px solid ${color.mainGray};

  &::placeholder {
    color: ${color.mainGray};
    font-size: 1.1rem;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${color.mainBlue};
  }
`;

export const RegisterTitle = styled.div`
  position: relative;
  top: 35vh;
  color: ${color.mainGray};
`;

export const GoRegisterPage = styled(Link)`
  position: relative;
  top: 30vh;
  left: 22vw;
  color: ${color.mainBlue};
  text-decoration: none;
`;

export const LoginButton = styled.button`
  position: relative;
  top: 38vh;
  left: -8vw;
  width: 30vw;
  height: 7vh;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${color.gray000};
  border-radius: 5px;
  border: 0px solid ${color.gray000};
  background-color: ${color.mainBlue};
`;

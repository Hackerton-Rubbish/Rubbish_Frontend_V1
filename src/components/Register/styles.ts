import styled from "@emotion/styled";
import { color } from "../../style";

export const RegisterForm = styled.div`
  position: relative;
  float: left;
  width: 40vw;
  left: 10vw;
  top: 8vh;
`;

export const RegisterTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${color.titleBlue};
`;

export const RegisterSubTitle = styled.div`
  position: relative;
  font-size: 1rem;
  top: 3vh;
  color: ${color.titleGray};
`;

export const RegisterInputForm = styled.div`
  position: relative;
  top: 10vh;
  margin-bottom: 5.5vh;
`;

export const InputTitle = styled.div`
  font-size: 1.5rem;
  color: ${color.mainBlue};
`;

export const RegisterInput = styled.input`
  position: relative;
  top: 1.5vh;
  width: 30vw;
  height: 3.5vh;
  font-size: 1.1rem;
  border: 0px;
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

export const RegisterMiddleInput = styled.input`
  position: relative;
  top: 1.5vh;
  width: 26vw;
  height: 3.5vh;
  font-size: 1.1rem;
  border: 0px;
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

export const RegisterMiddleSubmit = styled.button`
  position: relative;
  top: 2vh;
  left: 1vw;
  width: 3vw;
  height: 3.5vh;
  border: 2px solid ${color.mainBlue};
  border-radius: 5px;
  background-color: white;
  font-size: 1rem;
  color: ${color.mainBlue};
  font-weight: bold;
`;

export const RegisterSmallForm = styled.div`
  position: relative;
  float: left;
  top: 10vh;
  width: 15vw;
  margin-right: 3vw;
`;

export const SelectForm = styled.select`
  position: relative;
  top: 3vh;
  border: 0px;
  width: 12vw;
  text-align: center;
  border-bottom: 2px solid ${color.mainGray};
  font-size: 1.1rem;
  color: ${color.mainGray};
`;

export const RegisterSmallInput = styled.input`
  position: relative;
  top: 1.5vh;
  width: 13vw;
  height: 3.5vh;
  font-size: 1.1rem;
  border: 0px;
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

export const SubmitButton = styled.button`
  position: relative;
  width: 30vw;
  height: 7vh;
  top: 15vh;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${color.gray000};
  border: 0px;
  background-color: ${color.mainBlue};
`;

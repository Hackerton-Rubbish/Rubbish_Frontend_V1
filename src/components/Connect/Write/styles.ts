import styled from "@emotion/styled";
import { color } from "../../../style";

export const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  height: 80vh;
  min-height: 900px;
`;

export const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PreviewImage = styled.div`
  min-width: 350px;
  min-height: 250px;
  border: 1px solid ${color.gray100};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const InputBoxContainer = styled.div`
  height: 300px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  place-items: center;
  gap: 20px;
  input {
    outline: none;
    text-decoration: none;
    border: none;
    border-bottom: 1px solid #949494;
    width: 280px;
    margin-left: 20px;
    font-size: 16px;
  }
`;

export const InputBox = styled.div`
  display: flex;
`;

export const InputTitle = styled.div`
  font-size: 24px;
  width: 45px;
`;

export const ShareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${color.blue000};
  height: 50px;
  color: ${color.gray000};
  border-radius: 5px;
  cursor: pointer;
`;

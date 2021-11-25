import styled from "@emotion/styled";
import { color } from "../../../style";

export const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 120px;
  height: 80vh;
  min-height: 850px;
`;

export const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageInput = styled.input`
  &::-webkit-file-upload-button {
    color: ${color.gray100};
    background-color: ${color.blue000};
    border: none;
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 5px;
  }
`;

export const PreviewImage = styled.div`
  min-width: 350px;
  min-height: 250px;
  background-color: ${color.gray100};
  padding: 15px;
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
    width: 400px;
    font-size: 16px;
    padding: 8px 0;
  }
`;

export const InputBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const InputTitle = styled.div`
  font-size: 20px;
  width: 45px;
  font-weight: 600;
  padding: 8px 0;
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

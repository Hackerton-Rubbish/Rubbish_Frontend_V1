import styled from "@emotion/styled";
import { color } from "../../../style";

export const Wrapper = styled.form`
  width: 1000px;
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
  gap: 10px;
`;

export const ImageInput = styled.input`
  &::-webkit-file-upload-button {
    color: ${color.gray100};
    background-color: ${color.blue000};
    border: none;
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 5px;
    height: 45px;
    font-size: 16px;
  }
`;

export const PreviewImage = styled.div`
  min-width: 350px;
  min-height: 250px;
  max-width: 350px;
  max-height: 250px;
  overflow: hidden;
  background-color: ${color.gray100};
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: 50%;
  }
`;

export const InputBoxContainer = styled.div`
  height: 350px;
  width: 460px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
  input {
    outline: none;
    text-decoration: none;
    border: none;
    border-bottom: 1px solid #949494;
    width: 100%;
    font-size: 16px;
    padding: 8px 0px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const InputTitle = styled.div`
  font-size: 20px;
  width: 150px;
  font-weight: 600;
  padding: 8px 0;
  display: flex;
  align-items: center;
`;

export const ShareButton = styled.input`
  align-items: center;
  background-color: ${color.blue000};
  height: 50px;
  padding: 0 30px;
  color: ${color.gray000};
  border-radius: 5px;
  cursor: pointer;
`;

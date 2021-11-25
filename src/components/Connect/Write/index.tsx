import { FC, useState } from "react";
import * as S from "./styles";
import { Flag, ImageInput } from "../../../assets";

const Write: FC = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState("");

  const handFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    //     const formData = new FormData();
    //     formData.append("userfile", selectedFile, selectedFile.name);
  };

  return (
    <S.Wrapper>
      <S.ImageInputContainer>
        <S.PreviewImage>
            no data
        </S.PreviewImage>
        <input type="file" accept="image/*" onChange={handFileChange} />
      </S.ImageInputContainer>
      <S.InputBoxContainer>
        <S.InputBox>
            <S.InputTitle>종류</S.InputTitle>
            <input placeholder="종류를 입력하세요"/>
        </S.InputBox>
        <S.InputBox>
            <S.InputTitle>수량</S.InputTitle>
            <input placeholder="몇개를 가지고 있으신가요"/>
        </S.InputBox>
        <S.InputBox>
            <S.InputTitle>지역</S.InputTitle>
            <input placeholder="거래하시는 지역이 어디인가요"/>
        </S.InputBox>
        <S.ShareButton>나눔하기</S.ShareButton>
      </S.InputBoxContainer>
    </S.Wrapper>
  );
};

export default Write;

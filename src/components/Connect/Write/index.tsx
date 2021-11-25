import { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { postConnection } from "../../../utils/api/Connect";

const Write: FC = (): JSX.Element => {
  const [img, setImg] = useState<any>();
  const [fileImage, setFileImage] = useState<any>();
  const [FInput, SetFInput] = useState<string>("");
  const [SInput, SetSInput] = useState<string>("");
  const [TInput, SetTInput] = useState<string>("");
  const [FOInput, SetFOInput] = useState<any>(0);

  const handFileChange = (e: any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setImg(e.target.files[0]);
  };

  const handleFileUpload = (e : any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", img);

    // formData.append('image', img)
    postConnection(FInput, SInput, TInput, FOInput, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.Wrapper onSubmit={handleFileUpload} encType="multipart/form-data">
      <S.ImageInputContainer>
        <S.PreviewImage>
          <img src={fileImage} />
        </S.PreviewImage>
        <S.ImageInput type="file" accept="image/*" onChange={handFileChange} />
      </S.ImageInputContainer>
      <S.InputBoxContainer>
        <S.InputBox>
          <S.InputTitle>글 종류</S.InputTitle>
          <input placeholder="글의 종류를 입력하세요" type="text" onChange={(e) => SetFInput(e.target.value)}/>
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>쓰레기 종류</S.InputTitle>
          <input placeholder="쓰레기 종류를 입력하세요" onChange={(e) => SetSInput(e.target.value)}/>
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>내용</S.InputTitle>
          <input placeholder="글의 내용을 입력하세요" onChange={(e) => SetTInput(e.target.value)} />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>갯수</S.InputTitle>
          <input placeholder="쓰레기의 갯수를 입력하세요" type="text" onChange={(e : any) => SetFOInput(Number(e.target.value))}/>
        </S.InputBox>
        <S.ShareButton type="submit" value="나눔하기"/>
      </S.InputBoxContainer>
    </S.Wrapper>
  );
};

export default Write;

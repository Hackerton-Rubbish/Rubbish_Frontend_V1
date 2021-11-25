import styled from "@emotion/styled";
import { color } from "../../style";

export const ProfileImg = styled.img`
  display: flex;
  height: 15vh;
  margin-left: 25vw;
  margin-top: 14vh;
`;

export const UserName = styled.div`
  display: flex;
  font-size: 3.5rem;
  margin-left: 36vw;
  margin-top: -20vh;
  margin-bottom: 4vh;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
`;

export const TextForm = styled.div`
  margin-left: 36vw;
  margin-top: 3vh;
`;

export const KakaoID = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  width: 3vw;
`;

export const KakaoOpenChat = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  width: 7vw;
`;

export const InstagramID = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  width: 7vw;
`;

export const Link = styled.span`
  font-family: 'Roboto';
  font-weight: 200;
`;

export const UserDeleteButton = styled.button`
  display: block;
  width: 3.5vw;
  height: 4vh;
  margin-left: 65vw;
  margin-top: -20vh;
  text-align: center;
  border: 0px;
  border-radius: 5px;
  background-color: ${color.deleteRed};
  color: ${color.gray000};
  font-size: 1.1rem;
`;

export const Line = styled.div`
  width: 70vw;
  height: 0.3vh;
  background-color: ${color.gray100};
  margin-left: 15vw;
  margin-top: 22vh;
`;

export const ImageList = styled.div`
  background-color: black;
  margin-top: 5vh;
  width: 70vw;
  height: auto;
  margin-left: 20vw;
`;

export const ImageBox = styled.div`
  background-color: ${color.gray100};
  float: left;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  margin-right: 2.5vw;
  margin-bottom: 5vh;
`;

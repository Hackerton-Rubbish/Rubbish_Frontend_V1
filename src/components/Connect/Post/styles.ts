import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../../style";

export const PostContainer = styled(Link)`
  aspect-ratio: 3/3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 70% 30%;
  text-decoration: none;
  outline: none;
  color: ${color.black000};
`;

export const ImgBox = styled.div`
  width: 100%;
  background-color: ${color.gray100};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const DescriptionBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 10px 30px;
`;

export const RubbishName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const Address = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: right;
`;

export const Name = styled.div`
  font-size: 16px;
`;

export const LeftItem = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: right;
  span {
    font-weight: 600;
  }
`;

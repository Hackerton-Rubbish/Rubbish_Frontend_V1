import styled from "@emotion/styled";
import { color } from "../../style";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 80%;
  min-height: 1280px;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 70px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Description = styled.div`
  font-size: 18px;
  & span {
    font-weight: 600;
  }
`;

export const Post = styled(Link)`
  background-color: ${color.blue000};
  height: 35px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.gray000};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${color.blue000};
`;

export const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    row-gap: 70px;
    margin-bottom: 150px;
`;

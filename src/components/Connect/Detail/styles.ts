import styled from "@emotion/styled";
import { color } from "../../../style";

export const Wrapper = styled.div`
  min-height: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailImage = styled.div`
  background-color: ${color.gray000};
  display: flex;
  height: 70%;
  align-items: center;
  justify-self: center;
  margin-bottom: 20px;
  img {
    width: 500px;
    height: 500px;
    border-radius: 5px;
  }
`;

export const DescriptionBox = styled.div`
  padding: 15px 3px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid ${color.blue000};
  row-gap: 15px;
`;

export const Box = styled.div`
  display: flex;
  gap: 5px;
`;

export const Material = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const LeftItem = styled.div`
  display: flex;
  font-size: 20px;
  align-items: flex-end;
  span {
    font-weight: 600;
  }
`;

export const Name = styled.div`
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Address = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export const Connect = styled.div`
  border-radius: 5px;
  color: ${color.gray000};
  background-color: ${color.blue000};
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  cursor: pointer;
`;

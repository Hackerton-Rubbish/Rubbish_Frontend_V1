import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "../../style";

export const Wrapper = styled.div`
  height: 80vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 500px;
  min-width: 1000px;
`;

export const VisualizeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  gap: 80px;
`;

export const LitterBackground = styled.div<{width : string}>`
  width: 400px;
  height: 400px;
  border-radius: 100%;
  background-color: ${color.blue000};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
      transition: 1s;
      width: ${props => (props.width)};
      max-height: 70%;
  }
`;

export const DescriptionBox = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 20% 50% 30%;
  height: 280px;
`;

export const InformationText = styled.div`
  font-size: 36px;
  display: flex;
  span {
    font-weight: 600;
  }
`;

export const Amount = styled.div`
  font-size: 100px;
  font-weight: 600;
`;

export const AddAmount = styled.div<{
  width: string;
  background: string;
  shadow: string;
  justify: string;
  padding: string;
}>`
  height: 70px;
  color: ${color.gray000};
  border-radius: 5px;
  font-size: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  bottom: 0;
  transform: translateY(-10%);
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  background-color: ${(props) => props.background};
  box-shadow: ${(props) => props.shadow};
  padding: ${(props) => props.padding};
`;

const UnitBackground = keyframes`
    0 {
        background-color: ${color.gray000};
    } to {
        background-color: ${color.blue000};
    }
`;

export const LitterUnit = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  animation: ${UnitBackground} 0.5s ease;
  animation-fill-mode: forwards;
`;

export const UnitBox = styled.div`
  display: flex;
  height: 70%;
  gap: 45px;
`;

export const Arithmatic = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MathUnit = styled.div<{background : string}>`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${props => props.background};
`;

export const Warning = styled.div<{display : string}>`
    font-size: 18px;
    color: ${color.red000};
    position: absolute;
    transform: translateY(150%);
    bottom: 0;
    display: ${props => props.display}; 
`;
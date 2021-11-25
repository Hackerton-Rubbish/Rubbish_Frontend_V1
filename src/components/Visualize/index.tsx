import { FC, useState } from "react";
import * as S from "./styles";
import { Litter, Plus, Minus, Close } from "../../assets";
import { color } from "../../style";

const Visualize: FC = (): JSX.Element => {
  const [addClicked, setAddClicked] = useState<string>("false");
  const [ArithIndex, setArithIndex] = useState(0);
  const [testValue, setTestValue] = useState(0);

  const LitterUnitArr = ["1", "5", "10"];
  const setMath = (e: any) => {
    e.stopPropagation();
  };

  const HandleLitterUnit = (value: string) => {
    setAddClicked("false");
    setTestValue(testValue + Number(value));
  };

  return (
    <S.Wrapper>
      <S.VisualizeContainer>
        <S.LitterBackground width={`calc(${testValue}%)`}>
          <img src={Litter} />
        </S.LitterBackground>
        <S.DescriptionBox>
          <S.InformationText>
            내가 이번달 배출한&nbsp;
            <span>쓰레기양</span>
          </S.InformationText>
          <S.Amount>{testValue}L</S.Amount>
          <S.AddAmount
            onClick={() => setAddClicked("true")}
            width={addClicked === "false" ? "190px" : "600px"}
            background={
              addClicked === "false" ? `${color.blue000}` : `${color.gray000}`
            }
            shadow={
              addClicked === "false"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }
            justify={addClicked === "false" ? "center" : "space-between"}
            padding={addClicked === "false" ? "0" : "0 20px"}
          >
            {
              {
                false: <>추가하기</>,
                true: (
                  <>
                    <S.Arithmatic onClick={(e) => setMath(e)}>
                      <S.MathUnit
                        background={
                          ArithIndex === 0 ? `${color.gray100}` : "none"
                        }
                        onClick={() => setArithIndex(0)}
                      >
                        <img src={Plus} />
                      </S.MathUnit>
                      <S.MathUnit
                        background={
                          ArithIndex === 1 ? `${color.gray100}` : "none"
                        }
                        onClick={() => setArithIndex(1)}
                      >
                        <img src={Minus} />
                      </S.MathUnit>
                    </S.Arithmatic>
                    <S.UnitBox onClick={(e) => e.stopPropagation()}>
                      {LitterUnitArr.map((value: string) => {
                        return (
                          <S.LitterUnit onClick={() => HandleLitterUnit(value)}>
                            {value}L
                          </S.LitterUnit>
                        );
                      })}
                      <S.CloseButton onClick={() => setAddClicked("false")}>
                        <img src={Close} />
                      </S.CloseButton>
                    </S.UnitBox>
                  </>
                ),
              }[addClicked]
            }
          </S.AddAmount>
          <S.Warning display={testValue < 50 ? "none" : "block"}>
            쓰레기 배출량이 너무 많아요
          </S.Warning>
        </S.DescriptionBox>
      </S.VisualizeContainer>
    </S.Wrapper>
  );
};

export default Visualize;

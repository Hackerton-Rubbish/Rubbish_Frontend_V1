import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { Litter, Plus, Minus, Close } from "../../assets";
import { color } from "../../style";
import { getMyLitter, postMyLitter } from "../../utils/api/Visualize";

const Visualize: FC = (): JSX.Element => {
  const [addClicked, setAddClicked] = useState<string>("false");
  const [ArithIndex, setArithIndex] = useState(0);
  const [litter, setLitter] = useState(0);
  const date = new Date();
  const year = Number(`${date.getFullYear()}`.slice(2, 4));
  const month = date.getMonth();

  const LitterUnitArr = [1, 5, 10];
  const setMath = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const HandleLitterUnit = (value: number) => {
    const data = ArithIndex === 0 ? value : -value;
    setAddClicked("false");
    if (litter <= 0 && ArithIndex === 1) return;
    postMyLitter(year, month, data)
      .then(() => {
        getMyLitter(year, month)
          .then((res) => setLitter(res.data.data.amount))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyLitter(year, month)
      .then((res) => setLitter(res.data.data.amount))
      .catch((err) => console.log(err));
  }, [litter]);


  return (
    <S.Wrapper>
      <S.VisualizeContainer>
        <S.LitterBackground
          width={`calc(${litter}%)`}
          background={litter < 50 ? `${color.blue000}` : "red"}
        >
          <img src={Litter} />
        </S.LitterBackground>
        <S.DescriptionBox>
          <S.InformationText>
            내가 이번달 배출한&nbsp;
            <span>쓰레기양</span>
          </S.InformationText>
          <S.Amount>{litter}L</S.Amount>
          <S.AddAmount
            onClick={() => {
              setAddClicked("true");
              setArithIndex(0);
            }}
            width={addClicked === "false" ? "150px" : "600px"}
            background={
              addClicked === "false" ? `${color.blue000}` : `${color.gray000}`
            }
            shadow={
              addClicked === "false"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }
            justify={addClicked === "false" ? "center" : "space-between"}
            padding={addClicked === "false" ? "0" : "0 15px"}
          >
            {
              {
                false: <>추가하기</>,
                true: (
                  <>
                    <S.Arithmatic
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        setMath(e)
                      }
                    >
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
                      {LitterUnitArr.map((value: number) => {
                        return (
                          <S.LitterUnit onClick={() => HandleLitterUnit(value)}>
                            {value}L
                          </S.LitterUnit>
                        );
                      })}
                      <S.CloseButton
                        onClick={() => {
                          setAddClicked("false");
                          setArithIndex(0);
                        }}
                      >
                        <img src={Close} />
                      </S.CloseButton>
                    </S.UnitBox>
                  </>
                ),
              }[addClicked]
            }
          </S.AddAmount>
          <S.Warning display={litter < 50 ? "none" : "block"}>
            쓰레기 배출량이 너무 많아요
          </S.Warning>
        </S.DescriptionBox>
      </S.VisualizeContainer>
    </S.Wrapper>
  );
};

export default Visualize;

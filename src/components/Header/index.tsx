import { FC } from "react";
import * as S from "./styles";
import { Logo } from "../../assets";
import { color } from "../../style";

const Header: FC = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
      <S.LogoBox to="/">
        <img src={Logo} />
      </S.LogoBox>
      <S.NavBox>
        <S.NavList>
          <S.NLink
            style={({ isActive }) => ({
              borderBottom: isActive ? `2px solid ${color.blue000}` : "none",
            })}
            to="/"
          >
            시각화
          </S.NLink>
        </S.NavList>
        <S.NavList>
          <S.NLink
            to="/challenge"
            style={({ isActive }) => ({
              borderBottom: isActive ? `2px solid ${color.blue000}` : "none",
            })}
          >
            첼린지
          </S.NLink>
        </S.NavList>
        <S.NavList>
          <S.NLink
            to="/connection"
            style={({ isActive }) => ({
              borderBottom: isActive ? `2px solid ${color.blue000}` : "none",
            })}
          >
            커넥
          </S.NLink>
        </S.NavList>
      </S.NavBox>
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export default Header;

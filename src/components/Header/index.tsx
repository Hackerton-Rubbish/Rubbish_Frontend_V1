import { FC } from "react";
import * as S from "./styles";
import { Logo, DefaultProfile } from "../../assets";
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
                marginBottom: isActive ? "0px" : "2px",
              })}
              to="/"
            >
              시각화
            </S.NLink>
          </S.NavList>
          <S.NavList>
            <S.NLink
              to="/connection"
              style={({ isActive }) => ({
                borderBottom: isActive ? `2px solid ${color.blue000}` : "none",
                marginBottom: isActive ? "0px" : "2px",
              })}
            >
              커넥
            </S.NLink>
          </S.NavList>
          <S.NavList>
            <S.ProfileBox to="/profile">
              <img src={DefaultProfile} />
              <S.ProfileName>
                조준서
                <span>님</span>
              </S.ProfileName>
            </S.ProfileBox>
          </S.NavList>
        </S.NavBox>
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export default Header;

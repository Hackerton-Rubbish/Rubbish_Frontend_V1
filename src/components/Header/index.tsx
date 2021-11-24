import { FC } from "react";
import * as S from "./styles";
import { Logo } from "../../assets";
import { NavLink } from "react-router-dom";

const Header: FC = (): JSX.Element => {
  return (
    <S.Wrapper>
      <img src={Logo} />
      <S.NavBox>
        <NavLink to="/connection" />
      </S.NavBox>
    </S.Wrapper>
  );
};

export default Header;

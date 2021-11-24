import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";
import { color } from "../../style";

export const LogoBox = styled(Link)`
  text-decoration: none;
  outline: none;
  & img {
    height: 24px;
  }
`;

export const HeaderContainer = styled.div`
  width: 80%;
  min-width: 750px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 80px;
  border-bottom: 1px solid ${color.gray100};
`;

export const NavBox = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 50px;
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 100%;
`;

export const NLink = styled(NavLink)`
  color: ${color.black000};
  text-decoration: none;
  outline: none;
  height: 22px;
  display: flex;
  align-items: center;
`;

export const ProfileBox = styled(Link)`
  display: flex;
  text-decoration: none;
  outline: none;
  justify-content: space-between;
  color: ${color.black000};
  align-items: center;
  width: 100px;
  margin-bottom: 2px;
  & img {
    width: 25px;
    height: 25px;
  }
`;

export const ProfileName = styled.div`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  gap: 1px;
  & span {
    font-weight: 500;
  }
`;

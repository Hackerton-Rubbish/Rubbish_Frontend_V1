import styled from "@emotion/styled";
import { NavLink, Link } from 'react-router-dom';
import { color } from '../../style';

export const LogoBox = styled(Link)`
    text-decoration: none;
    outline: none;
`;

export const HeaderContainer = styled.div`
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    height: 80px;
    border-bottom: 1px solid ${color.gray100};
    & img {
        height: 40px;
    }
`;

export const NavBox = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 45px;
`;

export const NavList = styled.li`
    display: flex;
    align-items: center;
    font-size: 18px;
`;


export const NLink = styled(NavLink)`
    color: ${color.black000};
    text-decoration: none;
    outline: none;
    height: 22px;
`;
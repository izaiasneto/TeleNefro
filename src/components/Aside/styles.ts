import styled, { css } from 'styled-components';

interface MenuItemLinkprops {
    active?: boolean;
}

export const Container = styled.div`
    grid-area: AS;

    background-color: #fff;


`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const Logo = styled.h1`
    font-size: 42px;
    margin-bottom: 15px;
    color: #0044E9;
    letter-spacing: -4px;

    margin-left: 49px;

`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    
    margin-top: -26px;
`;
export const MenuItemLink = styled.a<MenuItemLinkprops>`
    color: #000;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    width: 250px;
    height: 81px;
    padding: 20px;
    
    margin: 15px 0;
    display: flex;
    align-items: center;

    transition: background-color 0.6s;

    &:hover {
        background-color: #0044e9;
        color: #fff;
    }

    & + a {
        margin-top: -6px;
    }

    ${props => props.active && css`
        background-color: #0044e9;
        color: #fff;
    `}

    > svg {
        font-size: 24px;
        margin-right: 6px;
    }
`;
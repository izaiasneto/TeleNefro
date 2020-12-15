import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

interface MenuItemLinkprops {
    active?: boolean;
}

interface IContainerProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;

    background-color: #fff;

    position: relative;

    @media(max-width: 600px){
        padding-left: 7px;
        position: fixed;
        z-index: 2;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            background-color: #f2f4f9;
            border-bottom: 2px solid #e3e8f4;
        `};
    }
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

    @media(max-width: 600px){
        
        
    }

`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    
    margin-top: -26px;
`;
export const MenuItemLink = styled(Link)<MenuItemLinkprops>`
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
        //background-color: #0044e9;
        color: #0044e9;
    }

    & + a {
        margin-top: -6px;
    }

    ${props => props.active && css`
        background-color: #0044e9;
        color: #fff;

        &:hover {
        //background-color: #0044e9;
        color: #fff;
    }
    `}

    > svg {
        font-size: 24px;
        margin-right: 6px;
    }
`;
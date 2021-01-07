import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

interface MenuItemLinkprops {
    active?: boolean;
}

export const Container = styled.div`
    width: 69%;
    height: 388px;

    background-color: #fff;
    color: #000;

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
`;

export const MenuContainer = styled.nav`
    display: flex;
    justify-content: normal;
    align-items: center;
    border-radius: 7px;
    padding: 30px 20px;
    height: 70px;

    background-color: #f2f4f9;
`;
export const MenuItemLink = styled(Link)<MenuItemLinkprops>`
    color: #939ca3;
    text-decoration: none;
    font-size: 14px;
    width: 30%;
    font-weight: 700;
    padding: 20px;
    
    display: flex;
    align-items: center;

    transition: background-color 0.6s;

    &:hover {
        color: #0044e9;
    }

    & + a {
        margin-top: -6px;
    }

    ${props => props.active && css`
        background-color: #fff;
        border-radius: 5px;
        color: #0044e9;
    
    `}

`;
export const Content = styled.div`
    display: flex;
    border-radius: 7px;
    height: 267px;
    margin-top: 10px;

    background-color: #f2f4f9;
`;

export const List = styled.div`
    border-left: 4px solid #0044e9;
    padding: 20px;
    margin-left: 20px;
    width: 100%;

`;
export const Appointment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    padding: 30px 20px;
    height: 70px;
    margin-top: 8px;

    background-color: #fff;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
            font-weight: 500;
        }

        p { 
            font-size: 14px;
            color: #939ca3;
        }

    }

    >  svg {
        font-size: 24px;
        color: #939ca3;
    }
`;
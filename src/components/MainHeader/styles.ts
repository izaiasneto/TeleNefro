import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
    grid-area: MH;
    
    background-color: #f2f4f9;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px;

    border-bottom: 2px solid #e3e8f4;
`;

export const Profile = styled.div`
`;

export const Add = styled.div`
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 13px;
    border-radius: 50%;

    background: #0044e9;
    transition: background-color 0.2s;
   

    &:hover {
        background: ${shade(0.2, '#0044E9')};
    } 

    a {
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        color: #fff;
    } 
`;

export const Welcome = styled.div`
    display: flex;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    div {
        margin-top: 8px;
        margin-left: 8px;

        strong {
        font-weight: 700;  
        }

        p {
            font-size: 12px;
            font-weight: 300; 
        }
    }
    
`;
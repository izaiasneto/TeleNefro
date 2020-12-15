import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;
    border-bottom: 2px solid #e3e8f4;
`;
export const Route = styled.div`
    display: flex;
    flex-direction: row;

    > h1 {
        color: #0044E9;
        font-weight: 700;
        font-size: 24px;
    }

    > svg {
        font-size: 15px;
        color: #939CA3;
        margin-top: 6px;
        margin-left: 7px;
    }

    >  p {
        color: #939CA3;
        font-size: 15px;
        margin-top: 5px;
        margin-left: 5px;
    }
`;
export const TitleContainer = styled.div`
    display: flex;

`;
export const Controllers = styled.div`
    
    button{
        background: #fff;
        height: 30px;
        border-radius: 10px;
        border: 0;
        border: 1px solid #E3E8F4;
        text-align: center;
        color: #939CA3;
        font-weight: 700;
        padding: 5px 9px;
        margin-left: 5px;


        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#fff')};
        }   
    }

    > button + button {
        //width: 70%;
    }
`;

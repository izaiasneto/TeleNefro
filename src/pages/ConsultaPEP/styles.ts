import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div``;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
`;

export const Patient = styled.div`
    background: #fff;
    width: 100%;

    list-style: none;
    border-radius: 5px;

    padding: 31px 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Info = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-left: 40px;

        > span {
            color: #0044e9;
            font-weight: 700;
            margin-bottom: 6px;
        }

        > small {
            margin-bottom: 4px;    
        }
        
    }
`;
export const Details = styled.div`
    width: 26%;

    div {
        display: flex;
        margin-left: -35px;
    }

`;
export const More = styled.button`
    background: #fff;
    height: 43px;
    border-radius: 10px;
    padding: 10px;
    border: 0;
    border: 1px solid #E3E8F4;
    text-align: center;

    color: #939CA3;
    font-weight: 700;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#fff')};
    }   
`;
export const Agendar = styled.button`
    background: #d4742d;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #ffffff;
    width: 83%;
    font-weight: 700;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#d4742d')};
    }   

`;

export const Save = styled.button`
    background: #659a50;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #ffffff;
    width: 83%;
    font-weight: 700;
    margin-left: 10px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#659a50')};
    }   

`;

export const Iniciar = styled.button`
    background: #0044e9;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #ffffff;
    width: 83%;
    font-weight: 700;
    margin-left: 10px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#0044e9')};
    }   

`;





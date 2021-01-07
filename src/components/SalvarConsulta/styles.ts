import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
  
    label {
        
        h1 {
            color: #444444;
            font-size: 16px;
            margin-bottom: 10px;
            margin-top: 10px;
            font-weight: 700;
        }
    }

`;

export const Input = styled.input`
        background: #fff;
        border-radius: 10px;
        padding: 16px;
        width: 100%;

        border: 2px solid #e6e7e8;
        color: #666360;

        display: flex;
        align-items: center;

        &::placeholder {
        color: #666360;
        }
`;
export const Textarea = styled.textarea`
    background: #fff;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    height: 300px;

    border: 2px solid #e6e7e8;
    color: #666360;

    display: flex;
    align-items: center;

`;

export const Button = styled.button`

    background: #0044E9;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #ffffff;
    width: 100%;
    font-weight: 700;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#0044E9')};
    }   
`;


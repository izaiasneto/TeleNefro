import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    h1 {
        color: #0044e9;
        font-size: 30px;
        font-weight: 700;  
    }
`;

export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    cursor: pointer;
`;
export const ModalBox = styled.div`
    position: relative;
    width: 80%;
    margin: 0 10%;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    cursor: auto;

    > button {
        > svg {
            color: #0044E9;
            font-size: 24px;
            position: absolute;
            top: 20px;
            right: 20px;
            transition: transform 250ms ease-in-out;
            transform-origin: 50% 50%;

            &&:hover{
                transform: rotate(180deg);
            }
        }
    }

    
`;
export const Content = styled.div`
    margin-top: 30px;
    color: #6B6B6B;
    font-size: 16px;
`;
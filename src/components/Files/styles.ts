import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    height: 388px;

    background-color: #fff;
    color: #000;

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;


    > header {
        display: flex;

        svg {
            color: #0044e9;
            font-size: 20px;
        }

        h1 {
            font-size: 20px;
            font-weight: 700;
            margin-left: 5px;
        }
    }
`;

export const Content = styled.div`
    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;

    }

    ::-webkit-scrollbar-thumb {
        background-color: #d0cfcf;
        

    }

    ::-webkit-scrollbar-track {
        background-color: #fff;

    }

`;
export const File = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    background: #fff;
    border: 1px solid #96a0aa;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px;
    margin-top: 15px;

    > div {
        display: flex;

        p {
            margin-left: 4px;
            font-size: 14px;
            font-weight: 500;
            color: #000;
            margin-top: 2px;
        }
    }

    svg {
        color: #96a0aa;
        font-size: 20px;
    }
`;
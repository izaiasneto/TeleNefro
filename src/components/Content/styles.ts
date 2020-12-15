import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;

    background-color: #f2f4f9;

    padding: 50px;

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
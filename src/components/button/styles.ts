import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`

    background: #0044E9;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #ffffff;
    width: 83%;
    font-weight: 700;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, '#0044E9')};
    }   
`;

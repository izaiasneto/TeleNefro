import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.li`
    background: #fff;

    list-style: none;
    border-radius: 5px;

    margin: 10px;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;

    &:hover {
        background: ${shade(0.09, '#fff')};
        transform: translateX(10px)
    }

    > svg {
        color: #cecece;
    }

`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        width: 30px;
        height: 30px;
        border-radius: 50%;

    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-left: 10px;

        > span {
            font-weight: 700;
        }
        
    }

`;



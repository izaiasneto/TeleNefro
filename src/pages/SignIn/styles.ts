import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center; 

`;

export const Content = styled.div`
    width: 90vw;
    max-width: 451px;
    height: 400px;
    margin: 0 auto;
    background-color: #F2F4F9;
    border-radius: 13px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    h1 {
            font-size: 52px;
            font-weight: 700;
            margin-bottom: 15px;
            color: #0044E9;
            letter-spacing: -4px;
    }

    form {
        margin: 80px 0;
        max-width: 340px;
        text-align: center;

        h2 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 24px;
        }

        a {
            color: #0044E9;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#0044E9')};
            }
    }
    }

    > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
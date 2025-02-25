import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #fff;
    border-radius: 10px;
    padding: 16px;

    border: 2px solid #e6e7e8;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 10px;
    }

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

    ${props => props.isFocused && css`
        color: #0049E9;
        border-color: #0049E9;
    `}

    ${props => props.isFilled && css`
        color: #0049E9;
    `}

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #0049E9;

        &::placeholder {
        color: #666360;
        }

    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`

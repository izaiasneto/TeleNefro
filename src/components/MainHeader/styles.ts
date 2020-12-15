import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
    grid-area: MH;
    
    background-color: #f2f4f9;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px;

    border-bottom: 2px solid #e3e8f4;

    > button {
        margin-left: auto;
        background: transparent;
        border: 0;

        svg {
            color: #999591;
            width: 20px;
            height: 20px;
        }
    }
`;

export const Profile = styled.div`
`;

export const Welcome = styled.div`
    display: flex;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    div {
        margin-top: 8px;
        margin-left: 8px;

        strong {
        font-weight: 700;  
        }

        p {
            font-size: 12px;
            font-weight: 300; 
        }
    }
    
`;
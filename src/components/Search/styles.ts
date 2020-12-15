import styled from 'styled-components';
import { Form as FormA} from '@unform/web';

export const Container = styled.div`

    border-bottom: 2px solid #e3e8f4;
`;

export const Form = styled(FormA)`
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;

    > div {
       margin-left: 4px;
    }

    > button {
        width: 100px;
        margin-top: 15px;
        margin-left: 10px;
    }

`;
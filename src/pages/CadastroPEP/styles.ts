import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 5px;
            width: 100%;

            button {
                background-color: #aaaaaa;
                width: 30%;
            }

            button + button {
                background-color: #0044e9;
            }
            
            

             div + div {
                margin-left: 9px;
                
             }

        }
        
 
    }
`;


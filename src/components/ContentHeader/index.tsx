import React from 'react';
import { AiOutlineRight, AiOutlinePrinter} from 'react-icons/ai';

import { 
    Container,
    TitleContainer,
    Controllers,
    Route
} from './styles';

interface IContentHeaderProps {
    title?: string;
    subtitle?: string;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, subtitle }) => {
    return (
        <Container>
            <TitleContainer>
                <Route>
                    <h1>{title}</h1>
                    {subtitle && (
                        <>
                            <AiOutlineRight /> 
                            <p>{subtitle}</p>
                        </>
                        
                    )
                    }
                </Route>
            </TitleContainer>
            <Controllers>
                <button type="button">
                    <AiOutlinePrinter />
                </button>
                <button type="button">Editar PREP</button>
            </Controllers>
        </Container>     
    )
};

export default ContentHeader;
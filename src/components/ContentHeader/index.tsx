import React from 'react';
import { AiOutlineRight} from 'react-icons/ai';

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

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, subtitle, children }) => {
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
                {children}
            </Controllers>
        </Container>     
    )
};

export default ContentHeader;
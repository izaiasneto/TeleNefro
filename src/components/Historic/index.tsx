import React from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';

import { 
    Container, 
    Content, 
    MenuContainer, 
    MenuItemLink,
    List,
    Appointment 
} from './styles';

const Historic: React.FC = ({ }) => {
    return (
        <Container>
            <header>
                <MenuContainer>
                    <MenuItemLink to="/" active>
                        Próximas consultas
                    </MenuItemLink>
                    <MenuItemLink to="/">
                        Consultas passadas
                    </MenuItemLink>
                </MenuContainer>
            </header>

            <Content>
                <List>
                    <Appointment>
                         <div>
                            <strong>01 out 2020</strong>
                            <p>09:00 - 10:00</p>
                         </div>
                         <div>
                            <strong>Tipo de Atendimento</strong>
                            <p>Retorno</p>
                         </div>
                         <div>
                            <strong>Médico Responsável</strong>
                            <p>Dra. Nome</p>
                         </div>
                         <AiOutlinePaperClip />
                    </Appointment>
                    <Appointment>
                         <div>
                            <strong>01 out 2020</strong>
                            <p>09:00 - 10:00</p>
                         </div>
                         <div>
                            <strong>Tipo de Atendimento</strong>
                            <p>Retorno</p>
                         </div>
                         <div>
                            <strong>Médico Responsável</strong>
                            <p>Dra. Nome</p>
                         </div>
                         <AiOutlinePaperClip />
                    </Appointment>
                    <Appointment>
                         <div>
                            <strong>01 out 2020</strong>
                            <p>09:00 - 10:00</p>
                         </div>
                         <div>
                            <strong>Tipo de Atendimento</strong>
                            <p>Retorno</p>
                         </div>
                         <div>
                            <strong>Médico Responsável</strong>
                            <p>Dra. Nome</p>
                         </div>
                         <AiOutlinePaperClip />
                    </Appointment>
                    
                </List>
            </Content>
        </Container>     
    )
};

export default Historic;
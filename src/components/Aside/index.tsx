import React from 'react';

import { 
    HiOutlineHome,
    HiOutlineCalendar,
    HiOutlineUserAdd,
    HiOutlineUser,
    HiOutlineClipboardList,
    HiOutlinePencilAlt,
    HiOutlineCog,
} from 'react-icons/hi';

import { 
    Container, 
    Header, 
    Logo, 
    MenuContainer,
    MenuItemLink 
} from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo>TeleNefro</Logo>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#" active>
                    <HiOutlineHome size={24} />
                    Início
                </MenuItemLink>
                <MenuItemLink href="#">
                    <HiOutlineCalendar  />
                    Agenda
                </MenuItemLink>
                <MenuItemLink href="#">
                    <HiOutlineUserAdd  />
                    Cadastrar PEP
                </MenuItemLink>
                <MenuItemLink href="#">
                    <HiOutlineUser />
                    Consultar PEP
                </MenuItemLink>
                <MenuItemLink href="#">
                    <HiOutlineClipboardList />
                    Prescrição Médica
                </MenuItemLink>
                <MenuItemLink href="#">
                    <HiOutlinePencilAlt  />
                    Autenticação
                </MenuItemLink>
                <MenuItemLink href="#">
                    <HiOutlineCog />
                    Configurações
                </MenuItemLink>
            </MenuContainer>
        </Container>     
    )
};

export default Aside;
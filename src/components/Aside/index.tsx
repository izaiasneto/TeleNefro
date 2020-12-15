import React from 'react';

import { 
    HiOutlineHome,
    HiOutlineUserAdd,
    HiOutlineUser,
    HiOutlineClipboardList,
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
        <Container menuIsOpen={false}>
            <Header>
                <Logo>TeleNefro</Logo>
            </Header>

            <MenuContainer>
                <MenuItemLink to="/" active>
                    <HiOutlineHome size={24} />
                    Início
                </MenuItemLink>
                <MenuItemLink to="/cadastrar">
                    <HiOutlineUserAdd  />
                    Cadastrar PEP
                </MenuItemLink>
                <MenuItemLink to="/consultar">
                    <HiOutlineUser />
                    Consultar PEP
                </MenuItemLink>
                <MenuItemLink to="/preescrever">
                    <HiOutlineClipboardList />
                    Prescrição Médica
                </MenuItemLink>
                <MenuItemLink to="/config">
                    <HiOutlineCog />
                    Configurações
                </MenuItemLink>
            </MenuContainer>
        </Container>     
    )
};

export default Aside;
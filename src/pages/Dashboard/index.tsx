import React, { useState} from 'react';

import ContentHeader from '../../components/ContentHeader';
import Historic from '../../components/Historic';
import Files from '../../components/Files';
import Modal from '../../components/Modal';

import { 
  Container,
  Content,
  Info,
  Patient, 
  Details, 
  More,
} from './styles';

import Button from '../../components/button';

import semAvatar from '../../assets/semavatar.png';

const Dashboard: React.FC = () => {
    const [isModalOpen, SetModalState] = useState(false);

    const toggleModal = () => SetModalState(!isModalOpen)
    return (
       <Container>
         <ContentHeader title="Consultar PEP" subtitle="Nome do Paciente"/>

         <Content>
           <Patient>
                <Info>
                  <img src={semAvatar}/>
                  <div>
                      <span>Nome do Paciente</span>
                      <small>nomepaciente@gmail.com</small>
                      <small>(99) 9 9999-9999</small>
                  </div>
                </Info>
  
                <Details>
                  <More onClick={toggleModal}>
                      Mais Informações
                  </More>
                  <Button>Iniciar Consulta</Button>
                </Details>
           </Patient>
            
          <Historic />
          <Files />
             
        </Content>
        <Modal
          title={'Mais Informações'}
          isOpen={isModalOpen}
          onClose={toggleModal}
        >
          This is an example modal content!
          Watch whole video to see how to code it!
        </Modal>
       </Container>
    )
};

export default Dashboard;
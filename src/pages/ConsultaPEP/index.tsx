import React, { useState} from 'react';
import {AiOutlinePrinter} from 'react-icons/ai';

import ContentHeader from '../../components/ContentHeader';
import SalvarConsulta from '../../components/SalvarConsulta';
import AgendarConsulta from '../../components/AgendarConsulta';
import Historic from '../../components/Historic';
import Files from '../../components/Files';
import Modal from '../../components/Modal';
import Modal2 from '../../components/Modal';
import Modal3 from '../../components/Modal';

import { 
  Container,
  Content,
  Info,
  Patient, 
  Details, 
  More,
  Agendar,
  Save,
  Iniciar
} from './styles';


import semAvatar from '../../assets/semavatar.png';

const ConsultaPEP: React.FC = () => {
    const [isModalOpen, SetModalState] = useState(false);
    const [isModal2Open, SetModal2State] = useState(false);
    const [isModal3Open, SetModal3State] = useState(false);

    const toggleModal = () => SetModalState(!isModalOpen)
    const toggleModal2 = () => SetModal2State(!isModal2Open)
    const toggleModal3 = () => SetModal3State(!isModal3Open)

    return (
       <Container>
         <ContentHeader title="Consultar PEP" subtitle="Nome do Paciente">
            <button type="button">
              <AiOutlinePrinter />
            </button>
            <button type="button">Editar PREP</button>
         </ContentHeader>

         <Content>
           <Patient>
                <Info>
                  <img src={semAvatar}/>
                  <div>
                      <span>Nome do Paciente</span>
                      <small>nomepaciente@gmail.com</small>
                      <small>(99) 9 9999-9999</small>
                      <More onClick={toggleModal}>
                          Mais Informações
                      </More>
                  </div>
                </Info>
  
                <Details>
                  
                  <div>
                    <Agendar onClick={toggleModal2}>Agendar Consulta</Agendar>
                    <Save onClick={toggleModal3}>Salvar Consulta</Save>
                    <Iniciar>Iniciar Consulta</Iniciar>
                  </div>
   
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
        <Modal2
          title={'Agendar Consulta'}
          isOpen={isModal2Open}
          onClose={toggleModal2}
        >
          <AgendarConsulta />
        </Modal2>
        <Modal3
          title={'Salvar Consulta'}
          isOpen={isModal3Open}
          onClose={toggleModal3}
        >
          <SalvarConsulta />
        </Modal3>
        
       </Container>
    )
};

export default ConsultaPEP;
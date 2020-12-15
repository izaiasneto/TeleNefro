import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import PatientInfo from '../../components/PatientInfo';
import Search from '../../components/Search';

import { Container, Content} from './styles'; 

const ListarPEP: React.FC = () => {

    return (
       <Container>
         <ContentHeader title="Buscar Paciente"/>

         <Content>

            <Search />

            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
            <PatientInfo 
               name="Nome do Paciente"
               date="25/12/1995" 
            />
         </Content>
       </Container>
    )
};

export default ListarPEP;
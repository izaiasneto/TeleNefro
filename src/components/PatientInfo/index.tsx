import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai'

import semAvatar from '../../assets/semavatar.png';

import { Container, Info } from './styles'; 

interface IPatientInfo {
    name: string;
    date: string;
}

const PatientInfo: React.FC<IPatientInfo> = ({ name, date}) => {
    return (
       <Container>
           <Info href="/consultar/paciente">
                <img src={semAvatar}/>
                <div>
                    <span>{name}</span>
                    <small>{date}</small>
                </div>
           </Info>
            
            
            <AiFillCaretRight />
             
       </Container>
    )
};

export default PatientInfo;
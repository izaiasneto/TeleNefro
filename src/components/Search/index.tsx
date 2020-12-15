import React from 'react';

import Button from '../../components/button';
import Input from '../../components/input';

import { Container, Form } from './styles'; 

const Search: React.FC = () => {

    const handleSubmit = () => {

    };

    return (
       <Container>
           <Form onSubmit={handleSubmit}>
                    <div>
                        <h4>Nome:</h4>
                        <Input name="date"  placeholder="Nome do Paciente"/>
                    </div>
                    <div>
                        <h4>Data de nascimento:</h4>
                        <Input name="date"  placeholder="DD/MM/AAAA"/>
                    </div>
                   
                    <Button type="submit">
                        Buscar
                     </Button>
         
            </Form>
       </Container>
    )
};

export default Search;
import React from 'react';

import { Container, Input, Textarea, Button } from './styles';


const SalvarConsulta: React.FC = () => {
    return (
        <Container>    
          <form>
                <label>
                    <h1>Data:</h1>
                    <Input name="data" type="date" placeholder="Data" />
                </label>
                <label>
                    <h1>Anotações</h1>
                    <Textarea name="anotações" placeholder="Anotações" />
                </label>
                <label>
                    <h1>Adicionar Documento</h1>
                    <Input name="file" type="file" placeholder="Arquivos"/>
                </label>
                <Button type="submit">Salvar</Button>
                
            </form>

        </Container>     
    )
};

export default SalvarConsulta;
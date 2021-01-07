import React from 'react';

import { Container, Input,  Button } from './styles';


const AgendarConsulta: React.FC = () => {
    return (
        <Container>    
          <form>
                <label>
                    <h1>Data:</h1>
                    <Input name="data" type="date" placeholder="Data" />
                    <h1>Hora:</h1>
                    <Input name="hora" type="time" placeholder="Hora" />
                </label>
                <label>
                    <h1>Tipo de atentimento</h1>
                    <select value="consulta" >
                        <option value="consulta">Consulta</option>
                        <option value="retorno">Retorno</option>    
                    </select>
                </label>               
                <Button type="submit">Adicionar</Button>
                
            </form>

        </Container>     
    )
};

export default AgendarConsulta;
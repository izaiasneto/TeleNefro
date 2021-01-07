import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {useHistory } from 'react-router-dom';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../Utils/getValidationErros';

import ContentHeader from '../../components/ContentHeader';
import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content } from './styles';

interface CadastroPEPFormData {
  nome: string;
  email: string;
  numero: number;
  sexo: string;
  cpf: string;
  rg: string;
  endereco: string;
  numeroCasa: number;
  bairro: string;
  cidade: string;
  estado: string;
  complemento: string;
  etnia: string;
  nacionalidade: string;
  dateNasc: Date;
}

const CadastroPEP: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback( async (data: CadastroPEPFormData) =>{
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name:  Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        numero: Yup.string().required('Número de Telefone obrigatório'),
        sexo: Yup.string().required('Sexo obrigatório'),
        cpf: Yup.string().required('Cpf obrigatório'),
        rg: Yup.string().required('Rg obrigatório'),
        endereco: Yup.string().required('Endereço obrigatório'),
        numeroCasa: Yup.string().required('Número do endereço obrigatório'),
        bairro: Yup.string().required('Bairro obrigatório'),
        cidade: Yup.string().required('Cidade obrigatório'),
        estado: Yup.string().required('Estado obrigatório'),
        complemento: Yup.string().required('Complemento obrigatório'),
        etnia: Yup.string().required('Etnia obrigatório'),
        nacionalidade: Yup.string().required('Nacionalidade obrigatório'),
        dateNasc: Yup.string().required('Data de Nascimento obrigatório')
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      
      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro de paciente realizado!',
        description: 'Você já pode iniciar uma consulta!'
      });

    } catch (err) {

      if( err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu ao fazer cadastro, tente novamente'
      });
    }
  }, [addToast, history]);
    return (
       <Container>
         <ContentHeader title="Cadastrar Paciente"/>
         <Content>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <Input name="name" placeholder="Nome"/>
              </div>
              <div>
                <Input name="email"  placeholder="E-mail"/>
                <Input name="celular" placeholder="Celular"/>
              </div>
              <div>
                <Input name="sexo" placeholder="Sexo"/>
                <Input name="dataNasc" placeholder="Data de Nascimento"/>
                <Input name="etnia" placeholder="Etnia"/>
                <Input name="nacionalidade" placeholder="Nacionalidade"/>
              </div>
              <div>
                <Input name="cpf" placeholder="Cpf"/>
                <Input name="rg" placeholder="Rg"/>
              </div>
              <div>
                <Input name="endereco" placeholder="Endereço"/>
                <Input name="numero" placeholder="numero"/>
              </div>
              <div>
                <Input name="bairro" placeholder="Bairro"/>
                <Input name="cidade" placeholder="Cidade"/>
                <Input name="estado" placeholder="Estado"/>
              </div>
              <Input name="complemento" placeholder="complemento"/>

              <div>
                <Button>Cancelar</Button>
                <Button type="submit">Cadastrar paciente</Button>
              </div>

          
            </Form>
         </Content>
       </Container>
    )
};

export default CadastroPEP;
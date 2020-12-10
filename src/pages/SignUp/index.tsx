import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../Utils/getValidationErros';

import Button from '../../components/button';
import Input from '../../components/input';

import { Container, Content} from './styles';

interface SignUpFormData {
  nome: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback( async (data: SignUpFormData) =>{
      try {
        formRef.current?.setErrors({});
  
        const schema = Yup.object().shape({
          name:  Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos')
        });
  
        await schema.validate(data, {
          abortEarly: false,
        });
        
        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon!'
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
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>TeleNefro</h1>
                    <h2> Faça seu cadastro</h2>

                    <Input name="name" icon={FiUser} placeholder="Nome"/>
                    <Input name="email" icon={FiMail} placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>

                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para logon
                    </Link>
                </Form>
            </Content>
        </Container>
    )
};

export default SignIn;
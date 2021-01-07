import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail} from 'react-icons/fi';
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
  email: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback( async (data: SignUpFormData) =>{
      try {
        formRef.current?.setErrors({});
  
        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'), 
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
                    <h2> Recuperar Senha</h2>

                    
                    <Input name="email" icon={FiMail} placeholder="E-mail"/>
                    

                    <Button type="submit">Recuperar</Button>

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